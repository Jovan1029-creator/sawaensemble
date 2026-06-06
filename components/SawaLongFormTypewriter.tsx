"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotionPreference } from "@/components/ReducedMotionProvider";
import { cn } from "@/lib/utils";

const entries = [
  {
    letter: "S",
    word: "Storytelling",
    color: "#2A1A5E",
    className: "border-sawa-yellow/35 bg-sawa-purple text-sawa-yellow"
  },
  {
    letter: "A",
    word: "Arts",
    color: "#F45905",
    className: "border-sawa-flame/50 bg-sawa-flame text-ivory"
  },
  {
    letter: "W",
    word: "Wonders of",
    color: "#FB9224",
    className: "border-sawa-orange/50 bg-sawa-orange text-sawa-purple"
  },
  {
    letter: "A",
    word: "Africa",
    color: "#FBE555",
    className: "border-sawa-yellow/50 bg-sawa-yellow text-sawa-purple"
  }
];

export function SawaLongFormTypewriter() {
  const prefersReducedMotion = useReducedMotionPreference();
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedCount, setTypedCount] = useState(0);
  const activeWord = entries[activeIndex].word;

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (typedCount < activeWord.length) {
      const timer = window.setTimeout(() => {
        setTypedCount((count) => count + 1);
      }, 58);

      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % entries.length);
      setTypedCount(0);
    }, activeIndex === entries.length - 1 ? 1400 : 520);

    return () => window.clearTimeout(timer);
  }, [activeIndex, activeWord.length, prefersReducedMotion, typedCount]);

  const completedWords = useMemo(() => {
    if (prefersReducedMotion) return entries.map((entry) => entry.word);

    return entries.map((entry, index) => {
      if (index < activeIndex) return entry.word;
      if (index === activeIndex) return entry.word.slice(0, typedCount);
      return "";
    });
  }, [activeIndex, prefersReducedMotion, typedCount]);

  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-sawa-yellow/25 bg-sawa-purple/[0.58] p-4 shadow-[0_24px_90px_rgba(42,26,94,0.42)] backdrop-blur-2xl sm:p-5"
      aria-label="SAWA means Storytelling, Arts, Wonders of Africa"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-bead-line" />
      <div className="absolute -right-16 -top-16 size-36 rounded-full bg-sawa-yellow/20 blur-2xl" />
      <div className="grid gap-3">
        {entries.map((entry, index) => {
          const isActive = index === activeIndex && !prefersReducedMotion;
          const isComplete = prefersReducedMotion || index < activeIndex;
          const shownWord = completedWords[index];

          return (
            <motion.div
              key={`${entry.letter}-${entry.word}`}
              className={cn(
                "grid min-h-16 grid-cols-[4rem_1fr] items-center gap-4 rounded-2xl border bg-ivory/[0.035] p-2.5 transition",
                isActive && "bg-ivory/[0.08] shadow-glow",
                !isActive && !isComplete && "opacity-[0.62]"
              )}
              initial={prefersReducedMotion ? false : { opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
              style={{ borderColor: `${entry.color}66` }}
            >
              <span
                className={cn(
                  "grid size-14 place-items-center rounded-xl border font-display text-4xl leading-none shadow-[0_12px_40px_rgba(0,0,0,0.18)]",
                  entry.className
                )}
              >
                {entry.letter}
              </span>
              <span className="min-w-0">
                <span className="block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-ivory/45">
                  SAWA long form
                </span>
                <span
                  className="mt-1 block min-h-8 truncate font-display text-3xl leading-none text-ivory sm:text-4xl"
                  style={{ color: index === 0 ? "#F7F0DE" : entry.color }}
                >
                  {shownWord || <span className="text-ivory/25">waiting</span>}
                  {isActive ? (
                    <span className="ml-1 inline-block h-7 w-0.5 translate-y-1 animate-pulse bg-sawa-yellow" />
                  ) : null}
                </span>
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
