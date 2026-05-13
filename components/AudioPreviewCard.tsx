"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAudioPreview } from "@/hooks/useAudioPreview";

type AudioPreviewCardProps = {
  title: string;
  label: string;
  src: string;
  description: string;
};

export function AudioPreviewCard({
  title,
  label,
  src,
  description
}: AudioPreviewCardProps) {
  const audio = useAudioPreview({ src, label });

  return (
    <article className="rounded-[1.75rem] border border-ivory/15 bg-charcoal-900/75 p-6 shadow-ocean">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
        Audio Preview
      </p>
      <h3 className="mt-4 font-display text-4xl leading-none text-ivory">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-ivory/65">{description}</p>
      <p className="mt-5 text-sm text-ivory/55">{label}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          type="button"
          variant="gold"
          onClick={audio.enabled ? audio.togglePlay : audio.play}
          aria-label={audio.isPlaying ? "Pause audio preview" : "Play audio preview"}
        >
          {audio.isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          {audio.isPlaying ? "Pause" : "Play"}
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={audio.toggleMute}
          aria-label={audio.muted ? "Unmute audio preview" : "Mute audio preview"}
        >
          {audio.muted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
          {audio.muted ? "Muted" : "Sound"}
        </Button>
      </div>
      {audio.hasError ? (
        <p className="mt-4 text-xs text-sand/80" role="status">
          Preview file is missing. The page continues silently.
        </p>
      ) : null}
    </article>
  );
}
