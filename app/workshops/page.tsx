import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkshopCard } from "@/components/WorkshopCard";
import { Button } from "@/components/ui/button";
import { workshops } from "@/data/workshops";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Book SAWA Ensemble workshops in ngoma, pottery, bracelet making, eco-printing, makuti weaving, storytelling, and community learning."
};

const workshopValues = [
  "Grounded facilitation for visitors, schools, retreats, and festivals",
  "Materials, setup, and cultural context included",
  "Designed for participation, respect, and shared memory",
  "Adaptable formats for private groups and community programs"
];

export default function WorkshopsPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-36">
        <div className="absolute right-0 top-20 size-[34rem] rounded-full opacity-30 rhythm-ring" />
        <div className="container grid gap-12 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Workshops
            </p>
            <h1 className="mt-6 max-w-6xl font-display text-6xl leading-[0.88] text-balance text-ivory sm:text-8xl lg:text-9xl">
              Learn through rhythm, clay, cloth, bead, and palm.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-ivory/70">
              SAWA workshops are participatory cultural encounters. They are
              crafted for people who want to make, move, listen, and understand
              through direct practice.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-[2rem] border border-ivory/15 bg-ivory/[0.045] p-7 shadow-ocean">
              <div className="grid gap-4">
                {workshopValues.map((value) => (
                  <div key={value} className="flex gap-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                    <p className="text-sm leading-7 text-ivory/70">{value}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-7 w-full" variant="gold">
                <Link href="/contact">
                  Start a Workshop Inquiry
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-950 py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Workshop menu"
              title="Every session leaves a trace."
              text="Participants take home not just an object or a rhythm, but a memory of learning in relation to culture, community, and place."
            />
          </Reveal>
          <div className="mt-12 grid gap-8">
            {workshops.map((workshop, index) => (
              <Reveal key={workshop.slug} delay={index * 0.05}>
                <WorkshopCard workshop={workshop} detailed />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            {
              title: "For schools",
              text: "Age-aware sessions connecting movement, rhythm, craft, and cultural learning."
            },
            {
              title: "For festivals",
              text: "Hands-on cultural programming that complements SAWA's performance work."
            },
            {
              title: "For retreats",
              text: "Slow, grounded workshops for groups seeking presence, creativity, and connection."
            }
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="min-h-72 rounded-[1.75rem] border border-ivory/15 bg-ivory/[0.045] p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  Format
                </p>
                <h2 className="mt-5 font-display text-4xl text-ivory">
                  {item.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-ivory/65">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Host a workshop that feels rooted, beautiful, and alive."
        text="SAWA can adapt workshop timing, group size, and focus for your community, school, festival, hotel, or retreat."
      />
    </PageTransition>
  );
}
