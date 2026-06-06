export type Workshop = {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  image: string;
  description: string;
  forWhom: string;
  learn: string[];
  takeHome: string;
  materials: string;
};

export const workshops: Workshop[] = [
  {
    slug: "ngoma-workshop",
    title: "The Call and Response",
    subtitle: "Ngoma, drum, and celebrate heritage.",
    duration: "45 minutes",
    image: "/images/sawa/workshops/ngoma.jpeg",
    description:
      "Visitors learn simple drumming patterns and easy traditional dance moves while understanding the stories of harvest, celebration, and community.",
    forWhom:
      "Travelers, school groups, festival guests, families, and teams who want an embodied cultural encounter.",
    learn: [
      "Foundational ngoma pulse and call-and-response patterns",
      "Simple dance phrases connected to celebration and harvest",
      "How rhythm gathers people into one shared attention"
    ],
    takeHome: "A felt sense of rhythm, confidence, and the memory of moving in circle.",
    materials: "Drums and guided facilitation are included."
  }
];
