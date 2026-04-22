import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function EmptyState({
  title,
  description,
  className,
  children,
  ...props
}: EmptyStateProps) {
  return (
    <div
      data-ui="emptystate"
      className={cn(
        "flex flex-col items-center justify-center border border-dashed border-line px-6 py-16 text-center",
        className,
      )}
      {...props}
    >
      <p className="text-base font-medium text-foreground">{title}</p>
      {description && (
        <p className="mt-2 max-w-sm text-sm text-muted">{description}</p>
      )}
      {children && <div className="mt-6 flex flex-wrap justify-center gap-2">{children}</div>}
    </div>
  );
}
