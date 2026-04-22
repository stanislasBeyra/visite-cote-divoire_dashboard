import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export function Toolbar({ className, label = "Barre d’outils", ...props }: ToolbarProps) {
  return (
    <div
      role="toolbar"
      aria-label={label}
      data-ui="toolbar"
      className={cn(
        "flex flex-wrap items-center gap-2 border border-line bg-background p-2",
        className,
      )}
      {...props}
    />
  );
}
