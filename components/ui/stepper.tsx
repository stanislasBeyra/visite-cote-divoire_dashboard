"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: string[];
  current: number;
}

export function Stepper({ steps, current, className, ...props }: StepperProps) {
  return (
    <div
      data-ui="stepper"
      className={cn("flex flex-wrap gap-4", className)}
      {...props}
    >
      {steps.map((label, i) => {
        const state = i < current ? "done" : i === current ? "current" : "todo";
        return (
          <div key={label} className="flex items-center gap-2 text-sm">
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center border font-mono text-xs",
                state === "done" && "border-foreground bg-foreground text-background",
                state === "current" && "border-foreground text-foreground",
                state === "todo" && "border-line text-muted",
              )}
              aria-current={state === "current" ? "step" : undefined}
            >
              {i + 1}
            </span>
            <span className={cn(state === "todo" && "text-muted")}>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
