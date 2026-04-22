"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ZoomViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  minScale?: number;
  maxScale?: number;
}

export function ZoomViewer({
  src,
  alt = "",
  minScale = 1,
  maxScale = 3,
  className,
  ...props
}: ZoomViewerProps) {
  const [scale, setScale] = React.useState(1);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((s) => Math.min(maxScale, Math.max(minScale, Math.round((s + delta) * 10) / 10)));
  };

  return (
    <div
      data-ui="zoomviewer"
      className={cn("overflow-hidden border border-line", className)}
      onWheel={onWheel}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="block max-h-[70vh] w-full origin-center object-contain transition-transform"
        style={{ transform: `scale(${scale})` }}
      />
      <p className="border-t border-line px-2 py-1 font-mono text-xs text-muted">
        Zoom {scale.toFixed(1)} · molette
      </p>
    </div>
  );
}
