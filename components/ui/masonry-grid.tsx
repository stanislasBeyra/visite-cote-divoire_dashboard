import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface MasonryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4;
}

const colClass: Record<NonNullable<MasonryGridProps["columns"]>, string> = {
  2: "columns-1 sm:columns-2",
  3: "columns-1 sm:columns-2 lg:columns-3",
  4: "columns-2 lg:columns-4",
};

export function MasonryGrid({
  columns = 3,
  className,
  style,
  ...props
}: MasonryGridProps) {
  return (
    <div
      data-ui="masonrygrid"
      className={cn("[column-gap:1rem]", colClass[columns], className)}
      style={style}
      {...props}
    />
  );
}
