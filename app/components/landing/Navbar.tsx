"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-white">Resolve</span>
          <span className="text-orange-500">AI</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              href="#features"
              className="text-slate-300 transition hover:text-orange-500">
              Features
            </a>
          </li>

          <li>
            <a
              href="#how-it-works"
              className="text-slate-300 transition hover:text-orange-500">
              How It Works
            </a>
          </li>

          <li>
            <a
              href="#preview"
              className="text-slate-300 transition hover:text-orange-500">
              Preview
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="hidden rounded-lg bg-orange-500 px-5 py-2.5 font-semibold text-white transition hover:bg-orange-600 md:block">
            Try Demo
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <Menu size={28} />
          </button>
        </div>
      </nav>
    </header>
  );
}
