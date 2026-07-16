import { LucideIcon } from "lucide-react";

type StatsCardProps = {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
};

export default function StatsCard({
  title,
  value,
  change,
  icon: Icon,
}: StatsCardProps) {
  return (
    <div className="min-w-0 rounded-2xl border border-slate-800 bg-slate-900 p-4 transition-all hover:border-orange-500/50 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm text-slate-400">{title}</p>

          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {value}
          </h3>

          <p className="mt-2 text-sm text-emerald-400">{change}</p>
        </div>

        <div className="shrink-0 rounded-xl bg-orange-500/10 p-3">
          <Icon className="text-orange-500" size={22} />
        </div>
      </div>
    </div>
  );
}
