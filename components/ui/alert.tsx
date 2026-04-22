import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type AlertVariant = "default" | "destructive";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
}

export function Alert({
  className,
  variant = "default",
  role = "alert",
  ...props
}: AlertProps) {
  return (
    <div
      role={role}
      data-ui="alert"
      data-variant={variant}
      className={cn(
        "border border-line px-4 py-3 text-sm",
        variant === "destructive" && "border-foreground text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function AlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("font-medium leading-none tracking-tight", className)} {...props} />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("mt-2 text-muted [&_p]:leading-relaxed", className)} {...props} />
  );
}
