"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SawaEvent } from "@/data/events";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useReducedMotionPreference } from "@/components/ReducedMotionProvider";
import { cn } from "@/lib/utils";

type EventCardProps = {
  event: SawaEvent;
  featured?: boolean;
  className?: string;
};

export function EventCard({ event, featured = false, className }: EventCardProps) {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <motion.article
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-ivory/15 bg-charcoal-900/70 p-6 shadow-ocean sm:p-8",
        featured && "kanga-strip bg-[linear-gradient(135deg,rgba(251,229,85,0.16),rgba(251,146,36,0.12)_46%,rgba(244,89,5,0.14))]",
        className
      )}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.35 }}
    >
      <div className="absolute right-6 top-6 size-24 rounded-full border border-gold/15" />
      <div className="relative z-10">
        <div className="flex flex-wrap gap-3">
          <Badge tone={event.type === "Past" ? "ivory" : "gold"}>
            {event.type}
          </Badge>
          <Badge tone="ocean">{event.date}</Badge>
        </div>
        <h3 className="mt-6 font-display text-4xl leading-none text-ivory sm:text-5xl">
          {event.title}
        </h3>
        <p className="mt-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold/85">
          <MapPin className="size-4" aria-hidden="true" />
          {event.location}
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-ivory/65">
          {event.description}
        </p>
        <Button asChild variant="ghost" className="mt-7">
          <Link href="/performances">
            View Performances
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}
