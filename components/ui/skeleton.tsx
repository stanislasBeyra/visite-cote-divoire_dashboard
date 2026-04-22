import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-ui="skeleton"
      className={cn("animate-pulse bg-foreground/10", className)}
      {...props}
    />
  );
}
