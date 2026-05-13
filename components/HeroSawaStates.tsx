"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AnimatedWord } from "@/components/AnimatedWord";
import { AudioToggle } from "@/components/AudioToggle";
import { SafeImage } from "@/components/SafeImage";
import { useReducedMotionPreference } from "@/components/ReducedMotionProvider";
import { Button } from "@/components/ui/button";
import { heroStates } from "@/data/heroStates";
import { useAudioPreview } from "@/hooks/useAudioPreview";
import { cn } from "@/lib/utils";

const accentText = {
  gold: "text-gold",
  ocean: "text-cyan-100",
  clay: "text-orange-100",
  palm: "text-emerald-100"
};

const accentBg = {
  gold: "bg-gold",
  ocean: "bg-ocean",
  clay: "bg-clay",
  palm: "bg-palm"
};

export function HeroSawaStates() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotionPreference();
  const current = heroStates[index];

  const audio = useAudioPreview({
    src: current.audio,
    label: current.mood
  });

  const wordSizeClass =
    current.headline.length >= 8
      ? "text-[clamp(3rem,9.2vw,9.25rem)]"
      : current.headline.length >= 7
        ? "text-[clamp(3.1rem,10vw,10rem)]"
        : "text-[clamp(3.35rem,12vw,12rem)]";

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
      className="relative min-h-[100svh] overflow-hidden pt-20 text-ivory"
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

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,4,0.92),rgba(5,5,4,0.62)_44%,rgba(5,5,4,0.3)),linear-gradient(0deg,rgba(5,5,4,0.98),rgba(5,5,4,0.18)_42%,rgba(5,5,4,0.76))]" />
      <div className="absolute -right-28 top-28 hidden size-[34rem] rounded-full opacity-40 blur-sm rhythm-ring lg:block" />
      <div className="absolute bottom-16 left-10 hidden size-56 rounded-full border border-gold/15 lg:block">
        <span className="absolute inset-4 rounded-full border border-ocean/25" />
        <span className="absolute inset-9 rounded-full border border-clay/25" />
      </div>

      <div className="container relative z-10 grid min-h-[calc(100svh-5rem)] min-w-0 items-end gap-10 pb-8 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,25rem)] lg:pb-12">
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

          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-gold">
            SAWA Ensemble
          </p>
          <h1
            id="sawa-states-title"
            className={cn(
              "mt-5 max-w-full overflow-visible font-display leading-[0.8] tracking-normal text-ivory",
              wordSizeClass
            )}
          >
            <AnimatedWord word={current.headline} />
          </h1>
          <div className="mt-7 max-w-4xl">
            <p className={cn("text-xl leading-9 text-balance sm:text-3xl", accentText[current.accent])}>
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
              <Link href="/workshops">
                <CalendarDays aria-hidden="true" />
                Book a Workshop
              </Link>
            </Button>
          </div>
        </div>

        <div className="min-w-0 space-y-4 lg:w-full lg:max-w-[25rem] lg:justify-self-end lg:self-end">
          <AudioToggle
            enabled={audio.enabled}
            isPlaying={audio.isPlaying}
            muted={audio.muted}
            hasError={audio.hasError}
            label={audio.label}
            onPlay={audio.play}
            onTogglePlay={audio.togglePlay}
            onToggleMute={audio.toggleMute}
            onContinueSilently={audio.continueSilently}
          />

          <div className="grid w-full min-w-0 grid-cols-4 gap-2 rounded-2xl border border-ivory/15 bg-charcoal-950/45 p-2 backdrop-blur-xl">
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
                  <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.16em] text-ivory/40">
                    Mood
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
