import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      data-ui="badge"
      data-variant={variant}
      className={cn(
        "inline-flex items-center border px-2 py-0.5 font-mono text-xs uppercase tracking-wide",
        variant === "default" && "border-line bg-foreground/[0.04] text-foreground",
        variant === "outline" && "border-line text-muted",
        className,
      )}
      {...props}
    />
  );
}
