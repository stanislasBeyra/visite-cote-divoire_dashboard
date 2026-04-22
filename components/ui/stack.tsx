import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: "none" | "sm" | "md" | "lg";
}

const gapMap = {
  none: "gap-0",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-8",
};

export function Stack({
  className,
  gap = "md",
  ...props
}: StackProps) {
  return (
    <div
      data-ui="stack"
      className={cn("flex flex-col", gapMap[gap], className)}
      {...props}
    />
  );
}
