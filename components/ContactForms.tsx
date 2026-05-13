"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactPhoneDisplay, whatsappUrl } from "@/data/contact";

function FieldLabel({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs font-semibold uppercase tracking-[0.18em] text-gold"
    >
      {children}
    </label>
  );
}

function FormShell({
  title,
  description,
  interest
}: {
  title: string;
  description: string;
  interest: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const date = String(formData.get("date") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const whatsappMessage = [
      `Hello SAWA Ensemble, I would like to send a ${title.toLowerCase()} inquiry.`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Preferred date/season: ${date || "Flexible"}`,
      "",
      `Message: ${message}`
    ].join("\n");

    const opened = window.open(
      whatsappUrl(whatsappMessage),
      "_blank",
      "noopener,noreferrer"
    );

    if (!opened) {
      window.location.href = whatsappUrl(whatsappMessage);
    }

    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-ivory/15 bg-ivory/[0.045] p-6 shadow-ocean sm:p-8"
    >
      <h2 className="font-display text-4xl leading-none text-ivory">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-ivory/65">{description}</p>
      <p className="mt-3 text-sm font-semibold text-gold">
        WhatsApp: {contactPhoneDisplay}
      </p>

      <div className="mt-7 grid gap-5">
        <div className="grid gap-2">
          <FieldLabel htmlFor={`${interest}-name`}>Name</FieldLabel>
          <Input id={`${interest}-name`} name="name" autoComplete="name" required />
        </div>
        <div className="grid gap-2">
          <FieldLabel htmlFor={`${interest}-email`}>Email</FieldLabel>
          <Input
            id={`${interest}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="grid gap-2">
          <FieldLabel htmlFor={`${interest}-date`}>Preferred date or season</FieldLabel>
          <Input id={`${interest}-date`} name="date" placeholder="Coming soon, July 2026, flexible..." />
        </div>
        <div className="grid gap-2">
          <FieldLabel htmlFor={`${interest}-message`}>Message</FieldLabel>
          <Textarea
            id={`${interest}-message`}
            name="message"
            placeholder="Tell us about the gathering, group size, location, and what you hope people will feel."
            required
          />
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <Button type="submit" variant="gold">
          <Send aria-hidden="true" />
          Send via WhatsApp
        </Button>
        <Button asChild variant="ghost">
          <a
            href={whatsappUrl(`Hello SAWA Ensemble, I would like to ask about ${title.toLowerCase()}.`)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" />
            Chat Now
          </a>
        </Button>
      </div>
      {submitted ? (
        <p className="mt-4 text-sm text-sand/80" role="status">
          Opening WhatsApp with your inquiry. If it did not open, use the Chat
          Now button or message {contactPhoneDisplay}.
        </p>
      ) : null}
    </form>
  );
}

export function ContactForms() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <FormShell
        title="Booking form"
        description="For performances, cultural evenings, festivals, retreats, and hosted programs."
        interest="booking"
      />
      <FormShell
        title="Workshop inquiry"
        description="For ngoma, pottery, bracelet making, eco-printing, makuti weaving, and learning sessions."
        interest="workshop"
      />
    </div>
  );
}
