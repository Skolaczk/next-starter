"use server";

import { env } from "@/env.mjs";
import { auth } from "@/lib/auth";
import { stripeServer } from "@/lib/stripe";

export const createCheckoutSessionAction = async () => {
  const session = await auth();

  if (!session?.user) {
    throw new Error("not-auth");
  }

  const checkoutSession = await stripeServer.checkout.sessions.create({
    mode: "subscription",
    customer: session.user.stripeCustomerId,
    line_items: [
      {
        price: env.STRIPE_SUBSCRIPTION_PRICE_ID,
        quantity: 1,
      },
    ],
    success_url: `${env.APP_URL}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: env.APP_URL,
  });

  return { id: checkoutSession.id };
};
