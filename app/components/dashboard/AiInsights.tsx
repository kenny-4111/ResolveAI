import { Sparkles, TriangleAlert, TrendingUp } from "lucide-react";

export default function AiInsights() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-2">
        <Sparkles className="text-orange-500" size={22} />
        <h2 className="text-xl font-semibold text-white">AI Insights</h2>
      </div>

      <div className="mt-6 space-y-4">
        <InsightCard
          icon={<TriangleAlert size={18} />}
          title="High Priority Alert"
          description="12 high-priority tickets require immediate attention."
          color="text-red-400"
        />

        <InsightCard
          icon={<TrendingUp size={18} />}
          title="Response Time Improved"
          description="Average response time has improved by 18% this week."
          color="text-emerald-400"
        />

        <InsightCard
          icon={<Sparkles size={18} />}
          title="AI Suggestion"
          description="Most billing tickets can be auto-replied with AI."
          color="text-orange-400"
        />
      </div>
    </div>
  );
}

type InsightCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

function InsightCard({ icon, title, description, color }: InsightCardProps) {
  return (
    <div className="rounded-xl bg-slate-950 p-4">
      <div className={`flex items-center gap-2 font-semibold ${color}`}>
        {icon}
        {title}
      </div>

      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}
