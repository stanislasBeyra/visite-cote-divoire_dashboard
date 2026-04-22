import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  variant?: "body" | "muted" | "lead";
}

export function Text({
  as: Comp = "p",
  variant = "body",
  className,
  ...props
}: TextProps) {
  return (
    <Comp
      data-ui="text"
      data-variant={variant}
      className={cn(
        "text-sm leading-relaxed",
        variant === "body" && "text-foreground",
        variant === "muted" && "text-muted",
        variant === "lead" && "text-base text-foreground md:text-lg",
        className,
      )}
      {...props}
    />
  );
}
