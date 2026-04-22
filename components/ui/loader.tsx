import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export function Loader({ className, label = "Chargement", ...props }: LoaderProps) {
  return (
    <div
      role="status"
      aria-label={label}
      data-ui="loader"
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 animate-pulse bg-foreground"
          style={{ animationDelay: `${i * 120}ms` }}
        />
      ))}
    </div>
  );
}
