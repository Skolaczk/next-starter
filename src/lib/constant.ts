import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Next.js Starter',
  description:
    'It is a Next.js starter template powered by TypeScript, styled with Tailwind CSS and Shadcn/ui. Features include Dark Mode, SEO optimization, and pre-configured eslint, prettier, husky, and lint-staged settings. Jumpstart your project with efficiency and style.',
  keywords: [
    'Next.js',
    'Next.js starter',
    'Next.js boilerplate',
    'Tailwind CSS',
    'TypeScript',
    'Dark Mode',
    'SEO Optimization',
    'eslint',
    'prettier',
    'husky',
    'lint-staged',
    'Jest Tests',
    'Github actions',
    'Web Development',
    'Starter Template',
    'Frontend',
    'React',
    'JavaScript',
    'CSS',
    'Responsive Design',
    'Modern Web Applications',
    'Efficient Development',
    'Code Quality',
  ],
  url: env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID || '',
};
