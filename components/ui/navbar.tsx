import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type NavbarProps = React.HTMLAttributes<HTMLElement>;

export function Navbar({ className, ...props }: NavbarProps) {
  return (
    <nav
      data-ui="navbar"
      className={cn(
        "flex items-center justify-between gap-4 border-b border-line bg-background px-6 py-3",
        className,
      )}
      {...props}
    />
  );
}
