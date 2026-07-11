import {
  Clock,
  MapPin,
  CalendarPlus,
  FileText,
  ArrowRight,
  Video,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { upcomingMeeting as m } from "@/lib/site-content";

export function UpcomingMeeting() {
  return (
    <section
      id="meetings"
      aria-labelledby="meetings-heading"
      className="scroll-mt-24 bg-surface"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          id="meetings-heading"
          eyebrow="Meetings"
          title="Next community meeting"
          description="Board and committee meetings are open to all members. Review the agenda ahead of time and add it to your calendar."
        />

        <Card className="mt-8 overflow-hidden">
          <div className="grid md:grid-cols-[10.5rem_1fr]">
            {/* Date tile */}
            <div className="flex flex-row items-center justify-center gap-3 bg-charcoal p-5 text-center text-white md:flex-col md:gap-0.5 md:p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Jul
              </span>
              <span className="font-serif text-4xl font-bold leading-none md:text-5xl">
                28
              </span>
              <span className="text-sm text-white/75">Tuesday</span>
              <span className="mt-0 flex items-center gap-1 text-xs text-white/60 md:mt-1">
                <Video className="size-3.5" aria-hidden />
                Hybrid
              </span>
            </div>

            {/* Details */}
            <div className="p-5 sm:p-6 md:p-7">
              <Badge variant="neutral">{m.type}</Badge>
              <h3 className="mt-3 font-serif text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {m.title}
              </h3>

              <dl className="mt-4 flex flex-col gap-2.5 text-sm text-foreground/80 sm:flex-row sm:flex-wrap sm:gap-x-6">
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Time</dt>
                  <Clock className="size-4 text-forest" aria-hidden />
                  <dd>{m.time}</dd>
                </div>
                <div className="flex items-start gap-2">
                  <dt className="sr-only">Location</dt>
                  <MapPin className="mt-0.5 size-4 text-forest" aria-hidden />
                  <dd>
                    {m.location}
                    <span className="block text-xs text-muted-foreground">
                      {m.address}
                    </span>
                  </dd>
                </div>
              </dl>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {m.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button asChild>
                  <a href={m.agendaHref}>
                    <FileText aria-hidden />
                    View Agenda
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={m.calendarHref}>
                    <CalendarPlus aria-hidden />
                    Add to Calendar
                  </a>
                </Button>
                <Button asChild variant="link" className="sm:ml-1">
                  <a href={m.detailsHref}>
                    Meeting details
                    <ArrowRight aria-hidden />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
