import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface SubmenuProps extends React.HTMLAttributes<HTMLDetailsElement> {
  label: React.ReactNode;
}

export function Submenu({ label, className, children, ...props }: SubmenuProps) {
  return (
    <details data-ui="submenu" className={cn("relative", className)} {...props}>
      <summary className="cursor-pointer list-none px-3 py-2 marker:content-none [&::-webkit-details-marker]:hidden">
        {label}
      </summary>
      <div className="border-t border-line py-1 pl-3">{children}</div>
    </details>
  );
}
