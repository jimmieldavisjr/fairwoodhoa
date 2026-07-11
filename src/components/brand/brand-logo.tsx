import { cn } from "@/lib/utils";

/**
 * Compact circular emblem — a minimalist rendition of the Fairwood Greens
 * mark (snow-capped peak, evergreens, fairway) that stays crisp at small
 * header/footer sizes. The full illustrated roundel from the brand guide
 * can be dropped in later as an SVG/PNG asset (see README "assets needed").
 */
export function BrandEmblem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Fairwood Greens emblem"
    >
      <defs>
        <clipPath id="fg-emblem-clip">
          <circle cx="24" cy="24" r="20" />
        </clipPath>
      </defs>
      <circle
        cx="24"
        cy="24"
        r="23"
        fill="#f7f7f3"
        stroke="#032619"
        strokeWidth="1.75"
      />
      <circle
        cx="24"
        cy="24"
        r="20.4"
        fill="none"
        stroke="#a58128"
        strokeWidth="1"
      />
      <g clipPath="url(#fg-emblem-clip)">
        <rect x="4" y="4" width="40" height="40" fill="#e9f0ee" />
        {/* distant range */}
        <path
          d="M4 30 L14 19 L21 27 L27 21 L34 29 L44 22 L44 44 L4 44 Z"
          fill="#c3cdcf"
        />
        {/* main peak */}
        <path d="M11 31 L24 11 L37 31 Z" fill="#a1b1b3" />
        {/* snow cap */}
        <path
          d="M24 11 L18.6 19.4 L21 17.8 L23 20 L24.6 17.4 L26.8 19.6 L30 19.6 Z"
          fill="#ffffff"
        />
        {/* mid fairway hill */}
        <path
          d="M4 31 Q16 26 26 30 Q35 33 44 29 L44 44 L4 44 Z"
          fill="#2f7d57"
        />
        {/* evergreens */}
        <g fill="#032619">
          <path d="M13 30 l2.4 5 h-4.8 z" />
          <path d="M13 33 l3 6 h-6 z" />
          <path d="M34 31 l2.6 5 h-5.2 z" />
          <path d="M34 34 l3.2 6.4 h-6.4 z" />
        </g>
        {/* front hill */}
        <path
          d="M4 35 Q18 31 30 34 Q38 36 44 34 L44 44 L4 44 Z"
          fill="#14432b"
        />
      </g>
    </svg>
  );
}

type WordmarkProps = {
  tone?: "dark" | "light";
  className?: string;
  emblemClassName?: string;
  /** Hide the "Homeowners' Association" sub-line on very tight layouts */
  compact?: boolean;
  /** Show the circular emblem alongside the wordmark (footer). */
  showEmblem?: boolean;
  /** Lead with a slim gold→green accent bar instead of the emblem (header). */
  accentBar?: boolean;
};

/**
 * Typographic lockup for the Fairwood Greens identity.
 * - Header: `showEmblem={false} accentBar` — a bold, wordmark-led display.
 * - Footer: emblem + wordmark, `tone="light"` for dark backgrounds.
 */
export function Wordmark({
  tone = "dark",
  className,
  emblemClassName,
  compact = false,
  showEmblem = true,
  accentBar = false,
}: WordmarkProps) {
  const isLight = tone === "light";
  return (
    <span className={cn("flex items-center gap-3", className)}>
      {showEmblem && (
        <BrandEmblem className={cn("h-10 w-10", emblemClassName)} />
      )}
      {accentBar && !showEmblem && (
        <span
          aria-hidden
          className="h-9 w-1 rounded-full bg-gradient-to-b from-gold to-forest"
        />
      )}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif font-bold uppercase tracking-[0.015em]",
            accentBar ? "text-lg sm:text-xl" : "text-[1.05rem] sm:text-lg",
            isLight ? "text-white" : "text-foreground"
          )}
        >
          Fairwood Greens
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em]",
              isLight ? "text-white/65" : "text-muted-foreground"
            )}
          >
            Homeowners&rsquo; Association
          </span>
        )}
      </span>
    </span>
  );
}
