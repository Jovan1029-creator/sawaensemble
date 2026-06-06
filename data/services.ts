export type Service = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  action: string;
  icon: "workshop" | "theater" | "concert";
  tone: "yellow" | "orange" | "flame";
};

export const services: Service[] = [
  {
    title: "Workshop",
    subtitle: "Ngoma, rhythm, movement, and learning.",
    description:
      "A participatory cultural experience where guests enter the circle through drum, call-and-response, simple movement, and story.",
    href: "/workshops",
    action: "Explore Workshop",
    icon: "workshop",
    tone: "yellow"
  },
  {
    title: "Musical Theater",
    subtitle: "Story, movement, voice, and ritual presence.",
    description:
      "A staged SAWA experience where music, theatre, dance, and storytelling meet in one living performance language.",
    href: "/contact",
    action: "Request Theater",
    icon: "theater",
    tone: "orange"
  },
  {
    title: "Music Concerts",
    subtitle: "Full ensemble sound for stages and gatherings.",
    description:
      "Concert formats for festivals, retreats, schools, cultural venues, and community events seeking rhythm, devotion, and connection.",
    href: "/performances",
    action: "View Concerts",
    icon: "concert",
    tone: "flame"
  }
];
