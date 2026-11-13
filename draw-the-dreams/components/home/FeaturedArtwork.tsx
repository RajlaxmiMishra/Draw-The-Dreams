import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredArtwork } from "@/data/home";

export function FeaturedArtwork() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <FadeIn className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Featured Star"
          />
          <Button href="/gallery" variant="outline" className="shrink-0">
            Explore Gallery
            <ArrowRight className="h-4 w-4" />
          </Button>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArtwork.map((work, index) => (
            <FadeIn
              key={work.id}
              delay={index * 0.05}
            >
              <article className="studio-card h-full overflow-hidden rounded-[1.8rem] ring-1 ring-ink/10">
                <div
                  className="relative w-full bg-white/70"
                  style={{ aspectRatio: work.aspectRatio ?? "4 / 5" }}
                >
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: work.objectPosition ?? "center" }}
                  />
                </div>
                <div className="flex min-h-20 items-center justify-between gap-3 px-5 py-4">
                  <p className="font-heading text-lg font-semibold text-ink">
                    Featured Star
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
