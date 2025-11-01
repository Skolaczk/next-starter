"use client";

import { createCheckoutSessionAction } from "@/actions/create-checkout-session";
import { Button } from "@/components/ui/button";

export const StripeButton = () => {
  const handleCreateCheckoutSession = async () => {
    const { url } = await createCheckoutSessionAction();

    if (url) {
      window.location.href = url;
    }
  };

  return (
    <Button
      onClick={handleCreateCheckoutSession}
      className="text-foreground cursor-pointer bg-gradient-to-r from-rose-700 to-pink-600"
      size="lg"
    >
      Upgrade to PRO
    </Button>
  );
};
