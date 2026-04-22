import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number;
}

/** Conteneur avec ratio largeur/hauteur (défaut 16/9). */
export function AspectRatio({
  ratio = 16 / 9,
  className,
  style,
  children,
  ...props
}: AspectRatioProps) {
  return (
    <div
      data-ui="aspectratio"
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: `${ratio}`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
