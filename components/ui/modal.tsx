"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  type DialogProps,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils/cn";

export interface ModalProps extends DialogProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  contentClassName?: string;
}

/** Modale plein écran centré — même logique que [Dialog]. */
export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  contentClassName,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onClose={() => onOpenChange(false)}
        className={cn("max-w-xl", contentClassName)}
      >
        {title && (
          <header className="pr-8">
            <h2 className="text-lg font-medium tracking-tight">{title}</h2>
            {description && (
              <p className="mt-1 text-sm text-muted">{description}</p>
            )}
          </header>
        )}
        <div className={title ? "mt-4" : undefined}>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
