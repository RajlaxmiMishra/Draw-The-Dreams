export type NavItem = {
  label: string;
  href: string;
};

export type WhatsAppConfig = {
  number: string;
  message: string;
};

export type GalleryCategory =
  | "paintings"
  | "sketches"
  | "canvas"
  | "crafts"
  | "diy";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  description?: string;
  image: string;
  height: "short" | "medium" | "tall";
};

export type SiteConfig = {
  name: string;
  tagline: string;
  artistCredit?: string;
  description: string;
  url: string;
  whatsapp: WhatsAppConfig;
  nav: NavItem[];
  email?: string;
  location?: string;
};
