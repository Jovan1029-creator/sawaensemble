"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function SafeImage({
  src,
  alt,
  className,
  imageClassName,
  priority,
  sizes,
  fill = true,
  width,
  height
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(251,229,85,0.24),transparent_26%),radial-gradient(circle_at_80%_30%,rgba(244,89,5,0.24),transparent_30%),linear-gradient(135deg,#2A1A5E,#120B28_55%,#F45905)]",
        className
      )}
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 size-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ivory/10" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-bead-line" />
      </div>
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          aria-label={alt}
          role="img"
          className="absolute inset-0 flex items-end p-5 text-xs font-semibold uppercase tracking-[0.24em] text-ivory/50"
        >
          SAWA visual placeholder
        </div>
      )}
    </div>
  );
}
