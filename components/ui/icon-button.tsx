import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export interface IconButtonProps extends Omit<ButtonProps, "size" | "children"> {
  children: React.ReactNode;
  "aria-label": string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ className, children, ...props }, ref) {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="sm"
        data-ui="iconbutton"
        className={cn("h-10 w-10 shrink-0 p-0", className)}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
