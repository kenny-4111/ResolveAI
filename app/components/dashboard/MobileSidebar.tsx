"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "../../data/sidebar-links";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function MobileSidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        render={
          <button className="rounded-lg p-2 transition hover:bg-slate-800 lg:hidden">
            <Menu size={24} className="text-white" />
          </button>
        }
      />

      <SheetContent
        side="left"
        className="w-72 border-slate-800 bg-slate-900 p-0">
        <div className="border-b border-slate-800 p-6">
          <h2 className="text-2xl font-bold text-white">
            Resolve<span className="text-orange-500">AI</span>
          </h2>
        </div>

        <nav className="space-y-2 p-4">
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
        </nav>
      </SheetContent>
    </Sheet>
  );
}
