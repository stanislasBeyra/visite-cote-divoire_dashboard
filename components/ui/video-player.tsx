"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface VideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoPlayerProps>(
  function VideoPlayer({ className, src, controls = true, ...props }, ref) {
    return (
      <video
        ref={ref}
        data-ui="videoplayer"
        className={cn("w-full border border-line bg-black", className)}
        src={src}
        controls={controls}
        {...props}
      />
    );
  },
);
