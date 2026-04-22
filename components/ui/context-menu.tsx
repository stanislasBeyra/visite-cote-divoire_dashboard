"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ContextMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  menu: React.ReactNode;
}

export function ContextMenu({ menu, className, children, ...props }: ContextMenuProps) {
  const [open, setOpen] = React.useState(false);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [open]);

  return (
    <div
      ref={ref}
      data-ui="contextmenu"
      className={cn(className)}
      onContextMenu={(e) => {
        e.preventDefault();
        setPos({ x: e.clientX, y: e.clientY });
        setOpen(true);
      }}
      {...props}
    >
      {children}
      {open && (
        <div
          className="fixed z-50 min-w-[160px] border border-line bg-background py-1 text-sm shadow-none"
          style={{ left: pos.x, top: pos.y }}
          onClick={(e) => e.stopPropagation()}
        >
          {menu}
        </div>
      )}
    </div>
  );
}
