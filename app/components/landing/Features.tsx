import { features } from "../../data/features";

export default function Features() {
  return (
    <section id="features" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Features
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Everything your support team needs.
          </h2>

          <p className="mt-6 text-slate-400">
            Powerful AI tools designed to streamline customer support, improve
            response times, and deliver exceptional customer experiences.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature: (typeof features)[number]) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50">
                <div className="inline-flex rounded-xl bg-orange-500/10 p-4">
                  <Icon className="text-orange-500" size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
