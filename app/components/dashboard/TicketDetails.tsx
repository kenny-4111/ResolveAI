import { Ticket } from "@/types/ticket";

type TicketDetailsProps = {
  ticket: Ticket;
};

export default function TicketDetails({ ticket }: TicketDetailsProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900">
      {/* Header */}
      <div className="border-b border-slate-800 p-6">
        <h2 className="text-xl font-semibold text-white">Ticket Details</h2>

        <p className="mt-1 text-sm text-slate-400">{ticket.id}</p>
      </div>

      {/* Body */}
      <div className="space-y-6 p-6">
        <div>
          <p className="text-sm text-slate-400">Customer</p>

          <h3 className="mt-1 text-lg font-semibold text-white">
            {ticket.customer}
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-400">Subject</p>

          <h3 className="mt-1 text-white">{ticket.subject}</h3>
        </div>

        <div>
          <p className="text-sm text-slate-400">Message</p>

          <div className="mt-2 rounded-xl bg-slate-950 p-4">
            <p className="leading-7 text-slate-300">{ticket.message}</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            <span
              className={`rounded-full px-3 py-1 text-sm ${
                ticket.status === "Open" ? "bg-blue-500/10 text-blue-400"
                : ticket.status === "Pending" ?
                  "bg-yellow-500/10 text-yellow-400"
                : "bg-green-500/10 text-green-400"
              }`}>
              {ticket.status}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-sm ${
                ticket.priority === "High" ? "bg-red-500/10 text-red-400"
                : ticket.priority === "Medium" ?
                  "bg-orange-500/10 text-orange-400"
                : "bg-emerald-500/10 text-emerald-400"
              }`}>
              {ticket.priority} Priority
            </span>
          </div>
          <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-5 mt-3">
            <h3 className="font-semibold text-orange-400">🤖 AI Summary</h3>

            <p className="mt-3 leading-7 text-slate-300">
              AI will generate a concise summary of this ticket to help support
              agents understand the customer&apos;s issue faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
