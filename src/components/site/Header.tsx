import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { RosiRoos, RosiWoordmerk } from "@/components/site/RosiMark";
import { telefoon } from "@/data/openingstijden";

/* De pagina's uit de briefing: Homepage, Menu, About, Catering, Contact, Socials */
const paginaLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/ons-verhaal", label: "Ons verhaal" },
  { to: "/catering", label: "Catering" },
  { to: "/contact", label: "Contact" },
  { to: "/socials", label: "Socials" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  /* Bovenaan de homepage ligt de header over de herofoto: dan tekst in
     de achtergrondkleur, anders in het merkgroen. */
  const opHome = pathname === "/" || pathname === import.meta.env.BASE_URL;
  const opFoto = opHome && !scrolled && !open;
  const linkKleur = opFoto
    ? "text-[color:var(--cream)] hover:opacity-80 [text-shadow:0_1px_12px_rgb(85_47_36/0.45)]"
    : "text-primary hover:opacity-75";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border/60 bg-background/95 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between px-5 py-4 md:px-10">
        <Link
          to="/"
          aria-label="Rosí, naar de homepagina"
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`inline-flex items-center gap-2.5 transition-colors ${linkKleur}`}
        >
          <RosiRoos className="h-9 w-auto" />
          <RosiWoordmerk className="h-5 w-auto" />
        </Link>

        {/* Midden uitgelijnd, hoofdletters en een flink stuk groter */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 md:flex lg:gap-8">
          {paginaLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`whitespace-nowrap text-[0.78rem] font-semibold uppercase tracking-[0.14em] lg:text-[0.9rem] lg:tracking-[0.18em] transition-colors ${linkKleur}`}
              activeProps={{
                className: "underline underline-offset-8 decoration-2",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className={`inline-flex items-center justify-center p-2 md:hidden ${linkKleur}`}
          aria-label={open ? "Sluit menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="flex h-[calc(100svh-4rem)] flex-col overflow-y-auto border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-5 py-2">
            {paginaLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => {
                  setOpen(false);
                  window.scrollTo({ top: 0 });
                }}
                className="border-b border-border/60 py-3.5 text-base font-semibold uppercase tracking-[0.14em] text-primary last:border-0"
                activeProps={{ className: "underline underline-offset-8" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 px-5 pt-4 pb-8">
            <a
              href="https://ig.me/m/lunchroomrosi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-aperol px-6 py-3.5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta-deep)]"
            >
              Reserveer via Instagram
            </a>
            <a
              href={telefoon.link}
              className="inline-flex items-center justify-center rounded-full border border-primary/40 px-6 py-3.5 text-sm font-semibold text-primary"
            >
              Bel {telefoon.weergave}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
