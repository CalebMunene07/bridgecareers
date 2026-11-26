import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { headers } from "next/headers";
import { getSettings } from "@/lib/settings";

// Paystack (https://paystack.com) client: starts a hosted checkout, verifies a payment and checks
// webhook signatures. Credentials come from Admin → Settings → Paystack payments
// (or the PAYSTACK_SECRET_KEY, PAYSTACK_CURRENCY and PAYSTACK_USD_RATE environment variables).
//
// Prices in the admin are written in USD. When the charge currency is something else (KES by
// default) the amount is converted with the rate saved in Settings.

const API = "https://api.paystack.co";

export type PaystackConfig = { secret: string; currency: string; rate: number; siteUrl: string };

/** The Paystack settings, or null when payments aren't set up (the manual payment-link flow is used then). */
export async function paystackConfig(): Promise<PaystackConfig | null> {
  const s = await getSettings();
  const secret = s.paystackSecretKey;
  if (!secret) return null;
  const currency = (s.paystackCurrency || "KES").toUpperCase();
  const rate = currency === "USD" ? 1 : Number(s.paystackUsdRate);
  if (!Number.isFinite(rate) || rate <= 0) {
    console.warn(`[paystack] set "1 USD equals" in Admin → Settings to charge in ${currency}; online payment is off until then.`);
    return null;
  }
  return { secret, currency, rate, siteUrl: (s.siteUrl ?? "").replace(/\/+$/, "") };
}

export async function paystackEnabled() {
  return (await paystackConfig()) !== null;
}

/** Amount in the smallest unit of the charge currency (cents, kobo…), converted from USD. */
export function toMinorUnits(amountUsd: number, cfg: PaystackConfig) {
  return Math.round(amountUsd * cfg.rate * 100);
}

export function formatMoney(minor: number, currency: string) {
  return `${currency} ${(minor / 100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/** The public address of this site, used for Paystack's return link. */
export async function siteBase(cfg: PaystackConfig) {
  if (cfg.siteUrl) return cfg.siteUrl;
  const h = await headers();
  const host = h.get("x-forwarded-host") || h.get("host") || "localhost:3000";
  const proto = h.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

async function call<T>(cfg: PaystackConfig, path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${cfg.secret}`, "Content-Type": "application/json", ...init?.headers },
    cache: "no-store",
  });
  const json = (await res.json().catch(() => null)) as { status?: boolean; message?: string; data?: T } | null;
  if (!res.ok || !json?.status || !json.data) throw new Error(`Paystack ${path}: ${json?.message ?? res.statusText}`);
  return json.data;
}

/** Creates a hosted checkout and returns the address to send the customer to. */
export async function initializeTransaction(
  cfg: PaystackConfig,
  args: { email: string; amountMinor: number; reference: string; callbackUrl: string; metadata: Record<string, unknown> },
) {
  const data = await call<{ authorization_url: string }>(cfg, "/transaction/initialize", {
    method: "POST",
    body: JSON.stringify({
      email: args.email,
      amount: args.amountMinor,
      currency: cfg.currency,
      reference: args.reference,
      callback_url: args.callbackUrl,
      metadata: args.metadata,
    }),
  });
  return data.authorization_url;
}

export type Verified = { status: string; amount: number; currency: string; id: number; channel?: string; paidAt?: string };

/** Asks Paystack what happened to a payment. Never trust the browser: always verify here. */
export async function verifyTransaction(cfg: PaystackConfig, reference: string) {
  const data = await call<{ status: string; amount: number; currency: string; id: number; channel?: string; paid_at?: string }>(
    cfg,
    `/transaction/verify/${encodeURIComponent(reference)}`,
  );
  return { status: data.status, amount: data.amount, currency: data.currency, id: data.id, channel: data.channel, paidAt: data.paid_at } satisfies Verified;
}

/** Checks the x-paystack-signature header of a webhook (HMAC SHA-512 of the raw body with the secret key). */
export function validSignature(rawBody: string, signature: string | null, secret: string) {
  if (!signature) return false;
  const expected = createHmac("sha512", secret).update(rawBody).digest();
  const given = Buffer.from(signature, "hex");
  return given.length === expected.length && timingSafeEqual(given, expected);
}
