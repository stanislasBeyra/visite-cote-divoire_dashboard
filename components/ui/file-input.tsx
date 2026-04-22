"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  function FileInput({ className, id, label = "Choisir un fichier", ...props }, ref) {
    const genId = React.useId();
    const inputId = id ?? genId;
    return (
      <div data-ui="fileinput" className={cn("inline-block", className)}>
        <input ref={ref} id={inputId} type="file" className="sr-only" {...props} />
        <label
          htmlFor={inputId}
          className="inline-flex cursor-pointer border border-line bg-background px-4 py-2 text-sm hover:bg-foreground/[0.04]"
        >
          {label}
        </label>
      </div>
    );
  },
);
