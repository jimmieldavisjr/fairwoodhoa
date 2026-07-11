import {
  Ban,
  CalendarDays,
  PartyPopper,
  Wrench,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { CardBanner } from "@/components/site/card-banner";
import type { Announcement } from "@/lib/site-content";

const categoryIcon: Record<Announcement["category"], LucideIcon> = {
  Safety: Ban,
  Meeting: CalendarDays,
  Community: PartyPopper,
  Maintenance: Wrench,
};

const categoryBadge: Record<Announcement["category"], BadgeProps["variant"]> = {
  Safety: "gold",
  Meeting: "neutral",
  Community: "green",
  Maintenance: "neutral",
};

export function AnnouncementCard({ item }: { item: Announcement }) {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-forest/30 hover:shadow-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
      <CardBanner theme={item.theme} icon={categoryIcon[item.category]} />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2.5">
          <Badge variant={categoryBadge[item.category]}>{item.category}</Badge>
          <span className="text-xs text-muted-foreground">{item.date}</span>
        </div>

        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-foreground">
          <a
            href={item.href}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {item.title}
          </a>
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.summary}
        </p>

        <span className="relative z-10 mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest transition-colors group-hover:text-charcoal">
          {item.cta}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Card>
  );
}
