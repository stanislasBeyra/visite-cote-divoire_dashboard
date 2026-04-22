import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface CollapsibleProps extends React.HTMLAttributes<HTMLDetailsElement> {
  /** Libellé visible du résumé (évite le conflit avec l’attribut HTML `title`). */
  label: React.ReactNode;
  defaultOpen?: boolean;
}

/** Bloc repliable natif (`<details>`). */
export function Collapsible({
  label,
  className,
  children,
  defaultOpen,
  ...props
}: CollapsibleProps) {
  return (
    <details
      data-ui="collapsible"
      className={cn("group border border-line", className)}
      {...(defaultOpen ? { open: true } : {})}
      {...props}
    >
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium marker:content-none [&::-webkit-details-marker]:hidden">
        {label}
      </summary>
      <div className="border-t border-line px-4 py-3 text-sm text-muted">{children}</div>
    </details>
  );
}
