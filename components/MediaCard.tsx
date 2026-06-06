"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Camera, FileText, Headphones, Play } from "lucide-react";
import { MediaItem } from "@/data/media";
import { SafeImage } from "@/components/SafeImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useReducedMotionPreference } from "@/components/ReducedMotionProvider";
import { cn } from "@/lib/utils";

const icons = {
  Audio: Headphones,
  Video: Play,
  Photo: Camera,
  Story: FileText,
  Press: FileText
};

type MediaCardProps = {
  item: MediaItem;
  className?: string;
};

export function MediaCard({ item, className }: MediaCardProps) {
  const prefersReducedMotion = useReducedMotionPreference();
  const Icon = icons[item.kind];

  return (
    <motion.article
      className={cn(
        "group overflow-hidden rounded-[1.75rem] border border-ivory/15 bg-ivory/[0.045]",
        className
      )}
      whileHover={prefersReducedMotion ? undefined : { y: -7 }}
      transition={{ duration: 0.35 }}
    >
      <SafeImage
        src={item.image}
        alt={`${item.title} gallery item`}
        className="aspect-[16/11]"
        imageClassName="transition duration-700 group-hover:scale-105"
        sizes="(min-width: 1024px) 33vw, 100vw"
      />
      <div className="p-6">
        <Badge tone="ocean">
          <Icon className="mr-1 size-3" aria-hidden="true" />
          {item.kind}
        </Badge>
        <h3 className="mt-5 font-display text-3xl leading-none text-ivory">
          {item.title}
        </h3>
        <p className="mt-4 min-h-20 text-sm leading-7 text-ivory/60">
          {item.description}
        </p>
        <Button asChild variant="ghost" className="mt-4">
          <Link href="/gallery">
            {item.action}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}
