import type { Metadata } from "next";
import Link from "next/link";
import { Instagram, Mail, MapPin, MessageCircle, Music2, Phone, UsersRound } from "lucide-react";
import { ContactForms } from "@/components/ContactForms";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { contactPhoneDisplay, whatsappUrl } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact and Bookings",
  description:
    "Contact SAWA Ensemble for performance bookings, workshop inquiries, community programs, and gallery requests in Kizimkazi, Zanzibar."
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-36">
        <div className="absolute right-0 top-20 size-[34rem] rounded-full opacity-30 rhythm-ring" />
        <div className="container pb-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Contact and bookings
            </p>
            <h1 className="mt-6 max-w-6xl font-display text-6xl leading-[0.88] text-balance text-ivory sm:text-8xl lg:text-9xl">
              Bring SAWA into the room.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-ivory/70">
              Book the ensemble, host a workshop, ask about gallery access, or begin a
              cultural collaboration with SAWA and the Assalam Community
              Foundation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold">
                <Link
                  href={whatsappUrl("Hello SAWA Ensemble, I would like to make a booking inquiry.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  WhatsApp SAWA
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href={`tel:${contactPhoneDisplay.replaceAll(" ", "")}`}>
                  <Phone aria-hidden="true" />
                  {contactPhoneDisplay}
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
              eyebrow="Inquiries"
              title="Performance, workshop, and general contact."
              text="Use the forms below to send your booking, workshop, or general inquiry directly through WhatsApp."
            />
          </Reveal>
          <Reveal className="mt-12">
            <ContactForms />
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="sticky top-28 rounded-[2rem] border border-ivory/15 bg-sawa-radial p-8 shadow-ocean">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Location
              </p>
              <h2 className="mt-5 font-display text-5xl leading-none text-ivory">
                Kizimkazi, Zanzibar.
              </h2>
              <p className="mt-5 text-base leading-8 text-ivory/70">
                SAWA Ensemble was founded within the Assalam Community
                Foundation, rooted in coastal community, cultural learning, and
                creative presence.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {[
              {
                title: "General contact",
                text: `Questions, bookings, gallery requests, and partnership conversations can go directly to WhatsApp at ${contactPhoneDisplay}.`,
                icon: Mail,
                action: "Message WhatsApp"
              },
              {
                title: "Assalam Community Foundation",
                text: "SAWA is connected to the Foundation's wider commitment to community learning and cultural life.",
                icon: UsersRound,
                action: "Ask about community programs"
              },
              {
                title: "Social links",
                text: "Find SAWA as sawa.ensemble on Instagram, TikTok, and Facebook, and as SAWA Ensemble on YouTube.",
                icon: Instagram,
                action: "View social names"
              },
              {
                title: "Visit or host",
                text: "Discuss a visit to Kizimkazi or invite SAWA to your stage, school, festival, retreat, or community.",
                icon: MapPin,
                action: "Plan a gathering"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              const actionHref =
                item.title === "Social links"
                  ? "#social-links"
                  : whatsappUrl(`Hello SAWA Ensemble, I would like to ask about ${item.title.toLowerCase()}.`);
              const opensExternally = item.title !== "Social links";

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="rounded-[1.75rem] border border-ivory/15 bg-ivory/[0.045] p-7">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <Icon className="size-6 text-gold" aria-hidden="true" />
                        <h3 className="mt-5 font-display text-4xl leading-none text-ivory">
                          {item.title}
                        </h3>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-ivory/65">
                          {item.text}
                        </p>
                      </div>
                      <Button asChild variant="ghost">
                        <Link
                          href={actionHref}
                          target={opensExternally ? "_blank" : undefined}
                          rel={opensExternally ? "noreferrer" : undefined}
                        >
                          {item.action}
                        </Link>
                      </Button>
                    </div>
                  </article>
                  {item.title === "Social links" ? (
                    <div id="social-links" className="mt-4 scroll-mt-28">
                      <SocialLinks />
                    </div>
                  ) : null}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-950 py-24 sm:py-32">
        <div className="container text-center">
          <Reveal>
            <Music2 className="mx-auto size-8 text-gold" aria-hidden="true" />
            <h2 className="mx-auto mt-6 max-w-5xl font-display text-5xl leading-[0.95] text-ivory sm:text-7xl">
              A conversation can become a circle.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ivory/65">
              Tell SAWA what kind of gathering you are shaping, and the ensemble
              can help find the right performance, workshop, or learning format.
            </p>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
