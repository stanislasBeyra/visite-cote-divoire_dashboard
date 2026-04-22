"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlignLeft,
  BarChart2,
  Home,
  LayoutDashboard,
  ShoppingCart,
  Tag,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

const items = [
  { href: "/dashboard", label: "Vue d’ensemble", segment: "" as const, badge: null as string | null },
  { href: "/dashboard/analytics", label: "Performance", segment: "analytics" as const, badge: "30 j" },
  { href: "/dashboard/commandes", label: "Transactions", segment: "commandes" as const, badge: "12" },
  { href: "/dashboard/catalogue", label: "Catalogue", segment: "catalogue" as const, badge: null },
  { href: "/dashboard/clients", label: "Visiteurs", segment: "clients" as const, badge: "1,2k" },
  { href: "/dashboard/offres", label: "Promotions", segment: "offres" as const, badge: "3" },
  { href: "/dashboard/signalements", label: "Modération", segment: "signalements" as const, badge: "2" },
] as const;

function pickIcon(segment: (typeof items)[number]["segment"]) {
  switch (segment) {
    case "analytics":
      return BarChart2;
    case "commandes":
      return ShoppingCart;
    case "catalogue":
      return AlignLeft;
    case "clients":
      return UserPlus;
    case "offres":
      return Tag;
    case "signalements":
      return Home;
    default:
      return LayoutDashboard;
  }
}

export function DashboardNav({
  variant = "sidebar",
  collapsed = false,
  className,
}: {
  variant?: "sidebar" | "bar";
  collapsed?: boolean;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        variant === "sidebar" && "flex flex-col gap-0.5 px-3 py-4",
        variant === "bar" && "flex flex-row flex-wrap gap-1 px-2 py-2",
        className,
      )}
      aria-label="Navigation administration"
    >
      {items.map(({ href, label, badge, segment }) => {
        const Icon = pickIcon(segment);
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-2 border border-transparent text-[13px] transition-colors duration-[180ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]",
              variant === "sidebar" && "gap-3 px-3 py-2.5",
              variant === "sidebar" && collapsed && "justify-center px-2",
              variant === "bar" && "px-2.5 py-2",
              active
                ? "border-line bg-foreground/[0.04] text-foreground"
                : "text-muted hover:border-line hover:bg-hover hover:text-foreground",
            )}
            style={{ borderRadius: "var(--radius-sm, 7px)" }}
            title={collapsed && variant === "sidebar" ? label : undefined}
          >
            <span className="shrink-0 text-foreground opacity-80">
              <Icon size={16} strokeWidth={1.4} />
            </span>
            {!(collapsed && variant === "sidebar") ? (
              <span className="min-w-0 flex-1 tracking-tight">{label}</span>
            ) : null}
            {badge && !(collapsed && variant === "sidebar") ? (
              <span className="mono shrink-0 rounded-[4px] bg-chip px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted">
                {badge}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
