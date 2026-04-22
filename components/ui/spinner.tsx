import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

const sizes = { sm: "h-4 w-4 border-2", md: "h-8 w-8 border-2", lg: "h-12 w-12 border-[3px]" };

export function Spinner({ className, size = "md", ...props }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Chargement"
      data-ui="spinner"
      className={cn(
        "animate-spin rounded-[4px] border-line border-t-foreground",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
