import { DataTable } from "./data-table";
import { columns, type Ticket as TicketType } from "./columns";

export default function TicketTable({ data }: { data: TicketType[] }) {
  return <DataTable columns={columns} data={data} />;
}
