import type { Metadata } from "next";
import { ContactClosing } from "@/components/contact/ContactClosing";
import { ContactHero } from "@/components/contact/ContactHero";
import { StudioInformation } from "@/components/contact/StudioInformation";
import { WhatsAppContact } from "@/components/contact/WhatsAppContact";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Let's create something together with ${siteConfig.name}. Enquire on WhatsApp about artwork, classes and workshops.`,
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <WhatsAppContact />
      <StudioInformation />
      <ContactClosing />
    </>
  );
}
