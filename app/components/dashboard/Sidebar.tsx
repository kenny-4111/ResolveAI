"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "../../data/sidebar-links";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r border-slate-800 bg-slate-900 lg:flex lg:flex-col">
      <div className="border-b border-slate-800 p-6">
        <h2 className="text-2xl font-bold text-white">
          Resolve<span className="text-orange-500">AI</span>
        </h2>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;

            const active = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  active ?
                    "bg-orange-500 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}>
                <Icon size={20} />

                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
