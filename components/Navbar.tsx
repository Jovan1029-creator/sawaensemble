"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/artists", label: "Artists" },
  { href: "/#services", label: "Services" },
  { href: "/performances", label: "Performances" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 bg-charcoal-950/70 backdrop-blur-2xl">
      <nav
        className="container flex h-20 items-center justify-between gap-4"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative grid size-11 place-items-center rounded-full border border-gold/35 bg-gold/10 text-sm font-black text-gold shadow-glow">
            S
            <span className="absolute inset-1 rounded-full border border-ivory/10" />
          </span>
          <span>
            <span className="block font-display text-xl leading-none text-ivory">
              SAWA
            </span>
            <span className="block text-[0.63rem] font-semibold uppercase tracking-[0.22em] text-ivory/45">
              Kizimkazi
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.href.startsWith("/#") ? false : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-ivory/60 transition hover:bg-ivory/10 hover:text-ivory",
                  active && "bg-ivory/10 text-ivory"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href="/performances">
              <CalendarDays aria-hidden="true" />
              Events
            </Link>
          </Button>
          <Button asChild size="sm" variant="gold">
            <Link href="/contact">
              <MessageCircle aria-hidden="true" />
              Book SAWA
            </Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24 }}
            className="border-t border-ivory/10 bg-charcoal-950/95 px-5 py-5 lg:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item) => {
                const active = item.href.startsWith("/#") ? false : pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-base font-medium text-ivory/70",
                      active && "bg-ivory/10 text-ivory"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <Button asChild className="mt-4 w-full" variant="gold">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Book SAWA Ensemble
              </Link>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
