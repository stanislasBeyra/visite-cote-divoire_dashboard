"use client";

import * as React from "react";
import { Sheet, type SheetProps } from "@/components/ui/sheet";

/** Feuille depuis le bas — alias de [Sheet]. */
export function BottomSheet(props: Omit<SheetProps, "side">) {
  return <Sheet side="bottom" {...props} />;
}
