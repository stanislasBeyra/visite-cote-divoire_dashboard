import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Largeur max du contenu principal */
  constrained?: boolean;
}

export function Layout({
  className,
  constrained = true,
  ...props
}: LayoutProps) {
  return (
    <div
      data-ui="layout"
      className={cn(
        "mx-auto w-full px-6 md:px-8",
        constrained && "max-w-6xl",
        className,
      )}
      {...props}
    />
  );
}
