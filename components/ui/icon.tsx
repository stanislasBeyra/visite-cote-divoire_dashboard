import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Passer un SVG en enfant (stroke recommandé ~1.4). */
  children?: React.ReactNode;
}

export function Icon({ className, children, ...props }: IconProps) {
  return (
    <span
      data-ui="icon"
      className={cn("inline-flex h-[1em] w-[1em] shrink-0 items-center justify-center", className)}
      aria-hidden
      {...props}
    >
      {children}
    </span>
  );
}
