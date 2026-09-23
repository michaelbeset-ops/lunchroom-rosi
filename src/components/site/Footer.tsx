import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { RosiWoordmerk } from "@/components/site/RosiMark";
import { openingstijden, telefoon } from "@/data/openingstijden";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[color:var(--olive-deep)] text-[color:var(--cream)]">
      {/* Schermbreed woordmerk met "Lunchroom" in handschrift eroverheen */}
      <div className="overflow-hidden px-5 pt-16 md:pt-20">
        <Link
          to="/"
          aria-label="Rosí Lunchroom, naar de homepagina"
          className="relative mx-auto block w-[min(84vw,820px)] pb-[6%]"
        >
          <RosiWoordmerk className="block h-auto w-full" />
          <span className="absolute bottom-0 left-[-5%] -rotate-[4deg] font-script text-[min(9vw,5.6rem)] leading-none [text-shadow:0_2px_14px_rgb(85_47_36/0.35)]">
            Lunchroom
          </span>
        </Link>
      </div>

      <div className="container-prose grid gap-10 py-14 md:grid-cols-3 md:gap-12">
        <p className="max-w-xs text-sm leading-relaxed text-[color:var(--cream)]/85">
          Koffie, bites en wine nights aan de Molenstraat in Monster. Vers en huisgemaakt, van
          dinsdag tot en met zondag.
        </p>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">Openingstijden</p>
          <ul className="mt-3 space-y-1 text-sm text-[color:var(--cream)]/85">
            {openingstijden.map(([dagen, tijden]) => (
              <li key={dagen} className="flex justify-between gap-6">
                <span>{dagen}</span>
                <span className="tabular-nums">{tijden}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">Bezoek</p>
          <address className="mt-3 text-sm not-italic leading-relaxed text-[color:var(--cream)]/85">
            Molenstraat 35
            <br />
            Monster
            <br />
            <a href={telefoon.link} className="hover:text-[color:var(--cream)]">
              {telefoon.weergave}
            </a>
            <br />
            <a href="mailto:hallo@lunchroomrosi.nl" className="hover:text-[color:var(--cream)]">
              hallo@lunchroomrosi.nl
            </a>
          </address>
          <a
            href="https://instagram.com/lunchroomrosi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
            aria-label="Volg Rosí op Instagram"
          >
            <Instagram className="h-4 w-4" /> @lunchroomrosi
          </a>
        </div>
      </div>

      <div className="border-t border-[color:var(--cream)]/20">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-5 text-xs text-[color:var(--cream)]/75 sm:flex-row">
          <p>&copy; {year} Ros&iacute; &middot; Monster</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/menu" className="hover:text-[color:var(--cream)]">
              Menu
            </Link>
            <Link to="/ons-verhaal" className="hover:text-[color:var(--cream)]">
              Ons verhaal
            </Link>
            <a
              href={`${import.meta.env.BASE_URL}#contact`}
              className="hover:text-[color:var(--cream)]"
            >
              Contact
            </a>
            <Link to="/privacy" className="hover:text-[color:var(--cream)]">
              Privacy &amp; cookies
            </Link>
            <a
              href="https://sitefront.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--cream)]"
            >
              Gemaakt door Sitefront
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
