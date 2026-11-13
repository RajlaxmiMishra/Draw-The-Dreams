export const workshopsHero = {
  eyebrow: "Workshops",
  title: "Create, Explore & Experience Art",
  introduction:
    "Workshops at Draw The Dreams are hands-on art experiences — a chance to try a theme, a material or a new way of making. Come for a few hours, explore creativity, and leave with something you made.",
};

export const studioWorkshops = {
  eyebrow: "Studio workshops",
  title: "Most workshops happen at the Draw The Dreams home studio.",
  description:
    "These sessions take place in the artist’s home and studio — a colourful room for painting, canvas work, craft and DIY. Details for each workshop are shared when a session is planned.",
  categories: [
    {
      title: "Painting workshops",
      body: "Colour, mood and story, explored stroke by stroke.",
      kind: "sunset-field" as const,
      accent: "bg-magenta/12 ring-magenta/20",
    },
    {
      title: "Canvas art",
      body: "Larger surfaces and the pleasure of filling a wall-sized idea.",
      kind: "teal-bloom" as const,
      accent: "bg-teal/12 ring-teal/20",
    },
    {
      title: "Art and craft activities",
      body: "Handmade pieces with texture, play and a tactile finish.",
      kind: "craft-collage" as const,
      accent: "bg-coral/16 ring-coral/25",
    },
    {
      title: "Creative DIY sessions",
      body: "Ideas you can cut, paste, assemble and take home.",
      kind: "kids-studio" as const,
      accent: "bg-studio-green/12 ring-studio-green/20",
    },
  ],
};

export const outdoorLivePainting = {
  eyebrow: "Outdoor live painting",
  title: "Now and then, the studio steps outside.",
  description:
    "Occasional outdoor sessions let participants experience live painting and look at art inspired by real-life surroundings. These gatherings are not a regular timetable — they happen when the moment and the place are right.",
};

export const workshopExperience = [
  {
    title: "Hands-on creativity",
    body: "Workshops are for making, not only watching. You work with colour, paper, canvas or craft in real time.",
  },
  {
    title: "Guided activities",
    body: "Each session is led with care, so you have a starting point and room to find your own way through it.",
  },
  {
    title: "Experimentation",
    body: "Trying something new is part of the picture. Curiosity matters more than a perfect copy.",
  },
  {
    title: "A welcoming room",
    body: "The studio is meant to feel warm and unhurried — a place to learn without performing.",
  },
];

export const whoCanJoin = {
  eyebrow: "Who can join",
  title: "Eligibility depends on the individual workshop.",
  description:
    "Some sessions suit younger makers, some are better for older hands, and some are open more widely. There is no single age group for every workshop. When you enquire, the studio will share who that particular session is for.",
};

/**
 * UPCOMING WORKSHOPS
 * Add confirmed sessions here when dates and details are known.
 * Do not invent dates, fees, locations, materials, capacity or schedules.
 */
export const upcomingWorkshops: Array<{
  id: string;
  title: string;
  setting: "studio" | "outdoor";
  when?: string;
  note?: string;
}> = [];

export const workshopEnquiryMessage =
  "Hi! 👋 I’d love to know more about the upcoming art workshops at Draw The Dreams. Could you please share the details on dates, timings, fees, and what materials are included? Thanks!";

export const outdoorEnquiryMessage =
  "Hi! 👋 I'm interested in the outdoor art sessions / open-air sketching workshops at Draw The Dreams. Could you please let me know when and where the next outdoor session is happening, the fee, and what we need to bring?";
