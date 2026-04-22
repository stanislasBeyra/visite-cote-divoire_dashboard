import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

/** Onglet isolé (sans contexte [Tabs]) — utile pour compositions manuelles. */
export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  function Tab({ className, selected, ...props }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={selected}
        data-state={selected ? "active" : "inactive"}
        data-ui="tab"
        className={cn(
          "border-b-2 border-transparent px-3 py-2 text-sm text-muted transition-colors",
          selected && "border-foreground font-medium text-foreground",
          className,
        )}
        {...props}
      />
    );
  },
);
