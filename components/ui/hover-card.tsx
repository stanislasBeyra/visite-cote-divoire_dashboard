"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface HoverCardProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  openDelay?: number;
  className?: string;
}

export function HoverCard({
  trigger,
  children,
  openDelay = 200,
  className,
}: HoverCardProps) {
  const [open, setOpen] = React.useState(false);
  const t = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (t.current) clearTimeout(t.current);
    t.current = setTimeout(() => setOpen(true), openDelay);
  };
  const hide = () => {
    if (t.current) clearTimeout(t.current);
    setOpen(false);
  };

  return (
    <div
      data-ui="hovercard"
      className="relative inline-block"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {trigger}
      {open && (
        <div
          className={cn(
            "absolute left-0 top-full z-50 mt-2 w-64 border border-line bg-background p-3 text-sm",
            className,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
