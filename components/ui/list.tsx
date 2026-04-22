import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  ordered?: boolean;
}

export function List({ className, ordered, ...props }: ListProps) {
  const Comp = ordered ? "ol" : "ul";
  return (
    <Comp
      data-ui="list"
      className={cn(
        "space-y-2 text-sm",
        ordered ? "list-decimal pl-5" : "list-none",
        className,
      )}
      {...props}
    />
  );
}
