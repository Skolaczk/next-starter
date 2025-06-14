import Stripe from "stripe";

import { env } from "@/env.mjs";

export const stripeServer = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-05-28.basil",
});
