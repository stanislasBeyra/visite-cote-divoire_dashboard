"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";

export interface LightboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  alt?: string;
}

export function Lightbox({ open, onOpenChange, src, alt = "" }: LightboxProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div className="relative max-h-[90vh] max-w-5xl border border-line bg-background p-2">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-2 top-2 z-10"
          onClick={() => onOpenChange(false)}
          aria-label="Fermer"
        >
          Fermer
        </Button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="max-h-[80vh] w-auto object-contain" />
      </div>
    </Dialog>
  );
}
