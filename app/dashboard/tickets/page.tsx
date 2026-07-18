"use client";

import { useState } from "react";
import { tickets } from "../../data/tickets";
import { Ticket } from "@/types/ticket";
import TicketList from "../../components/dashboard/TicketList";
import TicketDetails from "../../components/dashboard/TicketDetails";

import DashboardHeader from "../../components/dashboard/DashboardHeader";

export default function TicketsPage() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket>(tickets[0]);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [summary, setSummary] = useState("");
  const [loadingReply, setLoadingReply] = useState(false);
  const [reply, setReply] = useState("");

  const handleSelectTicket = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setSummary("");
    setReply("");
  };

  const handleGenerateSummary = () => {
    setLoadingSummary(true);

    setTimeout(() => {
      setSummary(
        `${selectedTicket.customer} is experiencing an issue regarding "${selectedTicket.subject}". The customer expects assistance as soon as possible.`,
      );

      setLoadingSummary(false);
    }, 1500);
  };
  const handleGenerateReply = () => {
    setLoadingReply(true);

    setTimeout(() => {
      setReply(`Hello ${selectedTicket.customer},

Thank you for contacting ResolveAI Support.

We understand the issue regarding "${selectedTicket.subject}".

Our team is currently reviewing your request and will provide an update as soon as possible.

We appreciate your patience.

Best regards,
Support Team`);

      setLoadingReply(false);
    }, 1800);
  };

  return (
    <>
      <DashboardHeader
        title="Tickets"
        description="Manage customer conversations with AI assistance."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <TicketList
            tickets={tickets}
            selectedTicket={selectedTicket}
            onSelect={handleSelectTicket}
          />
        </div>

        <div className="lg:col-span-2">
          <TicketDetails
            ticket={selectedTicket}
            summary={summary}
            summaryLoading={loadingSummary}
            onGenerateSummary={handleGenerateSummary}
            reply={reply}
            loadingReply={loadingReply}
            onGenerateReply={handleGenerateReply}
          />
        </div>
      </div>
    </>
  );
}
