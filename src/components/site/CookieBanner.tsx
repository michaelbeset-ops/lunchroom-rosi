import { useEffect, useState } from "react";

/* AVG: functionele voorkeuren mogen altijd; de Google Maps-embed op de
   contactpagina laadt pas na toestemming. De keuze wordt onthouden. */

const SLEUTEL = "rosi-cookie-keuze";

export function getCookieKeuze(): "ja" | "nee" | null {
  try {
    const v = localStorage.getItem(SLEUTEL);
    return v === "ja" || v === "nee" ? v : null;
  } catch {
    return null;
  }
}

export function zetCookieKeuze(v: "ja" | "nee") {
  try {
    localStorage.setItem(SLEUTEL, v);
  } catch {
    /* privémodus: dan onthouden we niets */
  }
  window.dispatchEvent(new Event("rosi-cookie-keuze"));
}

export function useCookieKeuze() {
  const [keuze, setKeuze] = useState<"ja" | "nee" | null>(null);
  useEffect(() => {
    const lees = () => setKeuze(getCookieKeuze());
    lees();
    window.addEventListener("rosi-cookie-keuze", lees);
    return () => window.removeEventListener("rosi-cookie-keuze", lees);
  }, []);
  return keuze;
}

export function CookieBanner() {
  const [zichtbaar, setZichtbaar] = useState(false);

  useEffect(() => {
    setZichtbaar(getCookieKeuze() === null);
    const lees = () => setZichtbaar(getCookieKeuze() === null);
    window.addEventListener("rosi-cookie-keuze", lees);
    return () => window.removeEventListener("rosi-cookie-keuze", lees);
  }, []);

  if (!zichtbaar) return null;

  return (
    <div
      role="region"
      aria-label="Cookievoorkeuren"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-md rounded-3xl bg-[color:var(--olive-deep)] p-6 text-[color:var(--cream)] shadow-[0_18px_50px_-20px_rgb(0_0_0/0.45)] sm:inset-x-auto sm:left-6 sm:bottom-6"
    >
      <p className="font-serif text-xl">Een koekje erbij?</p>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--cream)]/85">
        Wij gebruiken alleen cookies om je voorkeuren te onthouden en om de kaart van Google Maps te
        tonen als jij dat goed vindt. Geen advertenties, geen gevolg over het web.{" "}
        <a
          href="/lunchroom-rosi/privacy"
          className="underline decoration-[color:var(--blush)] decoration-2 underline-offset-2"
        >
          Lees ons cookiebeleid
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => zetCookieKeuze("ja")}
          className="rounded-full bg-aperol px-5 py-2.5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta)]"
        >
          Accepteren
        </button>
        <button
          type="button"
          onClick={() => zetCookieKeuze("nee")}
          className="rounded-full border border-[color:var(--cream)]/35 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[color:var(--cream)]"
        >
          Weigeren
        </button>
      </div>
    </div>
  );
}
