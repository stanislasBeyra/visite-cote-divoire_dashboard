import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "sm" | "md" | "lg";
}

const colMap: Record<NonNullable<GridProps["cols"]>, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-12",
};

const gapMap = { sm: "gap-2", md: "gap-4", lg: "gap-6" };

export function Grid({
  className,
  cols = 3,
  gap = "md",
  ...props
}: GridProps) {
  return (
    <div
      data-ui="grid"
      className={cn("grid", colMap[cols], gapMap[gap], className)}
      {...props}
    />
  );
}
