"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

const ranges = ["7 j", "30 j", "90 j", "12 m", "Personnalisé"] as const;

export function DashboardToolbar() {
  const [active, setActive] = React.useState<(typeof ranges)[number]>("30 j");

  return (
    <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0 space-y-2">
        <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">Mercredi 22 avril 2026</p>
        <h1 className="text-[26px] font-medium tracking-[-0.03em] text-foreground md:text-[28px]">
          Bonjour, équipe{" "}
          <span className="font-serif text-[0.96em] italic font-normal text-muted">
            voici où en est le dashboard aujourd’hui
          </span>
        </h1>
        <p className="text-sm text-muted">
          Synthèse des réservations et du trafic — données de démonstration.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {ranges.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setActive(r)}
            className={cn(
              "rounded-[2px] border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors duration-[180ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]",
              active === r
                ? "border-foreground bg-foreground text-background"
                : "border-line text-muted hover:border-foreground/40 hover:text-foreground",
            )}
          >
            {r}
          </button>
        ))}
        <button
          type="button"
          className="ml-1 rounded-[2px] border border-line bg-surface px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-hover"
        >
          Exporter
        </button>
      </div>
    </div>
  );
}
