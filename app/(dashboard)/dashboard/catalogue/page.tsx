import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catalogue",
};

type CatalogueSearchParams = {
  q?: string;
  statut?: string;
  create?: string;
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

export default async function DashboardCataloguePage({
  searchParams,
}: {
  searchParams?: Promise<CatalogueSearchParams>;
}) {
  const resolved = (await searchParams) ?? {};
  const query = (resolved.q ?? "").trim().toLowerCase();
  const statut = resolved.statut ?? "all";
  const showCreate = resolved.create === "1";

  const filteredRows = catalogueRows.filter((row) => {
    const matchQuery =
      query.length === 0 ||
      row.nom.toLowerCase().includes(query) ||
      row.zone.toLowerCase().includes(query) ||
      row.type.toLowerCase().includes(query);
    const matchStatut = statut === "all" || row.statut === statut;
    return matchQuery && matchStatut;
  });

  const allHref = query ? `?q=${encodeURIComponent(query)}&statut=all` : "?statut=all";
  const reviewHref = query
    ? `?q=${encodeURIComponent(query)}&statut=${encodeURIComponent("En relecture")}`
    : `?statut=${encodeURIComponent("En relecture")}`;
  const createHref = `?q=${encodeURIComponent(query)}&statut=${encodeURIComponent(statut)}&create=1`;
  const closeCreateHref = `?q=${encodeURIComponent(query)}&statut=${encodeURIComponent(statut)}`;

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
            <form method="get" className="mr-1">
              <input
                type="search"
                name="q"
                defaultValue={resolved.q ?? ""}
                placeholder="Rechercher fiche ou zone"
                className="w-[220px] rounded-[4px] border border-line bg-background px-3 py-1.5 text-xs text-foreground outline-none placeholder:text-faint"
              />
            </form>
            <Link
              href={allHref}
              className="rounded-[4px] border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-foreground"
            >
              Tous
            </Link>
            <Link
              href={reviewHref}
              className="rounded-[4px] border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-foreground"
            >
              A relire
            </Link>
            <Link
              href={createHref}
              className="rounded-[4px] border border-line bg-foreground px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-background"
            >
              + Nouvelle fiche
            </Link>
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
          {filteredRows.map((row) => (
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
          {filteredRows.length === 0 ? (
            <p className="py-5 text-sm text-muted">Aucun resultat pour ce filtre.</p>
          ) : null}
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

      {showCreate ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Link
            href={closeCreateHref}
            className="absolute inset-0 bg-foreground/45"
            aria-label="Fermer le modal"
          />
          <div className="relative w-full max-w-xl rounded-[14px] border border-line bg-surface p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[16px] font-medium tracking-[-0.01em] text-foreground">Nouvelle fiche catalogue</p>
                <p className="mt-1 text-xs text-muted">
                  Cree une fiche destination, hebergement ou experience.
                </p>
              </div>
              <Link href={closeCreateHref} className="text-xs text-muted hover:text-foreground">
                Fermer
              </Link>
            </div>
            <div className="mt-4 grid gap-2 md:grid-cols-3">
              <input className="rounded-[4px] border border-line bg-background px-3 py-2 text-xs" placeholder="Nom de la fiche" />
              <input className="rounded-[4px] border border-line bg-background px-3 py-2 text-xs" placeholder="Type" />
              <input className="rounded-[4px] border border-line bg-background px-3 py-2 text-xs" placeholder="Zone" />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Link
                href={closeCreateHref}
                className="rounded-[4px] border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
              >
                Annuler
              </Link>
              <button
                type="button"
                className="rounded-[4px] border border-line bg-foreground px-3 py-1.5 text-xs text-background"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
