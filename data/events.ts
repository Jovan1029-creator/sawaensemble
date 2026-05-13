export type SawaEvent = {
  title: string;
  location: string;
  date: string;
  type: "Upcoming" | "Past" | "Booking";
  description: string;
};

export const featuredEvent: SawaEvent = {
  title: "SAWA Live: Rhythms of Presence",
  location: "Kizimkazi, Zanzibar",
  date: "Coming Soon",
  type: "Upcoming",
  description:
    "A cinematic gathering of drum, voice, movement, storytelling, and devotional atmosphere."
};

export const upcomingEvents: SawaEvent[] = [
  featuredEvent,
  {
    title: "Festival Booking Window",
    location: "Zanzibar and international stages",
    date: "2026 Season",
    type: "Booking",
    description:
      "SAWA is available for festivals, cultural programs, retreats, and curated performance evenings."
  },
  {
    title: "Community Learning Circle",
    location: "Assalam Community Foundation",
    date: "Monthly",
    type: "Upcoming",
    description:
      "A shared space for rhythm, movement, craft, and intergenerational learning."
  }
];

export const pastEvents: SawaEvent[] = [
  {
    title: "Kizimkazi Rehearsal Gathering",
    location: "Kizimkazi, Zanzibar",
    date: "2025",
    type: "Past",
    description:
      "Early ensemble sessions connecting voice, rhythm, theatre, and community practice."
  },
  {
    title: "Assalam Community Foundation Cultural Day",
    location: "Kizimkazi, Zanzibar",
    date: "2025",
    type: "Past",
    description:
      "A community-centered presentation of music, movement, craft, and shared learning."
  }
];
