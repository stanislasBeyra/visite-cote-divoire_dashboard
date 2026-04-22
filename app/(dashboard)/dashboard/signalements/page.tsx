import type { Metadata } from "next";
import Link from "next/link";
import { dashboardAlerts } from "@/lib/dashboard-mock";

export const metadata: Metadata = {
  title: "Modération",
};

type SignalementsSearchParams = {
  q?: string;
  severite?: string;
  assign?: string;
};

const moderationKpis = [
  { label: "Signalements ouverts", value: "12", hint: "3 critiques, 9 standard" },
  { label: "Temps moyen de traitement", value: "38 min", hint: "-11 min vs semaine precedente" },
  { label: "Taux de resolution", value: "96%", hint: "SLA 24 h respecte" },
  { label: "Elements bloques", value: "4", hint: "En attente validation equipe legale" },
] as const;

const queue = [
  { id: "SIG-1842", source: "Avis lieu", sujet: "Contenu injurieux", severite: "Critique", age: "3 min" },
  { id: "SIG-1841", source: "Photo experience", sujet: "Image non conforme", severite: "Haute", age: "12 min" },
  { id: "SIG-1840", source: "Commentaire", sujet: "Spam commercial", severite: "Moyenne", age: "28 min" },
  { id: "SIG-1839", source: "Profil pro", sujet: "Coordonnees invalides", severite: "Basse", age: "1 h" },
] as const;

export default async function DashboardSignalementsPage({
  searchParams,
}: {
  searchParams?: Promise<SignalementsSearchParams>;
}) {
  const resolved = (await searchParams) ?? {};
  const query = (resolved.q ?? "").trim().toLowerCase();
  const severite = resolved.severite ?? "all";
  const showAssign = resolved.assign === "1";

  const filteredQueue = queue.filter((row) => {
    const matchQuery =
      query.length === 0 ||
      row.id.toLowerCase().includes(query) ||
      row.source.toLowerCase().includes(query) ||
      row.sujet.toLowerCase().includes(query);
    const matchSeverite =
      severite === "all" || row.severite.toLowerCase() === severite.toLowerCase();
    return matchQuery && matchSeverite;
  });

  const allHref = query ? `?q=${encodeURIComponent(query)}&severite=all` : "?severite=all";
  const criticalHref = query
    ? `?q=${encodeURIComponent(query)}&severite=Critique`
    : "?severite=Critique";
  const assignHref = `?q=${encodeURIComponent(query)}&severite=${encodeURIComponent(severite)}&assign=1`;
  const closeAssignHref = `?q=${encodeURIComponent(query)}&severite=${encodeURIComponent(severite)}`;

  return (
    <section className="space-y-8">
      <div className="border-b border-line pb-5">
        <span className="ds-eyebrow">Modération</span>
        <h1 className="mt-3 text-[28px] font-medium tracking-[-0.03em] text-foreground">
          File de moderation
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          Centralise les signalements utilisateurs, priorise les incidents et suit
          les delais de traitement de l equipe moderation.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {moderationKpis.map((kpi) => (
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
            <h2 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Signalements a traiter</h2>
            <p className="mt-1 text-xs text-muted">Tri par severite et anciennete.</p>
          </div>
          <div className="flex items-center gap-2">
            <form method="get">
              <input
                type="search"
                name="q"
                defaultValue={resolved.q ?? ""}
                placeholder="Rechercher ID ou sujet"
                className="w-[220px] rounded-[4px] border border-line bg-background px-3 py-1.5 text-xs text-foreground outline-none placeholder:text-faint"
              />
            </form>
            <Link
              href={allHref}
              className="rounded-[4px] border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
            >
              Tous
            </Link>
            <Link
              href={criticalHref}
              className="rounded-[4px] border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
            >
              Critiques
            </Link>
            <Link
              href={assignHref}
              className="rounded-[4px] border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
            >
              Assigner equipe
            </Link>
          </div>
        </div>

        {showAssign ? (
          <div className="mb-4 rounded-[4px] border border-line bg-background p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-foreground">Affectation en cours</p>
                <p className="mt-1 text-xs text-muted">
                  Prototype: les tickets filtres sont prets a etre assignes a un moderateur.
                </p>
              </div>
              <Link href={closeAssignHref} className="text-xs text-muted hover:text-foreground">
                Fermer
              </Link>
            </div>
          </div>
        ) : null}
        <div
          className="mono grid gap-x-4 border-b border-line pb-2 text-[11px] uppercase tracking-[0.06em] text-muted"
          style={{ gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1fr) minmax(0,1.8fr) minmax(0,0.8fr) minmax(0,0.6fr)" }}
        >
          <span>ID</span>
          <span>Source</span>
          <span>Sujet</span>
          <span>Severite</span>
          <span className="text-right">Age</span>
        </div>
        <div className="divide-y divide-line">
          {filteredQueue.map((row) => (
            <div
              key={row.id}
              className="grid items-center gap-x-4 py-3 text-[13px]"
              style={{ gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1fr) minmax(0,1.8fr) minmax(0,0.8fr) minmax(0,0.6fr)" }}
            >
              <span className="mono text-muted">{row.id}</span>
              <span className="text-muted">{row.source}</span>
              <span className="truncate text-foreground">{row.sujet}</span>
              <span className="text-foreground">{row.severite}</span>
              <span className="mono text-right text-muted">{row.age}</span>
            </div>
          ))}
          {filteredQueue.length === 0 ? (
            <p className="py-5 text-sm text-muted">Aucun signalement pour ces filtres.</p>
          ) : null}
        </div>
      </div>

      <div className="rounded-[4px] border border-line bg-surface p-5">
        <h3 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Rappels automatiques</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {dashboardAlerts.map((a) => (
            <li key={a.id}>{a.text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
