"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Drama, Drum, Music2, type LucideIcon } from "lucide-react";
import type { Service } from "@/data/services";
import { useReducedMotionPreference } from "@/components/ReducedMotionProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const toneStyles = {
  yellow: {
    card: "border-sawa-yellow/30 bg-[linear-gradient(135deg,rgba(251,229,85,0.16),rgba(42,26,94,0.34))]",
    icon: "bg-sawa-yellow text-sawa-purple",
    text: "text-sawa-yellow"
  },
  orange: {
    card: "border-sawa-orange/30 bg-[linear-gradient(135deg,rgba(251,146,36,0.16),rgba(42,26,94,0.34))]",
    icon: "bg-sawa-orange text-sawa-purple",
    text: "text-sawa-orange"
  },
  flame: {
    card: "border-sawa-flame/30 bg-[linear-gradient(135deg,rgba(244,89,5,0.18),rgba(42,26,94,0.34))]",
    icon: "bg-sawa-flame text-ivory",
    text: "text-sawa-flame"
  }
};

const icons: Record<Service["icon"], LucideIcon> = {
  workshop: Drum,
  theater: Drama,
  concert: Music2
};

export function ServiceCard({ service }: { service: Service }) {
  const prefersReducedMotion = useReducedMotionPreference();
  const Icon = icons[service.icon];
  const tone = toneStyles[service.tone];

  return (
    <motion.article
      className={cn(
        "group flex h-full min-h-[24rem] flex-col justify-between overflow-hidden rounded-[1.75rem] border p-7 shadow-ocean",
        tone.card
      )}
      whileHover={prefersReducedMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div>
        <span className={cn("grid size-16 place-items-center rounded-2xl", tone.icon)}>
          <Icon className="size-8" aria-hidden="true" />
        </span>
        <p className={cn("mt-8 text-sm font-semibold uppercase tracking-[0.22em]", tone.text)}>
          SAWA service
        </p>
        <h3 className="mt-4 font-display text-5xl leading-none text-ivory">
          {service.title}
        </h3>
        <p className="mt-4 text-lg font-semibold leading-7 text-ivory/82">
          {service.subtitle}
        </p>
        <p className="mt-5 text-sm leading-7 text-ivory/65">
          {service.description}
        </p>
      </div>

      <Button asChild variant="ghost" className="mt-8 w-fit">
        <Link href={service.href}>
          {service.action}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </Button>
    </motion.article>
  );
}
