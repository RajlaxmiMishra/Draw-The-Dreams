import { MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { workshopEnquiryMessage } from "@/data/workshops";
import { siteConfig } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function WorkshopsCta() {
  const enquiryHref = whatsappUrl(
    siteConfig.whatsapp.number,
    workshopEnquiryMessage,
  );

  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2.2rem] bg-teal px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="absolute -left-8 top-6 h-28 w-28 rounded-full bg-studio-yellow/45" />
            <div className="absolute -right-6 bottom-4 h-24 w-24 rotate-12 rounded-[1.5rem] bg-magenta/30" />
            <p className="relative font-hand text-3xl text-studio-yellow">
              Curious about a workshop?
            </p>
            <h2 className="relative mx-auto mt-3 max-w-2xl font-heading text-3xl font-semibold sm:text-5xl">
              Ask about upcoming sessions, availability and details.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
              WhatsApp is the simplest way to hear what is happening next at
              the home studio — or outdoors, when a live-painting session is
              planned.
            </p>
            <div className="relative mt-8">
              <Button
                href={enquiryHref}
                external
                variant="whatsapp"
                className="bg-white !text-black shadow-[0_6px_0_0_#2d7a80] hover:bg-paper"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire about workshops
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
