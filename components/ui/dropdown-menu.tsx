import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDetailsElement> {
  trigger: React.ReactNode;
}

export function DropdownMenu({ trigger, className, children, ...props }: DropdownMenuProps) {
  return (
    <details data-ui="dropdownmenu" className={cn("relative inline-block", className)} {...props}>
      <summary className="cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
        {trigger}
      </summary>
      <div className="absolute left-0 z-30 mt-1 min-w-[180px] border border-line bg-background py-1 text-sm">
        {children}
      </div>
    </details>
  );
}

export function DropdownMenuItem({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full px-3 py-2 text-left hover:bg-foreground/[0.04]",
        className,
      )}
      {...props}
    />
  );
}
