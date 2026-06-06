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
    image: "/images/sawa/landing/Sufi Fest_2026_Day one_024.jpg",
    description: "Short previews of duuf, ngoma, voice, bass, piano, and melodic layers.",
    action: "Play preview"
  },
  {
    title: "Watch the Ensemble",
    kind: "Video",
    image: "/images/sawa/landing/Sufi Fest_2026_Day one_050.jpg",
    description: "Performance films, rehearsal fragments, and stage atmospheres.",
    action: "Open video"
  },
  {
    title: "Explore the Archive",
    kind: "Story",
    image: "/images/sawa/landing/Sufi Fest_2026_Day one_031.jpg",
    description: "Stories of craft, coastal knowledge, movement, and community memory.",
    action: "Enter archive"
  },
  {
    title: "Behind the Circle",
    kind: "Photo",
    image: "/images/sawa/landing/DSC_8217.jpg",
    description: "Portraits, rehearsals, hands, instruments, fabric, and the room before sound.",
    action: "View gallery"
  },
  {
    title: "Press and Gallery",
    kind: "Press",
    image: "/images/sawa/landing/Sufi Fest_2026_Day one_050.jpg",
    description: "A future home for press notes, photography, gallery assets, and cultural program materials.",
    action: "Request kit"
  }
];
