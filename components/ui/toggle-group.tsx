"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

type Ctx = {
  type: "single" | "multiple";
  value: string;
  values: string[];
  toggle: (id: string) => void;
};

const ToggleGroupContext = React.createContext<Ctx | null>(null);

export interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  value?: string;
  defaultValue?: string;
  values?: string[];
  defaultValues?: string[];
  onValueChange?: (value: string) => void;
  onValuesChange?: (values: string[]) => void;
}

export function ToggleGroup({
  type = "single",
  value,
  defaultValue = "",
  values,
  defaultValues = [],
  onValueChange,
  onValuesChange,
  className,
  children,
  ...props
}: ToggleGroupProps) {
  const [inner, setInner] = React.useState(defaultValue);
  const [innerMulti, setInnerMulti] = React.useState<string[]>(defaultValues);
  const controlledSingle = value !== undefined;
  const controlledMulti = values !== undefined;
  const vSingle = controlledSingle ? value! : inner;
  const vMulti = controlledMulti ? values! : innerMulti;

  const toggle = React.useCallback(
    (id: string) => {
      if (type === "single") {
        onValueChange?.(id);
        if (!controlledSingle) setInner(id);
        return;
      }
      if (controlledMulti) {
        const base = values!;
        const has = base.includes(id);
        const next = has ? base.filter((x) => x !== id) : [...base, id];
        onValuesChange?.(next);
        return;
      }
      setInnerMulti((base) => {
        const has = base.includes(id);
        const next = has ? base.filter((x) => x !== id) : [...base, id];
        onValuesChange?.(next);
        return next;
      });
    },
    [type, controlledSingle, controlledMulti, values, onValueChange, onValuesChange],
  );

  const ctx: Ctx = {
    type,
    value: vSingle,
    values: vMulti,
    toggle,
  };

  return (
    <ToggleGroupContext.Provider value={ctx}>
      <div
        data-ui="togglegroup"
        role="group"
        className={cn("flex flex-wrap gap-2", className)}
        {...props}
      >
        {children}
      </div>
    </ToggleGroupContext.Provider>
  );
}

export interface ToggleGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function ToggleGroupItem({
  value,
  className,
  ...props
}: ToggleGroupItemProps) {
  const ctx = React.useContext(ToggleGroupContext);
  if (!ctx) throw new Error("ToggleGroupItem dans ToggleGroup.");
  const pressed =
    ctx.type === "single" ? ctx.value === value : ctx.values.includes(value);
  return (
    <button
      type="button"
      aria-pressed={pressed}
      data-state={pressed ? "on" : "off"}
      className={cn(
        "border px-3 py-2 text-sm",
        pressed
          ? "border-foreground bg-foreground text-background"
          : "border-line text-foreground",
        className,
      )}
      onClick={() => ctx.toggle(value)}
      {...props}
    />
  );
}
