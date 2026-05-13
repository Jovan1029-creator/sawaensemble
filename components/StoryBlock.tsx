import { cn } from "@/lib/utils";

type StoryBlockProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function StoryBlock({
  eyebrow,
  title,
  children,
  className
}: StoryBlockProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-ivory/15 bg-ivory/[0.045] p-6 sm:p-8",
        className
      )}
    >
      <div className="absolute right-6 top-6 size-20 rounded-full border border-gold/15" />
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-4 font-display text-3xl leading-none text-ivory sm:text-4xl">
        {title}
      </h3>
      <div className="mt-5 text-sm leading-7 text-ivory/65">{children}</div>
    </article>
  );
}
