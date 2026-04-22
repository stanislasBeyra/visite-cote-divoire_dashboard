"use client";

import * as React from "react";
import Link from "next/link";
import { ExternalLink, HelpCircle, Settings } from "lucide-react";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const sidebarCollapsedStorageKey = "abj-dashboard-sidebar-collapsed";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = React.useState(false);
  const initializedRef = React.useRef(false);

  React.useEffect(() => {
    const nextCollapsed = window.localStorage.getItem(sidebarCollapsedStorageKey) === "1";
    requestAnimationFrame(() => {
      initializedRef.current = true;
      setCollapsed(nextCollapsed);
    });
  }, []);

  React.useEffect(() => {
    if (!initializedRef.current) return;
    window.localStorage.setItem(sidebarCollapsedStorageKey, collapsed ? "1" : "0");
  }, [collapsed]);

  return (
    <div className="flex min-h-full" style={{ background: "var(--background)" }}>
      <aside
        className="sticky top-0 hidden h-screen shrink-0 flex-col border-r border-line transition-[width] duration-200 md:flex"
        style={{ width: collapsed ? 80 : 248 }}
      >
        <div className="flex items-center border-b border-line px-4 py-5">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-line font-serif text-lg italic text-foreground"
            style={{ borderRadius: "var(--radius-sm, 7px)" }}
            aria-hidden
          >
            A
          </div>
          {!collapsed ? (
            <div className="min-w-0 pl-3">
              <Link
                href="/dashboard"
                className="block truncate font-serif text-lg italic leading-tight tracking-tight text-foreground transition-opacity duration-[220ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:opacity-75"
              >
                Abidjan J&apos;adore
              </Link>
              <p className="mt-1 font-mono text-[10px] uppercase leading-normal tracking-[0.12em] text-muted">
                Administration
              </p>
            </div>
          ) : null}
          <div className="ml-auto h-8 w-8" aria-hidden />
        </div>
        <div className="flex-1 overflow-y-auto">
          <DashboardNav collapsed={collapsed} />
        </div>
        <div className="mt-auto space-y-1 border-t border-line px-3 py-3">
          <Link
            href="/dashboard/parametres"
            className="flex items-center px-3 py-2 text-[13px] text-muted transition-colors hover:bg-hover hover:text-foreground"
            style={{
              borderRadius: "var(--radius-sm, 7px)",
              justifyContent: collapsed ? "center" : "flex-start",
              gap: collapsed ? 0 : 10,
            }}
            title={collapsed ? "Parametres" : undefined}
          >
            <Settings size={15} strokeWidth={1.4} />
            {!collapsed ? "Paramètres" : null}
          </Link>
          <Link
            href="/dashboard/aide"
            className="flex items-center px-3 py-2 text-[13px] text-muted transition-colors hover:bg-hover hover:text-foreground"
            style={{
              borderRadius: "var(--radius-sm, 7px)",
              justifyContent: collapsed ? "center" : "flex-start",
              gap: collapsed ? 0 : 10,
            }}
            title={collapsed ? "Aide" : undefined}
          >
            <HelpCircle size={15} strokeWidth={1.4} />
            {!collapsed ? "Aide" : null}
          </Link>
          <Link
            href="/"
            className="ds-link-quiet flex items-center px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em]"
            style={{ justifyContent: collapsed ? "center" : "flex-start", gap: collapsed ? 0 : 10 }}
            title={collapsed ? "Vitrine publique" : undefined}
          >
            <ExternalLink size={13} strokeWidth={1.4} />
            {!collapsed ? "Vitrine publique" : null}
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopbar
          sidebarCollapsed={collapsed}
          onToggleSidebar={() => setCollapsed((v) => !v)}
        />
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-line bg-background px-4 lg:hidden">
          <span className="text-sm font-medium tracking-tight text-foreground">Tableau de bord</span>
          <div className="flex items-center gap-2">
            <ThemeToggle className="h-9 rounded-[4px] border border-line px-3 font-mono text-[11px] uppercase tracking-wide" />
            <Link href="/" className="ds-link-quiet font-mono text-[11px] uppercase tracking-wide">
              Vitrine
            </Link>
          </div>
        </header>
        <div className="border-b border-line lg:hidden">
          <DashboardNav variant="bar" />
        </div>
        <main
          className="flex-1 px-5 py-8 md:px-10 md:py-10 lg:px-14"
          style={{ background: "var(--background)" }}
        >
          <div className="mx-auto max-w-[1180px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
