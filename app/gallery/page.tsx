import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Camera, Film, Headphones, Newspaper } from "lucide-react";
import { AudioPreviewCard } from "@/components/AudioPreviewCard";
import { CTASection } from "@/components/CTASection";
import { MediaCard } from "@/components/MediaCard";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { SafeImage } from "@/components/SafeImage";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { mediaItems } from "@/data/media";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the SAWA Ensemble gallery with photos, performance films, audio previews, rehearsal moments, story archive notes, and press materials."
};

const galleryImages = [
  "/images/sawa/landing/Sufi Fest_2026_Day one_024.jpg",
  "/images/sawa/landing/Squad.jpg",
  "/images/sawa/landing/DSC_8217.jpg",
  "/images/sawa/landing/Sufi Fest_2026_Day one_031.jpg",
  "/images/sawa/landing/Sufi Fest_2026_Day one_050.jpg",
  "/images/sawa/workshops/ngoma.jpeg",
  "/images/sawa/landing/Sufi Fest_2026_Day one_007.jpg"
];

const previews = [
  {
    title: "Gather Loop",
    label: "Soft voice, duuf, ambient rhythm",
    src: "/audio/gather.mp3",
    description: "A quiet opening mood for circles, voices, and arrival."
  },
  {
    title: "Move Pulse",
    label: "Ngoma and layered percussion",
    src: "/audio/move.mp3",
    description: "A rhythm-led preview for dance, motion, and call."
  },
  {
    title: "Rise Swell",
    label: "Wide ensemble swell",
    src: "/audio/rise.mp3",
    description: "A wider stage mood where voices and instruments lift together."
  }
];

export default function GalleryPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-36">
        <div className="absolute right-0 top-20 size-[34rem] rounded-full opacity-30 rhythm-ring" />
        <div className="container pb-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Gallery, listen, watch
            </p>
            <h1 className="mt-6 max-w-6xl font-display text-6xl leading-[0.88] text-balance text-ivory sm:text-8xl lg:text-9xl">
              The archive begins with a pulse.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-ivory/70">
              A home for photographs, audio previews, performance films,
              rehearsal fragments, portraits, behind-the-scenes moments, story
              archive entries, and press materials.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-950 py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Audio"
              title="Listen to the pulse."
              text="Audio previews are silent by default and only play after a clear user action."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {previews.map((preview, index) => (
              <Reveal key={preview.title} delay={index * 0.08}>
                <AudioPreviewCard {...preview} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-ivory/15 bg-charcoal-900 shadow-ocean">
              <SafeImage
                src="/images/sawa/landing/Sufi Fest_2026_Day one_050.jpg"
                alt="Video placeholder for SAWA Ensemble performance"
                className="aspect-video"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-0 grid place-items-center bg-charcoal-950/20">
                <span className="grid size-20 place-items-center rounded-full border border-ivory/25 bg-ivory/10 text-ivory backdrop-blur">
                  <Film className="size-8" aria-hidden="true" />
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionHeading
              eyebrow="Video"
              title="Watch the Ensemble."
              text="Performance films, rehearsal fragments, artist portraits, and stage atmospheres will live here as the gallery grows."
            />
            <Button asChild className="mt-8" variant="gold">
              <Link href="/contact">
                Request Gallery Access
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
              eyebrow="Photo gallery"
              title="Hands, faces, instruments, fabric, light."
              text="A cinematic gallery for portraits, rehearsals, workshops, performance moments, and cultural textures."
            />
          </Reveal>
          <div className="mt-12 grid auto-rows-[16rem] gap-4 md:grid-cols-4">
            {galleryImages.map((image, index) => (
              <Reveal
                key={image}
                delay={index * 0.04}
                className={index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""}
              >
                <SafeImage
                  src={image}
                  alt={`SAWA gallery image ${index + 1}`}
                  className="size-full rounded-[1.5rem] border border-ivory/15"
                  sizes="(min-width: 768px) 25vw, 100vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Archive"
              title="Explore the Archive."
              text="Story notes, rehearsal studies, press materials, and traces from the community learning space."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {mediaItems.slice(1).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <MediaCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-950 py-24 sm:py-32">
        <div className="container grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Behind the scenes",
              text: "Rehearsal notes, room tone, instrument preparation, and the quiet labor before a performance.",
              icon: Camera
            },
            {
              title: "Story archive",
              text: "Fragments of cultural memory, workshop learning, craft process, and artist reflections.",
              icon: Headphones
            },
            {
              title: "Press and gallery",
              text: "A future press area for bios, photography, program notes, and booking-ready materials.",
              icon: Newspaper
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="h-full rounded-[1.75rem] border border-ivory/15 bg-ivory/[0.045] p-7">
                  <Icon className="size-7 text-gold" aria-hidden="true" />
                  <h2 className="mt-6 font-display text-4xl leading-none text-ivory">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-ivory/65">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Invite the sound before the gallery is complete."
        text="For bookings, gallery requests, and collaborative programs, reach SAWA directly."
      />
    </PageTransition>
  );
}
