import {
  CalendarCheck,
  Users,
  HeartHandshake,
  BellRing,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ways = [
  {
    icon: CalendarCheck,
    title: "Attend meetings",
    text: "Board and committee meetings are open to every member.",
  },
  {
    icon: Users,
    title: "Join a committee",
    text: "Lend your skills to landscape, architecture, or events.",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer",
    text: "Help with neighborhood clean-ups and seasonal events.",
  },
  {
    icon: BellRing,
    title: "Get notifications",
    text: "Receive meeting reminders and safety notices by email.",
  },
];

export function EngagementSection() {
  return (
    <section
      id="community"
      aria-labelledby="engagement-heading"
      className="relative scroll-mt-24 overflow-hidden bg-charcoal text-white"
    >
      {/* decorative treeline — blends into the footer below */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-charcoal-deep"
        viewBox="0 0 1200 96"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 96 q25 -46 50 0 q25 -52 50 0 q25 -40 50 0 q25 -54 50 0 q25 -42 50 0 q25 -50 50 0 q25 -40 50 0 q25 -54 50 0 q25 -42 50 0 q25 -50 50 0 q25 -40 50 0 q25 -54 50 0 q25 -42 50 0 q25 -50 50 0 q25 -40 50 0 q25 -54 50 0 q25 -42 50 0 q25 -50 50 0 q25 -40 50 0 q25 -50 50 0 q25 -44 50 0 q25 -52 50 0 q25 -40 50 0 q25 -54 50 0 L1200 96 Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
        {/* Left: message + ways to engage */}
        <div>
          <div className="mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            <span aria-hidden className="h-px w-6 bg-gold/60" />
            Get Involved
          </div>
          <h2
            id="engagement-heading"
            className="font-serif text-2xl font-bold leading-tight tracking-tight sm:text-3xl"
          >
            Help shape the future of Fairwood Greens
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-white/80">
            Our community is at its best when neighbors take part. There are
            many ways to contribute your time, ideas, and voice.
          </p>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {ways.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3.5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-[#c9ab63]">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold">{title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-white/70">
                    {text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: notification subscribe CTA */}
        <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-lg backdrop-blur-sm sm:p-8">
          <span className="grid size-12 place-items-center rounded-xl bg-gold text-white">
            <Mail className="size-6" aria-hidden />
          </span>
          <h3 className="mt-4 font-serif text-xl font-bold tracking-tight">
            Subscribe to community notifications
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            Get meeting reminders, safety notices, and neighborhood updates
            delivered to your inbox.
          </p>

          <form
            className="mt-5 flex flex-col gap-3 sm:flex-row"
            action="#subscribe"
          >
            <label htmlFor="subscribe-email" className="sr-only">
              Email address
            </label>
            <Input
              id="subscribe-email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="flex-1 border-white/20 bg-white/95 text-foreground placeholder:text-muted-foreground"
            />
            <Button type="submit" variant="gold" className="sm:shrink-0">
              Subscribe
            </Button>
          </form>
          <p className="mt-3 text-xs text-white/55">
            We&rsquo;ll only email community matters. Unsubscribe anytime. Your
            information is never shared.
          </p>
        </div>
      </div>
    </section>
  );
}
