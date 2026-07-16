const activities = [
  "John Doe's ticket was resolved.",
  "AI generated 24 replies today.",
  "Sarah Wilson opened a new ticket.",
  "Support response time dropped to 3 minutes.",
];

export default function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold text-white">Recent Activity</h2>

      <div className="mt-6 space-y-4">
        {activities.map((activity) => (
          <div
            key={activity}
            className="rounded-lg bg-slate-950 p-4 text-slate-300">
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}
