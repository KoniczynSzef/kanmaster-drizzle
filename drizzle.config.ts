import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
    schema: "./db/schema.ts",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.POSTGRES_URL as string,
        database: process.env.POSTGRES_DATABASE as string,
        host: process.env.POSTGRES_HOST as string,
    },
} satisfies Config;
