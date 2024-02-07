import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Next.js Starter',
  description:
    'A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, testing tools and more. Jumpstart your project with efficiency and style.',
  keywords: [
    'Next.js',
    'React',
    'Next.js starter',
    'Next.js boilerplate',
    'Starter Template',
    'Tailwind CSS',
    'TypeScript',
    'Shadcn/ui',
    'Next-auth',
    'Prisma',
  ],
  url: env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID || '',
};
