import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Si défini, le backdrop est cliquable pour fermer */
  onDismiss?: () => void;
}

export function Backdrop({
  className,
  onDismiss,
  ...props
}: BackdropProps) {
  return (
    <div
      data-ui="backdrop"
      className={cn(
        "fixed inset-0 z-40 bg-foreground/30 dark:bg-foreground/50",
        onDismiss && "cursor-pointer",
        className,
      )}
      onClick={onDismiss}
      {...props}
    />
  );
}
