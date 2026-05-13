export type HeroState = {
  word: string;
  headline: string;
  subline: string;
  image: string;
  audio: string;
  mood: string;
  visualAlt: string;
  accent: "gold" | "ocean" | "clay" | "palm";
};

export const heroStates: HeroState[] = [
  {
    word: "Gather",
    headline: "Gather",
    subline: "A circle of sound, story, and spirit from Zanzibar.",
    image: "/images/sawa/hero-gather.jpg",
    audio: "/audio/gather.mp3",
    mood: "Soft voice, duuf, ambient rhythm",
    visualAlt: "Warm portraits of a community gathered in a circle",
    accent: "gold"
  },
  {
    word: "Listen",
    headline: "Listen",
    subline: "Voices arrive like tidewater, carrying memory into the room.",
    image: "/images/sawa/hero-gather.jpg",
    audio: "/audio/gather.mp3",
    mood: "Call, response, quiet breath",
    visualAlt: "Ensemble members listening in a warm coastal gathering",
    accent: "palm"
  },
  {
    word: "Remember",
    headline: "Remember",
    subline: "Culture is not kept alive by storage. It survives when shared.",
    image: "/images/sawa/hero-remember.jpg",
    audio: "/audio/remember.mp3",
    mood: "Storytelling, soft melody, clay and hands",
    visualAlt: "Hands shaping clay and passing traditional knowledge",
    accent: "clay"
  },
  {
    word: "Move",
    headline: "Move",
    subline: "Where African rhythm becomes body, memory, and presence.",
    image: "/images/sawa/hero-move.jpg",
    audio: "/audio/move.mp3",
    mood: "Ngoma and layered percussion",
    visualAlt: "Dancers and drummers moving with motion blur",
    accent: "ocean"
  },
  {
    word: "Rise",
    headline: "Rise",
    subline: "A living ensemble carrying unity, love, and spiritual connection.",
    image: "/images/sawa/hero-rise.jpg",
    audio: "/audio/rise.mp3",
    mood: "Ensemble swell and devotional harmony",
    visualAlt: "SAWA Ensemble on stage in light with ocean atmosphere",
    accent: "gold"
  },
  {
    word: "Breathe",
    headline: "Breathe",
    subline: "Between drum and silence, the body remembers how to belong.",
    image: "/images/sawa/hero-remember.jpg",
    audio: "/audio/remember.mp3",
    mood: "Breath, calm pulse, melodic fragments",
    visualAlt: "A quiet rehearsal moment with hands, fabric, and light",
    accent: "palm"
  },
  {
    word: "Celebrate",
    headline: "Celebrate",
    subline: "Heritage becomes present when it is danced, sung, and carried together.",
    image: "/images/sawa/hero-move.jpg",
    audio: "/audio/move.mp3",
    mood: "Celebration rhythm and call",
    visualAlt: "A joyful drum and dance circle in Zanzibar",
    accent: "clay"
  },
  {
    word: "Become",
    headline: "Become",
    subline: "A shared moment becomes a lesson, a memory, a living future.",
    image: "/images/sawa/hero-rise.jpg",
    audio: "/audio/rise.mp3",
    mood: "Wide ensemble swell",
    visualAlt: "A full ensemble rising into performance light",
    accent: "ocean"
  }
];
