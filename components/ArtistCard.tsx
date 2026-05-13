"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Artist } from "@/data/artists";
import { SafeImage } from "@/components/SafeImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useReducedMotionPreference } from "@/components/ReducedMotionProvider";
import { cn } from "@/lib/utils";

type ArtistCardProps = {
  artist: Artist;
  href?: string;
  className?: string;
};

export function ArtistCard({ artist, href, className }: ArtistCardProps) {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <motion.article
      className={cn(
        "group overflow-hidden rounded-[1.75rem] border border-ivory/15 bg-ivory/[0.045] shadow-ocean",
        className
      )}
      whileHover={prefersReducedMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <SafeImage
        src={artist.portrait}
        alt={`Portrait placeholder for ${artist.name}`}
        className="aspect-[4/5] w-full"
        imageClassName="transition duration-700 group-hover:scale-105"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {artist.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} tone="ivory" className="tracking-[0.14em]">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="font-display text-3xl leading-none text-ivory">
          {artist.name}
        </h3>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-gold/85">
          {artist.role}
        </p>
        <p className="mt-4 min-h-20 text-sm leading-7 text-ivory/65">
          {artist.intro}
        </p>
        <Button asChild variant="ghost" className="mt-5">
          <Link href={href ?? `/artists#${artist.slug}`}>
            Read Biography
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}
