"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  function Switch(
    {
      className,
      checked: checkedProp,
      defaultChecked,
      onCheckedChange,
      disabled,
      ...props
    },
    ref,
  ) {
    const [inner, setInner] = React.useState(!!defaultChecked);
    const controlled = checkedProp !== undefined;
    const checked = controlled ? !!checkedProp : inner;

    const toggle = () => {
      if (disabled) return;
      const next = !checked;
      if (!controlled) setInner(next);
      onCheckedChange?.(next);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        data-ui="switch"
        data-state={checked ? "checked" : "unchecked"}
        disabled={disabled}
        className={cn(
          "relative inline-flex h-6 w-11 shrink-0 border border-line bg-background transition-colors",
          checked && "bg-foreground",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
        onClick={toggle}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block h-4 w-4 translate-x-1 translate-y-[3px] border border-line bg-background transition-transform",
            checked && "translate-x-[22px] border-transparent bg-background",
          )}
          aria-hidden
        />
      </button>
    );
  },
);
