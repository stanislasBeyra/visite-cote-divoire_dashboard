import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type AppBarProps = React.HTMLAttributes<HTMLElement>;

export function AppBar({ className, ...props }: AppBarProps) {
  return (
    <header
      role="banner"
      data-ui="appbar"
      className={cn(
        "flex h-14 items-center gap-4 border-b border-line bg-background px-4",
        className,
      )}
      {...props}
    />
  );
}
