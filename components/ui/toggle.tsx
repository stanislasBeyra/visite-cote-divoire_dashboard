"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  function Toggle(
    {
      className,
      pressed: pressedProp,
      defaultPressed,
      onPressedChange,
      onClick,
      ...props
    },
    ref,
  ) {
    const [inner, setInner] = React.useState(!!defaultPressed);
    const controlled = pressedProp !== undefined;
    const pressed = controlled ? !!pressedProp : inner;

    return (
      <button
        ref={ref}
        type="button"
        data-ui="toggle"
        aria-pressed={pressed}
        data-state={pressed ? "on" : "off"}
        className={cn(
          "border px-3 py-2 text-sm transition-colors",
          pressed
            ? "border-foreground bg-foreground text-background"
            : "border-line bg-transparent text-foreground",
          className,
        )}
        onClick={(e) => {
          onClick?.(e);
          const next = !pressed;
          if (!controlled) setInner(next);
          onPressedChange?.(next);
        }}
        {...props}
      />
    );
  },
);
