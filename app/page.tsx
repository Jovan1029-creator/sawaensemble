import Link from "next/link";
import { ArrowUpRight, HandHeart, Paintbrush, Sprout, UsersRound } from "lucide-react";
import { ArtistCard } from "@/components/ArtistCard";
import { CTASection } from "@/components/CTASection";
import { EventCard } from "@/components/EventCard";
import { HeroSawaStates } from "@/components/HeroSawaStates";
import { MediaCard } from "@/components/MediaCard";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StoryBlock } from "@/components/StoryBlock";
import { WorkshopCard } from "@/components/WorkshopCard";
import { Button } from "@/components/ui/button";
import { artists } from "@/data/artists";
import { featuredEvent } from "@/data/events";
import { mediaItems } from "@/data/media";
import { workshops } from "@/data/workshops";

const pillars = [
  {
    title: "Storytelling",
    text: "Voices carrying memory, devotion, and lived experience.",
    icon: UsersRound
  },
  {
    title: "Art",
    text: "Movement, music, craft, theatre, and ritual in one living space.",
    icon: Paintbrush
  },
  {
    title: "Wonders of Africa",
    text: "A celebration of heritage as something present, evolving, and shared.",
    icon: Sprout
  }
];

const communityActivities = [
  "Traditional dance",
  "Drumming",
  "Pottery",
  "Eco-printing",
  "Makuti weaving",
  "Bracelet making",
  "Painting",
  "Storytelling",
  "Music training"
];

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSawaStates />

      <section id="experience" className="bg-charcoal-950 py-8">
        <div className="container">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-ivory/15 bg-ivory/[0.045] md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} className="border-ivory/10 p-6 md:border-r last:md:border-r-0">
                  <Icon className="size-6 text-gold" aria-hidden="true" />
                  <h2 className="mt-5 font-display text-3xl text-ivory">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-ivory/65">
                    {pillar.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="About SAWA"
              title="Not performance. Presence."
              text="SAWA Ensemble brings together music, theatre, dance, ritual, and traditional knowledge in a shared artistic space. Rooted in Zanzibar and connected to the wider African creative spirit, SAWA creates moments where audience and performers inhabit the same story in real time."
            />
            <Button asChild className="mt-8" variant="gold">
              <Link href="/about">
                Read the SAWA Story
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] border border-ivory/15 bg-sawa-radial p-8 shadow-ocean">
              <div className="absolute -right-20 top-12 size-80 rounded-full opacity-35 rhythm-ring" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-bead-line" />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <p className="max-w-md font-display text-5xl leading-[0.95] text-ivory sm:text-6xl">
                  African creativity is a living force.
                </p>
                <p className="mt-6 max-w-lg text-base leading-8 text-ivory/65">
                  Drum, voice, movement, cloth, clay, palm, and story do not sit
                  apart. In SAWA, they gather as one ecosystem of learning.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-950 py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Featured performance"
              title="Rhythm enters the room before the first word."
              text="A placeholder event system for upcoming performances, festival bookings, cultural evenings, and community gatherings."
            />
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <EventCard event={featuredEvent} featured />
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Artists"
              title="The SAWA circle."
              text="Musicians, storytellers, dancers, educators, makers, mentors, and cultural practitioners carrying one shared breath."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {artists.map((artist, index) => (
              <Reveal key={artist.slug} delay={index * 0.04}>
                <ArtistCard artist={artist} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-950 py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Workshops"
              title="Learning happens through the hands, feet, and voice."
              text="Premium cultural workshops rooted in rhythm, craft, coastal knowledge, and shared practice."
            />
          </Reveal>
          <div className="mt-12 grid gap-7">
            {workshops.map((workshop, index) => (
              <Reveal key={workshop.slug} delay={index * 0.05}>
                <WorkshopCard workshop={workshop} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Media"
              title="Listen. Watch. Enter the archive."
              text="A growing media home for audio previews, performance films, rehearsal fragments, portraits, and stories behind the work."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {mediaItems.slice(0, 3).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <MediaCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-950 py-24 sm:py-32">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Community and learning"
              title="If it is shared, it survives."
              text="SAWA operates as both an ensemble and a learning space. Workshops and community engagement are not side activities; they are part of the core identity."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2">
              {communityActivities.map((activity) => (
                <div
                  key={activity}
                  className="flex items-center gap-4 rounded-2xl border border-ivory/15 bg-ivory/[0.045] p-4"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                    <HandHeart className="size-5" aria-hidden="true" />
                  </span>
                  <p className="font-semibold text-ivory">{activity}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container grid gap-6 lg:grid-cols-3">
          <Reveal>
            <StoryBlock eyebrow="Sound" title="Duuf, ngoma, voice, and swell.">
              <p>
                SAWA&apos;s sound is intimate and expansive: devotional pulse,
                traditional hand drums, bass, piano, melody, and collective voice.
              </p>
            </StoryBlock>
          </Reveal>
          <Reveal delay={0.1}>
            <StoryBlock eyebrow="Movement" title="Where rhythm becomes memory.">
              <p>
                Dance is not decoration. It is a way of holding history in the
                body and bringing people into the same present moment.
              </p>
            </StoryBlock>
          </Reveal>
          <Reveal delay={0.2}>
            <StoryBlock eyebrow="Learning" title="Culture practiced together.">
              <p>
                Clay, bead, palm, cloth, story, and music become pathways for
                visitors and community members to learn through making.
              </p>
            </StoryBlock>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
