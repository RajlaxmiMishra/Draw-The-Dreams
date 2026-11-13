import { Home } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { studioInformation } from "@/data/contact";

export function StudioInformation() {
  return (
    <section className="relative py-10 sm:py-14">
      <Container>
        <FadeIn>
          <article className="studio-card rounded-[2rem] px-6 py-10 ring-1 ring-ink/10 sm:px-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-coral/20 text-coral">
              <Home className="h-5 w-5" aria-hidden />
            </span>
            <p className="mt-5 font-hand text-2xl text-coral">
              {studioInformation.eyebrow}
            </p>
            <h2 className="mt-2 max-w-2xl font-heading text-3xl font-semibold text-ink sm:text-4xl">
              {studioInformation.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg">
              {studioInformation.description}
            </p>
          </article>
        </FadeIn>
      </Container>
    </section>
  );
}
