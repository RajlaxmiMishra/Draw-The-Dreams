import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-hand text-2xl text-magenta">{eyebrow}</p>
      ) : null}
      <Heading className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="text-base leading-7 text-ink-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
