import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface TimelineItem {
  title: string;
  description?: string;
  time?: string;
}

export interface TimelineProps extends React.HTMLAttributes<HTMLUListElement> {
  items: TimelineItem[];
}

export function Timeline({ items, className, ...props }: TimelineProps) {
  return (
    <ul
      data-ui="timeline"
      className={cn("relative space-y-6 border-l border-line pl-6", className)}
      {...props}
    >
      {items.map((item, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[25px] top-1 h-3 w-3 border border-foreground bg-background" />
          {item.time && (
            <p className="font-mono text-xs text-muted">{item.time}</p>
          )}
          <p className="font-medium text-foreground">{item.title}</p>
          {item.description && (
            <p className="mt-1 text-sm text-muted">{item.description}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
