// data/tickets.ts

import { Ticket } from "@/types/ticket";

export const tickets: Ticket[] = [
  {
    id: "#1024",
    customer: "John Doe",
    subject: "Payment failed after checkout",
    message:
      "I tried paying with my debit card three times but the payment keeps failing. My account has already been debited.",
    status: "Open",
    priority: "High",
    date: "2 mins ago",
  },
  {
    id: "#1025",
    customer: "Sarah Wilson",
    subject: "Unable to reset password",
    message:
      "I'm not receiving the password reset email even after trying multiple times.",
    status: "Pending",
    priority: "Medium",
    date: "15 mins ago",
  },
  {
    id: "#1026",
    customer: "Michael Brown",
    subject: "Order not delivered",
    message:
      "My package was supposed to arrive yesterday but the tracking hasn't changed.",
    status: "Resolved",
    priority: "Low",
    date: "1 hour ago",
  },
];
