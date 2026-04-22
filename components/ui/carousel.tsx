"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type CarouselProps = React.HTMLAttributes<HTMLDivElement>;

export function Carousel({ className, children, ...props }: CarouselProps) {
  return (
    <div
      data-ui="carousel"
      className={cn("relative w-full overflow-x-auto scroll-smooth snap-x snap-mandatory", className)}
      {...props}
    >
      <div className="flex gap-4">{children}</div>
    </div>
  );
}

export function CarouselItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("min-w-[85%] shrink-0 snap-center sm:min-w-[60%]", className)}
      {...props}
    />
  );
}
