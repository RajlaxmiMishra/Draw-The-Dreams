import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { aboutHero } from "@/data/about";
import { siteConfig } from "@/data/site";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-12 sm:pb-16 sm:pt-16">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <FadeIn>
          <p className="font-hand text-2xl text-magenta sm:text-3xl">
            {aboutHero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {aboutHero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink-muted sm:text-lg">
            {aboutHero.introduction}
          </p>
          <p className="mt-5 font-hand text-2xl text-teal">{siteConfig.tagline}</p>
        </FadeIn>

        <FadeIn delay={0.08} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-6 top-8 h-24 w-24 rounded-[40%] bg-studio-yellow/70" />
          <div className="absolute -right-4 bottom-10 h-20 w-20 rounded-full bg-lavender/60" />
          <div className="studio-card relative aspect-[11/14] overflow-hidden rounded-[2.2rem] ring-1 ring-ink/10">
            <Image
              src="/about%20pic.png"
              alt="Portrait of Draw The Dreams artist Archana Acharya Pani"
              fill
              sizes="(max-width: 1024px) 90vw, 24rem"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
