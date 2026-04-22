"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface PopoverProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "start" | "end";
}

export function Popover({
  open,
  onOpenChange,
  trigger,
  children,
  align = "start",
}: PopoverProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) onOpenChange(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open, onOpenChange]);

  return (
    <div ref={ref} data-ui="popover" className="relative inline-block">
      <div onClick={() => onOpenChange(!open)}>{trigger}</div>
      {open && (
        <div
          role="dialog"
          className={cn(
            "absolute z-50 mt-2 min-w-[200px] border border-line bg-background p-3 text-sm shadow-none",
            align === "end" && "right-0",
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
