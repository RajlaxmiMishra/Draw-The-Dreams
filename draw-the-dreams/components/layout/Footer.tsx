import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const enquiryHref = whatsappUrl(
    siteConfig.whatsapp.number,
    siteConfig.whatsapp.message,
  );

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-ink/10 bg-paper-soft">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-4 h-44 w-44 rounded-full bg-studio-yellow/45 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 bottom-0 h-52 w-52 rounded-full bg-magenta/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-10 h-24 w-24 rounded-[2rem] bg-teal/15 blur-2xl"
      />

      <Container className="relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-md space-y-3">
          <p className="font-heading text-2xl font-semibold tracking-tight text-ink">
            {siteConfig.name}
          </p>
          {siteConfig.artistCredit ? (
            <p className="text-sm font-medium text-ink-muted">
              {siteConfig.artistCredit}
            </p>
          ) : null}
          <p className="font-hand text-2xl leading-none text-magenta">
            {siteConfig.tagline}
          </p>
          <p className="pt-1 text-sm leading-7 text-ink-muted">
            A warm studio for original artwork, thoughtful teaching, and
            creative practice.
          </p>
        </div>

        <div>
          <p className="mb-5 font-heading text-lg font-semibold text-ink">
            Explore
          </p>
          <nav className="flex flex-col gap-1" aria-label="Footer">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit rounded-full px-1 py-1.5 text-sm font-medium text-ink-muted transition-all duration-200 hover:text-magenta motion-safe:hover:translate-x-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <p className="font-heading text-lg font-semibold text-ink">
            Studio enquiry
          </p>
          <p className="text-sm leading-7 text-ink-muted">
            Message on WhatsApp for classes, commissions, and workshop details.
          </p>
          <Button
            href={enquiryHref}
            external
            variant="whatsapp"
            className="shadow-[4px_6px_0_rgba(74,46,30,0.12)]"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </Button>
        </div>
      </Container>

      <div className="relative border-t border-ink/10">
        <Container className="flex flex-col gap-2 py-5 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p>© 2026 {siteConfig.name}. All rights reserved.</p>
            <p>{siteConfig.location}</p>
          </div>
          <p className="font-hand text-lg text-ink">Made with colour and care.</p>
        </Container>
      </div>
    </footer>
  );
}
