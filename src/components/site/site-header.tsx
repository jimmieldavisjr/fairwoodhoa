"use client";

import { useEffect, useState } from "react";
import { Search, ShieldCheck, X, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wordmark } from "@/components/brand/brand-logo";
import { MobileNav } from "@/components/site/mobile-nav";
import { navItems, org } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="top" className="sticky top-0 z-40">
      {/* Utility bar — always-on service line, hidden on small screens */}
      <div className="hidden bg-charcoal text-white/75 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-[#c9ab63]" aria-hidden />
            {org.location}
          </span>
          <a
            href={`tel:${org.securityPhone.replace(/[^\d]/g, "")}`}
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-white"
          >
            <ShieldCheck className="size-3.5 text-[#c9ab63]" aria-hidden />
            Community Security (24/7): {org.securityPhone}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b border-border bg-white/95 backdrop-blur transition-shadow",
          scrolled && "shadow-[0_4px_20px_-12px_rgba(3,38,25,0.35)]"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
          <a
            href="#top"
            className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`${org.fullName} — home`}
          >
            <Wordmark showEmblem={false} accentBar />
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold transition-transform duration-200 group-hover:scale-x-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex"
              aria-label={searchOpen ? "Close search" : "Search"}
              aria-expanded={searchOpen}
              aria-controls="site-search-panel"
              onClick={() => setSearchOpen((v) => !v)}
            >
              {searchOpen ? (
                <X className="size-5" />
              ) : (
                <Search className="size-5" />
              )}
            </Button>

            <Button asChild className="hidden sm:inline-flex">
              <a href={org.portalUrl}>Resident Portal</a>
            </Button>

            <MobileNav />
          </div>
        </div>

        {/* Collapsible desktop search panel */}
        {searchOpen && (
          <div
            id="site-search-panel"
            className="border-t border-border bg-surface"
          >
            <form
              action="#news"
              role="search"
              className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8"
            >
              <label htmlFor="site-search" className="sr-only">
                Search Fairwood Greens
              </label>
              <div className="relative flex-1">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden
                />
                <Input
                  id="site-search"
                  type="search"
                  autoFocus
                  placeholder="Search documents, meetings, news…"
                  className="pl-9"
                />
              </div>
              <Button type="submit" variant="secondary">
                Search
              </Button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
