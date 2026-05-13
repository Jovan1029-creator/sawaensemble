import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <Badge tone="gold">{eyebrow}</Badge> : null}
      <h2 className="mt-5 font-display text-4xl leading-[0.95] text-balance text-ivory sm:text-5xl lg:text-7xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/70 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}
