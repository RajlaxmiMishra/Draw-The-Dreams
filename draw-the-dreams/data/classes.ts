export const classesHero = {
  eyebrow: "Art classes",
  title: "Find Your Creative Spark",
  introduction:
    "Draw The Dreams welcomes learners of different ages into a colourful studio. Toddlers, kids and adults can explore art, craft and creativity at a pace that feels kind — with room to play, practise and make something of their own.",
};

export const classOfferings = [
  {
    slug: "toddler",
    title: "Toddler Classes",
    days: "Wednesday and Thursday",
    time: "5:30 PM – 7:30 PM",
    focus:
      "Playful creative exploration, colours and simple art activities in a warm, unhurried studio.",
    kind: "toddler-play" as const,
    accent: "bg-studio-yellow/35 ring-studio-yellow/50",
    enquiryMessage:
      "Hello! 🎨 I'm interested in toddler/parent-child creative sessions at Draw The Dreams. Could you share the details on timings, activities, and how to enroll?",
  },
  {
    slug: "kids",
    title: "Kids Classes",
    days: "Saturday and Sunday",
    time: "11:00 AM – 1:00 PM",
    focus:
      "Drawing, painting, crafts and creative expression in a cheerful studio setting.",
    kind: "kids-studio" as const,
    accent: "bg-magenta/10 ring-magenta/25",
    enquiryMessage:
      "Hi! 👋 I’d love to know more about the art classes for kids at Draw The Dreams. Could you please share the age groups, schedule, monthly fees, and what materials are needed?",
  },
  {
    slug: "adults",
    title: "Adult Classes",
    days: "",
    time: "Contact us for timings",
    focus:
      "A welcoming space for adults to paint, practise and enjoy making art. Ask on WhatsApp for the current adult class timings.",
    kind: "adult-canvas" as const,
    accent: "bg-teal/12 ring-teal/25",
    enquiryMessage:
      "Hi! 👋 I’d love to join the adult / mothers' art classes at Draw The Dreams. Since sessions are arranged based on mutual convenience and timing, could you please let me know how we can schedule one, the fee details, and what materials are needed?",
  },
];

export const classExplorations = [
  {
    title: "Painting",
    body: "Colour, mood and story, built stroke by stroke.",
    kind: "sunset-field" as const,
    accent: "bg-magenta/12 ring-magenta/20",
  },
  {
    title: "Sketching",
    body: "Quiet looking, honest lines and observed moments.",
    kind: "sketch-lines" as const,
    accent: "bg-ink/8 ring-ink/15",
  },
  {
    title: "Canvas art",
    body: "Larger works meant to live on a wall and hold a room.",
    kind: "teal-bloom" as const,
    accent: "bg-teal/12 ring-teal/20",
  },
  {
    title: "Crafts",
    body: "Handmade pieces with texture, play and a tactile finish.",
    kind: "craft-collage" as const,
    accent: "bg-coral/16 ring-coral/25",
  },
  {
    title: "DIY",
    body: "Ideas that invite other hands to try, cut, paste and make.",
    kind: "kids-studio" as const,
    accent: "bg-studio-green/12 ring-studio-green/20",
  },
];

export const whyCreate = [
  {
    title: "Creativity",
    body: "Every learner already has a way of making. Class time is for giving that way room to appear.",
  },
  {
    title: "Imagination",
    body: "The studio should feel safe enough to invent — a colour, a story or a shape that was not there a moment ago.",
  },
  {
    title: "Experimentation",
    body: "Trying something new is part of the picture. Curiosity matters more than a perfect copy.",
  },
  {
    title: "Your own pace",
    body: "Some days are slow and careful; some are bright and messy. Learning here can follow the rhythm of the person making.",
  },
];

export const classesEnquiryMessage =
  "Hi! 👋 I would love to know more about Draw The Dreams classes. Could you please share the details?";
