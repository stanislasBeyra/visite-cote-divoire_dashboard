import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "border border-foreground bg-foreground text-background hover:opacity-90 disabled:opacity-40",
  secondary:
    "border border-line bg-transparent text-foreground hover:bg-foreground/[0.04] dark:hover:bg-foreground/[0.06] disabled:opacity-40",
  ghost:
    "border border-transparent bg-transparent text-foreground hover:bg-foreground/[0.06] disabled:opacity-40",
  danger:
    "border border-foreground bg-transparent text-foreground hover:bg-foreground/[0.08] disabled:opacity-40",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-8 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = "primary", size = "md", type = "button", ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        data-ui="button"
        className={cn(
          "inline-flex items-center justify-center font-medium tracking-tight transition-opacity",
          variantClass[variant],
          sizeClass[size],
          className,
        )}
        {...props}
      />
    );
  },
);
