import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface DataGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
}

export function DataGrid({
  columns = 3,
  className,
  style,
  ...props
}: DataGridProps) {
  return (
    <div
      role="grid"
      data-ui="datagrid"
      className={cn("grid gap-px border border-line bg-line", className)}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, ...style }}
      {...props}
    />
  );
}
