import type { dashboardChannels } from "@/lib/dashboard-mock";

type Channel = (typeof dashboardChannels)[number];

export function DashboardChannels({ channels }: { channels: readonly Channel[] }) {
  const max = channels[0]?.pct ?? 1;
  return (
    <div className="flex flex-col rounded-[4px)] border border-line bg-surface p-[22px]">
      <h3 className="mb-1 text-[13px] font-medium text-foreground">Canaux d’acquisition</h3>
      <p className="mb-[18px] text-xs text-muted">Répartition du trafic (sessions)</p>
      <ul className="flex-1 space-y-4">
        {channels.map((c, i) => (
          <li key={c.name}>
            <div className="mb-1.5 flex items-center justify-between gap-3 text-[12.5px]">
              <span className="text-foreground">{c.name}</span>
              <span className="mono shrink-0 text-muted">{c.pct}%</span>
            </div>
            <div className="h-[2px] overflow-hidden rounded-[4px] bg-line">
              <div
                className="h-full bg-foreground transition-[width] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
                style={{
                  width: `${(c.pct / max) * 100}%`,
                  transitionDelay: `${350 + i * 70}ms`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs">
        <span className="text-muted">Total sessions</span>
        <span className="mono font-medium text-foreground">68 912</span>
      </div>
    </div>
  );
}
