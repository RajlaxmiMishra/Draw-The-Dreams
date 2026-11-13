import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border-2 border-[#2C1810] bg-magenta text-white shadow-[5px_6px_0_#2C1810] hover:-translate-y-0.5 hover:bg-[#c43361] hover:shadow-[6px_8px_0_#2C1810]",
  secondary:
    "border-2 border-[#2C1810] bg-teal text-white shadow-[5px_6px_0_#2C1810] hover:-translate-y-0.5 hover:bg-[#31858b] hover:shadow-[6px_8px_0_#2C1810]",
  outline:
    "border-2 border-[#2C1810] bg-white text-ink shadow-[5px_6px_0_rgba(44,24,16,0.16)] hover:-translate-y-0.5 hover:bg-paper-soft hover:shadow-[6px_8px_0_rgba(44,24,16,0.2)]",
  whatsapp:
    "border-2 border-[#2C1810] bg-studio-green text-white shadow-[5px_6px_0_#2C1810] hover:-translate-y-0.5 hover:bg-[#438a4e] hover:shadow-[6px_8px_0_#2C1810]",
} as const;

type ButtonVariant = keyof typeof variants;

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  external?: never;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  "aria-pressed"?: boolean;
  "aria-label"?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClassName =
  "inline-flex items-center justify-center gap-2 rounded-[1.2rem_0.55rem_1.35rem_0.7rem] px-5 py-2.5 text-sm font-bold tracking-wide transition-[transform,background-color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-magenta disabled:pointer-events-none disabled:opacity-60";

function isLinkButton(props: ButtonProps): props is ButtonAsLink {
  return "href" in props && typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const classes = cn(
    baseClassName,
    variants[props.variant ?? "primary"],
    props.className,
  );

  if (isLinkButton(props)) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      );
    }

    return (
      <Link href={props.href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      aria-pressed={props["aria-pressed"]}
      aria-label={props["aria-label"]}
      className={classes}
    >
      {props.children}
    </button>
  );
}
