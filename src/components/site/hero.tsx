"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { org } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    src: "/hero/course-aerial.jpg",
    alt: "Aerial view of the Fairwood golf course, greens, and clubhouse",
  },
  {
    src: "/hero/clubhouse.jpg",
    alt: "The clubhouse overlooking manicured fairways and a pond",
  },
  {
    src: "/hero/links.jpg",
    alt: "Rolling fairway and green at Fairwood Greens at golden hour",
  },
] as const;

const SLIDE_INTERVAL = 6000;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % SLIDES.length),
      SLIDE_INTERVAL
    );
    return () => window.clearInterval(id);
  }, [paused, active]);

  return (
    <section
      aria-labelledby="hero-heading"
      aria-roledescription="carousel"
      className="relative overflow-hidden bg-charcoal text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slider */}
      <div className="absolute inset-0" aria-hidden>
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none",
              i === active ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={cn(
                "object-cover",
                i === active && `hero-kb-${(i % 3) + 1}`
              )}
            />
          </div>
        ))}
        {/* Charcoal overlay — dark on the copy side, lighter behind the seal */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/20" />
      </div>

      {/* Content */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:py-24">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#e0c884] backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-gold" aria-hidden />
            {org.location}
          </span>

          <h1
            id="hero-heading"
            className="mt-5 font-serif text-4xl font-bold leading-[1.07] tracking-tight text-white sm:text-5xl"
          >
            Welcome to Fairwood Greens
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
            Your central source for neighborhood announcements, board meetings,
            governing documents, community events, and resident services — all
            in one trusted place.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <a href={org.portalUrl}>Resident Portal</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            >
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
              className="inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <ShieldCheck className="size-4 text-[#e0c884]" aria-hidden />
              <span>
                <span className="font-semibold">Community Security · 24/7</span>
                <span className="mx-1.5 text-white/30">|</span>
                <span className="text-white/70">{org.securityPhone}</span>
              </span>
            </a>
          </div>
        </div>

        {/* Circular seal badge */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative rounded-full bg-white p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/25">
            <Image
              src="/fw-hoa-logo.png"
              alt="Fairwood Greens Homeowners' Association official seal"
              width={1254}
              height={1254}
              priority
              sizes="(max-width: 1024px) 60vw, 320px"
              className="h-auto w-52 rounded-full sm:w-64 lg:w-[19rem]"
            />
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 lg:left-auto lg:right-8 lg:translate-x-0">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1} of ${SLIDES.length}`}
            aria-current={i === active}
            className={cn(
              "h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal",
              i === active ? "w-6 bg-gold" : "w-2.5 bg-white/40 hover:bg-white/70"
            )}
          />
        ))}
      </div>
    </section>
  );
}
