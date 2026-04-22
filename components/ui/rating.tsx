"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  onValueChange?: (value: number) => void;
  max?: number;
  readOnly?: boolean;
}

export function Rating({
  value,
  onValueChange,
  max = 5,
  readOnly,
  className,
  ...props
}: RatingProps) {
  return (
    <div
      data-ui="rating"
      role={readOnly ? "img" : "group"}
      aria-label={`Note ${value} sur ${max}`}
      className={cn("flex gap-1", className)}
      {...props}
    >
      {Array.from({ length: max }).map((_, i) => {
        const v = i + 1;
        const active = v <= value;
        return (
          <button
            key={v}
            type="button"
            disabled={readOnly}
            onClick={() => onValueChange?.(v)}
            className={cn(
              "h-9 w-9 border text-sm transition-colors",
              active ? "border-foreground bg-foreground text-background" : "border-line text-muted",
              !readOnly && "hover:border-foreground",
            )}
            aria-pressed={active}
          >
            {v}
          </button>
        );
      })}
    </div>
  );
}
