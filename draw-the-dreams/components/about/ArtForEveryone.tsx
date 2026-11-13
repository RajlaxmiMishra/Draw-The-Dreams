import { ArtworkPlaceholder } from "@/components/media/ArtworkPlaceholder";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { artForEveryone } from "@/data/about";

export function ArtForEveryone() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <FadeIn className="mb-10">
          <SectionHeading
            eyebrow="Art for everyone"
            title="Toddlers, kids and adults are all welcome at the table."
            description="Teaching is offered across these three groups. Message the studio for current class details rather than guessing at batches or timings."
          />
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {artForEveryone.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <article className="studio-card h-full overflow-hidden rounded-[1.8rem] ring-1 ring-ink/10">
                <ArtworkPlaceholder
                  kind={item.kind}
                  label={`${item.title} class placeholder`}
                  className="aspect-[5/4] w-full"
                />
                <div className="p-5">
                  <h3 className="font-heading text-2xl font-semibold text-ink">
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

        <FadeIn className="mt-8">
          <Button href="/classes" variant="secondary">
            Discover classes
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
