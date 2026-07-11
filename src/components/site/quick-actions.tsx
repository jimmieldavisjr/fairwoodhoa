import { ArrowUpRight } from "lucide-react";

import { quickActions } from "@/lib/site-content";

export function QuickActions() {
  return (
    <section aria-labelledby="quick-actions-heading" className="relative z-10">
      <div className="mx-auto -mt-10 max-w-7xl px-4 sm:-mt-14 sm:px-6 lg:px-8">
        <h2 id="quick-actions-heading" className="sr-only">
          Resident quick actions
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {quickActions.map(({ label, description, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-forest/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <span className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-secondary text-charcoal transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <ArrowUpRight
                    className="size-4 text-muted-foreground/50 transition-colors group-hover:text-forest"
                    aria-hidden
                  />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold leading-snug text-foreground">
                    {label}
                  </span>
                  <span className="text-xs leading-snug text-muted-foreground">
                    {description}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
