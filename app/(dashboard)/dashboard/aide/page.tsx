import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aide",
};

const docs = [
  { titre: "Guide de publication fiche destination", type: "Documentation", maj: "Mise a jour hier" },
  { titre: "Process moderation contenus UGC", type: "Procedure", maj: "Mise a jour il y a 3 j" },
  { titre: "Checklist qualite media", type: "Checklist", maj: "Mise a jour il y a 1 sem" },
  { titre: "Playbook campagnes promos", type: "Playbook", maj: "Mise a jour il y a 2 sem" },
] as const;

const tickets = [
  { id: "SUP-920", sujet: "Erreur import CSV catalogue", statut: "Ouvert", priorite: "Haute" },
  { id: "SUP-918", sujet: "Ralentissement dashboard analytics", statut: "En cours", priorite: "Moyenne" },
  { id: "SUP-915", sujet: "Demande role editeur", statut: "Planifie", priorite: "Basse" },
] as const;

export default function DashboardAidePage() {
  return (
    <section className="space-y-8">
      <div className="border-b border-line pb-5">
        <span className="ds-eyebrow">Aide</span>
        <h1 className="mt-3 text-[28px] font-medium tracking-[-0.03em] text-foreground">
          Support et documentation
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          Ressources operatoires pour l equipe admin, suivi des demandes et acces
          rapide aux guides produits.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[4px] border border-line bg-surface p-5">
          <h2 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Base documentaire</h2>
          <ul className="mt-3 divide-y divide-line border border-line">
            {docs.map((doc) => (
              <li key={doc.titre} className="px-4 py-3">
                <p className="text-[13px] text-foreground">{doc.titre}</p>
                <p className="mt-1 text-[11.5px] text-muted">{doc.type} - {doc.maj}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[4px] border border-line bg-surface p-5">
          <h2 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Tickets support</h2>
          <div
            className="mono mt-3 grid gap-x-4 border-b border-line pb-2 text-[11px] uppercase tracking-[0.06em] text-muted"
            style={{ gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.8fr) minmax(0,0.8fr) minmax(0,0.8fr)" }}
          >
            <span>ID</span>
            <span>Sujet</span>
            <span>Statut</span>
            <span>Priorite</span>
          </div>
          <div className="divide-y divide-line">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="grid gap-x-4 py-3 text-[13px]"
                style={{ gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.8fr) minmax(0,0.8fr) minmax(0,0.8fr)" }}
              >
                <span className="mono text-muted">{ticket.id}</span>
                <span className="truncate text-foreground">{ticket.sujet}</span>
                <span className="text-muted">{ticket.statut}</span>
                <span className="text-foreground">{ticket.priorite}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[4px] border border-line bg-surface p-5">
        <h3 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">Contacts</h3>
        <p className="mt-2 text-sm text-muted">Support technique: support@visitci.com - SLA: 4h</p>
        <p className="text-sm text-muted">Produit: product@visitci.com - SLA: 24h</p>
      </div>

    </section>
  );
}
