import type { Metadata } from "next";
import { DashboardChannels } from "@/components/dashboard/dashboard-channels";
import { DashboardKpiBand } from "@/components/dashboard/dashboard-kpi-band";
import { DashboardOrdersTable } from "@/components/dashboard/dashboard-orders-table";
import { DashboardRevenueChart } from "@/components/dashboard/dashboard-revenue-chart";
import { DashboardToolbar } from "@/components/dashboard/dashboard-toolbar";
import {
  dashboardChannels,
  dashboardKpis,
  dashboardOrders,
  dashboardRevenueSeriesA,
  dashboardRevenueSeriesB,
} from "@/lib/dashboard-mock";

export const metadata: Metadata = {
  title: "Tableau de bord",
};

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <DashboardToolbar />

      <DashboardKpiBand items={dashboardKpis} />

      <section id="analytics" className="scroll-mt-28 space-y-6">
        <h2 className="sr-only">Performance et canaux</h2>
        <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <DashboardRevenueChart seriesA={dashboardRevenueSeriesA} seriesB={dashboardRevenueSeriesB} />
          <DashboardChannels channels={dashboardChannels} />
        </div>
      </section>

      <section id="commandes" className="scroll-mt-28">
        <h2 className="sr-only">Transactions</h2>
        <DashboardOrdersTable rows={dashboardOrders} />
      </section>
    </div>
  );
}
