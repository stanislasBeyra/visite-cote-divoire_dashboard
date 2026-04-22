"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onValueChange?: (value: number) => void;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  function Slider({ className, onValueChange, onChange, ...props }, ref) {
    return (
      <input
        ref={ref}
        type="range"
        data-ui="slider"
        className={cn(
          "h-2 w-full cursor-pointer accent-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        onChange={(e) => {
          onChange?.(e);
          onValueChange?.(Number(e.target.value));
        }}
        {...props}
      />
    );
  },
);
