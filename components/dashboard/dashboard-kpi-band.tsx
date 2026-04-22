import type { ReactNode } from "react";
import type { DashboardKpi } from "@/lib/dashboard-mock";
import { Sparkline } from "@/components/dashboard/sparkline";

/** Chip delta — même style que Dashboard.html (fond chip, pas de bordure, mono). */
function DeltaChip({ up, children }: { up: boolean; children: ReactNode }) {
  return (
    <span
      className="mono inline-flex items-center gap-0.5 bg-chip text-[11.5px] text-foreground"
      style={{ padding: "2px 7px 2px 5px", borderRadius: 20 }}
    >
      {up ? (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path d="M5 2 L8 7 L2 7 Z" fill="currentColor" />
        </svg>
      ) : (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path d="M5 8 L8 3 L2 3 Z" fill="currentColor" />
        </svg>
      )}
      {children}
    </span>
  );
}

export function DashboardKpiBand({ items }: { items: DashboardKpi[] }) {
  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-[4px] border border-line bg-surface xl:grid-cols-4">
      {items.map((k) => (
        <div
          key={k.id}
          className="border-b border-line last:border-b-0 xl:border-b-0 xl:border-r xl:last:border-r-0"
          style={{ padding: "22px 22px 18px 22px" }}
        >
          {/* Ligne 1 : label */}
          <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 12, fontWeight: 500 }}>
            {k.label}
          </p>

          {/* Ligne 2 : valeur + chip delta — même ligne, baseline alignée */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 10,
              marginBottom: 10,
              flexWrap: "nowrap",
            }}
          >
            <span
              style={{
                fontSize: 30,
                fontWeight: 500,
                letterSpacing: "-0.028em",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              {k.value}
            </span>
            <DeltaChip up={k.deltaUp}>{k.delta}</DeltaChip>
          </div>

          {/* Ligne 3 : sous-texte gauche + sparkline droite */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <p style={{ fontSize: 11.5, color: "var(--muted)", lineHeight: 1.4 }}>{k.sub}</p>
            <Sparkline values={k.spark} />
          </div>
        </div>
      ))}
    </div>
  );
}
