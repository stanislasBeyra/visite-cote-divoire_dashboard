/** Données factices — structure alignée sur l’exemple Dashboard.html (design minimaliste). */

export type DashboardKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  deltaUp: boolean;
  sub: string;
  /** Points Y normalisés (0–1) pour mini courbe */
  spark: number[];
};

export const dashboardKpis: DashboardKpi[] = [
  {
    id: "rev",
    label: "Volume réservations",
    value: "128,4 M",
    delta: "+12,4 %",
    deltaUp: true,
    sub: "vs. 28 derniers jours",
    spark: [
      0.35, 0.38, 0.42, 0.4, 0.45, 0.5, 0.48, 0.52, 0.55, 0.53, 0.58, 0.6, 0.57, 0.62, 0.66, 0.7,
      0.68, 0.72, 0.76, 0.74, 0.78, 0.82, 0.8, 0.85,
    ],
  },
  {
    id: "ord",
    label: "Demandes traitées",
    value: "3 284",
    delta: "+4,1 %",
    deltaUp: true,
    sub: "1 128 comptes uniques",
    spark: [
      0.5, 0.52, 0.51, 0.54, 0.53, 0.56, 0.58, 0.57, 0.6, 0.62, 0.61, 0.64, 0.66, 0.65, 0.68, 0.7,
      0.72, 0.71, 0.74, 0.76, 0.75, 0.78, 0.8, 0.82,
    ],
  },
  {
    id: "conv",
    label: "Taux de conversion",
    value: "3,82 %",
    delta: "−0,6 %",
    deltaUp: false,
    sub: "68 912 sessions",
    spark: [
      0.72, 0.7, 0.71, 0.69, 0.68, 0.7, 0.71, 0.7, 0.69, 0.68, 0.67, 0.66, 0.65, 0.64, 0.63, 0.62,
      0.61, 0.6, 0.59, 0.58, 0.57, 0.56, 0.55, 0.54,
    ],
  },
  {
    id: "basket",
    label: "Panier moyen",
    value: "39 080",
    delta: "+1,9 %",
    deltaUp: true,
    sub: "médiane 32 000 FCFA",
    spark: [
      0.4, 0.42, 0.41, 0.44, 0.43, 0.46, 0.45, 0.48, 0.47, 0.5, 0.52, 0.51, 0.54, 0.53, 0.56, 0.58,
      0.57, 0.6, 0.59, 0.62, 0.64, 0.63, 0.66, 0.68,
    ],
  },
];

/** Série principale (axe Y fictif 4–16 comme l’exemple). */
export const dashboardRevenueSeriesA = [
  6.2, 6.8, 7.1, 6.9, 7.4, 8.0, 7.6, 8.2, 8.6, 8.3, 9.1, 9.4, 9.0, 9.7, 10.2, 10.6, 10.1, 10.8, 11.3,
  11.0, 11.6, 12.1, 11.8, 12.4, 12.9, 12.6, 13.2, 13.8, 13.4, 14.1,
];

export const dashboardRevenueSeriesB = [
  5.0, 5.4, 5.8, 5.6, 5.9, 6.2, 6.0, 6.5, 6.7, 6.9, 7.2, 7.4, 7.1, 7.6, 8.0, 8.3, 8.0, 8.5, 8.9,
  8.7, 9.0, 9.3, 9.1, 9.5, 9.8, 9.7, 10.0, 10.4, 10.2, 10.6,
];

export const dashboardChannels = [
  { name: "Recherche organique", pct: 38 },
  { name: "Direct", pct: 24 },
  { name: "Référents", pct: 16 },
  { name: "Réseaux sociaux", pct: 14 },
  { name: "E-mail", pct: 8 },
] as const;

export type OrderRow = {
  ref: string;
  client: string;
  produit: string;
  montant: string;
  statut: "Payée" | "En attente" | "Remboursée";
  quand: string;
};

export const dashboardOrders: OrderRow[] = [
  { ref: "#10284", client: "Aminata K.", produit: "Safari Comoé — 2 pax", montant: "485 000 FCFA", statut: "Payée", quand: "il y a 3 min" },
  { ref: "#10283", client: "J.-P. N’Guessan", produit: "Suite hôtel — 2 nuits", montant: "312 000 FCFA", statut: "Payée", quand: "il y a 12 min" },
  { ref: "#10282", client: "Fatou Diabaté", produit: "Pass festival MASA", montant: "45 000 FCFA", statut: "En attente", quand: "il y a 28 min" },
  { ref: "#10281", client: "Koffi A.", produit: "Dîner maquis — 6 pers.", montant: "98 000 FCFA", statut: "Payée", quand: "il y a 41 min" },
  { ref: "#10280", client: "Sarah N.", produit: "Crédits promotionnels", montant: "22 000 FCFA", statut: "Remboursée", quand: "il y a 1 h" },
  { ref: "#10279", client: "Marc D.", produit: "Excursion lagune", montant: "67 500 FCFA", statut: "Payée", quand: "il y a 2 h" },
];

export const dashboardAlerts = [
  { id: "a1", text: "3 signalements à modérer sur les avis lieux.", level: "urgent" as const },
  { id: "a2", text: "Campagne push « Week-end Grand-Bassam » planifiée dimanche.", level: "info" as const },
] as const;
