import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ProgressCircleProps extends React.SVGProps<SVGSVGElement> {
  value: number;
  max?: number;
  size?: number;
  /** Épaisseur du trait (px). */
  thickness?: number;
}

export function ProgressCircle({
  value,
  max = 100,
  size = 48,
  thickness = 3,
  className,
  ...props
}: ProgressCircleProps) {
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.min(1, Math.max(0, value / max));
  const offset = c * (1 - pct);
  return (
    <svg
      width={size}
      height={size}
      data-ui="progresscircle"
      className={cn("-rotate-90", className)}
      {...props}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        className="stroke-[var(--line)]"
        strokeWidth={thickness}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        className="stroke-foreground"
        strokeWidth={thickness}
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="square"
      />
    </svg>
  );
}
