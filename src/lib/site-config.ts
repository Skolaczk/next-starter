import { env } from "@/env.mjs";

export const siteConfig = {
  title: "Next.js Starter",
  description:
    "A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, testing tools and more. Jumpstart your project with efficiency and style.",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "Next-auth"],
  url: env.APP_URL,
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || "",
};
