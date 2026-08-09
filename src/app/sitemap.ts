import type { MetadataRoute } from "next";
import { cacheLife } from "next/cache";

import { env } from "@/env.mjs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  "use cache";
  cacheLife("days");

  return [
    {
      url: env.APP_URL || "/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
