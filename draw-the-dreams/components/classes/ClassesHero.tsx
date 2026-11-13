import { ArtworkPlaceholder } from "@/components/media/ArtworkPlaceholder";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { classesHero } from "@/data/classes";
import { siteConfig } from "@/data/site";

export function ClassesHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-12 sm:pb-16 sm:pt-16">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <FadeIn>
          <p className="font-hand text-2xl text-magenta sm:text-3xl">
            {classesHero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {classesHero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink-muted sm:text-lg">
            {classesHero.introduction}
          </p>
          <p className="mt-5 font-hand text-2xl text-teal">{siteConfig.tagline}</p>
        </FadeIn>

        <FadeIn delay={0.08} className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4">
          <div className="absolute -left-5 top-6 h-20 w-20 rounded-[40%] bg-studio-yellow/70" />
          <div className="absolute -right-3 bottom-8 h-16 w-16 rounded-full bg-lavender/55" />
          <ArtworkPlaceholder
            kind="toddler-play"
            label="Replaceable toddler class artwork placeholder"
            className="studio-card relative aspect-square rounded-[1.8rem] ring-1 ring-ink/10"
          />
          <ArtworkPlaceholder
            kind="kids-studio"
            label="Replaceable kids class artwork placeholder"
            className="studio-card relative mt-8 aspect-square rounded-[1.8rem] ring-1 ring-ink/10"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
