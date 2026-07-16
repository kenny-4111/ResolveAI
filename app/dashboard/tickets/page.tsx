"use client";

import { useState, useEffect } from "react";
import { tickets } from "../../data/tickets";
import { Ticket } from "@/types/ticket";
import TicketList from "../../components/dashboard/TicketList";
import TicketDetails from "../../components/dashboard/TicketDetails";

import DashboardHeader from "../../components/dashboard/DashboardHeader";

export default function TicketsPage() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket>(tickets[0]);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [summary, setSummary] = useState("");

  const handleGenerateSummary = () => {
    setLoadingSummary(true);

    setTimeout(() => {
      setSummary(
        `${selectedTicket.customer} is experiencing an issue regarding "${selectedTicket.subject}". The customer expects assistance as soon as possible.`,
      );

      setLoadingSummary(false);
    }, 1500);
  };
  useEffect(() => {
    setSummary("");
  }, [selectedTicket]);
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
            onSelect={setSelectedTicket}
          />
        </div>

        <div className="lg:col-span-2">
          <TicketDetails ticket={selectedTicket} />
        </div>
      </div>
    </>
  );
}
