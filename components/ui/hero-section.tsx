import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type HeroSectionProps = React.HTMLAttributes<HTMLElement>;

export function HeroSection({ className, ...props }: HeroSectionProps) {
  return (
    <section
      data-ui="herosection"
      className={cn(
        "border-b border-line px-6 py-20 md:px-8 md:py-28",
        className,
      )}
      {...props}
    />
  );
}
