import { BarChart3, Clock3, MessageSquare, Ticket } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section id="preview" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-widest text-orange-500">
            Dashboard Preview
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Everything your team needs in one place.
          </h2>

          <p className="mt-6 text-slate-400">
            Monitor support performance, resolve tickets, and leverage AI all
            from a modern, intuitive dashboard.
          </p>
        </div>

        {/* Dashboard */}

        <div className="mt-20 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          {/* Browser */}

          <div className="flex items-center gap-2 border-b border-slate-800 px-6 py-4">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>

          <div className="grid lg:grid-cols-4">
            {/* Sidebar */}

            <aside className="border-r border-slate-800 p-6">
              <h3 className="mb-10 text-2xl font-bold">
                Resolve<span className="text-orange-500">AI</span>
              </h3>

              <div className="space-y-4">
                <div className="rounded-lg bg-orange-500 px-4 py-3 font-medium text-white">
                  Dashboard
                </div>

                <div className="rounded-lg px-4 py-3 text-slate-400">
                  Tickets
                </div>

                <div className="rounded-lg px-4 py-3 text-slate-400">
                  Analytics
                </div>

                <div className="rounded-lg px-4 py-3 text-slate-400">
                  Settings
                </div>
              </div>
            </aside>

            {/* Main */}

            <main className="lg:col-span-3 p-8">
              {/* Stats */}

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <StatCard
                  icon={<Ticket size={22} />}
                  title="Tickets"
                  value="1,248"
                />

                <StatCard
                  icon={<MessageSquare size={22} />}
                  title="Open"
                  value="86"
                />

                <StatCard
                  icon={<Clock3 size={22} />}
                  title="Avg. Response"
                  value="3m"
                />

                <StatCard
                  icon={<BarChart3 size={22} />}
                  title="Resolved"
                  value="94%"
                />
              </div>

              {/* Ticket */}

              <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    Latest Ticket
                  </h3>

                  <span className="rounded-full bg-red-500/20 px-4 py-1 text-sm text-red-400">
                    High Priority
                  </span>
                </div>

                <div className="mt-6 rounded-xl bg-slate-900 p-5">
                  <h4 className="font-semibold text-white">
                    Payment failed after checkout
                  </h4>

                  <p className="mt-3 text-slate-400">
                    Customer reported that payment keeps failing despite using
                    multiple cards.
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-orange-500/20 bg-orange-500/10 p-5">
                  <h4 className="font-semibold text-orange-400">
                    AI Suggested Reply
                  </h4>

                  <p className="mt-3 text-slate-300">
                    We sincerely apologize for the inconvenience. Our engineers
                    are investigating the issue and we&apos;ll notify you as
                    soon as it&apos;s resolved.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

function StatCard({ icon, title, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
      <div className="mb-4 inline-flex rounded-lg bg-orange-500/10 p-3 text-orange-500">
        {icon}
      </div>

      <p className="text-slate-400">{title}</p>

      <h3 className="mt-2 text-3xl font-bold text-white">{value}</h3>
    </div>
  );
}
