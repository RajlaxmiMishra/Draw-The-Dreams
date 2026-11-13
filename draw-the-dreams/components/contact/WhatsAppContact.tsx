import { MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactWhatsApp } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function WhatsAppContact() {
  const enquiryHref = whatsappUrl(
    siteConfig.whatsapp.number,
    contactWhatsApp.message,
  );

  return (
    <section className="relative py-8 sm:py-12">
      <Container>
        <FadeIn>
          <div className="studio-card relative overflow-hidden rounded-[2rem] bg-studio-green/12 px-6 py-10 ring-1 ring-studio-green/25 sm:px-10 sm:py-12">
            <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-studio-yellow/50" />
            <div className="relative max-w-2xl">
              <p className="font-hand text-2xl text-studio-green">
                {contactWhatsApp.eyebrow}
              </p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-ink sm:text-4xl">
                {contactWhatsApp.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-ink-muted sm:text-lg">
                {contactWhatsApp.description}
              </p>
              <div className="mt-7">
                <Button href={enquiryHref} external variant="whatsapp">
                  <MessageCircle className="h-4 w-4" />
                  Enquire on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
