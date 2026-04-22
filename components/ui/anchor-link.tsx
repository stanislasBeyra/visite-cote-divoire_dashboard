import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type AnchorLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

/** Lien d’ancrage interne (`#section`) avec style cohérent. */
export function AnchorLink({ className, ...props }: AnchorLinkProps) {
  return (
    <a
      data-ui="anchorlink"
      className={cn(
        "text-foreground underline-offset-4 transition-opacity hover:opacity-80 hover:underline",
        className,
      )}
      {...props}
    />
  );
}
