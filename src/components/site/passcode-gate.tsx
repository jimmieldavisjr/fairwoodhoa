"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const PASSCODE = "fairwood2026";
const STORAGE_KEY = "fgha-prototype-unlocked";

/**
 * Prototype-only cover screen. Blocks the homepage behind a full-screen
 * overlay until the visitor enters the shared passcode. This is NOT real
 * authentication — the passcode is client-side only and should be removed
 * before any production launch.
 */
export function PasscodeGate({ children }: { children: React.ReactNode }) {
  // Render nothing until mounted so the server-rendered markup (locked gate)
  // matches the client's first render, avoiding a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY) === "true") {
        setUnlocked(true);
      }
    } catch {
      /* ignore storage errors */
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (value.trim().toLowerCase() === PASSCODE) {
      setUnlocked(true);
      setError(false);
      try {
        window.sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {
        /* ignore storage errors */
      }
    } else {
      setError(true);
    }
  }

  if (mounted && unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-charcoal p-4">
      {/* Background image + gradient overlay, matching the homepage hero */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/hero/course-aerial.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/85 to-charcoal" />
      </div>

      <div className="relative w-full max-w-sm rounded-2xl border border-white/15 bg-white/10 p-8 text-center shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md">
        <div className="relative mx-auto mb-5 w-36 rounded-full bg-white p-2 shadow-lg ring-1 ring-white/25">
          <Image
            src="/fw-hoa-logo.png"
            alt="Fairwood Greens Homeowners' Association official seal"
            width={140}
            height={140}
            priority
            className="h-auto w-full rounded-full"
          />
        </div>

        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#e0c884] backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-gold" aria-hidden />
          Prototype Preview
        </span>

        <h1 className="mt-4 font-serif text-2xl font-bold text-white">
          Fairwood Greens
        </h1>
        <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/60">
          Homeowners&rsquo; Association
        </p>

        <p className="mt-4 text-sm text-white/70">
          Enter the passcode to view this preview site.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <input
            type="password"
            autoFocus
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              setError(false);
            }}
            placeholder="Passcode"
            aria-label="Passcode"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-center text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full bg-white text-charcoal hover:bg-white/90"
          >
            Enter
          </Button>
        </form>

        {error && (
          <p className="mt-3 text-sm font-medium text-red-300">
            Incorrect passcode. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
