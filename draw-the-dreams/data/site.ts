import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Draw The Dreams",
  tagline: "Art • Craft • Creativity",
  artistCredit: "by Archana Acharya Pani",
  description:
    "A professional artist and art-teacher studio offering original artwork, creative classes, and a warm space to grow artistic skill.",
  url: "https://drawthedreams.in",
  location: "Powai, Mumbai, Maharashtra",
  whatsapp: {
    number: "919321380904",
    message:
      "Hi! I would love to know more about Draw The Dreams classes. Could you please share the details?",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Classes", href: "/classes" },
    { label: "Workshops", href: "/workshops" },
    { label: "Contact", href: "/contact" },
  ],
};
