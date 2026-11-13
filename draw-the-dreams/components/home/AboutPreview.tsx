import { ArrowRight } from "lucide-react";
import { ArtworkPlaceholder } from "@/components/media/ArtworkPlaceholder";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <section id="about-preview" className="relative py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <ArtworkPlaceholder
            kind="artist-portrait"
            label="Replaceable artist portrait placeholder"
            caption="Artist portrait placeholder"
            className="studio-card mx-auto aspect-[4/5] max-w-sm rounded-[2.2rem] ring-1 ring-ink/10 lg:mx-0"
          />
        </FadeIn>
        <FadeIn delay={0.06}>
          <SectionHeading
            eyebrow="About the artist"
            title="A teacher, a maker, and a studio full of colour."
            description="Draw The Dreams is led by an artist and art teacher who loves helping people find their own way of seeing. The studio is a warm room for looking, learning and making — for children discovering their first colours, and for adults returning to art with fresh curiosity."
          />
          <div className="mt-7">
            <Button href="/about" variant="outline">
              Meet the artist
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
