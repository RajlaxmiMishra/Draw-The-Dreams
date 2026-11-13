import type { Metadata } from "next";
import { ClassesCta } from "@/components/classes/ClassesCta";
import { ClassesHero } from "@/components/classes/ClassesHero";
import { ClassOfferings } from "@/components/classes/ClassOfferings";
import { WhatYouCanExplore } from "@/components/classes/WhatYouCanExplore";
import { WhyCreate } from "@/components/classes/WhyCreate";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Art Classes",
  description: `Find your creative spark with ${siteConfig.name}. Art classes for toddlers, kids and adults — painting, sketching, canvas, crafts and DIY.`,
};

export default function ClassesPage() {
  return (
    <>
      <ClassesHero />
      <ClassOfferings />
      <WhatYouCanExplore />
      <WhyCreate />
      <ClassesCta />
    </>
  );
}
