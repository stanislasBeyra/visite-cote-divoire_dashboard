import * as React from "react";
import { Spinner, type SpinnerProps } from "@/components/ui/spinner";

/** Alias de [Spinner]. */
export function LoadingSpinner(props: SpinnerProps) {
  return <Spinner {...props} />;
}
