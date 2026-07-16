import { steps } from "@/app/data/howItWorks";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-widest text-orange-500">
            How It Works
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            AI assisting your support team in four simple steps.
          </h2>

          <p className="mt-6 text-slate-400">
            Let AI handle repetitive tasks so your agents can focus on solving
            customer problems.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-2xl border border-slate-800 bg-slate-950 p-8">
                <span className="absolute right-6 top-6 text-5xl font-bold text-slate-800">
                  0{index + 1}
                </span>

                <div className="mb-6 inline-flex rounded-xl bg-orange-500/10 p-4">
                  <Icon className="text-orange-500" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
