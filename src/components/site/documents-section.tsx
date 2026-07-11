import { Search, ChevronRight, FolderOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/site/section-heading";
import { popularDocuments } from "@/lib/site-content";

export function DocumentsSection() {
  return (
    <section
      id="documents"
      aria-labelledby="documents-heading"
      className="scroll-mt-24 bg-surface"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="documents-heading"
            eyebrow="Documents"
            title="Popular documents"
            description="Governing documents, financials, meeting records, and more — organized and searchable."
          />

          <form
            action="#documents"
            role="search"
            className="w-full max-w-sm lg:w-80"
          >
            <label htmlFor="doc-search" className="sr-only">
              Search documents
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <Input
                id="doc-search"
                type="search"
                placeholder="Search documents…"
                className="pl-9"
              />
            </div>
          </form>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {popularDocuments.map(({ label, description, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:border-forest/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-secondary text-charcoal transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-semibold text-foreground">
                    {label}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {description}
                  </span>
                </span>
                <ChevronRight
                  className="size-5 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-forest"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <a href="#documents">
              <FolderOpen aria-hidden />
              Browse All Documents
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
