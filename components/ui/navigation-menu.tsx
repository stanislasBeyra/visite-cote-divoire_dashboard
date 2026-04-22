import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type NavigationMenuProps = React.HTMLAttributes<HTMLElement>;

export function NavigationMenu({ className, ...props }: NavigationMenuProps) {
  return (
    <nav
      data-ui="navigationmenu"
      className={cn("flex flex-wrap items-center gap-6 text-sm", className)}
      {...props}
    />
  );
}
