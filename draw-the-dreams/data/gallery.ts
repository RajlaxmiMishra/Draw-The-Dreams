import type { GalleryCategory, GalleryItem } from "@/types";

export const galleryIntro =
  "A peek at the artwork, handmade decorations and creative moments from our studio.";

export const galleryFilters: Array<{ id: "all" | GalleryCategory; label: string }> =
  [
    { id: "all", label: "All Artwork" },
    { id: "paintings", label: "Paintings" },
    { id: "sketches", label: "Sketches" },
    { id: "canvas", label: "Canvas Art" },
    { id: "crafts", label: "Crafts" },
    { id: "diy", label: "DIY" },
  ];

export const galleryItems: GalleryItem[] = [
  {
    id: "halloween-studio-decor",
    title: "Halloween studio decorations",
    category: "crafts",
    categoryLabel: "Crafts",
    description: "A festive display of handmade Halloween decorations around the studio.",
    image: "/gallery.jpeg",
    height: "short",
  },
  {
    id: "halloween-costume-day",
    title: "Halloween costume day",
    category: "crafts",
    categoryLabel: "Crafts",
    description: "A young studio visitor enjoying the Halloween decorations.",
    image: "/gallery (2).jpeg",
    height: "tall",
  },
  {
    id: "halloween-art-showcase",
    title: "Halloween art showcase",
    category: "crafts",
    categoryLabel: "Crafts",
    description: "Halloween artwork and decorations on display at the studio.",
    image: "/gallery (3).jpeg",
    height: "tall",
  },
  {
    id: "halloween-art-creation",
    title: "Halloween art creation",
    category: "crafts",
    categoryLabel: "Crafts",
    description: "A handmade Halloween creation shared at the studio.",
    image: "/gallery (4).jpeg",
    height: "tall",
  },
  {
    id: "sunflower-eye-painting",
    title: "Sunflower eye painting",
    category: "paintings",
    categoryLabel: "Paintings",
    description: "A young artist with a dramatic sunflower and eye painting.",
    image: "/Screenshot 2026-11-08 132753.png",
    height: "tall",
  },
  {
    id: "birthday-artwork",
    title: "Birthday wishes artwork",
    category: "paintings",
    categoryLabel: "Paintings",
    description: "A colourful illustrated birthday message made with love.",
    image: "/Screenshot 2026-11-08 133800.png",
    height: "medium",
  },
];

export function filterGalleryItems(
  items: GalleryItem[],
  category: "all" | GalleryCategory,
) {
  if (category === "all") {
    return items;
  }

  return items.filter((item) => item.category === category);
}
