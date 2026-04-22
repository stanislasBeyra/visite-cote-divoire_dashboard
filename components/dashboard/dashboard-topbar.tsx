"use client";

import * as React from "react";
import { Bell, ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";

const themeStorageKey = "abj-theme";

/** Bascule thème via data-theme sur <html>. */
function ThemeIconToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const stored = window.localStorage.getItem(themeStorageKey);
    const nextTheme =
      stored === "dark" || stored === "light"
        ? stored
        : document.documentElement.getAttribute("data-theme") === "dark"
          ? "dark"
          : "light";
    requestAnimationFrame(() => {
      setTheme(nextTheme);
    });
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    root.classList.toggle("dark", next === "dark");
    window.localStorage.setItem(themeStorageKey, next);
    setTheme(next === "dark" ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-foreground"
      aria-label="Basculer le thème"
      title={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
    >
      {theme === "dark" ? <Sun size={16} strokeWidth={1.4} /> : <Moon size={16} strokeWidth={1.4} />}
    </button>
  );
}

export function DashboardTopbar({
  sidebarCollapsed,
  onToggleSidebar,
}: {
  sidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
}) {
  const pathname = usePathname();
  const [notifOpen, setNotifOpen] = React.useState(false);
  const notifRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!notifRef.current?.contains(event.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

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
      <div className="flex min-w-0 items-center gap-2">
        {onToggleSidebar ? (
          <button
            type="button"
            onClick={onToggleSidebar}
            className="flex h-8 w-8 shrink-0 items-center justify-center text-muted transition-colors hover:text-foreground"
            aria-label={sidebarCollapsed ? "Ouvrir la sidebar" : "Replier la sidebar"}
            title={sidebarCollapsed ? "Ouvrir la sidebar" : "Replier la sidebar"}
          >
            {sidebarCollapsed ? (
              <ChevronRight size={16} strokeWidth={1.4} />
            ) : (
              <ChevronLeft size={16} strokeWidth={1.4} />
            )}
          </button>
        ) : null}
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
      </div>

      {/* Actions droite */}
      <div className="flex shrink-0 items-center gap-0.5">
        {/* Icône lune */}
        <ThemeIconToggle />

        {/* Cloche */}
        <div ref={notifRef} className="relative">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-foreground"
            aria-label="Notifications"
            aria-expanded={notifOpen}
            aria-haspopup="menu"
            onClick={() => setNotifOpen((v) => !v)}
          >
            <Bell size={16} strokeWidth={1.4} />
          </button>
          {notifOpen ? (
            <div
              role="menu"
              className="absolute right-0 top-10 z-30 w-[300px] rounded-[14px] border border-line bg-surface p-3"
            >
              <p className="px-2 pb-2 text-xs font-medium text-muted">Notifications</p>
              <ul className="divide-y divide-line">
                <li className="px-2 py-2 text-[13px] text-foreground">3 paiements a verifier (depuis 10 min)</li>
                <li className="px-2 py-2 text-[13px] text-foreground">Nouveau signalement critique recu</li>
                <li className="px-2 py-2 text-[13px] text-muted">Export analytics termine avec succes</li>
              </ul>
            </div>
          ) : null}
        </div>

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
