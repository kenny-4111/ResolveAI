import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "../shared/Button";

export default function CTA() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/15 via-slate-900 to-slate-900 p-10 text-center lg:p-16">
          {/* Background Glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              Ready to transform your customer support?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Empower your team with AI-powered ticket management, smart
              replies, and actionable insights all from one intuitive dashboard.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
                Try Demo
                <ArrowRight size={18} />
              </Link>

              <Button href="#features" variant="secondary">
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
