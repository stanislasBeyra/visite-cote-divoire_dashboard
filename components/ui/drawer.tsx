"use client";

import * as React from "react";
import { Sheet, type SheetProps } from "@/components/ui/sheet";

/** Panneau latéral — alias de [Sheet] côté gauche par défaut. */
export function Drawer({
  side = "left",
  ...props
}: Omit<SheetProps, "side"> & { side?: "left" | "right" }) {
  return <Sheet side={side} {...props} />;
}
