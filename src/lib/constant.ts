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
  url: env.APP_URL,
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
