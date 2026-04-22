"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface InputOtpProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export function InputOtp({
  length = 6,
  value,
  onChange,
  disabled,
  className,
}: InputOtpProps) {
  const refs = React.useRef<Array<HTMLInputElement | null>>([]);

  const setAt = (index: number, char: string) => {
    const chars = value.padEnd(length, " ").slice(0, length).split("");
    chars[index] = char;
    onChange(chars.join("").trimEnd());
  };

  const onKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const onChangeBox = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, "").slice(-1);
    setAt(index, v);
    if (v && index < length - 1) refs.current[index + 1]?.focus();
  };

  return (
    <div data-ui="inputotp" className={cn("flex gap-2", className)}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={1}
          disabled={disabled}
          value={value[i] ?? ""}
          onChange={(e) => onChangeBox(i, e)}
          onKeyDown={(e) => onKeyDown(i, e)}
          className="h-11 w-10 border border-line bg-background text-center font-mono text-lg outline-none focus-visible:border-foreground disabled:opacity-50"
        />
      ))}
    </div>
  );
}
