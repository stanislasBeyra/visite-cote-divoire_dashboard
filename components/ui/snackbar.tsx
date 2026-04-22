"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface SnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

/** Bandeau bas d’écran (message court). */
export function Snackbar({ open, message, onClose }: SnackbarProps) {
  if (!open) return null;
  return (
    <div
      role="status"
      data-ui="snackbar"
      className={cn(
        "fixed inset-x-4 bottom-4 z-[60] flex items-center justify-between gap-4 border border-line bg-background px-4 py-3 text-sm md:inset-x-auto md:left-1/2 md:w-full md:max-w-lg md:-translate-x-1/2",
      )}
    >
      <span>{message}</span>
      <button
        type="button"
        className="font-mono text-xs uppercase tracking-wide text-muted hover:text-foreground"
        onClick={onClose}
      >
        OK
      </button>
    </div>
  );
}
