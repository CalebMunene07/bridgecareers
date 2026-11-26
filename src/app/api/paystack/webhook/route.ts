import { paystackConfig, validSignature } from "@/lib/paystack";
import { settlePayment } from "@/lib/payments";

// Paystack calls this when a payment succeeds, even if the customer closed the browser early.
// Add it in Paystack → Settings → API Keys & Webhooks as: https://YOUR-SITE/api/paystack/webhook
export async function POST(request: Request) {
  const cfg = await paystackConfig();
  if (!cfg) return new Response("Payments are not set up", { status: 503 });

  const raw = await request.text();
  if (!validSignature(raw, request.headers.get("x-paystack-signature"), cfg.secret)) {
    return new Response("Invalid signature", { status: 401 });
  }

  let event: { event?: string; data?: { reference?: string } };
  try {
    event = JSON.parse(raw);
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  // Always verify with Paystack inside settlePayment: the webhook only tells us which payment to check.
  if (event.event === "charge.success" && event.data?.reference) {
    try {
      await settlePayment(event.data.reference);
    } catch (error) {
      console.error("[paystack] webhook failed", error);
      return new Response("Error", { status: 500 }); // Paystack retries
    }
  }
  return new Response("ok");
}
