"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";

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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#032619] p-4">
      <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0a1f16] p-8 text-center shadow-2xl">
        <Image
          src="/fw-hoa-logo.png"
          alt="Fairwood Greens Homeowners' Association official seal"
          width={140}
          height={140}
          priority
          className="mx-auto mb-5 h-28 w-28 rounded-full bg-white p-2 shadow-lg"
        />
        <h1 className="font-serif text-xl font-bold text-white">
          Fairwood Greens
        </h1>
        <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/60">
          Prototype Preview
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
          <button
            type="submit"
            className="w-full rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-[#032619] transition-colors hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            Enter
          </button>
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
