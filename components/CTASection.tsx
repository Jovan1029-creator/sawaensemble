import Link from "next/link";
import { ArrowUpRight, Mail, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "Bring SAWA to your stage, school, festival, retreat, or community.",
  text = "Invite a living circle of music, theatre, rhythm, craft, storytelling, and spiritual connection into your program."
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 py-24 text-ivory sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute left-1/2 top-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 rhythm-ring" />
      <div className="container relative z-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-gold">
          Book the circle
        </p>
        <h2 className="mx-auto mt-6 max-w-5xl font-display text-5xl leading-[0.92] text-balance sm:text-7xl lg:text-8xl">
          {title}
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-ivory/65 sm:text-lg">
          {text}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="gold">
            <Link href="/contact">
              <Music2 aria-hidden="true" />
              Book SAWA Ensemble
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href="/workshops">
              Host a Workshop
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href="/contact">
              <Mail aria-hidden="true" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
