import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { RosiMedaillon } from "@/components/site/RosiMark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-[color:var(--olive-deep)] text-[color:var(--cream)]">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-[auto_1fr_1fr_1fr] md:gap-12">
        <RosiMedaillon className="hidden w-28 self-start md:block" />

        <div>
          <p className="font-serif text-3xl tracking-[0.14em]">ROSÍ</p>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--cream)]/70">
            Een knus hoekje in het hart van Monster. Verse koffie, huisgemaakte lekkernijen en een
            warm welkom.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--blush)]">
            Openingstijden
          </p>
          <ul className="mt-3 space-y-1 text-sm text-[color:var(--cream)]/85">
            <li className="flex justify-between gap-6">
              <span>Ma – Vr</span>
              <span>08:30 – 17:00</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Zaterdag</span>
              <span>09:00 – 17:00</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Zondag</span>
              <span>10:00 – 16:00</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--blush)]">Bezoek</p>
          <address className="mt-3 text-sm not-italic leading-relaxed text-[color:var(--cream)]/85">
            Molenstraat 35
            <br />
            Monster
            <br />
            <a href="mailto:hallo@lunchroomrosi.nl" className="hover:text-[color:var(--blush)]">
              hallo@lunchroomrosi.nl
            </a>
          </address>
          <a
            href="https://instagram.com/lunchroomrosi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-[color:var(--blush)] transition-colors hover:text-[color:var(--cream)]"
            aria-label="Volg Rosí op Instagram"
          >
            <Instagram className="h-4 w-4" /> @lunchroomrosi
          </a>
        </div>
      </div>

      <div className="border-t border-[color:var(--cream)]/15">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-5 text-xs text-[color:var(--cream)]/60 sm:flex-row">
          <p>&copy; {year} Ros&iacute; &middot; Monster</p>
          <div className="flex items-center gap-4">
            <Link to="/menu" className="hover:text-[color:var(--blush)]">
              Menu
            </Link>
            <Link to="/contact" className="hover:text-[color:var(--blush)]">
              Contact
            </Link>
            <a
              href="https://sitefront.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--blush)]"
            >
              Gemaakt door Sitefront
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
