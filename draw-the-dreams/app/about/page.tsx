import type { Metadata } from "next";
import { AboutCta } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { ArtForEveryone } from "@/components/about/ArtForEveryone";
import { ArtisticExpression } from "@/components/about/ArtisticExpression";
import { CreativeJourney } from "@/components/about/CreativeJourney";
import { TeachingPhilosophy } from "@/components/about/TeachingPhilosophy";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About the Artist",
  description: `A little about the artist and art teacher behind ${siteConfig.name} — a studio for art, craft and creativity.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CreativeJourney />
      <ArtisticExpression />
      <TeachingPhilosophy />
      <ArtForEveryone />
      <AboutCta />
    </>
  );
}
