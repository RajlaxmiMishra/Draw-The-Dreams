"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { cn, whatsappUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function Logo() {
  return (
    <Link
      href="/"
      className="group flex min-w-0 shrink-0 items-center"
    >
      <Image
        src="/logo.png"
        alt={`${siteConfig.name} — ${siteConfig.tagline}`}
        width={198}
        height={130}
        className="h-[97px] w-[148px] object-contain transition-transform duration-300 ease-out motion-safe:group-hover:scale-105 sm:h-[116px] sm:w-[176px] lg:h-[130px] lg:w-[198px]"
        priority
        unoptimized
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useBodyScrollLock(open);

  const enquiryHref = whatsappUrl(
    siteConfig.whatsapp.number,
    siteConfig.whatsapp.message,
  );

  return (
    <header className="relative z-50 bg-transparent">
      <Container className="py-2 sm:py-3">
        <div className="flex min-h-[4.75rem] items-center justify-between gap-3 sm:min-h-[8rem] lg:min-h-[9rem]">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-bold text-ink-muted transition-colors duration-200 hover:text-magenta after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:origin-left after:scale-x-0 after:rounded-full after:bg-magenta after:transition-transform hover:after:scale-x-100",
                    active && "text-magenta after:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              href={enquiryHref}
              external
              variant="whatsapp"
              className="desktop-enquiry border-[#2C1810]/35 shadow-[3px_4px_0_rgba(44,24,16,0.28)] hover:shadow-[4px_5px_0_rgba(44,24,16,0.32)]"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire
            </Button>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem_0.5rem_1rem_0.6rem] border border-[#2C1810]/30 bg-white/55 text-ink shadow-[2px_3px_0_rgba(44,24,16,0.2)] backdrop-blur-md transition-colors hover:bg-white/75 active:bg-[#e9e5fb]/80 focus-visible:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6844b8] lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full bg-transparent lg:hidden"
        >
          <Container className="flex flex-col gap-2 rounded-[1.4rem_0.8rem_1.8rem_0.9rem] border border-white/40 bg-[#f7f5ff]/70 py-4 shadow-[0_8px_24px_rgba(74,54,112,0.12)] backdrop-blur-xl">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b border-dashed border-[#2C1810]/10 px-3 py-3 text-base font-bold text-ink-muted transition-colors hover:text-magenta",
                    active && "text-magenta",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button href={enquiryHref} external variant="whatsapp" className="mt-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp enquiry
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
