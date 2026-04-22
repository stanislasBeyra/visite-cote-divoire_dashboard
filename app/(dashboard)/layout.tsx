import Link from "next/link";
import { ExternalLink, HelpCircle, Search, Settings } from "lucide-react";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full" style={{ background: "var(--background)" }}>
      <aside className="sticky top-0 hidden h-screen w-[248px] shrink-0 flex-col border-r border-line md:flex">
        <div className="flex gap-3 border-b border-line px-5 py-6">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-line font-serif text-lg italic text-foreground"
            style={{ borderRadius: "var(--radius-sm, 7px)" }}
            aria-hidden
          >
            A
          </div>
          <div className="min-w-0">
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
        </div>
        <div className="border-b border-line px-4 py-3">
          <label className="sr-only" htmlFor="dash-sidebar-search">
            Rechercher dans l’administration
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">
              <Search size={14} strokeWidth={1.4} />
            </span>
            <input
              id="dash-sidebar-search"
              type="search"
              placeholder="Lieux, réservations…"
              className="w-full border border-line bg-background py-2 pl-9 pr-3 text-[13px] text-foreground outline-none transition-[border-color] duration-[180ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] placeholder:text-faint focus:border-foreground/25"
              style={{ borderRadius: "var(--radius-sm, 7px)" }}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <DashboardNav />
        </div>
        <div className="mt-auto space-y-1 border-t border-line px-3 py-3">
          <Link
            href="/dashboard/parametres"
            className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-muted transition-colors hover:bg-hover hover:text-foreground"
            style={{ borderRadius: "var(--radius-sm, 7px)" }}
          >
            <Settings size={15} strokeWidth={1.4} />
            Paramètres
          </Link>
          <Link
            href="/dashboard/aide"
            className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-muted transition-colors hover:bg-hover hover:text-foreground"
            style={{ borderRadius: "var(--radius-sm, 7px)" }}
          >
            <HelpCircle size={15} strokeWidth={1.4} />
            Aide
          </Link>
          <Link
            href="/"
            className="ds-link-quiet flex items-center gap-2.5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em]"
          >
            <ExternalLink size={13} strokeWidth={1.4} />
            Vitrine publique
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopbar />
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
