type DashboardHeaderProps = {
  title: string;
  description: string;
};

export default function DashboardHeader({
  title,
  description,
}: DashboardHeaderProps) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>

        <p className="mt-2 text-slate-400">{description}</p>
      </div>
    </div>
  );
}
