import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      data-ui="footer"
      className={cn("border-t border-line bg-background py-8", className)}
      {...props}
    />
  );
}
