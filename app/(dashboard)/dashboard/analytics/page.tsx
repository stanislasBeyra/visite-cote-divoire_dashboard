import type { Metadata } from "next";
import { DashboardChannels } from "@/components/dashboard/dashboard-channels";
import { DashboardRevenueChart } from "@/components/dashboard/dashboard-revenue-chart";
import {
  dashboardChannels,
  dashboardRevenueSeriesA,
  dashboardRevenueSeriesB,
} from "@/lib/dashboard-mock";

export const metadata: Metadata = {
  title: "Performance",
};

const analyticsKpis = [
  { label: "Sessions (30 j)", value: "68 912", hint: "+8,4% vs periode precedente" },
  { label: "Taux conversion global", value: "4,2%", hint: "+0,5 pt en 30 j" },
  { label: "CPA moyen", value: "2 840 FCFA", hint: "-9% vs trimestre dernier" },
  { label: "Revenu / session", value: "1 864 FCFA", hint: "+6,1% apres optimisation tunnel" },
] as const;

const funnel = [
  { etape: "Visite page offre", volume: "68 912", taux: "100%" },
  { etape: "Ajout panier", volume: "18 274", taux: "26,5%" },
  { etape: "Demarrage paiement", volume: "7 820", taux: "11,3%" },
  { etape: "Reservation confirmee", volume: "2 892", taux: "4,2%" },
] as const;

export default function DashboardAnalyticsPage() {
  return (
    <section className="space-y-8">
      <div className="border-b border-line pb-5">
        <span className="ds-eyebrow">Performance</span>
        <h1 className="mt-3 text-[28px] font-medium tracking-[-0.03em] text-foreground">
          Vue analytique
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          Analyse des revenus, canaux d acquisition et conversion par etape du
          tunnel de reservation.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {analyticsKpis.map((kpi) => (
          <article key={kpi.label} className="rounded-[4px] border border-line bg-surface px-5 pb-4 pt-5">
            <p className="text-xs font-medium text-muted">{kpi.label}</p>
            <p className="mt-2 text-[30px] font-medium tracking-[-0.028em] text-foreground">{kpi.value}</p>
            <p className="mt-2 text-[11.5px] text-muted">{kpi.hint}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <DashboardRevenueChart
          seriesA={dashboardRevenueSeriesA}
          seriesB={dashboardRevenueSeriesB}
        />
        <DashboardChannels channels={dashboardChannels} />
      </div>

      <div className="rounded-[4px] border border-line bg-surface p-5">
        <h2 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Tunnel de conversion</h2>
        <div
          className="mono mt-3 grid gap-x-4 border-b border-line pb-2 text-[11px] uppercase tracking-[0.06em] text-muted"
          style={{ gridTemplateColumns: "minmax(0,1.8fr) minmax(0,0.8fr) minmax(0,0.6fr)" }}
        >
          <span>Etape</span>
          <span className="text-right">Volume</span>
          <span className="text-right">Taux</span>
        </div>
        <div className="divide-y divide-line">
          {funnel.map((row) => (
            <div
              key={row.etape}
              className="grid items-center gap-x-4 py-3 text-[13px]"
              style={{ gridTemplateColumns: "minmax(0,1.8fr) minmax(0,0.8fr) minmax(0,0.6fr)" }}
            >
              <span className="text-foreground">{row.etape}</span>
              <span className="mono text-right text-muted">{row.volume}</span>
              <span className="mono text-right text-foreground">{row.taux}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
