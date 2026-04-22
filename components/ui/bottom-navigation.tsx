import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface BottomNavigationProps extends React.HTMLAttributes<HTMLElement> {
  labelledBy?: string;
}

export function BottomNavigation({
  className,
  labelledBy,
  ...props
}: BottomNavigationProps) {
  return (
    <nav
      role="navigation"
      aria-labelledby={labelledBy}
      data-ui="bottomnavigation"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 flex items-stretch justify-around border-t border-line bg-background py-2",
        className,
      )}
      {...props}
    />
  );
}
