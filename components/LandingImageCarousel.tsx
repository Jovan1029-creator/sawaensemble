"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { SafeImage } from "@/components/SafeImage";
import { useReducedMotionPreference } from "@/components/ReducedMotionProvider";
import { Button } from "@/components/ui/button";
import { landingImages } from "@/data/landingImages";
import { cn } from "@/lib/utils";

export function LandingImageCarousel() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotionPreference();
  const image = landingImages[index];

  function paginate(direction: number) {
    setIndex((current) => {
      const nextIndex = current + direction;
      if (nextIndex < 0) return landingImages.length - 1;
      if (nextIndex >= landingImages.length) return 0;
      return nextIndex;
    });
  }

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (info.offset.x < -70) paginate(1);
    if (info.offset.x > 70) paginate(-1);
  }

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => paginate(1), 5200);
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-sawa-yellow/25 bg-sawa-purple shadow-[0_30px_100px_rgba(42,26,94,0.5)]"
      aria-roledescription="carousel"
      aria-label="SAWA landing image carousel"
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.16}
        onDragEnd={handleDragEnd}
        className="relative aspect-[4/5] cursor-grab overflow-hidden active:cursor-grabbing sm:aspect-[5/4] lg:aspect-[4/5]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={image.src}
            className="absolute inset-0"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.04, x: 36 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98, x: -28 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <SafeImage
              src={image.src}
              alt={image.alt}
              priority={index === 0}
              className="size-full"
              imageClassName="object-cover"
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sawa-purple via-sawa-purple/45 to-transparent p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sawa-yellow">
                <ImageIcon className="size-4" aria-hidden="true" />
                Landing gallery
              </p>
              <p className="mt-2 font-display text-3xl leading-none text-ivory">
                {image.caption}
              </p>
            </div>
            <p className="text-sm font-semibold text-ivory/65">
              {index + 1}/{landingImages.length}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="bg-sawa-purple/55 backdrop-blur-xl"
          aria-label="Previous landing image"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft aria-hidden="true" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="bg-sawa-purple/55 backdrop-blur-xl"
          aria-label="Next landing image"
          onClick={() => paginate(1)}
        >
          <ChevronRight aria-hidden="true" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-5 flex gap-2">
        {landingImages.map((item, dotIndex) => (
          <button
            key={item.src}
            type="button"
            aria-label={`Show landing image ${dotIndex + 1}`}
            aria-pressed={dotIndex === index}
            onClick={() => setIndex(dotIndex)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              dotIndex === index ? "w-8 bg-sawa-yellow" : "w-3 bg-ivory/35"
            )}
          />
        ))}
      </div>
    </div>
  );
}
