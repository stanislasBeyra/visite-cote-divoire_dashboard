import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  side?: "left" | "right";
}

export function Sidebar({
  className,
  side = "left",
  ...props
}: SidebarProps) {
  return (
    <aside
      data-ui="sidebar"
      data-side={side}
      className={cn(
        "w-64 shrink-0 border-line bg-background",
        side === "left" ? "border-r" : "border-l",
        className,
      )}
      {...props}
    />
  );
}
