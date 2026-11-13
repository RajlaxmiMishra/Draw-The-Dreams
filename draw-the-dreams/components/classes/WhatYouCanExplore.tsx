import { ArtworkPlaceholder } from "@/components/media/ArtworkPlaceholder";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { classExplorations } from "@/data/classes";
import { cn } from "@/lib/utils";

export function WhatYouCanExplore() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <FadeIn className="mb-10">
          <SectionHeading
            align="center"
            eyebrow="What you can explore"
            title="Painting, sketching, canvas, crafts and DIY."
            description="Class time can wander across these ways of making. The pictures below are replaceable placeholders, not a fixed syllabus."
          />
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {classExplorations.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article
                className={cn(
                  "studio-card h-full overflow-hidden rounded-[1.7rem] ring-1",
                  item.accent,
                )}
              >
                <ArtworkPlaceholder
                  kind={item.kind}
                  label={`${item.title} class activity placeholder`}
                  className="aspect-square w-full"
                />
                <div className="p-4">
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    {item.body}
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
