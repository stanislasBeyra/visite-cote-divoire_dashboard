import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface StatisticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  hint?: string;
}

export function StatisticCard({ label, value, hint, className, ...props }: StatisticCardProps) {
  return (
    <div
      data-ui="statisticcard"
      className={cn(
        "flex min-h-[120px] flex-col border border-line bg-background p-5 transition-[border-color] duration-[180ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:border-foreground/30",
        className,
      )}
      style={{ borderRadius: "var(--radius-lg, 14px)" }}
      {...props}
    >
      <p className="font-mono text-[11px] uppercase leading-none tracking-[0.14em] text-muted">
        {label}
      </p>
      <p className="mt-4 text-[1.75rem] font-medium leading-none tracking-tight tabular-nums text-foreground">
        {value}
      </p>
      {hint && (
        <p className="mt-auto pt-3 font-mono text-[11px] leading-snug text-muted">{hint}</p>
      )}
    </div>
  );
}
