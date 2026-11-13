import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { workshopsHero } from "@/data/workshops";
import { siteConfig } from "@/data/site";

export function WorkshopsHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-12 sm:pb-16 sm:pt-16">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <FadeIn>
          <p className="font-hand text-2xl text-magenta sm:text-3xl">
            {workshopsHero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            {workshopsHero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink-muted sm:text-lg">
            {workshopsHero.introduction}
          </p>
          <p className="mt-5 font-hand text-2xl text-teal">{siteConfig.tagline}</p>
        </FadeIn>

        <FadeIn delay={0.08} className="relative mx-auto w-full max-w-md lg:-ml-24 lg:mr-0">
          <div className="absolute -left-5 top-8 h-20 w-20 rounded-[40%] bg-studio-yellow/70" />
          <div className="absolute -right-3 bottom-10 h-16 w-16 rounded-full bg-lavender/55" />
          <div className="studio-card relative aspect-[426/666] overflow-hidden rounded-[2.2rem] ring-1 ring-ink/10">
            <Image
              src="/workshop%20pic.png"
              alt="Draw The Dreams artist viewing artwork at an exhibition"
              fill
              unoptimized
              sizes="(max-width: 1024px) 90vw, 36rem"
              className="object-cover"
              style={{ objectPosition: "75% center" }}
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
