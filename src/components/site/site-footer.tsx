import { MapPin, ShieldCheck, Phone, Mail, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/brand/brand-logo";
import { navItems, popularDocuments, org } from "@/lib/site-content";

const telHref = (n: string) => `tel:${n.replace(/[^\d]/g, "")}`;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="scroll-mt-24 bg-charcoal-deep text-white/70"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer — contact and site information
      </h2>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand + contact */}
          <div className="lg:col-span-5">
            <Wordmark tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {org.tagline} Serving the Fairwood Greens community with
              transparent governance and neighborly care.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#c9ab63]" aria-hidden />
                <span>{org.serviceArea}</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#c9ab63]" aria-hidden />
                <span>
                  <span className="font-semibold text-white">
                    Community Security · 24/7
                  </span>
                  <br />
                  <a
                    href={telHref(org.securityPhone)}
                    className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    {org.securityPhone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-[#c9ab63]" aria-hidden />
                <span>
                  HOA Office{" "}
                  <a
                    href={telHref(org.officePhone)}
                    className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    {org.officePhone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-[#c9ab63]" aria-hidden />
                <a
                  href={`mailto:${org.email}`}
                  className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  {org.email}
                </a>
              </li>
            </ul>

            <Button
              asChild
              variant="gold"
              className="mt-6"
            >
              <a href={org.portalUrl}>Resident Portal</a>
            </Button>
          </div>

          {/* Explore */}
          <nav className="lg:col-span-2" aria-label="Footer — explore">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Documents */}
          <nav className="lg:col-span-2" aria-label="Footer — documents">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Documents
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {popularDocuments.slice(0, 5).map((doc) => (
                <li key={doc.label}>
                  <a
                    href={doc.href}
                    className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    {doc.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Meetings */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Meetings
            </h3>
            <div className="mt-4 flex items-start gap-3 text-sm">
              <CalendarDays className="mt-0.5 size-4 shrink-0 text-[#c9ab63]" aria-hidden />
              <p className="leading-relaxed">
                The Board of Directors meets the{" "}
                <span className="font-medium text-white">
                  4th Tuesday monthly at 7:00 PM
                </span>{" "}
                at Fairwood Golf &amp; Country Club. All members welcome —
                hybrid attendance available via the Resident Portal.
              </p>
            </div>
            <a
              href="#meetings"
              className="mt-3 inline-block rounded text-sm font-semibold text-[#c9ab63] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              View meeting schedule →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {org.fullName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <a
                href="#privacy"
                className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#accessibility"
                className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Accessibility Statement
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
