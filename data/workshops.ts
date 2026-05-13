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
    image: "/images/sawa/workshops/ngoma.jpg",
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
  },
  {
    slug: "pottery-workshop",
    title: "Messy Hands, Happy Hearts",
    subtitle: "Intro to hand-built pottery.",
    duration: "60 minutes",
    image: "/images/sawa/workshops/pottery.jpg",
    description:
      "A hands-on clay workshop using pinching and coiling to create bowls, cups, or small sculptures.",
    forWhom:
      "Beginners, families, retreat groups, and anyone who wants to slow down through clay.",
    learn: [
      "Pinching and coiling techniques for hand-built forms",
      "How touch, patience, and repetition shape clay",
      "Ways pottery carries daily memory and community use"
    ],
    takeHome: "A small hand-built clay piece shaped by the participant.",
    materials: "Clay, shaping tools, water, and workspace setup are included."
  },
  {
    slug: "bracelet-making-workshop",
    title: "Wear a Story",
    subtitle: "Create your own African beaded bracelet.",
    duration: "45 minutes",
    image: "/images/sawa/workshops/bracelet.jpg",
    description:
      "Visitors use colorful beads inspired by Maasai bead traditions and create a bracelet that carries intention, memory, and belonging.",
    forWhom:
      "Visitors, school groups, creative retreats, and community gatherings seeking a reflective craft experience.",
    learn: [
      "Color, rhythm, and repetition in bead composition",
      "How adornment can carry intention and identity",
      "A respectful introduction to beadwork as cultural storytelling"
    ],
    takeHome: "A finished bracelet carrying a chosen intention or memory.",
    materials: "Beads, thread, closures, and guided design support are included."
  },
  {
    slug: "eco-printing-workshop",
    title: "Kanga Prints",
    subtitle: "Eco-print leaves and flowers onto story fabric.",
    duration: "60 minutes",
    image: "/images/sawa/workshops/eco-printing.jpg",
    description:
      "Visitors create a one-of-a-kind fabric piece inspired by Kanga traditions, natural dyes, leaves, flowers, and silent messages.",
    forWhom:
      "Creative travelers, design students, retreat groups, and nature-connected workshops.",
    learn: [
      "How leaves, flowers, and natural dyes can mark fabric",
      "The idea of cloth as message, memory, and presence",
      "Simple composition techniques for a fabric keepsake"
    ],
    takeHome: "A one-of-a-kind printed fabric piece.",
    materials: "Fabric, natural materials, dye support, and workspace setup are included."
  },
  {
    slug: "makuti-weaving-workshop",
    title: "Kofia ya Makuti",
    subtitle: "Weave a crown from the coconut palm.",
    duration: "90 minutes",
    image: "/images/sawa/workshops/makuti.jpg",
    description:
      "Visitors learn to weave a traditional coastal hat and bracelet using coconut palm leaves.",
    forWhom:
      "Culture lovers, families, slow craft groups, and visitors interested in coastal knowledge.",
    learn: [
      "Basic folding and weaving patterns with coconut palm leaves",
      "How makuti knowledge connects architecture, shade, and daily life",
      "The patience and care required by hand-based traditions"
    ],
    takeHome: "A woven coastal hat or bracelet, depending on group pace.",
    materials: "Prepared coconut palm leaves and facilitator guidance are included."
  }
];
