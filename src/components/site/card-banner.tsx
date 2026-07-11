import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type Theme = "gold" | "green" | "slate";

const themeStyles: Record<Theme, { bar: string; chip: string }> = {
  gold: { bar: "bg-gold", chip: "bg-gold text-white" },
  green: { bar: "bg-forest", chip: "bg-forest text-white" },
  slate: { bar: "bg-charcoal", chip: "bg-charcoal text-white" },
};

/**
 * Minimal, corporate card header — a neutral surface with a faint
 * topographic pattern (a nod to the brand's contour motif), a slim
 * accent bar, and a single category icon in the accent color. No stock
 * photography and no heavy color fields.
 */
export function CardBanner({
  theme,
  icon: Icon,
}: {
  theme: Theme;
  icon: LucideIcon;
}) {
  const s = themeStyles[theme];
  return (
    <div className="relative h-28 overflow-hidden bg-secondary">
      <span
        aria-hidden
        className={cn("absolute inset-x-0 top-0 h-1", s.bar)}
      />

      {/* faint topographic contour lines */}
      <svg
        className="absolute inset-0 h-full w-full text-charcoal opacity-[0.05]"
        viewBox="0 0 400 112"
        preserveAspectRatio="none"
        aria-hidden
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M-20 92 Q120 50 260 82 T520 66" />
          <path d="M-20 112 Q120 70 260 102 T520 86" />
          <path d="M-20 132 Q120 90 260 122 T520 106" />
          <path d="M60 34 Q160 14 280 38 T520 26" />
        </g>
      </svg>

      {/* icon chip */}
      <span
        className={cn(
          "absolute left-5 top-6 grid size-11 place-items-center rounded-xl shadow-sm",
          s.chip
        )}
        aria-hidden
      >
        <Icon className="size-5" />
      </span>
    </div>
  );
}
