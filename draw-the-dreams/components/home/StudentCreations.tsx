import Image from "next/image";
import { ArtworkPlaceholder } from "@/components/media/ArtworkPlaceholder";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { studentWorks } from "@/data/home";

export function StudentCreations() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <FadeIn className="mb-10">
          <SectionHeading
            align="center"
            eyebrow="Student creations"
            title="The studio is proudest of the work students make."
            description="A selection of artwork made by our young artists."
          />
        </FadeIn>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {studentWorks.map((work, index) => (
            <FadeIn key={work.id} delay={index * 0.04}>
              {work.kind ? (
                <ArtworkPlaceholder
                  kind={work.kind}
                  label={work.title}
                  caption="Student work"
                  className="studio-card aspect-square rounded-[1.6rem] ring-1 ring-ink/10"
                />
              ) : work.image && work.alt ? (
                <div
                  className="studio-card relative overflow-hidden rounded-[1.6rem] ring-1 ring-ink/10"
                  style={{ aspectRatio: work.aspectRatio ?? "1 / 1" }}
                >
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
