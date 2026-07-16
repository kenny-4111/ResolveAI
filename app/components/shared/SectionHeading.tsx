type SectionHeadingProps = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="font-semibold uppercase tracking-[0.2em] text-orange-500">
        {badge}
      </span>

      <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">{description}</p>
    </div>
  );
}
