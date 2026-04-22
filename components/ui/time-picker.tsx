"use client";

import * as React from "react";
import { Input, type InputProps } from "@/components/ui/input";

export type TimePickerProps = Omit<InputProps, "type">;

export const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
  function TimePicker(props, ref) {
    return <Input ref={ref} type="time" data-ui="timepicker" {...props} />;
  },
);
