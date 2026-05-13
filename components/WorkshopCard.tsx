"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { Workshop } from "@/data/workshops";
import { SafeImage } from "@/components/SafeImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useReducedMotionPreference } from "@/components/ReducedMotionProvider";
import { cn } from "@/lib/utils";

type WorkshopCardProps = {
  workshop: Workshop;
  detailed?: boolean;
  className?: string;
};

export function WorkshopCard({
  workshop,
  detailed = false,
  className
}: WorkshopCardProps) {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <motion.article
      id={workshop.slug}
      className={cn(
        "group overflow-hidden rounded-[1.75rem] border border-sand/20 bg-[linear-gradient(135deg,rgba(247,240,222,0.08),rgba(216,166,66,0.06)_34%,rgba(29,105,130,0.08))] shadow-ocean",
        className
      )}
      whileHover={prefersReducedMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="grid md:grid-cols-[0.9fr_1.1fr]">
        <SafeImage
          src={workshop.image}
          alt={`${workshop.title} workshop placeholder`}
          className="min-h-72 md:h-full"
          imageClassName="transition duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 38vw, 100vw"
        />
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="gold">
              <Clock3 className="mr-1 size-3" aria-hidden="true" />
              {workshop.duration}
            </Badge>
            <Badge tone="clay">Workshop</Badge>
          </div>
          <h3 className="mt-5 font-display text-4xl leading-none text-ivory">
            {workshop.title}
          </h3>
          <p className="mt-2 text-lg text-gold/90">{workshop.subtitle}</p>
          <p className="mt-5 text-sm leading-7 text-ivory/65">
            {workshop.description}
          </p>

          {detailed ? (
            <div className="mt-6 grid gap-5 text-sm leading-7 text-ivory/65">
              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-ivory">
                  Who it is for
                </p>
                <p className="mt-2">{workshop.forWhom}</p>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-ivory">
                  What participants learn
                </p>
                <ul className="mt-2 grid gap-2">
                  {workshop.learn.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-px w-5 shrink-0 bg-gold/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-semibold uppercase tracking-[0.16em] text-ivory">
                    Take home
                  </p>
                  <p className="mt-2">{workshop.takeHome}</p>
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-[0.16em] text-ivory">
                    Materials
                  </p>
                  <p className="mt-2">{workshop.materials}</p>
                </div>
              </div>
            </div>
          ) : null}

          <Button asChild variant="gold" className="mt-7">
            <Link href="/contact">
              Book Workshop
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
