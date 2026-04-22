"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ className, onCheckedChange, onChange, ...props }, ref) {
    return (
      <input
        ref={ref}
        type="checkbox"
        data-ui="checkbox"
        className={cn(
          "h-4 w-4 shrink-0 border border-line bg-background accent-foreground",
          className,
        )}
        onChange={(e) => {
          onChange?.(e);
          onCheckedChange?.(e.target.checked);
        }}
        {...props}
      />
    );
  },
);
