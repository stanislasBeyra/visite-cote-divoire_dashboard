import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visiteurs",
};

const clientKpis = [
  { label: "Visiteurs uniques (30 j)", value: "68 912", hint: "+8,4% vs periode precedente" },
  { label: "Comptes crees", value: "1 128", hint: "Taux activation 74%" },
  { label: "Clients recurrents", value: "32%", hint: "Objectif trimestriel 35%" },
  { label: "NPS moyen", value: "4,6 / 5", hint: "2 984 avis verifies" },
] as const;

const topSegments = [
  { segment: "Explorateurs weekend", users: "12 430", conversion: "4,8%", panier: "42 500 FCFA" },
  { segment: "Voyageurs premium", users: "5 240", conversion: "7,1%", panier: "116 000 FCFA" },
  { segment: "Familles", users: "8 902", conversion: "3,9%", panier: "58 400 FCFA" },
  { segment: "Business / MICE", users: "2 110", conversion: "6,3%", panier: "92 700 FCFA" },
] as const;

export default function DashboardClientsPage() {
  return (
    <section className="space-y-8">
      <div className="border-b border-line pb-5">
        <span className="ds-eyebrow">Visiteurs</span>
        <h1 className="mt-3 text-[28px] font-medium tracking-[-0.03em] text-foreground">
          Suivi des visiteurs
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          Vue CRM et analytics des profils clients, segments de valeur et
          recurrance des reservations.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {clientKpis.map((kpi) => (
          <article key={kpi.label} className="rounded-[4px] border border-line bg-surface px-5 pb-4 pt-5">
            <p className="text-xs font-medium text-muted">{kpi.label}</p>
            <p className="mt-2 text-[30px] font-medium tracking-[-0.028em] text-foreground">{kpi.value}</p>
            <p className="mt-2 text-[11.5px] text-muted">{kpi.hint}</p>
          </article>
        ))}
      </div>

      <div className="rounded-[4px] border border-line bg-surface p-5">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Segments prioritaires</h2>
            <p className="mt-1 text-xs text-muted">Volume, conversion et panier moyen par audience.</p>
          </div>
          <button
            type="button"
            className="rounded-[4px] border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
          >
            Export CRM
          </button>
        </div>
        <div
          className="mono grid gap-x-4 border-b border-line pb-2 text-[11px] uppercase tracking-[0.06em] text-muted"
          style={{ gridTemplateColumns: "minmax(0,1.6fr) minmax(0,0.8fr) minmax(0,0.8fr) minmax(0,0.9fr)" }}
        >
          <span>Segment</span>
          <span className="text-right">Utilisateurs</span>
          <span className="text-right">Conversion</span>
          <span className="text-right">Panier</span>
        </div>
        <div className="divide-y divide-line">
          {topSegments.map((row) => (
            <div
              key={row.segment}
              className="grid items-center gap-x-4 py-3 text-[13px]"
              style={{ gridTemplateColumns: "minmax(0,1.6fr) minmax(0,0.8fr) minmax(0,0.8fr) minmax(0,0.9fr)" }}
            >
              <span className="truncate text-foreground">{row.segment}</span>
              <span className="mono text-right text-muted">{row.users}</span>
              <span className="mono text-right text-foreground">{row.conversion}</span>
              <span className="mono text-right text-foreground">{row.panier}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[4px] border border-line bg-surface p-5">
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Retention</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>J+7 : 41%</li>
            <li>J+30 : 24%</li>
            <li>J+90 : 11%</li>
          </ul>
        </div>
        <div className="rounded-[4px] border border-line bg-surface p-5">
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Actions recommandees</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Lancer une relance e-mail sur les paniers abandonnes.</li>
            <li>Augmenter l offre premium sur le segment weekend.</li>
            <li>A/B test du tunnel mobile pour les familles.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
