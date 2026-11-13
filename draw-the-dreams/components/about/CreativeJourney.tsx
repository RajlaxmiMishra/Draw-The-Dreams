import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { creativeJourney } from "@/data/about";

export function CreativeJourney() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <FadeIn className="mb-10">
          <SectionHeading
            eyebrow={creativeJourney.eyebrow}
            title={creativeJourney.title}
            description={creativeJourney.intro}
          />
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {creativeJourney.chapters.map((chapter, index) => (
            <FadeIn key={chapter.id} delay={index * 0.06}>
              <article className="studio-card h-full rounded-[1.8rem] p-6 ring-1 ring-ink/10">
                <p className="font-hand text-2xl text-magenta">{chapter.label}</p>
                <p className="mt-3 text-sm leading-7 text-ink-muted">
                  {chapter.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
