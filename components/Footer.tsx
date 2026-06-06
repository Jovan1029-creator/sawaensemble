import Link from "next/link";
import { Mail, MapPin, MessageCircle, Music2, Phone } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { contactPhoneDisplay, whatsappUrl } from "@/data/contact";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/artists", label: "Artists" },
  { href: "/#services", label: "Services" },
  { href: "/performances", label: "Performances" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="relative border-t border-ivory/10 bg-charcoal-950 text-ivory">
      <div className="h-1 bg-bead-line" />
      <div className="container grid gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full border border-gold/35 bg-gold/10 font-black text-gold">
              S
            </span>
            <div>
              <p className="font-display text-2xl leading-none">SAWA Ensemble</p>
              <p className="text-xs uppercase tracking-[0.22em] text-ivory/45">
                Storytelling. Art. Wonders of Africa.
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-7 text-ivory/60">
            A living cultural and music ensemble founded in 2025 in Kizimkazi,
            Zanzibar, within the Assalam Community Foundation.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Move through
          </p>
          <div className="mt-5 grid gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ivory/60 transition hover:text-ivory"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </p>
          <div className="mt-5 grid gap-4 text-sm text-ivory/60">
            <p className="flex items-center gap-3">
              <MapPin className="size-4 text-gold" aria-hidden="true" />
              Kizimkazi, Zanzibar
            </p>
            <Link
              href={whatsappUrl("Hello SAWA Ensemble, I would like to ask about bookings or workshops.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-ivory"
            >
              <MessageCircle className="size-4 text-gold" aria-hidden="true" />
              Booking inquiries on WhatsApp
            </Link>
            <Link
              href={`tel:${contactPhoneDisplay.replaceAll(" ", "")}`}
              className="flex items-center gap-3 transition hover:text-ivory"
            >
              <Phone className="size-4 text-gold" aria-hidden="true" />
              {contactPhoneDisplay}
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 transition hover:text-ivory"
            >
              <Mail className="size-4 text-gold" aria-hidden="true" />
              Contact forms
            </Link>
            <span className="flex items-center gap-3">
              <Music2 className="size-4 text-gold" aria-hidden="true" />
              Assalam Community Foundation
            </span>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Social media
              </p>
              <SocialLinks compact />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-5">
        <div className="container flex flex-col gap-2 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 SAWA Ensemble. Culture survives when it is shared.</p>
          <p>Built for performance, learning, and living memory.</p>
        </div>
      </div>
    </footer>
  );
}
