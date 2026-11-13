import { AboutSection } from "@/components/home/AboutSection";
import { ArtClasses } from "@/components/home/ArtClasses";
import { Categories } from "@/components/home/Categories";
import { FeaturedArtwork } from "@/components/home/FeaturedArtwork";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { StudentCreations } from "@/components/home/StudentCreations";
import { Workshops } from "@/components/home/Workshops";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Categories />
      <FeaturedArtwork />
      <ArtClasses />
      <Workshops />
      <StudentCreations />
      <FinalCta />
    </>
  );
}
