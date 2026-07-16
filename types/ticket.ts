export type TicketStatus = "Open" | "Pending" | "Resolved";

export type TicketPriority = "Low" | "Medium" | "High";

export interface Ticket {
  id: string;
  customer: string;
  subject: string;
  message: string;
  status: TicketStatus;
  priority: TicketPriority;
  date: string;
}
