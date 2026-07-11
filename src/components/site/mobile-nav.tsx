"use client";

import { useState } from "react";
import { Menu, Search, Phone, ShieldCheck } from "lucide-react";

import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wordmark } from "@/components/brand/brand-logo";
import { navItems, org } from "@/lib/site-content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent title="Navigation menu">
        <div className="flex items-center border-b border-border px-5 py-4">
          <Wordmark showEmblem={false} accentBar />
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          <form action="#news" role="search" className="mb-5">
            <label htmlFor="mobile-search" className="sr-only">
              Search Fairwood Greens
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <Input
                id="mobile-search"
                type="search"
                placeholder="Search the community site"
                className="pl-9"
              />
            </div>
          </form>

          <nav aria-label="Primary">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <SheetClose asChild>
                    <a
                      href={item.href}
                      className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6">
            <SheetClose asChild>
              <Button asChild className="w-full" size="lg">
                <a href={org.portalUrl}>Resident Portal</a>
              </Button>
            </SheetClose>
          </div>
        </div>

        <div className="border-t border-border bg-surface px-5 py-4 text-sm">
          <a
            href={`tel:${org.securityPhone.replace(/[^\d]/g, "")}`}
            className="flex items-center gap-2 font-medium text-foreground"
          >
            <ShieldCheck className="size-4 text-gold-ink" aria-hidden />
            Security 24/7: {org.securityPhone}
          </a>
          <a
            href={`tel:${org.officePhone.replace(/[^\d]/g, "")}`}
            className="mt-2 flex items-center gap-2 text-muted-foreground"
          >
            <Phone className="size-4" aria-hidden />
            HOA Office: {org.officePhone}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
