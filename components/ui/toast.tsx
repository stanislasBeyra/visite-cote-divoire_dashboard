"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export interface ToastProps {
  open: boolean;
  message: string;
  onClose: () => void;
  actionLabel?: string;
  onAction?: () => void;
}

export function Toast({
  open,
  message,
  onClose,
  actionLabel,
  onAction,
}: ToastProps) {
  if (!open) return null;
  return (
    <div
      role="status"
      data-ui="toast"
      className={cn(
        "fixed bottom-6 right-6 z-[60] flex max-w-sm flex-col gap-3 border border-line bg-background p-4 text-sm shadow-none",
      )}
    >
      <p>{message}</p>
      <div className="flex justify-end gap-2">
        {actionLabel && onAction && (
          <Button type="button" variant="secondary" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
        <Button type="button" variant="ghost" size="sm" onClick={onClose}>
          Fermer
        </Button>
      </div>
    </div>
  );
}
