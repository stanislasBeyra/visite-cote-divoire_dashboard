import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  content: string;
}

/** Infobulle native via `title` (accessible au survol). */
export function Tooltip({ content, className, children, ...props }: TooltipProps) {
  return (
    <span data-ui="tooltip" className={cn("inline-block", className)} title={content} {...props}>
      {children}
    </span>
  );
}
