import Stripe from "stripe";
import dotenv from "dotenv";
import { PaymentPlans } from "../../config/payment-plans.js";

dotenv.config();


// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createPaymentLink(req, res) {
  const {
    amount,
    description,
    currency,
    userId,
    callsType,
    callsId,
    callsAmount,
  } = req.body;

  try {
    console.log(
      "Creating payment with:",
      description,
      currency,
      userId,
      callsType,
      callsId,
      callsAmount
    );

    const plan = PaymentPlans.find((plan) => plan.planeId === callsId);

    if (!plan) return res.status(200).json({ data: `can't find this plan` });

    const product = await stripe.products.create({
      name: description || "Game",
    });

    const price = await stripe.prices.create({
      unit_amount: plan?.price || amount * 100,
      currency,
      product: product.id,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `https://quantillium.softigital.com/settings?success=true#billing`,
      metadata: {
        userId,
        callsType,
        callsId,
        callsAmount,
      },
      cancel_url: `https://quantillium.softigital.com/settings?success=false#billing`,
    });

    return res.status(200).json({ data: { paymentUrl: session.url } });
  } catch (error) {
    console.error("Stripe Payment Link creation failed:", error);
    throw new Error(`Stripe Payment Link creation failed: ${error.message}`);
  }
}

export async function handleWebhook(req, res) {
  const sig = req.headers["stripe-signature"];

  if (!sig) {
    return res.status(400).json({ error: "Missing Stripe signature header" });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK
    );
  } catch (err) {
    console.error("⚠️  Webhook signature verification failed:", err.message);
    return res.status(400).json({ error: err.message });
  }

  console.log("🔔 Webhook event received:", event.type);

  switch (event.type) {
    case "checkout.session.completed":
      try {
        const session = event.data.object;

        const parsedBody =
          typeof req.body === "string" ? JSON.parse(req.body) : req.body;

        const response = await fetch(
          `${process.env.TARGET_URL}add_user_api_calls?api_key=${process.env.API_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: parsedBody?.userId,
              stripe_payment_id: parsedBody?.id,
              calls_type: parsedBody?.callsType,
              amount: parsedBody?.amount,
              calls_amount: parsedBody?.callsAmount,
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error(
            "Failed to add user API calls:",
            response.status,
            errorData?.message || "Unknown error"
          );
          console.error("Errors : ", response.data);
          break;
        }

        console.log("User API calls added successfully");
      } catch (error) {
        console.error("Error in checkout.session.completed:", error.message);
      }

      console.log("checkout.session.completed");
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return res.status(200).json({ received: true });
}
