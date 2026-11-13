import { cn } from "@/lib/utils";

export type ArtworkKind =
  | "sunset-field"
  | "sketch-lines"
  | "teal-bloom"
  | "craft-collage"
  | "coral-still"
  | "lavender-sky"
  | "portrait-study"
  | "student-sun"
  | "student-boat"
  | "student-tree"
  | "toddler-play"
  | "kids-studio"
  | "adult-canvas"
  | "artist-portrait"
  | "hero-main"
  | "hero-side"
  | "hero-small"
  | "outdoor-painting";

type ArtworkPlaceholderProps = {
  kind: ArtworkKind;
  label: string;
  className?: string;
  caption?: string;
};

function Picture({ kind }: { kind: ArtworkKind }) {
  switch (kind) {
    case "sunset-field":
      return (
        <>
          <rect width="100" height="100" fill="#F8D98A" />
          <ellipse cx="50" cy="78" rx="58" ry="28" fill="#4E9B5A" />
          <ellipse cx="18" cy="82" rx="24" ry="16" fill="#399CA3" opacity="0.55" />
          <circle cx="72" cy="28" r="16" fill="#ED8065" />
          <circle cx="72" cy="28" r="10" fill="#D93B6C" />
          <path d="M8 70c18-16 32-8 46-22 10 12 24 8 40 16" stroke="#4A2E1E" strokeWidth="1.4" fill="none" />
        </>
      );
    case "sketch-lines":
      return (
        <>
          <rect width="100" height="100" fill="#F7EFE0" />
          <path d="M18 78c8-28 18-48 28-58" stroke="#4A2E1E" strokeWidth="1.5" fill="none" />
          <path d="M30 80c6-22 20-40 34-52" stroke="#6B4A36" strokeWidth="1.2" fill="none" />
          <path d="M48 82c4-18 16-36 30-46" stroke="#4A2E1E" strokeWidth="1.1" fill="none" />
          <circle cx="70" cy="24" r="7" stroke="#D93B6C" strokeWidth="1.3" fill="none" />
          <path d="M16 88h68" stroke="#A99BD5" strokeWidth="1" />
        </>
      );
    case "teal-bloom":
      return (
        <>
          <rect width="100" height="100" fill="#D7EFEF" />
          <circle cx="52" cy="48" r="28" fill="#399CA3" />
          <circle cx="38" cy="40" r="16" fill="#A99BD5" opacity="0.85" />
          <circle cx="64" cy="38" r="12" fill="#F3C65B" />
          <path d="M52 76c0 12-8 18-8 18" stroke="#4E9B5A" strokeWidth="3" strokeLinecap="round" />
        </>
      );
    case "craft-collage":
      return (
        <>
          <rect width="100" height="100" fill="#FBE3D6" />
          <rect x="14" y="18" width="34" height="26" rx="6" fill="#ED8065" />
          <rect x="52" y="28" width="30" height="30" rx="16" fill="#F3C65B" />
          <polygon points="24,70 44,54 62,78 28,84" fill="#D93B6C" />
          <circle cx="76" cy="72" r="12" fill="#399CA3" />
        </>
      );
    case "coral-still":
      return (
        <>
          <rect width="100" height="100" fill="#F8E2D8" />
          <ellipse cx="50" cy="62" rx="28" ry="10" fill="#ED8065" opacity="0.4" />
          <rect x="36" y="38" width="28" height="32" rx="4" fill="#D93B6C" />
          <circle cx="50" cy="34" r="10" fill="#F3C65B" />
          <path d="M22 78h56" stroke="#6B4A36" strokeWidth="2" />
        </>
      );
    case "lavender-sky":
      return (
        <>
          <rect width="100" height="100" fill="#E8E3F6" />
          <ellipse cx="30" cy="32" rx="22" ry="14" fill="#A99BD5" />
          <ellipse cx="70" cy="28" rx="18" ry="12" fill="#fffdf8" />
          <path d="M0 70c20-16 40-8 60-18 20 10 28 8 40 16v32H0z" fill="#399CA3" />
        </>
      );
    case "portrait-study":
      return (
        <>
          <rect width="100" height="100" fill="#F3E8D4" />
          <circle cx="50" cy="38" r="16" fill="#ED8065" />
          <path d="M28 88c4-28 16-36 22-36s18 8 22 36" fill="#399CA3" />
          <ellipse cx="50" cy="90" rx="30" ry="8" fill="#4A2E1E" opacity="0.12" />
        </>
      );
    case "student-sun":
      return (
        <>
          <rect width="100" height="100" fill="#FFF4C8" />
          <circle cx="50" cy="46" r="18" fill="#F3C65B" />
          <path d="M50 14v10M50 68v10M18 46h10M72 46h10M28 24l7 7M65 65l7 7M72 24l-7 7M35 65l-7 7" stroke="#ED8065" strokeWidth="3" strokeLinecap="round" />
        </>
      );
    case "student-boat":
      return (
        <>
          <rect width="100" height="100" fill="#D9F0F2" />
          <path d="M0 62h100v38H0z" fill="#399CA3" />
          <path d="M24 62l18-28 18 28" fill="#D93B6C" />
          <path d="M22 66h50l-8 12H30z" fill="#4A2E1E" />
        </>
      );
    case "student-tree":
      return (
        <>
          <rect width="100" height="100" fill="#EAF4DC" />
          <rect x="46" y="52" width="8" height="28" fill="#6B4A36" />
          <circle cx="50" cy="44" r="22" fill="#4E9B5A" />
          <circle cx="36" cy="48" r="12" fill="#399CA3" opacity="0.7" />
        </>
      );
    case "toddler-play":
      return (
        <>
          <rect width="100" height="100" fill="#FFE7C4" />
          <circle cx="32" cy="38" r="14" fill="#F3C65B" />
          <circle cx="58" cy="32" r="10" fill="#ED8065" />
          <circle cx="70" cy="54" r="12" fill="#A99BD5" />
          <path d="M20 78c20-16 40-8 62-18" stroke="#D93B6C" strokeWidth="4" strokeLinecap="round" fill="none" />
        </>
      );
    case "kids-studio":
      return (
        <>
          <rect width="100" height="100" fill="#F8D5E4" />
          <rect x="18" y="22" width="64" height="48" rx="8" fill="#fffdf8" />
          <path d="M28 54c10-16 18-8 26-18 8 12 16 6 26 16" stroke="#399CA3" strokeWidth="3" fill="none" />
          <circle cx="34" cy="40" r="5" fill="#F3C65B" />
          <rect x="30" y="74" width="40" height="8" rx="4" fill="#D93B6C" />
        </>
      );
    case "adult-canvas":
      return (
        <>
          <rect width="100" height="100" fill="#E7F2EA" />
          <rect x="22" y="16" width="56" height="68" rx="4" fill="#fffdf8" stroke="#4A2E1E" strokeWidth="2" />
          <path d="M30 64c10-18 20-10 28-24 8 10 14 8 22 18" fill="#4E9B5A" />
          <circle cx="62" cy="32" r="8" fill="#F3C65B" />
        </>
      );
    case "artist-portrait":
      return (
        <>
          <rect width="100" height="100" fill="#F3E8D4" />
          <circle cx="50" cy="34" r="18" fill="#ED8065" />
          <path d="M22 92c6-32 18-42 28-42s22 10 28 42" fill="#6B4A36" />
          <path d="M34 30c6-10 26-10 32 0" stroke="#4A2E1E" strokeWidth="2" fill="none" />
          <circle cx="78" cy="72" r="8" fill="#A99BD5" />
        </>
      );
    case "hero-side":
      return (
        <>
          <rect width="100" height="100" fill="#FDE0C8" />
          <circle cx="36" cy="40" r="22" fill="#ED8065" />
          <circle cx="62" cy="58" r="18" fill="#F3C65B" />
          <path d="M18 82c24-8 40 4 64-10" stroke="#D93B6C" strokeWidth="4" fill="none" />
        </>
      );
    case "hero-small":
      return (
        <>
          <rect width="100" height="100" fill="#E4F0D8" />
          <path d="M20 70c10-28 24-40 40-48" stroke="#4E9B5A" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="66" cy="28" r="10" fill="#399CA3" />
        </>
      );
    case "outdoor-painting":
      return (
        <>
          <rect width="100" height="100" fill="#CDEBEE" />
          <circle cx="78" cy="22" r="10" fill="#F3C65B" />
          <path d="M0 62c18-14 32-6 48-16 18 12 28 8 52 18v36H0z" fill="#4E9B5A" />
          <path d="M12 70l10-22 10 22" fill="#399CA3" />
          <rect x="54" y="38" width="22" height="28" rx="2" fill="#fffdf8" stroke="#4A2E1E" strokeWidth="1.6" />
          <path d="M65 66v18" stroke="#4A2E1E" strokeWidth="2" />
          <path d="M56 84h18" stroke="#4A2E1E" strokeWidth="2" strokeLinecap="round" />
          <path d="M58 58c6-10 12-6 16-14" stroke="#D93B6C" strokeWidth="2" fill="none" />
        </>
      );
    default:
      return (
        <>
          <rect width="100" height="100" fill="#F7D7E3" />
          <path d="M-10 78c30-40 50-20 70-48 16 18 28 14 50 28v52H-10z" fill="#D93B6C" />
          <circle cx="28" cy="30" r="12" fill="#F3C65B" />
          <circle cx="74" cy="22" r="8" fill="#A99BD5" />
          <path d="M12 90c18-22 32-8 48-24 14 12 22 8 36 18" stroke="#fffdf8" strokeWidth="2" fill="none" />
        </>
      );
  }
}

export function ArtworkPlaceholder({
  kind,
  label,
  className,
  caption,
}: ArtworkPlaceholderProps) {
  return (
    <figure className={cn("relative overflow-hidden", className)}>
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        role="img"
        aria-label={label}
        preserveAspectRatio="xMidYMid slice"
      >
        <Picture kind={kind} />
      </svg>
      {caption ? (
        <figcaption className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
