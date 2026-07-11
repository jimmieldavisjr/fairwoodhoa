import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { org } from "@/lib/site-content";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white to-surface"
    >
      {/* faint corner accents — kept extremely subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-forest/[0.06] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-gold/[0.06] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-20">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink shadow-sm">
            <span className="size-1.5 rounded-full bg-gold" aria-hidden />
            {org.location}
          </span>

          <h1
            id="hero-heading"
            className="mt-5 font-serif text-4xl font-bold leading-[1.07] tracking-tight text-foreground sm:text-5xl"
          >
            Welcome to Fairwood Greens
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Your central source for neighborhood announcements, board meetings,
            governing documents, community events, and resident services — all
            in one trusted place.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <a href={org.portalUrl}>Resident Portal</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#news">
                View Community Updates
                <ArrowRight aria-hidden />
              </a>
            </Button>
          </div>

          {/* 24/7 security — present but understated */}
          <div className="mt-8">
            <a
              href={`tel:${org.securityPhone.replace(/[^\d]/g, "")}`}
              className="inline-flex items-center gap-2.5 rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ShieldCheck className="size-4 text-gold-ink" aria-hidden />
              <span>
                <span className="font-semibold">Community Security · 24/7</span>
                <span className="mx-1.5 text-border">|</span>
                <span className="text-muted-foreground">
                  {org.securityPhone}
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            aria-hidden
            className="absolute inset-0 m-auto h-[78%] w-[78%] rounded-full bg-white shadow-[0_20px_60px_-24px_rgba(30,35,41,0.35)]"
          />
          <Image
            src="/fw-hoa-logo.png"
            alt="Fairwood Greens Homeowners' Association official seal"
            width={1254}
            height={1254}
            priority
            sizes="(max-width: 1024px) 70vw, 40vw"
            className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
