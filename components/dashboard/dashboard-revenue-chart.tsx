"use client";

import * as React from "react";

type Props = {
  seriesA: number[];
  seriesB: number[];
  title?: string;
  subtitle?: string;
};

export function DashboardRevenueChart({
  seriesA,
  seriesB,
  title = "Revenu",
  subtitle = "Volume indexé (M FCFA) — 30 derniers jours",
}: Props) {
  const w = 720;
  const h = 280;
  const padL = 44;
  const padR = 16;
  const padT = 24;
  const padB = 34;
  const values = [...seriesA, ...seriesB];
  const min = Math.floor((Math.min(...values) - 1) / 2) * 2;
  const max = Math.ceil((Math.max(...values) + 1) / 2) * 2;
  const yTicks = [min, min + (max - min) / 3, min + (2 * (max - min)) / 3, max];
  const toX = (i: number) => padL + (i / (seriesA.length - 1 || 1)) * (w - padL - padR);
  const toY = (v: number) => padT + (1 - (v - min) / (max - min || 1)) * (h - padT - padB);
  const linePath = (arr: number[]) =>
    arr
      .map((v, i) => `${i === 0 ? "M" : "L"}${toX(i).toFixed(2)},${toY(v).toFixed(2)}`)
      .join(" ");
  const areaPath = `${linePath(seriesA)} L${toX(seriesA.length - 1).toFixed(2)},${toY(min).toFixed(2)} L${toX(0).toFixed(2)},${toY(min).toFixed(2)} Z`;
  const xTicks = [0, 7, 14, 21, 29].filter((i) => i <= seriesA.length - 1);
  const [hoverIdx, setHoverIdx] = React.useState<number | null>(null);
  const [hoverX, setHoverX] = React.useState(0);
  const chartRef = React.useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = chartRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * w;
    const idx = Math.round(((x - padL) / (w - padL - padR)) * (seriesA.length - 1));
    const clamped = Math.max(0, Math.min(seriesA.length - 1, idx));
    setHoverIdx(clamped);
    setHoverX(toX(clamped));
  };

  return (
    <div className="rounded-[4px)] border border-line bg-surface px-[22px] pb-2 pt-[22px]">
      <div className="mb-[18px] flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="mb-1 text-[13px] font-medium text-foreground">{title}</h3>
          <div className="flex flex-wrap items-baseline gap-3">
            <p className="text-[26px] font-medium tracking-[-0.022em] text-foreground">128,4 M FCFA</p>
            <p className="mono text-[11.5px] text-muted">+12,4% vs période précédente</p>
          </div>
        </div>
        <div className="mono flex flex-wrap items-center gap-4 text-[12px] text-muted">
          <span className="inline-flex items-center gap-2">
            <svg width="18" height="8" aria-hidden>
              <line x1="0" y1="4" x2="18" y2="4" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            Période actuelle
          </span>
          <span className="inline-flex items-center gap-2">
            <svg width="18" height="8" aria-hidden>
              <line
                x1="0"
                y1="4"
                x2="18"
                y2="4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeDasharray="3 3"
              />
            </svg>
            Période précédente
          </span>
        </div>
      </div>
      <div
        ref={chartRef}
        className="relative w-full"
        onMouseMove={onMove}
        onMouseLeave={() => setHoverIdx(null)}
      >
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="h-auto w-full text-foreground"
          role="img"
          aria-label={subtitle}
        >
          <defs>
            <linearGradient id="dashAreaGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.09" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          {yTicks.map((t) => (
            <g key={t}>
              <line
                x1={padL}
                x2={w - padR}
                y1={toY(t)}
                y2={toY(t)}
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeDasharray="2 4"
              />
              <text
                x={padL - 10}
                y={toY(t) + 3.5}
                textAnchor="end"
                fontSize="10.5"
                fill="currentColor"
                opacity="0.5"
                style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
              >
                {Math.round(t)}k
              </text>
            </g>
          ))}
          {xTicks.map((i) => (
            <text
              key={i}
              x={toX(i)}
              y={h - 12}
              textAnchor="middle"
              fontSize="10.5"
              fill="currentColor"
              opacity="0.5"
              style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
            >
              {seriesA.length - 1 - i === 0 ? "Aujourd’hui" : `J-${seriesA.length - 1 - i}`}
            </text>
          ))}
          <path
            d={linePath(seriesB)}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.4}
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
          <path d={areaPath} fill="url(#dashAreaGrad)" />
          <path
            d={linePath(seriesA)}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {hoverIdx !== null ? (
            <g>
              <line
                x1={hoverX}
                x2={hoverX}
                y1={padT}
                y2={h - padB}
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeDasharray="2 4"
              />
              <circle cx={hoverX} cy={toY(seriesA[hoverIdx])} r="3" fill="currentColor" />
            </g>
          ) : null}
        </svg>

        {hoverIdx !== null ? (
          <div
            className="pointer-events-none absolute z-10 border border-line bg-background px-3 py-2 text-xs"
            style={{
              borderRadius: 8,
              left: `${(hoverX / w) * 100}%`,
              top: 6,
              transform: "translateX(-50%)",
            }}
          >
            <div className="mono mb-0.5 text-[10.5px] text-muted">J-{seriesA.length - 1 - hoverIdx}</div>
            <div className="font-medium text-foreground">{seriesA[hoverIdx].toFixed(1)}k</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
