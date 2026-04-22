"use client";

import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export interface FloatingActionButtonProps extends ButtonProps {
  position?: "bottom-right" | "bottom-left";
}

export const FloatingActionButton = React.forwardRef<
  HTMLButtonElement,
  FloatingActionButtonProps
>(function FloatingActionButton({ className, position = "bottom-right", ...props }, ref) {
  return (
    <Button
      ref={ref}
      data-ui="fab"
      variant="primary"
      className={cn(
        "fixed z-40 h-14 w-14 rounded-[4px] p-0 shadow-none",
        position === "bottom-right" && "bottom-6 right-6",
        position === "bottom-left" && "bottom-6 left-6",
        className,
      )}
      {...props}
    />
  );
});
