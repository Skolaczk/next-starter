import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NEXT_PUBLIC_SITE_URL: z.string().url(),
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID,
  },
});