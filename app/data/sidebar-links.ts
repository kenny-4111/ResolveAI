// data/sidebar-links.ts

import { LayoutDashboard, Ticket, BarChart3, Settings } from "lucide-react";

export const sidebarLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Tickets",
    href: "/dashboard/tickets",
    icon: Ticket,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
