"use client";

import { useEffect, useState } from "react";
import { TriangleAlert, ArrowRight, X } from "lucide-react";

import { communityAlert } from "@/lib/site-content";

const STORAGE_KEY = "fgha-alert-dismissed";

export function CommunityAlert() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === communityAlert.message) {
        setVisible(false);
      }
    } catch {
      /* ignore storage errors */
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, communityAlert.message);
    } catch {
      /* ignore storage errors */
    }
  };

  if (!visible) return null;

  return (
    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div
        role="region"
        aria-label="Community notice"
        className="relative overflow-hidden rounded-2xl border border-[#e7d9a8] bg-[#fbf7ec] shadow-sm"
      >
        <span aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-gold" />
        <div className="flex items-start gap-4 p-4 pl-5 sm:p-5 sm:pl-6">
          <span
            className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-gold/15 text-[#8a6a15]"
            aria-hidden
          >
            <TriangleAlert className="size-5" />
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a6a15]">
                {communityAlert.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {communityAlert.date}
              </span>
            </div>
            <p className="mt-1 text-sm font-semibold text-foreground sm:text-base">
              {communityAlert.message}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {communityAlert.detail}
            </p>
            <a
              href={communityAlert.href}
              className="mt-2.5 inline-flex items-center gap-1 text-sm font-semibold text-forest underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              Read Notice
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss community notice"
            className="shrink-0 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-black/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
