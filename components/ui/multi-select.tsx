"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface MultiSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: MultiSelectOption[];
}

export const MultiSelect = React.forwardRef<HTMLSelectElement, MultiSelectProps>(
  function MultiSelect({ options, className, ...props }, ref) {
    return (
      <select
        ref={ref}
        multiple
        data-ui="multiselect"
        className={cn(
          "min-h-[120px] w-full border border-line bg-background px-3 py-2 text-sm outline-none focus-visible:border-foreground",
          className,
        )}
        {...props}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    );
  },
);
