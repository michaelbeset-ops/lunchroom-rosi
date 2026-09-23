import { Reveal } from "@/components/site/Reveal";
import fay from "@/assets/fay.jpg";
import { openingstijden, telefoon } from "@/data/openingstijden";

/* Contactblok: adres, openingstijden, telefoon en de foto van Fay. Staat
   op de homepage en op de contactpagina. */
export function ContactBlok({ kop = "h2" }: { kop?: "h1" | "h2" }) {
  const Kop = kop;
  return (
    <>
      {/* Kom langs: donkergroen, als warme afsluiter */}
      <section
        id="contact"
        className="scroll-mt-16 bg-[color:var(--olive-deep)] text-[color:var(--cream)]"
      >
        <div className="container-prose grid items-center gap-12 py-20 md:grid-cols-[5fr_6fr] md:gap-16 md:py-28">
          <Reveal>
            <p className="font-script text-[1.6rem] leading-[1.5] text-[color:var(--cream)]">
              Liefs, Team Rosí
            </p>
            <Kop className="mt-3 font-script font-normal tracking-normal text-[1.9rem] leading-[1.5] sm:text-[2.6rem]">
              Molenstraat 35, Monster.
            </Kop>
            <ul className="mt-8 text-sm">
              {openingstijden.map(([days, hours]) => (
                <li
                  key={days}
                  className="flex items-baseline justify-between gap-4 border-b border-[color:var(--cream)]/15 py-3 last:border-0"
                >
                  <span className="text-[color:var(--cream)]">{days}</span>
                  <span className="font-serif tabular-nums">{hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--cream)]">
              Vragen? Bel{" "}
              <a
                href={telefoon.link}
                className="whitespace-nowrap underline decoration-[color:var(--cream)]/50 decoration-2 underline-offset-[3px] hover:decoration-[color:var(--cream)]"
              >
                {telefoon.weergave}
              </a>
              , mail{" "}
              <a
                href="mailto:hallo@lunchroomrosi.nl"
                className="underline decoration-[color:var(--cream)]/50 decoration-2 underline-offset-[3px] hover:decoration-[color:var(--cream)]"
              >
                hallo@lunchroomrosi.nl
              </a>{" "}
              of stuur een DM.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="https://ig.me/m/lunchroomrosi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-aperol px-7 py-3.5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta-deep)]"
              >
                Reserveer via Instagram
              </a>
              <a
                href="https://www.google.com/maps/search/Molenstraat+35+Monster"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[color:var(--cream)] underline decoration-[color:var(--cream)]/60 decoration-2 underline-offset-[5px] transition-colors hover:decoration-[color:var(--cream)]"
              >
                Route via Google Maps
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src={fay}
              alt="Fay, de oprichter van Rosí, op de roestkleurige bank in de zaak"
              loading="lazy"
              width={1000}
              height={1501}
              className="photo-soft mx-auto aspect-[4/5] w-full max-w-[420px] object-cover object-[50%_30%]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
