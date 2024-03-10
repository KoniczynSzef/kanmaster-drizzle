import { pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    name: text("name"),
    email: text("email"),
});
