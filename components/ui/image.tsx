import NextImage, { type ImageProps as NextImageProps } from "next/image";
import * as React from "react";

export type ImageProps = NextImageProps;

/** Wrapper autour de `next/image` (conserve toutes les props officielles). */
export function Image(props: ImageProps) {
  return <NextImage data-ui="image" {...props} />;
}
