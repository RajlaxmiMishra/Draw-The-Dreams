import { ArtworkPlaceholder } from "@/components/media/ArtworkPlaceholder";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { contactHero } from "@/data/contact";
import { siteConfig } from "@/data/site";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-12 sm:pb-16 sm:pt-16">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <FadeIn>
          <p className="font-hand text-2xl text-magenta sm:text-3xl">
            {contactHero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            {contactHero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink-muted sm:text-lg">
            {contactHero.introduction}
          </p>
          <p className="mt-5 font-hand text-2xl text-teal">{siteConfig.tagline}</p>
        </FadeIn>

        <FadeIn delay={0.08} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-5 top-8 h-20 w-20 rounded-[40%] bg-studio-yellow/70" />
          <div className="absolute -right-3 bottom-8 h-16 w-16 rounded-full bg-coral/45" />
          <ArtworkPlaceholder
            kind="hero-side"
            label="Replaceable contact page artwork placeholder"
            caption="Artwork placeholder"
            className="studio-card relative aspect-square rounded-[2.2rem] ring-1 ring-ink/10"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
