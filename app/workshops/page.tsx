import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Drum,
  Hand,
  MapPin,
  MessageCircle,
  Music2,
  Sparkles,
  UsersRound
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { SafeImage } from "@/components/SafeImage";
import { Button } from "@/components/ui/button";
import { contactPhoneDisplay, whatsappUrl } from "@/data/contact";
import { workshops } from "@/data/workshops";

export const metadata: Metadata = {
  title: "Ngoma Workshop",
  description:
    "Book SAWA Ensemble's Ngoma Workshop in Kizimkazi, Zanzibar: a 45-minute call-and-response experience with drum, movement, story, and community rhythm."
};

const workshop = workshops[0];

const rhythmPath = [
  {
    title: "Arrive in circle",
    text: "The session begins by gathering people into one shared pulse.",
    icon: UsersRound
  },
  {
    title: "Hear the call",
    text: "Participants learn a simple rhythm and answer it together.",
    icon: Drum
  },
  {
    title: "Add the body",
    text: "Easy traditional movement brings the rhythm into memory.",
    icon: Hand
  },
  {
    title: "Understand the story",
    text: "Harvest, celebration, and community become part of the sound.",
    icon: Music2
  }
];

const formats = [
  {
    title: "Visitors",
    text: "A vivid cultural encounter for travelers who want to participate, not only watch."
  },
  {
    title: "Schools",
    text: "An energetic learning session connecting rhythm, movement, listening, and heritage."
  },
  {
    title: "Festivals",
    text: "A participatory workshop that can sit beautifully beside SAWA performance programming."
  },
  {
    title: "Retreats",
    text: "A grounding group experience built around presence, breath, and shared rhythm."
  }
];

export default function WorkshopsPage() {
  const whatsappMessage =
    "Hello SAWA Ensemble, I would like to book or ask about the Ngoma Workshop.";

  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-sawa-purple pt-36 text-ivory">
        <div className="absolute inset-x-0 top-20 h-2 bg-bead-line" />
        <div className="absolute -left-24 top-32 size-[28rem] rounded-full opacity-35 rhythm-ring" />
        <div className="absolute -right-32 bottom-8 size-[34rem] rounded-full bg-sawa-flame/20 blur-3xl" />

        <div className="container relative z-10 grid gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-sawa-yellow/25 bg-sawa-yellow/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-sawa-yellow">
              <Sparkles className="size-4" aria-hidden="true" />
              SAWA Workshop
            </p>
            <h1 className="mt-7 max-w-5xl font-display text-6xl leading-[0.86] text-balance text-ivory sm:text-8xl lg:text-9xl">
              Ngoma Workshop
            </h1>
            <p className="mt-5 max-w-3xl font-display text-3xl leading-none text-sawa-yellow sm:text-5xl">
              {workshop.title}
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-ivory/72">
              {workshop.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-ivory/10 px-4 py-2 text-sm font-semibold text-ivory">
                <Clock3 className="size-4 text-sawa-yellow" aria-hidden="true" />
                {workshop.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-ivory/10 px-4 py-2 text-sm font-semibold text-ivory">
                <MapPin className="size-4 text-sawa-yellow" aria-hidden="true" />
                Kizimkazi, Zanzibar
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-ivory/10 px-4 py-2 text-sm font-semibold text-ivory">
                <Drum className="size-4 text-sawa-yellow" aria-hidden="true" />
                Call and response
              </span>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="gold">
                <Link
                  href={whatsappUrl(whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  Book on WhatsApp
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="#workshop-flow">
                  See the Flow
                  <ArrowDown aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <p className="mt-5 text-sm text-ivory/55">
              WhatsApp: {contactPhoneDisplay}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[linear-gradient(135deg,#FBE555,#FB9224,#F45905)] opacity-35 blur-2xl" />
              <SafeImage
                src={workshop.image}
                alt="Ngoma workshop with drums and movement"
                className="relative aspect-[4/5] rounded-[2rem] border border-sawa-yellow/25 shadow-[0_30px_100px_rgba(251,146,36,0.22)]"
                imageClassName="object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
                priority
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-ivory/15 bg-sawa-purple/70 p-5 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sawa-yellow">
                  The workshop feeling
                </p>
                <p className="mt-2 font-display text-3xl leading-none text-ivory">
                  Drum first. Body follows. Story remains.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="workshop-flow" className="scroll-mt-24 bg-charcoal-950 py-24 sm:py-32">
        <div className="container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-sawa-yellow">
              The rhythm path
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.92] text-ivory sm:text-7xl">
              A workshop designed like a gathering.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-ivory/68">
              The Ngoma Workshop is short, physical, musical, and memorable. It
              gives participants enough structure to feel held, and enough
              openness to feel the room become alive.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {rhythmPath.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.07}>
                  <article className="group grid gap-5 rounded-[1.75rem] border border-ivory/15 bg-ivory/[0.045] p-6 transition hover:border-sawa-yellow/35 hover:bg-sawa-yellow/10 sm:grid-cols-[4rem_1fr]">
                    <div className="grid size-16 place-items-center rounded-full bg-sawa-yellow text-sawa-purple">
                      <Icon className="size-7" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sawa-orange">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-2 font-display text-4xl leading-none text-ivory">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-ivory/65">
                        {item.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-sawa-yellow">
                What participants learn
              </p>
              <h2 className="mt-6 font-display text-5xl leading-[0.92] text-ivory sm:text-7xl">
                Simple enough to enter. Deep enough to remember.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {workshop.learn.map((item, index) => (
              <Reveal key={item} delay={index * 0.08}>
                <article className="min-h-64 rounded-[1.75rem] border border-ivory/15 bg-[linear-gradient(135deg,rgba(251,229,85,0.1),rgba(244,89,5,0.08),rgba(42,26,94,0.24))] p-7">
                  <CheckCircle2 className="size-7 text-sawa-yellow" aria-hidden="true" />
                  <p className="mt-8 text-lg leading-8 text-ivory/78">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <article className="rounded-[1.75rem] border border-sawa-yellow/25 bg-sawa-yellow p-7 text-sawa-purple">
                <p className="text-xs font-black uppercase tracking-[0.2em]">
                  Take home
                </p>
                <h3 className="mt-5 font-display text-4xl leading-none">
                  A felt rhythm.
                </h3>
                <p className="mt-5 text-sm font-semibold leading-7">
                  {workshop.takeHome}
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="rounded-[1.75rem] border border-sawa-orange/30 bg-sawa-orange p-7 text-sawa-purple">
                <p className="text-xs font-black uppercase tracking-[0.2em]">
                  Materials
                </p>
                <h3 className="mt-5 font-display text-4xl leading-none">
                  Drums included.
                </h3>
                <p className="mt-5 text-sm font-semibold leading-7">
                  {workshop.materials}
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="rounded-[1.75rem] border border-sawa-flame/30 bg-sawa-flame p-7 text-ivory">
                <p className="text-xs font-black uppercase tracking-[0.2em]">
                  Who it is for
                </p>
                <h3 className="mt-5 font-display text-4xl leading-none">
                  Many circles.
                </h3>
                <p className="mt-5 text-sm font-semibold leading-7">
                  {workshop.forWhom}
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-charcoal-950 py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <div className="grid gap-8 rounded-[2rem] border border-sawa-yellow/20 bg-sawa-purple/70 p-7 shadow-ocean sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-sawa-yellow">
                  Formats
                </p>
                <h2 className="mt-6 font-display text-5xl leading-[0.92] text-ivory sm:text-7xl">
                  One workshop. Many rooms.
                </h2>
                <p className="mt-6 text-base leading-8 text-ivory/68">
                  SAWA can shape the Ngoma Workshop for visitor groups,
                  schools, festivals, retreats, and community programs.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {formats.map((format) => (
                  <article
                    key={format.title}
                    className="rounded-2xl border border-ivory/15 bg-ivory/[0.045] p-5"
                  >
                    <h3 className="font-display text-3xl leading-none text-ivory">
                      {format.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ivory/65">
                      {format.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sawa-yellow/70 to-transparent" />
        <div className="container text-center">
          <Reveal>
            <Drum className="mx-auto size-9 text-sawa-yellow" aria-hidden="true" />
            <h2 className="mx-auto mt-6 max-w-5xl font-display text-5xl leading-[0.92] text-ivory sm:text-7xl">
              Bring the Ngoma circle to your group.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ivory/68">
              Send SAWA a WhatsApp message with your group size, date, and
              location. The workshop can be adapted to the room.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="gold">
                <Link
                  href={whatsappUrl(whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  Book Ngoma Workshop
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/contact">
                  Contact Page
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
