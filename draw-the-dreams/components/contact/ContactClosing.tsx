import { MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactClosing, contactWhatsApp } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function ContactClosing() {
  const enquiryHref = whatsappUrl(
    siteConfig.whatsapp.number,
    contactWhatsApp.message,
  );

  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2.2rem] bg-magenta px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="absolute -left-8 top-6 h-28 w-28 rounded-full bg-studio-yellow/40" />
            <div className="absolute -right-6 bottom-4 h-24 w-24 rotate-12 rounded-[1.5rem] bg-lavender/40" />
            <p className="relative font-hand text-3xl text-studio-yellow">
              {contactClosing.eyebrow}
            </p>
            <h2 className="relative mx-auto mt-3 max-w-2xl font-heading text-3xl font-semibold sm:text-5xl">
              {contactClosing.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
              {contactClosing.description}
            </p>
            <div className="relative mt-8">
              <Button
                href={enquiryHref}
                external
                variant="whatsapp"
                className="bg-white !text-black shadow-[0_6px_0_0_#e8d9c4] hover:bg-paper"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
