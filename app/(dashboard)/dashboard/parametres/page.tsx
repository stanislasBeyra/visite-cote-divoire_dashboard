import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parametres",
};

const paramKpis = [
  { label: "Utilisateurs actifs", value: "24", hint: "8 admins, 11 editeurs, 5 support" },
  { label: "Integrations connectees", value: "7", hint: "Paiement, CRM, analytics, e-mail" },
  { label: "Webhooks valides", value: "19", hint: "0 erreur critique sur 24 h" },
  { label: "Derniere sauvegarde", value: "02:14", hint: "Backup quotidien automatise" },
] as const;

const settingsRows = [
  { domaine: "Securite", item: "MFA obligatoire administrateurs", etat: "Actif" },
  { domaine: "Contenu", item: "Double validation publication", etat: "Actif" },
  { domaine: "Notifications", item: "Alerte SLA moderation", etat: "Actif" },
  { domaine: "Paiement", item: "Seuil verification KYC", etat: "A revoir" },
] as const;

export default function DashboardParametresPage() {
  return (
    <section className="space-y-8">
      <div className="border-b border-line pb-5">
        <span className="ds-eyebrow">Parametres</span>
        <h1 className="mt-3 text-[28px] font-medium tracking-[-0.03em] text-foreground">
          Configuration
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          Regle les acces, politiques de publication, integrations et automatisations
          techniques de la plateforme.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {paramKpis.map((kpi) => (
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
            <h2 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Policies</h2>
            <p className="mt-1 text-xs text-muted">Etat des regles systeme et conformite.</p>
          </div>
          <button
            type="button"
            className="rounded-full border border-line bg-foreground px-3 py-1.5 text-xs text-background"
          >
            Sauvegarder les changements
          </button>
        </div>

        <div
          className="mono grid gap-x-4 border-b border-line pb-2 text-[11px] uppercase tracking-[0.06em] text-muted"
          style={{ gridTemplateColumns: "minmax(0,1fr) minmax(0,2fr) minmax(0,0.8fr)" }}
        >
          <span>Domaine</span>
          <span>Parametre</span>
          <span>Etat</span>
        </div>
        <div className="divide-y divide-line">
          {settingsRows.map((row) => (
            <div
              key={row.item}
              className="grid gap-x-4 py-3 text-[13px]"
              style={{ gridTemplateColumns: "minmax(0,1fr) minmax(0,2fr) minmax(0,0.8fr)" }}
            >
              <span className="text-muted">{row.domaine}</span>
              <span className="text-foreground">{row.item}</span>
              <span className="text-muted">{row.etat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[4px] border border-line bg-surface p-5">
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Acces rapides</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">Roles</button>
            <button type="button" className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">API keys</button>
            <button type="button" className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">Webhooks</button>
          </div>
        </div>
        <div className="rounded-[4px] border border-line bg-surface p-5">
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Audit</h3>
          <p className="mt-2 text-sm text-muted">Dernier export journal securite: aujourd hui 08:12.</p>
          <p className="text-sm text-muted">Prochaine rotation secrets: dans 9 jours.</p>
        </div>
      </div>

     
    </section>
  );
}
