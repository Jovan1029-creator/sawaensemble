import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Music2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { SafeImage } from "@/components/SafeImage";
import { SectionHeading } from "@/components/SectionHeading";
import { StoryBlock } from "@/components/StoryBlock";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The origin, meaning, mission, and living cultural identity of SAWA Ensemble from Kizimkazi, Zanzibar."
};

const manifestoLines = [
  "Culture is not a museum object.",
  "A rhythm survives because someone answers it.",
  "A story survives because someone carries it into another room.",
  "A craft survives because hands keep learning.",
  "SAWA exists for that living exchange."
];

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-36">
        <div className="absolute right-0 top-24 size-[30rem] rounded-full opacity-30 rhythm-ring" />
        <div className="container grid gap-12 pb-20 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              About SAWA
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.9] text-balance text-ivory sm:text-8xl lg:text-9xl">
              Founded in Kizimkazi. Built from shared breath.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-ivory/70">
              SAWA Ensemble was founded in 2025 in Kizimkazi, Zanzibar, within
              the Assalam Community Foundation. It is an ensemble, a learning
              space, and a living cultural circle.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <SafeImage
              src="/images/sawa/landing/Sufi Fest_2026_Day one_024.jpg"
              alt="SAWA Ensemble origin in Kizimkazi placeholder"
              className="aspect-[4/5] rounded-[2rem] border border-ivory/15 shadow-ocean"
              sizes="(min-width: 1024px) 38vw, 100vw"
              priority
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-950 py-24 sm:py-32">
        <div className="container grid gap-6 lg:grid-cols-3">
          <Reveal>
            <StoryBlock eyebrow="Meaning" title="Storytelling. Art. Wonders of Africa.">
              <p>
                SAWA stands for Storytelling, Art, and the Wonders of Africa.
                The name is a promise: to gather forms of expression that have
                always belonged to community life and let them speak with a
                contemporary voice.
              </p>
            </StoryBlock>
          </Reveal>
          <Reveal delay={0.1}>
            <StoryBlock eyebrow="Sound" title="A living force.">
              <p>
                The ensemble uses duuf, ngoma, traditional hand drums, voices,
                bass, piano, melodic layers, movement, and theatre to create
                presence, unity, love, spiritual connection, and cultural memory.
              </p>
            </StoryBlock>
          </Reveal>
          <Reveal delay={0.2}>
            <StoryBlock eyebrow="Memory" title="Tradition is not frozen.">
              <p>
                Culture does not stay alive because it is stored away. It stays
                alive because it is practiced, questioned, taught, sung, danced,
                carried, and shared.
              </p>
            </StoryBlock>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Mission"
              title="Unity, love, and spiritual connection."
              text="SAWA creates spaces where performance becomes a shared state. Audience and artist are not separated by spectacle; they meet through rhythm, breath, story, movement, and attention."
            />
            <Button asChild className="mt-8" variant="gold">
              <Link href="/performances">
                See Performances
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <div className="grid gap-6">
            <Reveal>
              <div className="rounded-[1.75rem] border border-ivory/15 bg-ivory/[0.045] p-7 sm:p-9">
                <h2 className="font-display text-5xl leading-none text-ivory">
                  Culture as living memory.
                </h2>
                <p className="mt-5 text-base leading-8 text-ivory/65">
                  SAWA honors African creativity as a present tense. The work is
                  rooted in Zanzibar&apos;s coastal identity and open to the wider
                  African creative spirit: Sufi devotional traditions, rhythm
                  languages, theatre, craft, dance, and intergenerational
                  learning.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-[1.75rem] border border-ivory/15 bg-[linear-gradient(135deg,rgba(251,229,85,0.14),rgba(251,146,36,0.1),rgba(42,26,94,0.22))] p-7 sm:p-9">
                <h2 className="font-display text-5xl leading-none text-ivory">
                  Ensemble as learning space.
                </h2>
                <p className="mt-5 text-base leading-8 text-ivory/70">
                  Workshops are not an appendix. They are part of the ensemble&apos;s
                  identity: drumming, dance, pottery, bracelet making,
                  eco-printing, makuti weaving, painting, storytelling, and
                  music training all belong to the same cultural ecosystem.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-charcoal-950 py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <Music2 className="mx-auto size-8 text-gold" aria-hidden="true" />
              <h2 className="mt-6 font-display text-5xl leading-[0.95] text-ivory sm:text-7xl">
                A closing manifesto.
              </h2>
              <div className="mt-10 grid gap-4">
                {manifestoLines.map((line) => (
                  <p
                    key={line}
                    className="rounded-full border border-ivory/15 bg-ivory/[0.045] px-5 py-4 text-base text-ivory/75 sm:text-xl"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Invite the living force of SAWA into your next gathering."
        text="For stages, schools, festivals, retreats, and cultural programs seeking presence rather than decoration."
      />
    </PageTransition>
  );
}
