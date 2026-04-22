import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function ButtonGroup({
  className,
  orientation = "horizontal",
  ...props
}: ButtonGroupProps) {
  return (
    <div
      data-ui="buttongroup"
      role="group"
      className={cn(
        "inline-flex",
        orientation === "horizontal" ? "flex-row flex-wrap gap-2" : "flex-col gap-2",
        className,
      )}
      {...props}
    />
  );
}
