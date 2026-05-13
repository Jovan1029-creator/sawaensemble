import Link from "next/link";
import { Facebook, Instagram, Music2, Youtube, type LucideIcon } from "lucide-react";
import { socialLinks, type SocialPlatform } from "@/data/socialLinks";
import { cn } from "@/lib/utils";

const icons: Record<SocialPlatform, LucideIcon> = {
  instagram: Instagram,
  youtube: Youtube,
  tiktok: Music2,
  facebook: Facebook
};

type SocialLinksProps = {
  compact?: boolean;
  className?: string;
};

export function SocialLinks({ compact = false, className }: SocialLinksProps) {
  return (
    <div className={cn("grid gap-3", className)}>
      {socialLinks.map((link) => {
        const Icon = icons[link.platform];

        return (
          <Link
            key={link.platform}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "group flex items-center gap-3 rounded-2xl border border-ivory/15 bg-ivory/[0.045] text-ivory/70 transition hover:border-gold/45 hover:bg-gold/10 hover:text-ivory",
              compact ? "px-3 py-2" : "px-4 py-3"
            )}
            aria-label={`${link.label}: ${link.handle}`}
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-charcoal-950">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-ivory/45">
                {link.label}
              </span>
              <span className="block truncate text-sm font-semibold">
                {link.handle}
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
