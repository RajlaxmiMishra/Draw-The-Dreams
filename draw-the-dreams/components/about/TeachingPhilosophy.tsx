import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teachingPhilosophy } from "@/data/about";

const accents = [
  "bg-magenta/12 ring-magenta/20",
  "bg-lavender/20 ring-lavender/30",
  "bg-teal/12 ring-teal/20",
  "bg-studio-yellow/30 ring-studio-yellow/40",
];

export function TeachingPhilosophy() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <FadeIn className="mb-10">
          <SectionHeading
            eyebrow="Teaching philosophy"
            title="A studio that grows courage as much as skill."
            description="Classes are guided by creativity, imagination, experimentation and confidence — so students learn to trust their own hands."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {teachingPhilosophy.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article
                className={`studio-card h-full rounded-[1.8rem] p-6 ring-1 ${accents[index]}`}
              >
                <p className="font-hand text-2xl text-ink">{`0${index + 1}`}</p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted sm:text-base">
                  {item.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
