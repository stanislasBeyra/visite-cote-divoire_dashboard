"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type SheetSide = "right" | "left" | "top" | "bottom";

export interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side?: SheetSide;
  children: React.ReactNode;
}

const sideClass: Record<SheetSide, string> = {
  right: "right-0 top-0 h-full max-w-md border-l",
  left: "left-0 top-0 h-full max-w-md border-r",
  top: "left-0 top-0 h-auto w-full border-b",
  bottom: "bottom-0 left-0 h-auto w-full border-t",
};

export function Sheet({ open, onOpenChange, side = "right", children }: SheetProps) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div data-ui="sheet" className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Fermer"
        className="absolute inset-0 bg-foreground/30 dark:bg-foreground/50"
        onClick={() => onOpenChange(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "absolute border-line bg-background p-6 shadow-none",
          sideClass[side],
        )}
      >
        <button
          type="button"
          className="absolute right-3 top-3 font-mono text-xs text-muted hover:text-foreground"
          aria-label="Fermer"
          onClick={() => onOpenChange(false)}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
