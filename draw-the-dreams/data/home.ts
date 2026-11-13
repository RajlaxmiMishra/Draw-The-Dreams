export const categories = [
  {
    slug: "paintings",
    title: "Paintings",
    note: "Colour, mood and story on paper.",
    href: "/gallery",
    accent: "magenta" as const,
  },
  {
    slug: "sketches",
    title: "Sketches",
    note: "Quiet lines and observed moments.",
    href: "/gallery",
    accent: "ink" as const,
  },
  {
    slug: "canvas",
    title: "Canvas Art",
    note: "Larger works meant to live on a wall.",
    href: "/gallery",
    accent: "teal" as const,
  },
  {
    slug: "crafts",
    title: "Crafts",
    note: "Handmade pieces with texture and play.",
    href: "/gallery",
    accent: "coral" as const,
  },
  {
    slug: "diy",
    title: "DIY",
    note: "Ideas you can make with your own hands.",
    href: "/gallery",
    accent: "green" as const,
  },
];

export const featuredArtwork = [
  {
    id: "featured-1",
    title: "Colourful clay garden",
    category: "Crafts",
    image: "/featured.png",
    alt: "Young artist showing a colourful clay garden project",
  },
  {
    id: "featured-2",
    title: "Rainbow of creativity",
    category: "Crafts",
    image: "/featured 2.png",
    alt: "Young artist showing a handmade rainbow craft",
  },
  {
    id: "featured-3",
    title: "Candle and clay creations",
    category: "Crafts",
    image: "/featured 3.png",
    alt: "Young artist showing handmade candle and clay creations",
    objectPosition: "center 68%",
    aspectRatio: "420 / 641",
  },
  {
    id: "featured-4",
    title: "A bird in the branches",
    category: "Canvas Art",
    image: "/featured 4.jpeg",
    alt: "Young artist showing a green bird drawing on canvas",
    objectPosition: "center 78%",
  },
  {
    id: "featured-5",
    title: "Sunset study",
    category: "Paintings",
    image: "/featured 5.jpeg",
    alt: "Young artist showing a bright sunset painting",
    objectPosition: "center 78%",
  },
  {
    id: "featured-6",
    title: "Painting in progress",
    category: "Art",
    image: "/featured 6.png",
    alt: "Young artist painting a small clay artwork",
  },
];

export const classCategories = [
  {
    slug: "toddler",
    title: "Toddler",
    note: "Gentle first explorations of colour, texture and making.",
    kind: "toddler-play" as const,
  },
  {
    slug: "kids",
    title: "Kids",
    note: "Drawing, painting and craft in a cheerful studio setting.",
    kind: "kids-studio" as const,
  },
  {
    slug: "adults",
    title: "Adults",
    note: "A welcoming space to paint, practise and enjoy making art.",
    kind: "adult-canvas" as const,
  },
];

export const studentWorks = [
  {
    id: "student-jagannath-sketch",
    title: "Jagannath sketch",
    image: "/Screenshot 2026-11-08 133751.png",
    alt: "Student pencil sketch of Lord Jagannath",
    aspectRatio: "423 / 518",
  },
  {
    id: "student-sunflower-eye-closeup",
    title: "Sunflower and eye artwork",
    image: "/Screenshot 2026-11-08 132803.png",
    alt: "Close-up of a student painting featuring a sunflower and an eye",
    aspectRatio: "512 / 637",
  },
  { id: "student-1", title: "Student work placeholder", kind: "student-sun" as const },
  { id: "student-2", title: "Student work placeholder", kind: "student-boat" as const },
  { id: "student-3", title: "Student work placeholder", kind: "student-tree" as const },
  { id: "student-4", title: "Student work placeholder", kind: "coral-still" as const },
  { id: "student-5", title: "Student work placeholder", kind: "lavender-sky" as const },
  { id: "student-6", title: "Student work placeholder", kind: "portrait-study" as const },
];

export const classEnquiryMessage =
  "Hi! I would love to know more about Draw The Dreams classes. Could you please share the details?";

export const workshopEnquiryMessage =
  "Hi! I’d love to know more about the upcoming art workshops at Draw The Dreams. Could you please share the details on dates, timings, fees, and what materials are included? Thanks!";
