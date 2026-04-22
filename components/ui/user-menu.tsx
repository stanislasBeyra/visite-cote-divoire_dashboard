import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface UserMenuProps extends React.HTMLAttributes<HTMLDetailsElement> {
  trigger: React.ReactNode;
}

export function UserMenu({ trigger, className, children, ...props }: UserMenuProps) {
  return (
    <details data-ui="usermenu" className={cn("relative", className)} {...props}>
      <summary className="cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
        {trigger}
      </summary>
      <div className="absolute right-0 z-30 mt-1 min-w-[200px] border border-line bg-background py-1 text-sm">
        {children}
      </div>
    </details>
  );
}
