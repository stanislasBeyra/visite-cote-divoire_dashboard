"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

const weekDays = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];

export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  month?: Date;
  onSelectDate?: (d: Date) => void;
}

export function Calendar({
  month = new Date(),
  onSelectDate,
  className,
  ...props
}: CalendarProps) {
  const y = month.getFullYear();
  const m = month.getMonth();
  const first = new Date(y, m, 1).getDay();
  const start = first === 0 ? 6 : first - 1;
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < start; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div data-ui="calendar" className={cn("border border-line p-4", className)} {...props}>
      <p className="mb-4 text-center font-mono text-sm">
        {month.toLocaleString("fr-FR", { month: "long", year: "numeric" })}
      </p>
      <div className="grid grid-cols-7 gap-1 text-center font-mono text-xs text-muted">
        {weekDays.map((d, i) => (
          <span key={`${d}-${i}`}>{d}</span>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-1 text-center text-sm">
        {cells.map((d, i) =>
          d == null ? (
            <span key={`e-${i}`} />
          ) : (
            <button
              key={d}
              type="button"
              className="aspect-square border border-transparent py-1 hover:border-line"
              onClick={() => onSelectDate?.(new Date(y, m, d))}
            >
              {d}
            </button>
          ),
        )}
      </div>
    </div>
  );
}
