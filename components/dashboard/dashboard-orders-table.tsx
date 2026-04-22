import type { OrderRow } from "@/lib/dashboard-mock";

function StatutPill({ statut }: { statut: OrderRow["statut"] }) {
  const cls =
    statut === "Payée"
      ? "text-foreground"
      : statut === "En attente"
        ? "text-muted"
        : "text-muted opacity-70";
  return (
    <span className={`inline-flex items-center gap-1.5 text-[12.5px] ${cls}`}>
      <span className="h-1.5 w-1.5 rounded-[4px] bg-current opacity-80" aria-hidden />
      {statut}
    </span>
  );
}

export function DashboardOrdersTable({ rows }: { rows: OrderRow[] }) {
  return (
    <div className="rounded-[4px)] border border-line bg-surface p-5">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Dernières transactions</h3>
          <p className="mt-1 text-xs text-muted">Référence, client, produit, montant, statut</p>
        </div>
        <button
          type="button"
          className="rounded-[4px] border border-line bg-surface px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-hover"
        >
          Exporter CSV
        </button>
      </div>
      <div
        className="mono grid gap-x-4 gap-y-0 border-b border-line pb-2 text-[11px] font-medium uppercase tracking-[0.06em] text-muted"
        style={{
          gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr) minmax(0,1.4fr) minmax(0,0.75fr) minmax(0,0.85fr) minmax(0,0.75fr)",
        }}
      >
        <span>Réf.</span>
        <span>Client</span>
        <span>Produit</span>
        <span className="text-right">Montant</span>
        <span>Statut</span>
        <span className="text-right">Quand</span>
      </div>
      <div className="divide-y divide-line">
        {rows.map((o) => (
          <div
            key={o.ref}
            className="grid items-center gap-x-4 py-3 text-[13px]"
            style={{
              gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr) minmax(0,1.4fr) minmax(0,0.75fr) minmax(0,0.85fr) minmax(0,0.75fr)",
            }}
          >
            <span className="mono text-muted">{o.ref}</span>
            <span className="truncate text-foreground">{o.client}</span>
            <span className="truncate text-muted">{o.produit}</span>
            <span className="mono text-right text-foreground">{o.montant}</span>
            <StatutPill statut={o.statut} />
            <span className="mono text-right text-muted">{o.quand}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
