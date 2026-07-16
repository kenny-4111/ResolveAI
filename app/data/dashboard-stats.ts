import { Ticket, Clock3, CheckCircle2, MessageSquare } from "lucide-react";

export const dashboardStats = [
  {
    title: "Total Tickets",
    value: "1,248",
    change: "+12% this week",
    icon: Ticket,
  },
  {
    title: "Open Tickets",
    value: "86",
    change: "-8 today",
    icon: MessageSquare,
  },
  {
    title: "Resolved",
    value: "94%",
    change: "+4%",
    icon: CheckCircle2,
  },
  {
    title: "Avg. Response",
    value: "3m",
    change: "-45 sec",
    icon: Clock3,
  },
];
