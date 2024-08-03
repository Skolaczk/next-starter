import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

import { env } from '@/env.mjs';
import prisma from '@/lib/prisma';
import { stripeServer } from '@/lib/stripe';

const webhookHandler = async (req: NextRequest) => {
  try {
    const buf = await req.text();
    const sig = req.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
      event = stripeServer.webhooks.constructEvent(
        buf,
        sig,
        env.STRIPE_WEBHOOK_SECRET_KEY
      );
    } catch (err) {
      return NextResponse.json(
        {
          error: {
            message: `Webhook Error - ${err}`,
          },
        },
        { status: 400 }
      );
    }

    const subscription = event.data.object as Stripe.Subscription;

    switch (event.type) {
      case 'customer.subscription.created':
        await prisma.user.update({
          where: {
            stripeCustomerId: subscription.customer as string,
          },
          data: {
            isActive: true,
          },
        });
        break;
      default:
        break;
    }
    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json(
      {
        error: {
          message: 'Method Not Allowed',
        },
      },
      { status: 405 }
    ).headers.set('Allow', 'POST');
  }
};

export { webhookHandler as POST };
