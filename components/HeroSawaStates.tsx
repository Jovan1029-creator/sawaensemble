"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AnimatedWord } from "@/components/AnimatedWord";
import { LandingImageCarousel } from "@/components/LandingImageCarousel";
import { SafeImage } from "@/components/SafeImage";
import { SawaLongFormTypewriter } from "@/components/SawaLongFormTypewriter";
import { useReducedMotionPreference } from "@/components/ReducedMotionProvider";
import { Button } from "@/components/ui/button";
import { heroStates } from "@/data/heroStates";
import { cn } from "@/lib/utils";

const accentText = {
  gold: "text-gold",
  ocean: "text-sawa-orange",
  clay: "text-sawa-flame",
  palm: "text-sawa-yellow"
};

const accentBg = {
  gold: "bg-sawa-yellow",
  ocean: "bg-sawa-orange",
  clay: "bg-sawa-flame",
  palm: "bg-sawa-yellow"
};

export function HeroSawaStates() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotionPreference();
  const current = heroStates[index];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % heroStates.length);
    }, 4300);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  const visibleStates = useMemo(
    () =>
      ["Gather", "Move", "Remember", "Rise"]
        .map((word) => heroStates.find((state) => state.word === word))
        .filter((state): state is (typeof heroStates)[number] => Boolean(state)),
    []
  );

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-sawa-purple pt-20 text-ivory"
      aria-labelledby="sawa-states-title"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.image}
          className="absolute inset-0"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <SafeImage
            src={current.image}
            alt={current.visualAlt}
            priority
            className="size-full"
            imageClassName="opacity-72"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(42,26,94,0.96),rgba(42,26,94,0.72)_42%,rgba(42,26,94,0.42)),linear-gradient(0deg,rgba(7,4,17,0.98),rgba(42,26,94,0.24)_45%,rgba(7,4,17,0.72))]" />
      <div className="absolute -right-28 top-28 hidden size-[34rem] rounded-full opacity-45 blur-sm rhythm-ring lg:block" />
      <div className="absolute left-0 top-20 h-2 w-full bg-bead-line" />
      <div className="absolute bottom-16 left-10 hidden size-56 rounded-full border border-sawa-yellow/20 lg:block">
        <span className="absolute inset-4 rounded-full border border-sawa-orange/25" />
        <span className="absolute inset-9 rounded-full border border-sawa-flame/25" />
      </div>

      <div className="container relative z-10 grid min-h-[calc(100svh-5rem)] min-w-0 items-center gap-10 pb-8 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(23rem,34rem)] lg:pb-12">
        <div className="min-w-0 max-w-6xl">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex flex-wrap items-center gap-3 text-sm text-ivory/70"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-ivory/10 px-3 py-1.5 backdrop-blur">
              <Sparkles className="size-4 text-gold" aria-hidden="true" />
              SAWA States
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-gold" aria-hidden="true" />
              Kizimkazi, Zanzibar
            </span>
          </motion.div>

          <h1
            id="sawa-states-title"
            className="max-w-full overflow-visible font-display leading-[0.82] tracking-normal text-ivory"
          >
            <span className="block text-[clamp(5.4rem,16vw,14rem)] text-sawa-yellow drop-shadow-[0_12px_60px_rgba(251,229,85,0.2)]">
              SAWA
            </span>
            <span className="-mt-2 block text-[clamp(3.1rem,7.4vw,7rem)] text-ivory">
              Ensemble
            </span>
          </h1>

          <div className="mt-7 max-w-2xl">
            <SawaLongFormTypewriter />
          </div>

          <div className="mt-7 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sawa-orange">
              Current state:{" "}
              <span className={cn("inline-block", accentText[current.accent])}>
                <AnimatedWord word={current.headline} />
              </span>
            </p>
            <p className="mt-4 text-xl leading-9 text-balance text-ivory sm:text-3xl">
              {current.subline}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ivory/65 sm:text-lg">
              Storytelling. Art. Wonders of Africa. A living ensemble where
              rhythm, theatre, devotion, craft, and community learning breathe
              in the same circle.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="gold">
              <Link href="#experience">
                Experience SAWA
                <ArrowDown aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="#services">
                <Sparkles aria-hidden="true" />
                Our Services
              </Link>
            </Button>
          </div>
        </div>

        <div className="min-w-0 space-y-4 lg:w-full lg:max-w-[34rem] lg:justify-self-end">
          <LandingImageCarousel />

          <div className="grid w-full min-w-0 grid-cols-4 gap-2 rounded-2xl border border-sawa-yellow/20 bg-sawa-purple/55 p-2 backdrop-blur-xl">
            {visibleStates.map((state) => {
              const targetIndex = heroStates.findIndex((item) => item.word === state.word);
              const active = current.word === state.word;
              return (
                <button
                  key={state.word}
                  type="button"
                  onClick={() => setIndex(targetIndex)}
                  className={cn(
                    "group min-h-16 rounded-xl border border-transparent p-2 text-left transition hover:border-ivory/15 hover:bg-ivory/10",
                    active && "border-gold/35 bg-gold/10"
                  )}
                  aria-pressed={active}
                >
                  <span
                    className={cn(
                      "mb-2 block h-1 rounded-full transition",
                      active ? accentBg[state.accent] : "bg-ivory/20"
                    )}
                  />
                  <span className="block truncate text-xs font-semibold text-ivory">
                    {state.word}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
