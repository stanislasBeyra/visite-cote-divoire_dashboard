import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type ListItemProps = React.LiHTMLAttributes<HTMLLIElement>;

export function ListItem({ className, ...props }: ListItemProps) {
  return (
    <li
      data-ui="listitem"
      className={cn("border-b border-line py-2 last:border-b-0", className)}
      {...props}
    />
  );
}
