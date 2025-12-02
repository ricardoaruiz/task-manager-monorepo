import { defineConfig } from "drizzle-kit";
import env from "./src/app/env";

export default defineConfig({
	out: "./src/app/db/migrations",
	schema: "./src/app/db/schema/schema.ts",
	dialect: "postgresql",
	casing: "snake_case",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
});
