import type { Metadata } from "next";
import { DashboardOrdersTable } from "@/components/dashboard/dashboard-orders-table";
import { dashboardOrders } from "@/lib/dashboard-mock";

export const metadata: Metadata = {
  title: "Transactions",
};

const commandesKpis = [
  { label: "Transactions aujourd hui", value: "128", hint: "Pic a 19h-21h" },
  { label: "Taux annulation", value: "2,7%", hint: "Sous le seuil de 3,5%" },
  { label: "Paiements echoues", value: "11", hint: "8 corrigees automatiquement" },
  { label: "Montant brut (J-30)", value: "128,4 M FCFA", hint: "+12,4% vs periode precedente" },
] as const;

export default function DashboardCommandesPage() {
  return (
    <section className="space-y-8">
      <div className="border-b border-line pb-5">
        <span className="ds-eyebrow">Transactions</span>
        <h1 className="mt-3 text-[28px] font-medium tracking-[-0.03em] text-foreground">
          Suivi des commandes
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          Controle les paiements, statuts de reservation et ecarts de traitement
          operationnel en temps quasi reel.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {commandesKpis.map((kpi) => (
          <article key={kpi.label} className="rounded-[4px] border border-line bg-surface px-5 pb-4 pt-5">
            <p className="text-xs font-medium text-muted">{kpi.label}</p>
            <p className="mt-2 text-[30px] font-medium tracking-[-0.028em] text-foreground">{kpi.value}</p>
            <p className="mt-2 text-[11.5px] text-muted">{kpi.hint}</p>
          </article>
        ))}
      </div>

      <DashboardOrdersTable rows={dashboardOrders} />

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[4px] border border-line bg-surface p-5">
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Controles automatiques</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Verification incoherence montant/panier.</li>
            <li>Alerte anti-fraude sur echecs repetes.</li>
            <li>Relance paiement si reservation en attente &gt; 30 min.</li>
          </ul>
        </div>
        <div className="rounded-[4px] border border-line bg-surface p-5">
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Actions rapides</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">Exporter journal</button>
            <button type="button" className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">Reconciliation</button>
            <button type="button" className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">Parametres paiement</button>
          </div>
        </div>
      </div>
    </section>
  );
}
