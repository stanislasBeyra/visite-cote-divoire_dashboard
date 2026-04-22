import * as React from "react";
import { Collapsible, type CollapsibleProps } from "@/components/ui/collapsible";

export type ExpandablePanelProps = CollapsibleProps;

/** Alias de [Collapsible] pour panneaux extensibles. */
export function ExpandablePanel(props: ExpandablePanelProps) {
  return <Collapsible data-ui="expandablepanel" {...props} />;
}
