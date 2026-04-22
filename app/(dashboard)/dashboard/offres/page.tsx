import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Promotions",
};

type OffresSearchParams = {
  q?: string;
  statut?: string;
  create?: string;
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

export default async function DashboardOffresPage({
  searchParams,
}: {
  searchParams?: Promise<OffresSearchParams>;
}) {
  const resolved = (await searchParams) ?? {};
  const query = (resolved.q ?? "").trim().toLowerCase();
  const statut = resolved.statut ?? "all";
  const showCreate = resolved.create === "1";

  const filteredRows = campaigns.filter((row) => {
    const matchQuery =
      query.length === 0 ||
      row.nom.toLowerCase().includes(query) ||
      row.canal.toLowerCase().includes(query);
    const matchStatus = statut === "all" || row.statut.toLowerCase() === statut.toLowerCase();
    return matchQuery && matchStatus;
  });

  const allHref = query ? `?q=${encodeURIComponent(query)}&statut=all` : "?statut=all";
  const activeHref = query
    ? `?q=${encodeURIComponent(query)}&statut=Actif`
    : "?statut=Actif";
  const createHref = `?q=${encodeURIComponent(query)}&statut=${encodeURIComponent(statut)}&create=1`;
  const closeCreateHref = `?q=${encodeURIComponent(query)}&statut=${encodeURIComponent(statut)}`;

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
          <div className="flex items-center gap-2">
            <form method="get">
              <input
                type="search"
                name="q"
                defaultValue={resolved.q ?? ""}
                placeholder="Rechercher campagne"
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
              href={activeHref}
              className="rounded-[4px] border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
            >
              Actifs
            </Link>
            <Link
              href={createHref}
              className="rounded-[4px] border border-line bg-foreground px-3 py-1.5 text-xs text-background"
            >
            + Nouvelle campagne
            </Link>
          </div>
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
          {filteredRows.map((row) => (
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
          {filteredRows.length === 0 ? (
            <p className="py-5 text-sm text-muted">Aucune campagne correspondante.</p>
          ) : null}
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
                <p className="text-[16px] font-medium tracking-[-0.01em] text-foreground">Nouvelle campagne</p>
                <p className="mt-1 text-xs text-muted">
                  Configure une campagne promotionnelle multicanal.
                </p>
              </div>
              <Link href={closeCreateHref} className="text-xs text-muted hover:text-foreground">
                Fermer
              </Link>
            </div>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              <input className="rounded-[4px] border border-line bg-background px-3 py-2 text-xs" placeholder="Nom campagne" />
              <input className="rounded-[4px] border border-line bg-background px-3 py-2 text-xs" placeholder="Canal" />
              <input className="rounded-[4px] border border-line bg-background px-3 py-2 text-xs" placeholder="Code promo (optionnel)" />
              <input className="rounded-[4px] border border-line bg-background px-3 py-2 text-xs" placeholder="Date de fin" />
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
                Creer campagne
              </button>
            </div>
          </div>
        </div>
      ) : null}

    </section>
  );
}
