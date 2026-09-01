import { useEffect, useRef, useState } from "react";
import { RosiRoos } from "@/components/site/RosiMark";
import { getCookieKeuze } from "@/components/site/CookieBanner";

/* Subtiele welkomst-popup: verschijnt één keer per sessie, pas nadat de
   cookiekeuze is gemaakt (nooit twee lagen tegelijk), en is overal mee
   weg te klikken: kruisje, escape of de achtergrond. */

const SLEUTEL = "rosi-popup-gezien";

export function WelkomPopup() {
  const [open, setOpen] = useState(false);
  const sluitKnop = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SLEUTEL)) return;
    } catch {
      return;
    }
    let t: ReturnType<typeof setTimeout> | undefined;
    const plan = () => {
      if (getCookieKeuze() === null) return;
      window.removeEventListener("rosi-cookie-keuze", plan);
      t = setTimeout(() => setOpen(true), 2600);
    };
    plan();
    window.addEventListener("rosi-cookie-keuze", plan);
    return () => {
      window.removeEventListener("rosi-cookie-keuze", plan);
      if (t) clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    sluitKnop.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && sluit();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function sluit() {
    setOpen(false);
    try {
      sessionStorage.setItem(SLEUTEL, "ja");
    } catch {
      /* geen opslag, dan geen opslag */
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welkom-titel"
    >
      <button
        type="button"
        aria-label="Sluiten"
        onClick={sluit}
        className="absolute inset-0 bg-[color:var(--olive-deep)]/40"
        tabIndex={-1}
      />
      <div className="relative w-full max-w-sm rounded-3xl bg-background p-8 text-center shadow-[0_24px_60px_-24px_rgb(0_0_0/0.5)]">
        <button
          ref={sluitKnop}
          type="button"
          onClick={sluit}
          aria-label="Popup sluiten"
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-card hover:text-foreground"
        >
          <svg
            viewBox="0 0 16 16"
            width="14"
            height="14"
            aria-hidden="true"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M3 3l10 10M13 3L3 13" />
          </svg>
        </button>
        <RosiRoos className="mx-auto h-12 w-auto text-primary [--roos-bloem:var(--terracotta)]" />
        <p className="mt-3 font-script text-[1.9rem] leading-none text-[color:var(--terracotta)]">
          leuk dat je er bent
        </p>
        <h2 id="welkom-titel" className="mt-2 font-serif text-2xl text-foreground">
          Zin in een wine night?
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-foreground/75">
          Op Instagram zetten we de data van de wine nights en wat er vandaag uit de oven komt.
          Reserveren gaat daar ook, met een berichtje.
        </p>
        <a
          href="https://instagram.com/lunchroomrosi"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center rounded-full bg-aperol px-6 py-3 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta)]"
        >
          Volg @lunchroomrosi
        </a>
        <button
          type="button"
          onClick={sluit}
          className="mt-3 block w-full text-xs text-foreground/50 underline underline-offset-2 hover:text-foreground/80"
        >
          Nee bedankt, ik kijk gewoon even rond
        </button>
      </div>
    </div>
  );
}
