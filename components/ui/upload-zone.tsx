"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface UploadZoneProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function UploadZone({
  className,
  id,
  label = "Glisser-déposer ou cliquer pour envoyer",
  ...props
}: UploadZoneProps) {
  const genId = React.useId();
  const inputId = id ?? genId;
  return (
    <label
      htmlFor={inputId}
      data-ui="uploadzone"
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center border border-dashed border-line px-6 py-12 text-center text-sm text-muted transition-colors hover:bg-foreground/[0.02]",
        className,
      )}
    >
      <input id={inputId} type="file" className="sr-only" {...props} />
      {label}
    </label>
  );
}
