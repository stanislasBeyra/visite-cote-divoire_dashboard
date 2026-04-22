"use client";

import * as React from "react";
import { Input, type InputProps } from "@/components/ui/input";

export type DatePickerProps = Omit<InputProps, "type">;

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  function DatePicker(props, ref) {
    return <Input ref={ref} type="date" data-ui="datepicker" {...props} />;
  },
);
