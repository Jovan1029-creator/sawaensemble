import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, GraduationCap, Sparkles, UsersRound } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { EventCard } from "@/components/EventCard";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { pastEvents, upcomingEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "Performances",
  description:
    "Upcoming performances, festival bookings, private cultural events, and community programs for SAWA Ensemble."
};

const bookingTypes = [
  {
    title: "Festival bookings",
    text: "Full ensemble performance for curated cultural programs and international stages.",
    icon: Sparkles
  },
  {
    title: "Private and cultural events",
    text: "Elegant performance formats for retreats, ceremonies, gatherings, and hosted evenings.",
    icon: UsersRound
  },
  {
    title: "School and community performances",
    text: "Educational presentations with rhythm, story, movement, and conversation.",
    icon: GraduationCap
  },
  {
    title: "Institutional programs",
    text: "Collaborations with foundations, venues, hotels, museums, and arts organizations.",
    icon: Building2
  }
];

export default function PerformancesPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-36">
        <div className="absolute right-0 top-20 size-[34rem] rounded-full opacity-30 rhythm-ring" />
        <div className="container pb-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Performances and events
            </p>
            <h1 className="mt-6 max-w-6xl font-display text-6xl leading-[0.88] text-balance text-ivory sm:text-8xl lg:text-9xl">
              A stage can become a circle.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-ivory/70">
              SAWA performances gather rhythm, theatre, voice, movement,
              devotion, and story into a shared present. The format can expand
              for festivals or become intimate for learning spaces.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-950 py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Upcoming"
              title="Upcoming performances."
              text="A placeholder event system ready for dates, ticket links, venue notes, and booking windows."
            />
          </Reveal>
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <Reveal key={event.title} delay={index * 0.08}>
                <EventCard event={event} featured={index === 0} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Bookings"
              title="Performance formats with cultural depth."
              text="SAWA can shape a performance arc for stages, schools, foundations, festivals, hotels, and cultural hosts."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {bookingTypes.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="h-full rounded-[1.75rem] border border-ivory/15 bg-ivory/[0.045] p-7">
                    <Icon className="size-7 text-gold" aria-hidden="true" />
                    <h2 className="mt-6 font-display text-4xl leading-none text-ivory">
                      {item.title}
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-ivory/65">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-12">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">
                Discuss a Performance
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-950 py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Past"
              title="Past performance notes."
              text="Early records of rehearsals, community cultural days, and gatherings that shaped the ensemble's first breath."
            />
          </Reveal>
          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {pastEvents.map((event, index) => (
              <Reveal key={event.title} delay={index * 0.08}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Bring SAWA to a room that is ready to listen."
        text="From large stages to intimate circles, SAWA builds performances around presence, unity, and cultural memory."
      />
    </PageTransition>
  );
}
