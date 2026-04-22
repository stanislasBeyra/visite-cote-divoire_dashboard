import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Promotions",
};

const promoKpis = [
  { label: "Campagnes actives", value: "9", hint: "3 e-mail, 2 push, 4 codes promo" },
  { label: "CA attribue", value: "18,2 M FCFA", hint: "+14% sur 30 jours" },
  { label: "Taux redemption", value: "22,4%", hint: "Moyenne secteur: 18%" },
  { label: "ROAS", value: "4,8x", hint: "Budget ads: 3,1 M FCFA" },
] as const;

const campaigns = [
  { nom: "Weekend Grand-Bassam", canal: "Push + E-mail", statut: "Actif", cvr: "6,2%", ca: "4,9 M FCFA" },
  { nom: "Early booking Assinie", canal: "Code promo", statut: "Actif", cvr: "4,1%", ca: "2,7 M FCFA" },
  { nom: "Pack famille Yamoussoukro", canal: "Landing + Ads", statut: "Planifie", cvr: "-", ca: "-" },
  { nom: "Relance paniers abandonnes", canal: "Automation", statut: "Actif", cvr: "9,3%", ca: "1,4 M FCFA" },
] as const;

export default function DashboardOffresPage() {
  return (
    <section className="space-y-8">
      <div className="border-b border-line pb-5">
        <span className="ds-eyebrow">Promotions</span>
        <h1 className="mt-3 text-[28px] font-medium tracking-[-0.03em] text-foreground">
          Campagnes et offres
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          Supervise les campagnes acquisition/fidelisation et la performance des
          offres commerciales de la plateforme.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {promoKpis.map((kpi) => (
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
            <h2 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Campagnes en cours</h2>
            <p className="mt-1 text-xs text-muted">Performance par canal et statut d execution.</p>
          </div>
          <button
            type="button"
            className="rounded-[4px] border border-line bg-foreground px-3 py-1.5 text-xs text-background"
          >
            + Nouvelle campagne
          </button>
        </div>

        <div
          className="mono grid gap-x-4 border-b border-line pb-2 text-[11px] uppercase tracking-[0.06em] text-muted"
          style={{ gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1.1fr) minmax(0,0.8fr) minmax(0,0.7fr) minmax(0,0.8fr)" }}
        >
          <span>Campagne</span>
          <span>Canal</span>
          <span>Statut</span>
          <span className="text-right">CVR</span>
          <span className="text-right">CA</span>
        </div>
        <div className="divide-y divide-line">
          {campaigns.map((row) => (
            <div
              key={row.nom}
              className="grid items-center gap-x-4 py-3 text-[13px]"
              style={{ gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1.1fr) minmax(0,0.8fr) minmax(0,0.7fr) minmax(0,0.8fr)" }}
            >
              <span className="truncate text-foreground">{row.nom}</span>
              <span className="text-muted">{row.canal}</span>
              <span className="text-muted">{row.statut}</span>
              <span className="mono text-right text-foreground">{row.cvr}</span>
              <span className="mono text-right text-foreground">{row.ca}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[4px] border border-line bg-surface p-5">
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Top codes promo</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>VISITCI15 - 1 284 utilisations</li>
            <li>ASSINIE10 - 904 utilisations</li>
            <li>FAMILY20 - 612 utilisations</li>
          </ul>
        </div>
        <div className="rounded-[4px] border border-line bg-surface p-5">
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Actions recommandees</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Etendre la campagne panier abandonne a WhatsApp.</li>
            <li>Creer une offre package basse saison.</li>
            <li>Revoir le plafond de reduction sur premium.</li>
          </ul>
        </div>
      </div>

      <div>
        <Link
          href="/dashboard"
          className="mono inline-flex rounded-[4px] border border-line px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-foreground"
        >
          Retour a la vue d&apos;ensemble
        </Link>
      </div>
    </section>
  );
}
