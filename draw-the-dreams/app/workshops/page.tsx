import type { Metadata } from "next";
import { OutdoorPainting } from "@/components/workshops/OutdoorPainting";
import { StudioWorkshops } from "@/components/workshops/StudioWorkshops";
import { WhoCanJoin } from "@/components/workshops/WhoCanJoin";
import { WorkshopExperience } from "@/components/workshops/WorkshopExperience";
import { WorkshopsCta } from "@/components/workshops/WorkshopsCta";
import { WorkshopsHero } from "@/components/workshops/WorkshopsHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Workshops",
  description: `Create, explore and experience art with ${siteConfig.name}. Hands-on studio workshops and occasional outdoor live painting.`,
};

export default function WorkshopsPage() {
  return (
    <>
      <WorkshopsHero />
      <StudioWorkshops />
      <OutdoorPainting />
      <WorkshopExperience />
      <WhoCanJoin />
      <WorkshopsCta />
    </>
  );
}
