import { Ticket } from "@/types/ticket";

type TicketListProps = {
  tickets: Ticket[];
  selectedTicket: Ticket;
  onSelect: (ticket: Ticket) => void;
};

export default function TicketList({
  tickets,
  selectedTicket,
  onSelect,
}: TicketListProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 p-5">
        <h2 className="text-lg font-semibold text-white">All Tickets</h2>
      </div>

      <div>
        {tickets.map((ticket) => (
          <button
            key={ticket.id}
            onClick={() => onSelect(ticket)}
            className={`w-full border-b border-slate-800 p-5 text-left transition hover:bg-slate-800 ${
              selectedTicket.id === ticket.id ? "bg-slate-800" : ""
            }`}>
            <p className="font-semibold text-white">{ticket.customer}</p>

            <p className="mt-1 text-sm text-slate-400 line-clamp-1">
              {ticket.subject}
            </p>

            <p className="mt-2 text-xs text-slate-500">{ticket.date}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
