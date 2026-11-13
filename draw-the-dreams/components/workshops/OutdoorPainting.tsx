import { MessageCircle } from "lucide-react";
import { ArtworkPlaceholder } from "@/components/media/ArtworkPlaceholder";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { outdoorEnquiryMessage, outdoorLivePainting } from "@/data/workshops";
import { siteConfig } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function OutdoorPainting() {
  const enquiryHref = whatsappUrl(
    siteConfig.whatsapp.number,
    outdoorEnquiryMessage,
  );

  return (
    <section className="relative py-10 sm:py-14">
      <Container>
        <FadeIn>
          <article className="studio-card grid overflow-hidden rounded-[2rem] bg-teal/10 ring-1 ring-teal/25 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <ArtworkPlaceholder
              kind="outdoor-painting"
              label="Replaceable outdoor live painting placeholder"
              caption="Outdoor painting placeholder"
              className="min-h-[240px] w-full md:min-h-full"
            />
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="font-hand text-2xl text-teal">
                {outdoorLivePainting.eyebrow}
              </p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-ink sm:text-4xl">
                {outdoorLivePainting.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink-muted sm:text-base">
                {outdoorLivePainting.description}
              </p>
              <div className="mt-6">
                <Button href={enquiryHref} external variant="whatsapp">
                  <MessageCircle className="h-4 w-4" />
                  Ask about outdoor sessions
                </Button>
              </div>
            </div>
          </article>
        </FadeIn>
      </Container>
    </section>
  );
}
