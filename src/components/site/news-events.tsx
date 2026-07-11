import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { AnnouncementCard } from "@/components/site/announcement-card";
import { announcements } from "@/lib/site-content";

export function NewsEvents() {
  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="news-heading"
            eyebrow="News & Events"
            title="Latest news & events"
            description="Stay current on safety notices, meetings, and neighborhood happenings across Fairwood Greens."
          />
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href="#news">
              View all news
              <ArrowRight aria-hidden />
            </a>
          </Button>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {announcements.map((item) => (
            <li key={item.id}>
              <AnnouncementCard item={item} />
            </li>
          ))}
        </ul>

        <div className="mt-6 sm:hidden">
          <Button asChild variant="outline" className="w-full">
            <a href="#news">
              View all news
              <ArrowRight aria-hidden />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
