import type { Metadata } from "next";
import { ArtistCard } from "@/components/ArtistCard";
import { CTASection } from "@/components/CTASection";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { SafeImage } from "@/components/SafeImage";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { artists } from "@/data/artists";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "Meet the SAWA Ensemble artists, musicians, storytellers, dancers, educators, and cultural practitioners."
};

export default function ArtistsPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-36">
        <div className="absolute left-[55%] top-24 size-[34rem] rounded-full opacity-30 rhythm-ring" />
        <div className="container pb-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Artists and ensemble members
            </p>
            <h1 className="mt-6 max-w-6xl font-display text-6xl leading-[0.88] text-balance text-ivory sm:text-8xl lg:text-9xl">
              The people who carry the circle.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-ivory/70">
              SAWA is made by musicians, storytellers, dancers, teachers,
              makers, mentors, and cultural practitioners. Each artist brings a
              different door into the same living house.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-950 py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {artists.map((artist, index) => (
              <Reveal key={artist.slug} delay={index * 0.04}>
                <ArtistCard artist={artist} href={`#${artist.slug}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Biographies"
              title="Portraits in story."
              text="Expanded biographies for each member of the SAWA circle, written as living artist notes rather than static resumes."
            />
          </Reveal>

          <div className="mt-14 grid gap-10">
            {artists.map((artist, index) => (
              <Reveal key={artist.slug} delay={index * 0.04}>
                <article
                  id={artist.slug}
                  className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-ivory/15 bg-ivory/[0.045]"
                >
                  <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
                    <SafeImage
                      src={artist.portrait}
                      alt={`Editorial portrait placeholder for ${artist.name}`}
                      className="min-h-[28rem] lg:h-full"
                      sizes="(min-width: 1024px) 36vw, 100vw"
                    />
                    <div className="p-7 sm:p-10 lg:p-12">
                      <div className="flex flex-wrap gap-2">
                        {artist.tags.map((tag) => (
                          <Badge key={tag} tone="gold">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h2 className="mt-7 font-display text-5xl leading-[0.94] text-ivory sm:text-7xl">
                        {artist.name}
                      </h2>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold/85">
                        {artist.role}
                      </p>
                      <p className="mt-7 max-w-3xl text-xl leading-9 text-ivory/75">
                        {artist.intro}
                      </p>
                      <div className="mt-8 grid gap-5 text-base leading-8 text-ivory/65">
                        {artist.biography.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Book SAWA as a full ensemble, intimate circle, or learning experience."
        text="The ensemble can shape performance and workshop formats for festivals, schools, retreats, and cultural hosts."
      />
    </PageTransition>
  );
}
