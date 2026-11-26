import { settlePayment } from "@/lib/payments";

// Paystack sends the customer back here after checkout (?reference=…). We verify the payment with
// Paystack, record it, then show the result page. A relative redirect keeps the visitor on the
// same address they came from.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const reference = url.searchParams.get("reference") || url.searchParams.get("trxref") || "";
  try {
    await settlePayment(reference);
  } catch (error) {
    console.error("[paystack] callback failed", error);
  }
  return new Response(null, { status: 303, headers: { Location: `/payment/result?ref=${encodeURIComponent(reference)}` } });
}
