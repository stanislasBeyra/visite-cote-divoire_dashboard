"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

type RadioCtx = { name: string; value: string; setValue: (v: string) => void };

const RadioGroupContext = React.createContext<RadioCtx | null>(null);

export interface RadioGroupProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  name: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export function RadioGroup({
  name,
  value,
  defaultValue,
  onValueChange,
  className,
  children,
  ...props
}: RadioGroupProps) {
  const [inner, setInner] = React.useState(defaultValue ?? "");
  const controlled = value !== undefined;
  const current = controlled ? value! : inner;

  const setValue = (next: string) => {
    onValueChange?.(next);
    if (!controlled) setInner(next);
  };

  return (
    <fieldset
      data-ui="radiogroup"
      className={cn("space-y-2", className)}
      {...props}
    >
      <RadioGroupContext.Provider value={{ name, value: current, setValue }}>
        {children}
      </RadioGroupContext.Provider>
    </fieldset>
  );
}

export interface RadioGroupItemProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "name"> {
  value: string;
  label: React.ReactNode;
}

export function RadioGroupItem({
  value,
  label,
  className,
  id,
  ...props
}: RadioGroupItemProps) {
  const ctx = React.useContext(RadioGroupContext);
  if (!ctx) throw new Error("RadioGroupItem doit être dans RadioGroup.");
  const inputId = id ?? `${ctx.name}-${value}`;
  return (
    <label
      htmlFor={inputId}
      className={cn("flex cursor-pointer items-center gap-2 text-sm", className)}
    >
      <input
        id={inputId}
        type="radio"
        name={ctx.name}
        value={value}
        checked={ctx.value === value}
        onChange={() => ctx.setValue(value)}
        className="h-4 w-4 border border-line accent-foreground"
        {...props}
      />
      {label}
    </label>
  );
}
