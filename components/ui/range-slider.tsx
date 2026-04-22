"use client";

import * as React from "react";
import { Slider, type SliderProps } from "@/components/ui/slider";
import { cn } from "@/lib/utils/cn";

export type RangeSliderProps = SliderProps;

/** Curseur simple (un pouce) — pour deux pouces, brancher une lib dédiée. */
export function RangeSlider({ className, ...props }: RangeSliderProps) {
  return <Slider data-ui="rangeslider" className={cn(className)} {...props} />;
}
