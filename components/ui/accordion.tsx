import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface AccordionItemProps {
  id: string;
  label: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  label,
  children,
  defaultOpen,
}: AccordionItemProps) {
  return (
    <details
      data-ui="accordionitem"
      className="border-b border-line last:border-b-0"
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium marker:content-none [&::-webkit-details-marker]:hidden">
        {label}
      </summary>
      <div className="border-t border-line px-4 py-3 text-sm text-muted">{children}</div>
    </details>
  );
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Accordion({ className, children, ...props }: AccordionProps) {
  return (
    <div
      data-ui="accordion"
      className={cn("border border-line", className)}
      {...props}
    >
      {children}
    </div>
  );
}
