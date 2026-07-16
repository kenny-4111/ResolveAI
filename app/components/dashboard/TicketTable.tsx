import { tickets } from "../../data/tickets";
import TicketRow from "./TicketRow";

export default function TicketTable() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 p-6">
        <h2 className="text-xl font-semibold text-white">Recent Tickets</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[640px] w-full">
          <thead className="bg-slate-950">
            <tr className="text-left text-sm text-slate-400">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Priority</th>
              <th className="px-6 py-4">Updated</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <TicketRow key={ticket.id} ticket={ticket} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
