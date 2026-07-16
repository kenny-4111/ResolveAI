import { Bell, Search } from "lucide-react";
import MobileSidebar from "./MobileSidebar";
export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="flex h-20 items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <MobileSidebar />

          <div className="relative hidden w-full max-w-md md:block">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              size={18}
            />

            <input
              placeholder="Search tickets..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white placeholder:text-slate-400 outline-none focus:border-orange-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Bell className="text-slate-400" />

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 font-bold">
              K
            </div>

            <div className="hidden md:block">
              <p className="font-semibold text-white">Kenny</p>

              <p className="text-sm text-slate-400">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
