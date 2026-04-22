import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  maxHeight?: string | number;
}

export function ScrollArea({
  className,
  style,
  maxHeight = 320,
  ...props
}: ScrollAreaProps) {
  const h = typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight;
  return (
    <div
      data-ui="scrollarea"
      className={cn("overflow-auto border border-line", className)}
      style={{ maxHeight: h, ...style }}
      {...props}
    />
  );
}
