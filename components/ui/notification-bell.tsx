"use client";

import * as React from "react";
import { IconButton, type IconButtonProps } from "@/components/ui/icon-button";
import { cn } from "@/lib/utils/cn";

export interface NotificationBellProps extends Omit<IconButtonProps, "children" | "aria-label"> {
  count?: number;
}

export function NotificationBell({ count, className, ...props }: NotificationBellProps) {
  return (
    <span className={cn("relative inline-flex", className)}>
      <IconButton aria-label="Notifications" {...props}>
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          aria-hidden
        >
          <path d="M12 22a2 2 0 002-2H10a2 2 0 002 2z" />
          <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
        </svg>
      </IconButton>
      {count != null && count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center border border-line bg-foreground px-1 font-mono text-[10px] leading-none text-background">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </span>
  );
}
