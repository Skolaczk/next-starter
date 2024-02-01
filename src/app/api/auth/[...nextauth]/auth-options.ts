import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import { env } from '@/env.mjs';

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: env.NEXT_PUBLIC_GITHUB_ID || '',
      clientSecret: env.NEXT_PUBLIC_GITHUB_SECRET || '',
    }),
  ],
};
