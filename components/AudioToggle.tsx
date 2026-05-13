"use client";

import { Pause, Play, Volume2, VolumeX, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AudioToggleProps = {
  enabled: boolean;
  isPlaying: boolean;
  muted: boolean;
  hasError: boolean;
  label: string;
  onPlay: () => void;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onContinueSilently: () => void;
  className?: string;
};

export function AudioToggle({
  enabled,
  isPlaying,
  muted,
  hasError,
  label,
  onPlay,
  onTogglePlay,
  onToggleMute,
  onContinueSilently,
  className
}: AudioToggleProps) {
  return (
    <div
      className={cn(
        "flex w-full min-w-0 flex-col gap-3 rounded-2xl border border-ivory/15 bg-charcoal-950/55 p-3 text-ivory shadow-ocean backdrop-blur-xl",
        className
      )}
      aria-label="Audio preview controls"
    >
      <div className="flex min-w-0 items-center gap-3 px-1">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
          <Waves className="size-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold uppercase tracking-[0.2em] text-ivory/45">
            Current mood
          </p>
          <p className="truncate text-sm text-ivory/80">{label}</p>
        </div>
      </div>

      {!enabled ? (
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <Button type="button" size="sm" variant="gold" onClick={onPlay}>
            <Volume2 aria-hidden="true" />
            Enter with sound
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={onContinueSilently}
          >
            Continue silently
          </Button>
        </div>
      ) : (
        <div className="flex min-w-0 items-center gap-2">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            aria-label={isPlaying ? "Pause audio preview" : "Play audio preview"}
            onClick={onTogglePlay}
          >
            {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          </Button>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            aria-label={muted ? "Unmute audio preview" : "Mute audio preview"}
            onClick={onToggleMute}
          >
            {muted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
          </Button>
        </div>
      )}

      {hasError ? (
        <p className="text-xs text-sand/80" role="status">
          Audio preview unavailable. Continuing silently.
        </p>
      ) : null}
    </div>
  );
}
