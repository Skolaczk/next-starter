import { defineConfig } from "drizzle-kit";

import { env } from "@/env.mjs";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/schema.ts",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
