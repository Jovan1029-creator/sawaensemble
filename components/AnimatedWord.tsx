"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotionPreference } from "@/components/ReducedMotionProvider";

export function AnimatedWord({
  word,
  className
}: {
  word: string;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotionPreference();

  if (prefersReducedMotion) {
    return <span className={className}>{word}</span>;
  }

  return (
    <span className={cn("relative inline-grid overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          className="col-start-1 row-start-1 block"
          initial={{ y: "82%", opacity: 0, filter: "blur(12px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-74%", opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
