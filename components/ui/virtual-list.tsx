import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface VirtualListProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  items: T[];
  estimateHeight?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

/** Liste simple — pour virtualisation fenêtrée, utiliser `@tanstack/react-virtual`. */
export function VirtualList<T>({
  items,
  renderItem,
  className,
  ...props
}: VirtualListProps<T>) {
  return (
    <div data-ui="virtuallist" className={cn("space-y-2", className)} {...props}>
      {items.map((item, i) => (
        <div key={i}>{renderItem(item, i)}</div>
      ))}
    </div>
  );
}
