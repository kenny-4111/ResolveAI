type Ticket = {
  id: string;
  customer: string;
  subject: string;
  status: string;
  priority: string;
  date: string;
};

type Props = {
  ticket: Ticket;
};

const statusColors = {
  Open: "bg-blue-500/10 text-blue-400",
  Pending: "bg-yellow-500/10 text-yellow-400",
  Resolved: "bg-green-500/10 text-green-400",
};

const priorityColors = {
  High: "bg-red-500/10 text-red-400",
  Medium: "bg-orange-500/10 text-orange-400",
  Low: "bg-emerald-500/10 text-emerald-400",
};

export default function TicketRow({ ticket }: Props) {
  return (
    <tr className="border-b border-slate-800 transition hover:bg-slate-800/40">
      <td className="px-4 py-5 font-medium text-white sm:px-6">{ticket.id}</td>

      <td className="px-4 py-5 sm:px-6">
        <div>
          <p className="font-medium text-white">{ticket.customer}</p>

          <p className="text-sm text-slate-400">{ticket.subject}</p>
        </div>
      </td>

      <td className="px-4 py-5 sm:px-6">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            statusColors[ticket.status as keyof typeof statusColors]
          }`}>
          {ticket.status}
        </span>
      </td>

      <td className="px-4 py-5 sm:px-6">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            priorityColors[ticket.priority as keyof typeof priorityColors]
          }`}>
          {ticket.priority}
        </span>
      </td>

      <td className="px-4 py-5 text-slate-400 sm:px-6">{ticket.date}</td>
    </tr>
  );
}
