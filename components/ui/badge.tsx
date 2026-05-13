import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "gold" | "ocean" | "palm" | "clay" | "ivory";
};

const tones = {
  gold: "border-gold/35 bg-gold/10 text-gold",
  ocean: "border-ocean/40 bg-ocean/15 text-cyan-100",
  palm: "border-palm/45 bg-palm/15 text-emerald-100",
  clay: "border-clay/45 bg-clay/15 text-orange-100",
  ivory: "border-ivory/20 bg-ivory/10 text-ivory"
};

export function Badge({ className, tone = "ivory", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
