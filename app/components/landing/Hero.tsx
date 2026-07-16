import Button from "../shared/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="absolute right-20 bottom-0 h-72 w-72 rounded-full bg-sky-500/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row lg:px-8">
        {/* Left */}
        <div className="max-w-2xl">
          <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            AI-Powered Customer Support
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">
            Resolve Customer Tickets
            <span className="text-orange-500"> Faster.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Transform your support workflow with AI-generated replies, sentiment
            analysis, automatic categorization, and intelligent insights all in
            one beautiful dashboard.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/dashboard">Try Demo</Button>
            <a
              href="#features"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 transition hover:border-orange-500 hover:text-white">
              Learn More
            </a>
          </div>

          <div className="mt-14 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold text-white">10K+</h2>
              <p className="text-slate-500">Tickets Resolved</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">95%</h2>
              <p className="text-slate-500">AI Accuracy</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">40%</h2>
              <p className="text-slate-500">Faster Responses</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex w-full max-w-xl justify-center">
          <div className="w-full rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <div className="mb-6 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-slate-800 p-4">
                <p className="font-semibold text-white">
                  Payment failed after checkout
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Customer sentiment: Negative
                </p>
              </div>

              <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-4">
                <h3 className="font-semibold text-orange-400">
                  AI Suggested Reply
                </h3>

                <p className="mt-2 text-sm text-slate-300">
                  We&apos;re sorry for the inconvenience. Our team has
                  identified the issue and your payment will be retried
                  automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
