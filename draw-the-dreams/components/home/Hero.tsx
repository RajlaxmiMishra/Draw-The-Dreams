import {
  ArrowUpRight,
  MessageCircle,
  Palette,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function Hero() {
  const enquiryHref = whatsappUrl(
    siteConfig.whatsapp.number,
    siteConfig.whatsapp.message,
  );

  return (
    <section className="relative overflow-hidden bg-transparent py-10 sm:py-14 lg:py-16">
      <Container className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-8">
        <FadeIn className="relative z-10 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-4 py-2 text-sm font-bold tracking-wide text-[#7241c8] shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#ff9a37]" aria-hidden="true" />
            A little more colour in every day
          </div>

          <h1 className="text-[3.6rem] font-black leading-[1.02] tracking-[-0.065em] text-[#5731a8] sm:text-7xl lg:text-8xl">
            Art
            <span className="block bg-gradient-to-r from-[#ed4c91] via-[#a64ce2] to-[#654be0] bg-clip-text pt-1 pb-3 pr-2 text-transparent">
              studio
              <span className="text-[#ff9d39]">.</span>
            </span>
          </h1>

          <p className="mt-6 text-lg font-semibold leading-8 text-[#4c4165] sm:text-xl">
            Welcome to Draw The Dreams
          </p>
          <p className="mx-auto mt-2 max-w-xl text-base leading-7 text-[#665e78] sm:text-lg sm:leading-8 lg:mx-0">
            A joyful space for original artwork, hands-on art and craft classes,
            and the freedom to discover what you can create.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button
              href="/gallery"
              variant="primary"
              className="rounded-xl bg-[#FF3B6B] px-6 py-3 text-base shadow-[0_6px_0_#c92d59] hover:bg-[#E02D5B]"
            >
              <Palette className="h-4 w-4" aria-hidden="true" />
              Explore Gallery
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href={enquiryHref}
              external
              variant="outline"
              className="rounded-xl border-white/90 bg-white/75 px-5 py-3 text-[#563394] shadow-sm hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp enquiry
            </Button>
          </div>

          <Button
            href="/classes"
            variant="outline"
            className="mt-5 min-h-11 border-transparent bg-transparent px-3 text-sm font-bold text-[#684a9e] shadow-none hover:border-transparent hover:bg-white/45 hover:text-[#d93b6c]"
          >
            Discover our classes
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </FadeIn>

        <FadeIn
          delay={0.08}
          className="relative mx-auto w-full max-w-[34rem]"
        >
          <div
            aria-hidden="true"
            className="absolute left-[8%] top-[8%] h-20 w-20 rounded-[2rem] bg-[#ffbd4a] shadow-lg transition-transform duration-500 ease-out motion-safe:group-hover:-rotate-12 sm:h-28 sm:w-28"
          />
          <div
            aria-hidden="true"
            className="absolute right-[3%] top-[13%] h-16 w-16 rounded-full bg-[#f36aa8] shadow-lg transition-transform duration-500 ease-out sm:h-24 sm:w-24"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[5%] right-[4%] h-24 w-24 rounded-[2rem] bg-[#5fc9b5] shadow-lg transition-transform duration-500 ease-out sm:h-32 sm:w-32"
          />

          <div className="group relative mx-auto aspect-[1/0.93] w-full max-w-[32rem]">
            <div className="absolute inset-[8%_7%_9%_9%] rotate-[-5deg] rounded-[2.4rem] border-[7px] border-white bg-white shadow-[0_24px_70px_rgba(74,46,100,0.18)] transition-transform duration-500 ease-out group-hover:rotate-[-2deg] group-hover:scale-[1.02] sm:inset-[7%_9%_8%_7%] sm:rounded-[3rem] sm:border-[10px]">
              <svg
                viewBox="0 0 480 430"
                className="h-full w-full rounded-[1.8rem] sm:rounded-[2.3rem]"
                role="img"
                aria-label="Bright abstract painting with a sun, colorful flowers, and playful shapes"
              >
                <defs>
                  <linearGradient id="canvasBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#fff5d8" />
                    <stop offset="1" stopColor="#ffe7f1" />
                  </linearGradient>
                  <linearGradient id="hill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#8b65e8" />
                    <stop offset="1" stopColor="#ef70ad" />
                  </linearGradient>
                </defs>
                <rect width="480" height="430" fill="url(#canvasBg)" />
                <circle cx="360" cy="111" r="63" fill="#ffbd45" />
                <path
                  d="M0 279c65-37 108-39 164-12 57 27 89 26 145-2 64-32 113-37 171-9v174H0Z"
                  fill="url(#hill)"
                />
                <path
                  d="M0 333c72-39 130-29 187-2 60 29 109 23 160-5 52-28 88-29 133-7v111H0Z"
                  fill="#68c7b0"
                />
                <path
                  d="M74 326c8-50 13-84 23-111m0 112c-27-23-40-45-49-70m53 39c20-24 33-46 40-68"
                  fill="none"
                  stroke="#4d397f"
                  strokeLinecap="round"
                  strokeWidth="9"
                />
                <circle cx="96" cy="207" r="20" fill="#ff769b" />
                <circle cx="67" cy="235" r="18" fill="#ff769b" />
                <circle cx="124" cy="250" r="17" fill="#ff769b" />
                <circle cx="88" cy="266" r="19" fill="#ff769b" />
                <circle cx="96" cy="237" r="12" fill="#ffdd69" />
                <path
                  d="M284 303c0-49 10-82 29-112m-30 103c-28-19-40-42-49-64m70 28c21-15 35-34 45-56"
                  fill="none"
                  stroke="#4d397f"
                  strokeLinecap="round"
                  strokeWidth="8"
                />
                <circle cx="313" cy="179" r="17" fill="#5bc7b5" />
                <circle cx="288" cy="192" r="16" fill="#5bc7b5" />
                <circle cx="333" cy="207" r="16" fill="#5bc7b5" />
                <circle cx="303" cy="218" r="16" fill="#5bc7b5" />
                <circle cx="313" cy="200" r="10" fill="#ffdd69" />
                <path
                  d="m197 93 9 20 22 2-17 14 5 21-19-11-19 11 5-21-17-14 22-2Z"
                  fill="#fffdf8"
                />
                <circle cx="150" cy="112" r="7" fill="#ed5d9b" />
                <circle cx="236" cy="173" r="6" fill="#7952d4" />
                <circle cx="410" cy="237" r="8" fill="#fffdf8" />
              </svg>
            </div>

            <div className="absolute bottom-[2%] left-[0%] w-[43%] rotate-[-11deg] drop-shadow-[0_18px_15px_rgba(57,37,82,0.2)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-[-6deg] sm:bottom-[1%] sm:left-[-2%]">
              <svg
                viewBox="0 0 230 180"
                className="h-auto w-full"
                role="img"
                aria-label="Colorful painter's palette"
              >
                <path
                  d="M113 12C55 12 16 48 16 93c0 41 34 71 75 71 17 0 28-10 28-24 0-11-9-18-9-29 0-10 9-17 21-17h20c35 0 61-19 61-45 0-21-29-37-64-37Z"
                  fill="#fffdf8"
                  stroke="#7456ae"
                  strokeWidth="7"
                />
                <circle cx="59" cy="69" r="12" fill="#ff6d9c" />
                <circle cx="95" cy="45" r="12" fill="#ffbd45" />
                <circle cx="139" cy="48" r="12" fill="#62c9b2" />
                <circle cx="174" cy="70" r="12" fill="#8b65e8" />
                <ellipse
                  cx="79"
                  cy="119"
                  rx="17"
                  ry="12"
                  transform="rotate(-32 79 119)"
                  fill="#ffd7a3"
                />
                <circle cx="78" cy="119" r="7" fill="#7456ae" />
              </svg>
            </div>

            <div
              aria-hidden="true"
              className="absolute right-[3%] top-[2%] flex -rotate-[28deg] items-end gap-2 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-[-20deg]"
            >
              <span className="h-28 w-3 rounded-full bg-gradient-to-b from-[#ffcf5a] via-[#fb8b62] to-[#d65d81] shadow-md sm:h-36 sm:w-4" />
              <span className="h-36 w-3 rounded-full bg-gradient-to-b from-[#8d72ec] via-[#ee70ad] to-[#ffbd45] shadow-md sm:h-44 sm:w-4" />
            </div>

            <div className="absolute right-[1%] top-[54%] grid h-14 w-14 rotate-12 place-items-center rounded-2xl border-4 border-white bg-[#6ac9b6] text-white shadow-lg transition-transform duration-500 group-hover:rotate-0 sm:right-0 sm:h-[4.5rem] sm:w-[4.5rem]">
              <Sparkles className="h-7 w-7" aria-hidden="true" />
            </div>

            <div className="absolute bottom-[8%] right-[1%] -rotate-3 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-lg backdrop-blur transition-transform duration-500 group-hover:rotate-0 sm:bottom-[7%] sm:right-[2%] sm:px-5">
              <p className="font-hand text-xl font-semibold text-[#6844b8] sm:text-2xl">
                made with joy
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
