import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type SectionProps = React.HTMLAttributes<HTMLElement>;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      data-ui="section"
      className={cn("py-12 md:py-16", className)}
      {...props}
    />
  );
}
