export const aboutHero = {
  eyebrow: "Draw The Dreams",
  title: "A Little About the Artist",
  introduction:
    "Draw The Dreams is the studio of artist and art teacher Archana\u00a0Acharya\u00a0Pani — a colourful space dedicated to creating original artwork and helping others find their own creative voice. With a deep passion for painting, drawing, and crafting, Archana teaches every session with warmth and individual care.",
};

/**
 * EDITABLE PERSONAL STORY
 * Replace each `body` value with the artist's own writing.
 * Do not invent names, qualifications, awards, years of teaching, or private history.
 * Search for "[PLACEHOLDER:" to find every field that still needs a real story.
 */
export const creativeJourney = {
  eyebrow: "Creative journey",
  title: "The story is still waiting for the artist’s own words.",
  intro:
    "This section is reserved for a personal account of making and teaching. Until those details are written, the notes below are clearly marked placeholders.",
  chapters: [
    {
      id: "beginning",
      label: "Beginning",
      body: "[PLACEHOLDER: Add a short paragraph about how the artist began making art.]",
    },
    {
      id: "practice",
      label: "Making",
      body: "[PLACEHOLDER: Add a paragraph about the materials, subjects or feelings that shape the artist’s work.]",
    },
    {
      id: "teaching",
      label: "Teaching",
      body: "[PLACEHOLDER: Add a paragraph about why the artist teaches, in their own voice.]",
    },
  ],
};

export const artisticExpressions = [
  {
    title: "Paintings",
    body: "Colour, mood and story, built stroke by stroke.",
    kind: "sunset-field" as const,
    accent: "bg-magenta/12 ring-magenta/20",
  },
  {
    title: "Sketches",
    body: "Quiet looking, honest lines, and observed moments.",
    kind: "sketch-lines" as const,
    accent: "bg-ink/8 ring-ink/15",
  },
  {
    title: "Canvas Art",
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

export const teachingPhilosophy = [
  {
    title: "Creativity",
    body: "Every person already has a way of making. Teaching is about giving that way room to appear.",
  },
  {
    title: "Imagination",
    body: "A studio should feel safe enough to invent — to try a colour, a story, or a shape that did not exist a moment ago.",
  },
  {
    title: "Experimentation",
    body: "Mistakes are part of the picture. Trying something new is how skill and surprise meet.",
  },
  {
    title: "Confidence",
    body: "The aim is not a perfect copy. It is the quiet pride of finishing something that is truly yours.",
  },
];

export const artForEveryone = [
  {
    title: "Toddlers",
    body: "First colours, textures and marks in a gentle, playful setting.",
    kind: "toddler-play" as const,
  },
  {
    title: "Kids",
    body: "Drawing, painting and craft in a cheerful studio where ideas can grow.",
    kind: "kids-studio" as const,
  },
  {
    title: "Adults",
    body: "A welcoming space to paint, practise and enjoy making art without hurry.",
    kind: "adult-canvas" as const,
  },
];

export const aboutEnquiryMessage =
  "Hello! I would like to know more about the artist and studio at Draw The Dreams.";
