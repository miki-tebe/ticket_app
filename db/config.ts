import { column, defineDb, defineTable } from "astro:db";

const Ticket = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    owner: column.text(),
    transactionId: column.text(),
    isUsed: column.boolean({ default: false }),
    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ optional: true }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Ticket },
});
