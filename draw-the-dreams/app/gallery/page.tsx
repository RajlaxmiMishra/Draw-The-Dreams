import type { Metadata } from "next";
import { GalleryBoard } from "@/components/gallery/GalleryBoard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryIntro } from "@/data/gallery";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Art Gallery",
  description: `Explore paintings, canvas art and crafts from ${siteConfig.name}.`,
};

export default function GalleryPage() {
  return (
    <section className="gallery-font relative py-14 sm:py-20">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow={siteConfig.tagline}
          title="A World of Creativity"
          description={galleryIntro}
        />
        <GalleryBoard />
      </Container>
    </section>
  );
}
