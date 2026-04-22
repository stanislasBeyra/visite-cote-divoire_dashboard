import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type BannerVariant = "default" | "muted";

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BannerVariant;
}

export function Banner({
  className,
  variant = "default",
  ...props
}: BannerProps) {
  return (
    <div
      data-ui="banner"
      data-variant={variant}
      className={cn(
        "border-b border-line px-6 py-3 text-center text-sm",
        variant === "muted" && "bg-foreground/[0.03] text-muted",
        className,
      )}
      {...props}
    />
  );
}
