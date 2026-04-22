"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Stack } from "@/components/ui/stack";
import { cn } from "@/lib/utils/cn";

export interface DateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  start: string;
  end: string;
  onStartChange: (v: string) => void;
  onEndChange: (v: string) => void;
}

export function DateRangePicker({
  start,
  end,
  onStartChange,
  onEndChange,
  className,
  ...props
}: DateRangePickerProps) {
  return (
    <Stack data-ui="daterangepicker" gap="sm" className={cn(className)} {...props}>
      <label className="text-xs text-muted">
        Début
        <Input type="date" value={start} onChange={(e) => onStartChange(e.target.value)} />
      </label>
      <label className="text-xs text-muted">
        Fin
        <Input type="date" value={end} onChange={(e) => onEndChange(e.target.value)} />
      </label>
    </Stack>
  );
}
