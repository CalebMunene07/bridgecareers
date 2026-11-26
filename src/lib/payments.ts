import "server-only";
import { randomBytes } from "node:crypto";
import type { ObjectId } from "mongodb";
import { collections, getDb } from "@/lib/db";
import { recipients, sendEmail } from "@/lib/notify";
import { formatMoney, initializeTransaction, paystackConfig, siteBase, toMinorUnits, verifyTransaction } from "@/lib/paystack";

// Online payments. Every payment is a row in the `payments` collection and is linked to the
// submission it pays for (a visa application, a CV download purchase or an application form).
// The submission itself also gets paymentStatus / paymentReference / paymentAmount so the
// admin inbox shows who has paid.

export type PaymentKind = "visa" | "cv" | "form";

export type PaymentDoc = {
  reference: string;
  kind: PaymentKind;
  collection: string; // the submission's collection
  inbox: string; // admin inbox key, for the link in emails
  refId: ObjectId; // the submission
  email: string;
  description: string;
  amountUsd: number;
  amountMinor: number;
  currency: string;
  status: "pending" | "paid" | "failed";
  createdAt: Date;
  paidAt?: Date;
  paystackId?: number;
  channel?: string;
};

let indexed = false;

async function paymentsCollection() {
  const col = (await getDb()).collection<PaymentDoc>(collections.payments);
  if (!indexed) {
    await col.createIndex({ reference: 1 }, { unique: true }).catch(() => {});
    indexed = true;
  }
  return col;
}

/**
 * Starts a Paystack checkout for a saved submission and returns where to send the customer.
 * Returns null when online payment isn't available (not set up, no email, nothing to pay, or
 * Paystack is unreachable): the caller then falls back to "we'll email you a payment link".
 */
export async function startPayment(opts: {
  kind: PaymentKind;
  collection: string;
  inbox: string;
  refId: ObjectId;
  email: string;
  amountUsd: number;
  description: string;
}): Promise<{ url: string } | null> {
  const cfg = await paystackConfig();
  if (!cfg || !opts.email || !(opts.amountUsd > 0)) return null;
  const amountMinor = toMinorUnits(opts.amountUsd, cfg);
  if (amountMinor <= 0) return null;

  const reference = `bcg-${opts.kind}-${randomBytes(8).toString("hex")}`;
  const db = await getDb();
  const payments = await paymentsCollection();
  const submission = db.collection(opts.collection);
  try {
    await payments.insertOne({
      reference,
      kind: opts.kind,
      collection: opts.collection,
      inbox: opts.inbox,
      refId: opts.refId,
      email: opts.email,
      description: opts.description,
      amountUsd: opts.amountUsd,
      amountMinor,
      currency: cfg.currency,
      status: "pending",
      createdAt: new Date(),
    });
    await submission.updateOne(
      { _id: opts.refId },
      { $set: { paymentStatus: "pending", paymentReference: reference, paymentAmount: formatMoney(amountMinor, cfg.currency) } },
    );
    const url = await initializeTransaction(cfg, {
      email: opts.email,
      amountMinor,
      reference,
      callbackUrl: `${await siteBase(cfg)}/payment/callback`,
      metadata: { kind: opts.kind, submission: opts.refId.toString(), description: opts.description },
    });
    return { url };
  } catch (error) {
    console.error("[paystack] couldn't start the payment", error);
    await payments.updateOne({ reference }, { $set: { status: "failed" } }).catch(() => {});
    await submission.updateOne({ _id: opts.refId }, { $set: { paymentStatus: "not started" } }).catch(() => {});
    return null;
  }
}

/** Emails the team (and, for a CV, the buyer) once a payment has gone through. Never throws. */
async function notifyPaid(payment: PaymentDoc, base: string) {
  try {
    const amount = formatMoney(payment.amountMinor, payment.currency);
    const to = await recipients();
    await sendEmail(
      to,
      `Payment received – ${payment.description}`,
      [
        ["For", payment.description],
        ["Email", payment.email],
        ["Amount", amount],
        ["Paid with", payment.channel ?? "Paystack"],
        ["Reference", payment.reference],
      ],
      base ? `${base}/admin/inbox/${payment.inbox}/${payment.refId}` : undefined,
    );
    if (payment.kind === "cv") {
      const doc = await (await getDb()).collection(payment.collection).findOne({ _id: payment.refId }, { projection: { unlockCode: 1 } });
      if (typeof doc?.unlockCode === "string") {
        await sendEmail([payment.email], "Your CV download is unlocked – Bridge Careers Global", [
          ["Unlock code", doc.unlockCode],
          ["Amount paid", amount],
          ["How to use it", "Open the CV maker, choose “Unlock download” and enter this code."],
        ]);
      }
    }
  } catch (error) {
    console.error("[paystack] couldn't send payment emails", error);
  }
}

/**
 * Checks a payment with Paystack and records the outcome. Safe to call many times (the browser
 * return and the webhook both call it): only the first call that sees the payment succeed
 * marks it paid and sends emails.
 */
export async function settlePayment(reference: string): Promise<PaymentDoc | null> {
  const cfg = await paystackConfig();
  if (!cfg || !reference) return null;
  const payments = await paymentsCollection();
  const payment = await payments.findOne({ reference });
  if (!payment) return null;
  if (payment.status === "paid") return payment;

  let verified;
  try {
    verified = await verifyTransaction(cfg, reference);
  } catch (error) {
    console.error("[paystack] couldn't verify the payment", error);
    return payment;
  }

  const submission = (await getDb()).collection(payment.collection);
  if (verified.status === "success") {
    if (verified.amount < payment.amountMinor || verified.currency !== payment.currency) {
      console.error(`[paystack] ${reference}: paid ${verified.amount} ${verified.currency}, expected ${payment.amountMinor} ${payment.currency}`);
      return payment;
    }
    const paidAt = verified.paidAt ? new Date(verified.paidAt) : new Date();
    const updated = await payments.findOneAndUpdate(
      { reference, status: { $ne: "paid" } },
      { $set: { status: "paid", paidAt, paystackId: verified.id, ...(verified.channel ? { channel: verified.channel } : {}) } },
      { returnDocument: "after" },
    );
    // Someone else (the webhook or the browser return) settled it first.
    if (!updated) return payments.findOne({ reference });
    await submission.updateOne(
      { _id: payment.refId },
      { $set: { paymentStatus: "paid", paymentPaidAt: paidAt, ...(verified.channel ? { paymentChannel: verified.channel } : {}) } },
    );
    await notifyPaid(updated, cfg.siteUrl);
    return updated;
  }

  if (verified.status === "failed") {
    await payments.updateOne({ reference, status: "pending" }, { $set: { status: "failed" } });
    await submission.updateOne({ _id: payment.refId, paymentStatus: "pending" }, { $set: { paymentStatus: "failed" } });
    return { ...payment, status: "failed" };
  }
  return payment; // still pending or abandoned: the customer can pay later from the link, or the team follows up
}

/** What the "payment result" page shows. The CV unlock code is only returned once the payment has succeeded. */
export async function getPaymentResult(reference: string) {
  if (!reference || reference.length > 100) return null;
  const db = await getDb();
  const payment = await db.collection<PaymentDoc>(collections.payments).findOne({ reference });
  if (!payment) return null;
  let unlockCode: string | undefined;
  if (payment.kind === "cv" && payment.status === "paid") {
    const doc = await db.collection(payment.collection).findOne({ _id: payment.refId }, { projection: { unlockCode: 1 } });
    if (typeof doc?.unlockCode === "string") unlockCode = doc.unlockCode;
  }
  return { payment, unlockCode };
}
