import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type ProgressProps = React.ProgressHTMLAttributes<HTMLProgressElement>;

export const Progress = React.forwardRef<HTMLProgressElement, ProgressProps>(
  function Progress({ className, ...props }, ref) {
    return (
      <progress
        ref={ref}
        data-ui="progress"
        className={cn("h-2 w-full accent-foreground", className)}
        {...props}
      />
    );
  },
);
