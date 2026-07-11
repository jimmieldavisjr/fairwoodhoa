import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
  id?: string;
};

/**
 * Reusable section header: gold eyebrow label, serif display title,
 * and an optional supporting line. Keeps hierarchy consistent
 * across every section of the homepage.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink",
            align === "center" && "justify-center"
          )}
        >
          <span aria-hidden className="h-px w-6 bg-gold/60" />
          {eyebrow}
        </div>
      ) : null}
      <Tag
        id={id}
        className="font-serif text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </Tag>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
