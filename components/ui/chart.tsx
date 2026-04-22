import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

/** Emplacement réservé — brancher Recharts, Chart.js ou similaire. */
export function Chart({ title = "Graphique", className, children, ...props }: ChartProps) {
  return (
    <div
      data-ui="chart"
      className={cn(
        "flex min-h-[220px] items-center justify-center border border-dashed border-line p-6 text-center text-sm text-muted",
        className,
      )}
      {...props}
    >
      {children ?? <span>{title}</span>}
    </div>
  );
}
