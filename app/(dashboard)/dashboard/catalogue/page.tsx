import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catalogue",
};

const catalogueKpis = [
  { label: "Fiches actives", value: "128", hint: "18 destinations, 39 hebergements, 71 experiences" },
  { label: "En relecture", value: "6", hint: "Validation editoriale en attente" },
  { label: "Brouillons", value: "14", hint: "Derniere mise a jour il y a 2 h" },
  { label: "Taux de completion", value: "92%", hint: "Moyenne media + SEO + tarifs" },
] as const;

const catalogueRows = [
  {
    nom: "Assinie Escape Resort",
    type: "Hebergement",
    zone: "Assinie",
    statut: "Publiee",
    score: "96%",
    maj: "il y a 28 min",
  },
  {
    nom: "Circuit historique Grand-Bassam",
    type: "Experience",
    zone: "Grand-Bassam",
    statut: "En relecture",
    score: "88%",
    maj: "il y a 1 h",
  },
  {
    nom: "Parc National de Tai",
    type: "Destination",
    zone: "Tai",
    statut: "Publiee",
    score: "93%",
    maj: "il y a 3 h",
  },
  {
    nom: "Rooftop Plateau Horizon",
    type: "Experience",
    zone: "Abidjan Plateau",
    statut: "Brouillon",
    score: "64%",
    maj: "hier",
  },
  {
    nom: "Villa Kafolo",
    type: "Hebergement",
    zone: "Korhogo",
    statut: "Publiee",
    score: "90%",
    maj: "hier",
  },
] as const;

function statusClass(status: (typeof catalogueRows)[number]["statut"]) {
  if (status === "Publiee") return "text-foreground";
  if (status === "En relecture") return "text-muted";
  return "text-faint";
}

export default function DashboardCataloguePage() {
  return (
    <section className="space-y-8">
      <div className="border-b border-line pb-5">
        <span className="ds-eyebrow">Catalogue</span>
        <h1 className="mt-3 text-[28px] font-medium tracking-[-0.03em] text-foreground">
          Gestion du catalogue
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          Pilote les fiches lieux, hebergements et experiences de la vitrine.
          Controle la qualite des contenus, l etat de publication et la completion
          des donnees editoriales.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {catalogueKpis.map((kpi) => (
          <article
            key={kpi.label}
            className="rounded-[4px] border border-line bg-surface px-5 pb-4 pt-5"
          >
            <p className="text-xs font-medium text-muted">{kpi.label}</p>
            <p className="mt-2 text-[30px] font-medium tracking-[-0.028em] text-foreground">
              {kpi.value}
            </p>
            <p className="mt-2 text-[11.5px] leading-snug text-muted">{kpi.hint}</p>
          </article>
        ))}
      </div>

      <div className="rounded-[4px] border border-line bg-surface p-5">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
              Fiches catalogue
            </h2>
            <p className="mt-1 text-xs text-muted">
              Vue operationnelle des contenus publies et en cours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="rounded-[4px] border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-foreground"
            >
              Tous
            </button>
            <button
              type="button"
              className="rounded-[4px] border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-foreground"
            >
              A relire
            </button>
            <button
              type="button"
              className="rounded-[4px] border border-line bg-foreground px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-background"
            >
              + Nouvelle fiche
            </button>
          </div>
        </div>

        <div
          className="mono grid gap-x-4 border-b border-line pb-2 text-[11px] uppercase tracking-[0.06em] text-muted"
          style={{
            gridTemplateColumns:
              "minmax(0,1.8fr) minmax(0,1fr) minmax(0,1fr) minmax(0,0.9fr) minmax(0,0.8fr) minmax(0,0.8fr)",
          }}
        >
          <span>Nom</span>
          <span>Type</span>
          <span>Zone</span>
          <span>Statut</span>
          <span className="text-right">Score</span>
          <span className="text-right">Maj</span>
        </div>

        <div className="divide-y divide-line">
          {catalogueRows.map((row) => (
            <div
              key={row.nom}
              className="grid items-center gap-x-4 py-3 text-[13px]"
              style={{
                gridTemplateColumns:
                  "minmax(0,1.8fr) minmax(0,1fr) minmax(0,1fr) minmax(0,0.9fr) minmax(0,0.8fr) minmax(0,0.8fr)",
              }}
            >
              <span className="truncate text-foreground">{row.nom}</span>
              <span className="text-muted">{row.type}</span>
              <span className="text-muted">{row.zone}</span>
              <span className={`inline-flex items-center gap-1.5 ${statusClass(row.statut)}`}>
                <span className="h-1.5 w-1.5 rounded-[4px] bg-current opacity-80" aria-hidden />
                {row.statut}
              </span>
              <span className="mono text-right text-foreground">{row.score}</span>
              <span className="mono text-right text-muted">{row.maj}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[4px] border border-line bg-surface p-5">
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
            Checklist qualite
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>92% des fiches ont au moins 6 medias valides</li>
            <li>11 fiches sans prix saisonnier a completer</li>
            <li>4 fiches sans balises SEO longues</li>
          </ul>
        </div>
        <div className="rounded-[4px] border border-line bg-surface p-5">
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
            Actions rapides
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-[4px] border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
            >
              Import CSV
            </button>
            <button
              type="button"
              className="rounded-[4px] border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
            >
              Export JSON
            </button>
            <button
              type="button"
              className="rounded-[4px] border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
            >
              Assigner relecteurs
            </button>
          </div>
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
