import Link from "next/link";
import { Frame, Palette, Pencil, Scissors, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/home";
import { cn } from "@/lib/utils";

const icons = {
  paintings: Palette,
  sketches: Pencil,
  canvas: Frame,
  crafts: Scissors,
  diy: Sparkles,
};

const accents = {
  magenta: "bg-magenta/12 ring-magenta/25 hover:bg-magenta/18",
  ink: "bg-ink/8 ring-ink/15 hover:bg-ink/12",
  teal: "bg-teal/12 ring-teal/25 hover:bg-teal/18",
  coral: "bg-coral/16 ring-coral/30 hover:bg-coral/22",
  green: "bg-studio-green/12 ring-studio-green/25 hover:bg-studio-green/18",
};

const iconColor = {
  magenta: "text-magenta",
  ink: "text-ink",
  teal: "text-teal",
  coral: "text-coral",
  green: "text-studio-green",
};

export function Categories() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Explore creativity"
            title="Five ways the studio likes to make."
            description="Paintings, sketches, canvas work, crafts and DIY — each with its own texture, pace and joy."
            className="mb-10"
          />
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, index) => {
            const Icon = icons[category.slug as keyof typeof icons];

            return (
              <FadeIn key={category.slug} delay={index * 0.05}>
                <Link
                  href={category.href}
                  className={cn(
                    "studio-card flex h-full flex-col rounded-[1.7rem] p-5 ring-1 transition-colors",
                    accents[category.accent],
                  )}
                >
                  <span
                    className={cn(
                      "mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/80",
                      iconColor[category.accent],
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    {category.note}
                  </p>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
