import { CalendarDays, Clock, MessageCircle } from "lucide-react";
import { ArtworkPlaceholder } from "@/components/media/ArtworkPlaceholder";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { classOfferings } from "@/data/classes";
import { siteConfig } from "@/data/site";
import { cn, whatsappUrl } from "@/lib/utils";

export function ClassOfferings() {
  return (
    <section className="relative py-10 sm:py-14">
      <Container className="space-y-6">
        {classOfferings.map((item, index) => {
          const enquiryHref = whatsappUrl(
            siteConfig.whatsapp.number,
            item.enquiryMessage,
          );

          return (
            <FadeIn key={item.slug} delay={index * 0.04}>
              <article
                id={item.slug}
                className={cn(
                  "studio-card grid overflow-hidden rounded-[2rem] ring-1 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
                  item.accent,
                )}
              >
                <ArtworkPlaceholder
                  kind={item.kind}
                  label={`${item.title} artwork placeholder`}
                  caption="Artwork placeholder"
                  className="min-h-[220px] w-full md:min-h-full"
                />
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <h2 className="font-heading text-3xl font-semibold text-ink">
                    {item.title}
                  </h2>
                  <dl className="mt-4 space-y-2 text-sm text-ink-muted sm:text-base">
                    {item.days ? (
                      <div className="flex items-start gap-2">
                        <CalendarDays
                          className="mt-0.5 h-4 w-4 shrink-0 text-magenta"
                          aria-hidden
                        />
                        <div>
                          <dt className="inline font-semibold text-ink">Days: </dt>
                          <dd className="inline">{item.days}</dd>
                        </div>
                      </div>
                    ) : null}
                    <div className="flex items-start gap-2">
                      <Clock
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                        aria-hidden
                      />
                      <div>
                        <dt className="inline font-semibold text-ink">Time: </dt>
                        <dd className="inline">{item.time}</dd>
                      </div>
                    </div>
                  </dl>
                  <p className="mt-4 text-sm leading-7 text-ink-muted sm:text-base">
                    {item.focus}
                  </p>
                  <div className="mt-6">
                    <Button href={enquiryHref} external variant="whatsapp">
                      <MessageCircle className="h-4 w-4" />
                      Enquire about {item.title}
                    </Button>
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </Container>
    </section>
  );
}
