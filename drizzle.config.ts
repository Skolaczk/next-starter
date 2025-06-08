import { defineConfig } from "drizzle-kit";

import { env } from "@/env.mjs";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/drizzle/schema.ts",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
