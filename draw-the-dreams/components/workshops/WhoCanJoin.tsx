import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { upcomingWorkshops, whoCanJoin } from "@/data/workshops";

export function WhoCanJoin() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="studio-card rounded-[2rem] bg-paper-soft/80 px-6 py-10 ring-1 ring-ink/10 sm:px-10">
            <SectionHeading
              eyebrow={whoCanJoin.eyebrow}
              title={whoCanJoin.title}
              description={whoCanJoin.description}
            />
          </div>
        </FadeIn>

        <FadeIn className="mt-8">
          {upcomingWorkshops.length === 0 ? (
            <p className="text-sm leading-6 text-ink-muted sm:text-base">
              There is no published workshop calendar on this page yet. Message
              the studio for whatever is coming next.
            </p>
          ) : (
            <ul className="grid gap-4 md:grid-cols-2">
              {upcomingWorkshops.map((workshop) => (
                <li
                  key={workshop.id}
                  className="studio-card rounded-[1.6rem] p-5 ring-1 ring-ink/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-magenta">
                    {workshop.setting === "outdoor"
                      ? "Outdoor session"
                      : "Studio workshop"}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-ink">
                    {workshop.title}
                  </h3>
                  {workshop.when ? (
                    <p className="mt-2 text-sm text-ink-muted">{workshop.when}</p>
                  ) : null}
                  {workshop.note ? (
                    <p className="mt-2 text-sm leading-6 text-ink-muted">
                      {workshop.note}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
