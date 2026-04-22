import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  onRemove?: () => void;
}

export function Chip({ className, children, onRemove, ...props }: ChipProps) {
  return (
    <span
      data-ui="chip"
      className={cn(
        "inline-flex items-center gap-1 border border-line bg-foreground/[0.04] px-2 py-1 font-mono text-xs",
        className,
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          className="ml-1 text-muted hover:text-foreground"
          aria-label="Retirer"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          ×
        </button>
      )}
    </span>
  );
}
