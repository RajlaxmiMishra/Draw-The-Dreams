import { MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { workshopEnquiryMessage } from "@/data/home";
import { siteConfig } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function Workshops() {
  const enquiryHref = whatsappUrl(
    siteConfig.whatsapp.number,
    workshopEnquiryMessage,
  );

  return (
    <section className="relative py-8 sm:py-12">
      <Container>
        <FadeIn>
          <div className="studio-card relative overflow-hidden rounded-[2rem] bg-teal/12 px-6 py-10 ring-1 ring-teal/20 sm:px-10 sm:py-12">
            <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-studio-yellow/50" />
            <div className="absolute -bottom-8 left-10 h-24 w-24 rounded-[2rem] bg-magenta/20" />
            <div className="relative max-w-2xl">
              <p className="font-hand text-2xl text-teal">Workshops</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-ink sm:text-4xl">
                Come for a few hours. Leave with something you made.
              </h2>
              <p className="mt-4 text-base leading-7 text-ink-muted sm:text-lg">
                Workshops are special making sessions in the studio — a chance
                to try a theme, a craft, or a new way of painting. Ask on
                WhatsApp for whatever is happening next.
              </p>
              <div className="mt-7">
                <Button href={enquiryHref} external variant="whatsapp">
                  <MessageCircle className="h-4 w-4" />
                  Ask about workshops
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
