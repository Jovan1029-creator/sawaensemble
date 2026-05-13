export type MediaItem = {
  title: string;
  kind: "Audio" | "Video" | "Photo" | "Story" | "Press";
  image: string;
  description: string;
  action: string;
};

export const mediaItems: MediaItem[] = [
  {
    title: "Listen to the Pulse",
    kind: "Audio",
    image: "/images/sawa/hero-gather.jpg",
    description: "Short previews of duuf, ngoma, voice, bass, piano, and melodic layers.",
    action: "Play preview"
  },
  {
    title: "Watch the Ensemble",
    kind: "Video",
    image: "/images/sawa/hero-rise.jpg",
    description: "Performance films, rehearsal fragments, and stage atmospheres.",
    action: "Open video"
  },
  {
    title: "Explore the Archive",
    kind: "Story",
    image: "/images/sawa/hero-remember.jpg",
    description: "Stories of craft, coastal knowledge, movement, and community memory.",
    action: "Enter archive"
  },
  {
    title: "Behind the Circle",
    kind: "Photo",
    image: "/images/sawa/hero-move.jpg",
    description: "Portraits, rehearsals, hands, instruments, fabric, and the room before sound.",
    action: "View gallery"
  },
  {
    title: "Press and Media",
    kind: "Press",
    image: "/images/sawa/hero-rise.jpg",
    description: "A future home for press notes, photography, and cultural program materials.",
    action: "Request kit"
  }
];
