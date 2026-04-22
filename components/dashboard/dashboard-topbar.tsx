"use client";

import * as React from "react";
import { Bell, Moon } from "lucide-react";
import { usePathname } from "next/navigation";

/** Bascule thème via data-theme sur <html>. */
function ThemeIconToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    root.classList.toggle("dark", next === "dark");
  };
  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-foreground"
      aria-label="Basculer le thème"
    >
      <Moon size={16} strokeWidth={1.4} />
    </button>
  );
}

export function DashboardTopbar() {
  const pathname = usePathname();
  const current = React.useMemo(() => {
    const labelByPath: Record<string, string> = {
      "/dashboard": "Vue d'ensemble",
      "/dashboard/analytics": "Performance",
      "/dashboard/commandes": "Transactions",
      "/dashboard/catalogue": "Catalogue",
      "/dashboard/clients": "Visiteurs",
      "/dashboard/offres": "Promotions",
      "/dashboard/signalements": "Modération",
      "/dashboard/parametres": "Paramètres",
      "/dashboard/aide": "Aide",
    };
    return labelByPath[pathname] ?? "Vue d'ensemble";
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-20 hidden h-14 shrink-0 items-center justify-between border-b border-line lg:flex"
      style={{ background: "var(--background)", padding: "0 32px" }}
    >
      {/* Breadcrumb — "TABLEAU DE BORD / section active" */}
      <nav aria-label="Fil d'Ariane" className="flex items-center gap-0 min-w-0">
        <span
          className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted"
        >
          Tableau de bord
        </span>
        <span className="mx-2.5 text-[11px] text-muted opacity-50" aria-hidden>
          /
        </span>
        <span className="text-[13px] font-medium tracking-[-0.01em] text-foreground">
          {current}
        </span>
      </nav>

      {/* Actions droite */}
      <div className="flex shrink-0 items-center gap-0.5">
        {/* Icône lune */}
        <ThemeIconToggle />

        {/* Cloche */}
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell size={16} strokeWidth={1.4} />
        </button>

        {/* Séparateur */}
        <span className="mx-2.5 h-4 w-px bg-line" aria-hidden />

        {/* Avatar + identité */}
        <div className="flex items-center gap-2.5">
          {/* Cercle initiales — fond fg, texte bg */}
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center bg-foreground font-mono text-[11px] font-medium uppercase text-background"
            style={{ borderRadius: "50%" }}
            aria-hidden
          >
            IJ
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[13px] font-medium tracking-tight text-foreground">
              Invité démo
            </p>
            <p className="mono truncate text-[11px] text-muted">
              admin@visit.ci
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
