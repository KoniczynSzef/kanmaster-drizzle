import { db } from "@/db";
import { users } from "@/db/schema";
import React from "react";

export default async function Home() {
    await db.select().from(users);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    );
}
