"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type UseAudioPreviewOptions = {
  src: string;
  label: string;
  volume?: number;
};

export function useAudioPreview({
  src,
  label,
  volume = 0.42
}: UseAudioPreviewOptions) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const ensureAudio = useCallback(() => {
    if (typeof window === "undefined") return null;

    if (!audioRef.current) {
      const audio = new Audio();
      audio.loop = true;
      audio.preload = "none";
      audio.volume = volume;
      audio.addEventListener("error", () => {
        setHasError(true);
        setIsPlaying(false);
      });
      audioRef.current = audio;
    }

    return audioRef.current;
  }, [volume]);

  const play = useCallback(async () => {
    const audio = ensureAudio();
    if (!audio) return;

    setEnabled(true);
    setHasError(false);

    if (audio.src !== new URL(src, window.location.origin).href) {
      audio.src = src;
    }

    audio.muted = muted;
    audio.volume = volume;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setHasError(true);
      setIsPlaying(false);
    }
  }, [ensureAudio, muted, src, volume]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
      return;
    }

    void play();
  }, [isPlaying, pause, play]);

  const toggleMute = useCallback(() => {
    setMuted((current) => !current);
  }, []);

  const continueSilently = useCallback(() => {
    const audio = audioRef.current;
    if (audio) audio.pause();
    setEnabled(false);
    setMuted(true);
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = muted;
  }, [muted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !enabled) return;

    const shouldResume = isPlaying;
    audio.pause();
    audio.src = src;
    audio.load();

    if (shouldResume) {
      void audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setHasError(true);
          setIsPlaying(false);
        });
    }
  }, [enabled, isPlaying, src]);

  useEffect(() => {
    return () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.pause();
      audio.src = "";
    };
  }, []);

  return {
    enabled,
    isPlaying,
    muted,
    hasError,
    label,
    play,
    pause,
    togglePlay,
    toggleMute,
    continueSilently
  };
}
