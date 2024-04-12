import { db, Ticket } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Ticket).values([
    {
      id: 1,
      owner: "Alice",
      transactionId: "123",
    },
    {
      id: 2,
      owner: "Bob",
      transactionId: "456",
    },
  ]);
}
