import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  labelledBy?: string;
}

export function Menu({ className, labelledBy, ...props }: MenuProps) {
  return (
    <ul
      role="menu"
      aria-labelledby={labelledBy}
      data-ui="menu"
      className={cn("min-w-[200px] border border-line bg-background py-1 text-sm", className)}
      {...props}
    />
  );
}
