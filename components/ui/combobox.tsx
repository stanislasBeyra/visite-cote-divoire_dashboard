"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/cn";

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  options: ComboboxOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Combobox({
  options,
  value,
  onChange,
  placeholder,
  className,
  ...props
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <div data-ui="combobox" className={cn("relative", className)} {...props}>
      <Input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        placeholder={placeholder}
        autoComplete="off"
      />
      {open && filtered.length > 0 && (
        <ul className="absolute z-20 mt-1 max-h-48 w-full overflow-auto border border-line bg-background text-sm">
          {filtered.map((o) => (
            <li key={o.value}>
              <button
                type="button"
                className="w-full px-3 py-2 text-left hover:bg-foreground/[0.04]"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onChange(o.label);
                  setOpen(false);
                }}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
