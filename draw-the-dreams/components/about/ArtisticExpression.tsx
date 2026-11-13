import { ArtworkPlaceholder } from "@/components/media/ArtworkPlaceholder";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { artisticExpressions } from "@/data/about";
import { cn } from "@/lib/utils";

export function ArtisticExpression() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <FadeIn className="mb-10">
          <SectionHeading
            align="center"
            eyebrow="Artistic expression"
            title="Many ways of making, one colourful studio."
            description="Paintings, sketches, canvas art, crafts and DIY each have a place here. The frames below are replaceable placeholders for original work."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {artisticExpressions.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article
                className={cn(
                  "studio-card h-full overflow-hidden rounded-[1.7rem] ring-1",
                  item.accent,
                )}
              >
                <ArtworkPlaceholder
                  kind={item.kind}
                  label={`${item.title} artwork placeholder`}
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
