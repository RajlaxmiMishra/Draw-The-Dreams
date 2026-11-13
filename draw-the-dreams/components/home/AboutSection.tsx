import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function BotanicalCorner({
  className,
  flip = false,
}: {
  className: string;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 220"
      fill="none"
      className={`${className}${flip ? " -scale-x-100" : ""}`}
    >
      <path
        d="M7 206C56 171 64 108 118 46M41 183c-3-31-18-47-39-55m60 31c24-30 47-38 78-35M88 93c-4-29 6-51 26-72m-5 138c31-12 57-5 81 15"
        stroke="#176777"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <path d="M35 145C3 148-8 128 2 108c31 1 47 17 33 37Z" fill="#418b91" />
      <path d="M73 129c-2-31 16-46 40-40 1 31-13 47-40 40Z" fill="#6554b3" />
      <path d="M104 69c-13-29-2-48 21-55 14 27 7 47-21 55Z" fill="#27828b" />
      <path d="M125 162c18-27 42-29 59-10-15 27-35 33-59 10Z" fill="#378d89" />
      <circle cx="38" cy="111" r="13" fill="#D93B6C" />
      <circle cx="76" cy="77" r="11" fill="#D93B6C" />
      <circle cx="113" cy="44" r="14" fill="#D93B6C" />
    </svg>
  );
}

function Butterfly({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 90"
      fill="none"
      className={className}
    >
      <path
        d="M60 42C42 4 14 12 16 31c2 15 18 21 41 19-25 1-39 15-27 28 12 13 27 1 30-22Zm0 0C78 4 106 12 104 31c-2 15-18 21-41 19 25 1 39 15 27 28-12 13-27 1-30-22Zm0-6V72"
        fill="#dbe4fa"
        stroke="#484b9e"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <circle cx="60" cy="37" r="4" fill="#484b9e" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section
      id="about-preview"
      className="relative overflow-hidden bg-gradient-to-b from-transparent via-[#e4e0ff]/50 to-transparent py-14 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="relative isolate mx-auto grid max-w-7xl items-center gap-8 overflow-hidden bg-[#E8BC68] px-5 py-12 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-3 border border-dashed border-[#fff4d8]/60 sm:inset-5"
          />
          <BotanicalCorner className="pointer-events-none absolute -left-7 -top-8 h-40 w-40 rotate-[-18deg] sm:h-56 sm:w-56" />
          <BotanicalCorner
            className="pointer-events-none absolute -bottom-12 -left-8 hidden h-48 w-48 rotate-[24deg] sm:block sm:h-64 sm:w-64"
            flip
          />
          <BotanicalCorner
            className="pointer-events-none absolute -bottom-12 -right-10 h-48 w-48 rotate-[-20deg] sm:h-64 sm:w-64"
            flip
          />
          <Butterfly className="pointer-events-none absolute right-[7%] top-[5%] hidden h-20 w-28 rotate-[12deg] sm:block" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-1.5rem] top-[42%] h-24 w-24 rounded-full border-[5px] border-white/80"
          />
          <Sparkles
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[12%] right-[37%] hidden h-8 w-8 rotate-12 text-[#fff4d8] lg:block"
          />

          <FadeIn className="relative z-10 mx-auto w-full max-w-[20rem] lg:max-w-none">
            <div className="rotate-[-2deg] border-[10px] border-white bg-white p-2 pb-10 shadow-[9px_12px_0_rgba(44,24,16,0.22)] transition-transform duration-300 hover:rotate-0 sm:border-[14px] sm:p-3 sm:pb-12">
              <div className="relative aspect-[430/722] overflow-hidden border border-[#2C1810]/15 bg-[#eee7f5]">
                <Image
                  src="/home%20pic.png"
                  alt="Draw The Dreams artist viewing paintings at an exhibition"
                  fill
                  sizes="(min-width: 1024px) 25vw, 80vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-4 rotate-[-4deg] text-center font-hand text-2xl font-semibold text-[#2C1810] sm:text-3xl">
              Archana Acharya Pani
            </p>
          </FadeIn>

          <FadeIn
            delay={0.08}
            className="relative z-10 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            <p className="font-hand text-2xl font-semibold text-white sm:text-3xl">
              <Sparkles
                className="mr-1 inline h-5 w-5 text-[#D93B6C]"
                aria-hidden="true"
              />
              Made by hand, shared with heart
            </p>
            <h2 className="mt-3 font-founder text-4xl font-medium leading-[0.98] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              One-of-a-kind art pieces and workshops{" "}
              <span className="relative inline-block">
                to unlock your creativity
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 -z-10 h-3 w-full rotate-[-1deg] bg-[#D97969]"
                />
              </span>
            </h2>
            <p className="mt-5 text-sm font-bold tracking-wide text-white sm:text-base">
              by Archana Acharya Pani
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#49351e] sm:text-base sm:leading-8 lg:mx-0">
              Original artwork and welcoming workshops for curious minds.
              Explore colour, learn by doing, and make something that feels
              completely your own.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button
                href="/contact"
                className="rounded-full border-[#2C1810] bg-[#D97969] px-8 py-3 text-white shadow-[4px_6px_0_rgba(44,24,16,0.22)] hover:bg-[#ca685b]"
              >
                Sign Up
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
