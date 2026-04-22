"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ColorPickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onColorChange?: (hex: string) => void;
}

export const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  function ColorPicker({ className, onColorChange, onChange, ...props }, ref) {
    return (
      <input
        ref={ref}
        type="color"
        data-ui="colorpicker"
        className={cn(
          "h-11 w-full max-w-[120px] cursor-pointer border border-line bg-background",
          className,
        )}
        onChange={(e) => {
          onChange?.(e);
          onColorChange?.(e.target.value);
        }}
        {...props}
      />
    );
  },
);
