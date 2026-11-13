import { MessageCircle } from "lucide-react";
import { ArtworkPlaceholder } from "@/components/media/ArtworkPlaceholder";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { classCategories, classEnquiryMessage } from "@/data/home";
import { siteConfig } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function ArtClasses() {
  const enquiryHref = whatsappUrl(
    siteConfig.whatsapp.number,
    classEnquiryMessage,
  );

  return (
    <section id="classes-preview" className="relative py-16 sm:py-20">
      <Container>
        <FadeIn className="mb-10">
          <SectionHeading
            eyebrow="Art classes"
            title="Learn in a room that feels like play, with care."
            description="Classes are offered for toddlers, kids and adults. Message the studio on WhatsApp for current batches and details."
          />
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {classCategories.map((item, index) => (
            <FadeIn key={item.slug} delay={index * 0.06}>
              <article className="studio-card h-full overflow-hidden rounded-[1.8rem] ring-1 ring-ink/10">
                <ArtworkPlaceholder
                  kind={item.kind}
                  label={`${item.title} class artwork placeholder`}
                  className="aspect-[5/4] w-full"
                />
                <div className="p-5">
                  <h3 className="font-heading text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    {item.note}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="/classes" variant="secondary">
            See classes
          </Button>
          <Button href={enquiryHref} external variant="whatsapp">
            <MessageCircle className="h-4 w-4" />
            Enquire on WhatsApp
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
