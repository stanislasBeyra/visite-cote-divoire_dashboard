import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      data-ui="header"
      className={cn("border-b border-line bg-background", className)}
      {...props}
    />
  );
}
