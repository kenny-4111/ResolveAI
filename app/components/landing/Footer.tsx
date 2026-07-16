import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center text-slate-400 md:flex-row">
        <div>
          <h3 className="text-xl font-bold">
            Resolve<span className="text-orange-500">AI</span>
          </h3>

          <p className="mt-2 text-sm">
            AI-powered customer support for modern teams.
          </p>
        </div>

        <div className="flex gap-8 text-sm">
          <a href="#features" className="hover:text-white">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-white">
            How It Works
          </a>

          <a href="#preview" className="hover:text-white">
            Preview
          </a>

          <Link href="/dashboard" className="hover:text-white">
            Dashboard
          </Link>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} ResolveAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
