import ActivityFeed from "../components/dashboard/ActivityFeed";
import AiInsights from "../components/dashboard/AiInsights";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCard from "../components/dashboard/StatsCard";
import TicketTable from "../components/dashboard/TicketTable";
import { dashboardStats } from "../data/dashboard-stats";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader
        title="Dashboard"
        description="Welcome back, Kenny 👋 Here's what's happening today."
      />

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </section>

      {/* Tickets + AI */}
      <section className="mt-8 grid gap-8 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <TicketTable />
        </div>

        <AiInsights />
      </section>

      {/* Activity */}
      <section className="mt-8 grid gap-8 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <ActivityFeed />
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-white">Quick Actions</h2>

          <div className="mt-6 space-y-3">
            <button className="w-full rounded-xl bg-orange-500 px-4 py-3 font-medium text-white hover:bg-orange-600 transition">
              + New Ticket
            </button>

            <button className="w-full rounded-xl border border-slate-700 px-4 py-3 text-slate-300 hover:border-orange-500 transition">
              Generate AI Report
            </button>

            <button className="w-full rounded-xl border border-slate-700 px-4 py-3 text-slate-300 hover:border-orange-500 transition">
              Export Tickets
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
