import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { UnlockSaver } from "@/components/unlock-saver";
import { formatMoney } from "@/lib/paystack";
import { getPaymentResult } from "@/lib/payments";
import { getT } from "@/lib/translate";

export const metadata: Metadata = { title: "Payment | Bridge Careers Global", robots: { index: false } };

function param(v: string | string[] | undefined) {
  return (Array.isArray(v) ? v[0] : v) ?? "";
}

export default async function PaymentResultPage({ searchParams }: PageProps<"/payment/result">) {
  const sp = await searchParams;
  const [t, result] = await Promise.all([getT(), getPaymentResult(param(sp.ref))]);
  const payment = result?.payment;
  const paid = payment?.status === "paid";
  const failed = payment?.status === "failed";

  const title = !payment ? t("We couldn't find this payment") : paid ? t("Payment received. Thank you!") : failed ? t("Your payment didn't go through") : t("We're still waiting for your payment");
  const text = !payment
    ? t("If you were charged, please contact us with your payment receipt and we'll sort it out.")
    : paid
      ? payment.kind === "cv"
        ? t("Your CV download is unlocked. Keep the code below: we've also emailed it to you.")
        : payment.kind === "visa"
          ? t("Your visa application fees are paid. Our team will review your application and contact you by email with the next steps.")
          : t("Your payment is confirmed. Our team will review your application and contact you by email.")
      : failed
        ? t("No money was taken. You can contact us and we'll send you a new payment link.")
        : t("If you've just paid, refresh this page in a minute. If you closed the payment page, our team will email you a payment link.");

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <div role="status" className="rounded-3xl bg-white p-8 text-center ring-1 ring-slate-200 sm:p-12">
        <span
          className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${paid ? "bg-emerald-50 text-emerald-600" : failed ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"}`}
        >
          <Icon name={paid ? "check" : "shield"} className="h-8 w-8" />
        </span>
        <h1 className="mt-5 text-2xl font-bold text-brand-dark">{title}</h1>
        <p className="mt-3 text-slate-600">{text}</p>

        {payment && (
          <dl className="mx-auto mt-6 max-w-sm divide-y divide-slate-100 text-left text-sm">
            <div className="flex justify-between gap-4 py-2">
              <dt className="text-slate-500">{t("For")}</dt>
              <dd className="font-semibold text-slate-800">{payment.description}</dd>
            </div>
            <div className="flex justify-between gap-4 py-2">
              <dt className="text-slate-500">{t("Amount")}</dt>
              <dd className="font-semibold text-slate-800">{formatMoney(payment.amountMinor, payment.currency)}</dd>
            </div>
            <div className="flex justify-between gap-4 py-2">
              <dt className="text-slate-500">{t("Reference")}</dt>
              <dd className="break-all font-mono text-xs text-slate-800">{payment.reference}</dd>
            </div>
          </dl>
        )}

        {result?.unlockCode && (
          <div className="mt-6 rounded-xl bg-muted p-4">
            <UnlockSaver code={result.unlockCode} />
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t("Your unlock code")}</p>
            <p className="mt-1 font-mono text-xl font-bold tracking-widest text-brand-dark">{result.unlockCode}</p>
          </div>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {payment?.kind === "cv" && (
            <Link href="/cv-maker/builder" className="rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
              {paid ? t("Download my CV") : t("Back to the CV maker")}
            </Link>
          )}
          {payment?.kind === "visa" && paid && (
            <Link href="/air-ticket-booking" className="rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
              {t("Book your air ticket")}
            </Link>
          )}
          <Link href="/jobs" className="rounded-full px-6 py-3 font-semibold text-brand ring-1 ring-brand hover:bg-brand/5">
            {t("Explore jobs")}
          </Link>
          {!paid && (
            <Link href="/contact-us" className="rounded-full px-6 py-3 font-semibold text-slate-700 ring-1 ring-slate-300 hover:ring-brand">
              {t("Contact us")}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
