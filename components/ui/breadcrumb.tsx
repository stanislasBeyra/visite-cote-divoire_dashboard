import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type BreadcrumbItem = { label: string; href?: string };

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items, className, ...props }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Fil d’Ariane"
      data-ui="breadcrumb"
      className={cn(className)}
      {...props}
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-line">/</span>}
            {item.href ? (
              <a href={item.href} className="hover:text-foreground hover:underline">
                {item.label}
              </a>
            ) : (
              <span className="font-medium text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
