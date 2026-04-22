import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4;
}

export function ImageGallery({
  className,
  columns = 3,
  ...props
}: ImageGalleryProps) {
  const cols =
    columns === 2 ? "grid-cols-2" : columns === 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 md:grid-cols-3";
  return (
    <div
      data-ui="imagegallery"
      className={cn("grid gap-2", cols, className)}
      {...props}
    />
  );
}
