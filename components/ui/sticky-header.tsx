import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type StickyHeaderProps = React.HTMLAttributes<HTMLElement>;

export function StickyHeader({ className, ...props }: StickyHeaderProps) {
  return (
    <header
      data-ui="stickyheader"
      className={cn(
        "sticky top-0 z-30 border-b border-line bg-background/95 backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}
