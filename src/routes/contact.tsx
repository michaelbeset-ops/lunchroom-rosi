import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import fay from "@/assets/fay.webp";
import { Reveal } from "@/components/site/Reveal";
import { RosiRoos } from "@/components/site/RosiMark";
import { openingstijden, telefoon } from "@/data/openingstijden";
import { paginaHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    paginaHead({
      title: "Contact en openingstijden | Lunchroom Rosí Monster",
      description:
        "Lunchroom Rosí, Molenstraat 35 in Monster. Openingstijden, route, telefoonnummer en reserveren via Instagram. Dinsdag t/m zondag open.",
      pad: "/contact/",
    }),
  component: ContactPage,
});

const adres = "Molenstraat 35, Monster";
const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  "Lunchroom Rosí, Molenstraat 35, Monster",
)}`;

const knopPrimair =
  "inline-flex items-center gap-2 rounded-full bg-aperol px-6 py-3 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta-deep)]";
const knopSecundair =
  "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[color:var(--terracotta-deep)]";

/* Contactpagina: adres, openingstijden en de route meteen bovenaan, zoals
   iemand die "rosi monster openingstijden" zoekt het wil zien. */
function ContactPage() {
  return (
    <>
      <section className="container-prose grid items-start gap-12 py-14 md:grid-cols-[6fr_5fr] md:gap-20 md:py-24">
        <Reveal>
          <RosiRoos className="h-14 w-auto text-[color:var(--terracotta)]" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            contact
          </p>
          <h1 className="mt-3 font-script text-[clamp(1.6rem,4.5vw,2.4rem)] font-normal leading-[1.5] tracking-normal text-primary">
            Lunchroom Rosí in Monster
          </h1>

          <address className="mt-6 flex items-start gap-3 not-italic text-foreground">
            <MapPin className="mt-1 h-5 w-5 flex-none text-[color:var(--terracotta)]" aria-hidden />
            <span>
              <span className="block text-lg font-semibold">{adres}</span>
              <span className="text-sm text-muted-foreground">
                In het centrum van Monster, Westland
              </span>
            </span>
          </address>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={routeUrl} target="_blank" rel="noopener noreferrer" className={knopPrimair}>
              <MapPin className="h-4 w-4" aria-hidden />
              Routebeschrijving
            </a>
            <a href={telefoon.link} className={knopSecundair}>
              <Phone className="h-4 w-4" aria-hidden />
              Bel {telefoon.weergave}
            </a>
          </div>

          <h2 className="mt-10 font-script text-2xl leading-[1.5] font-normal tracking-normal text-primary">
            Openingstijden
          </h2>
          <ul className="mt-3 max-w-md text-[0.95rem]">
            {openingstijden.map(([dagen, uren]) => (
              <li
                key={dagen}
                className="flex items-baseline justify-between gap-4 border-b border-primary/15 py-3 last:border-0"
              >
                <span className="text-foreground">{dagen}</span>
                <span className="tabular-nums text-foreground">{uren}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-script text-2xl leading-[1.5] font-normal tracking-normal text-primary">
            Reserveren en vragen
          </h2>
          <p className="mt-3 max-w-lg leading-relaxed text-foreground">
            Reserveren kan met een berichtje via Instagram, binnenlopen mag altijd. Voor catering of
            andere vragen bel je{" "}
            <a
              href={telefoon.link}
              className="font-semibold whitespace-nowrap underline decoration-primary/50 underline-offset-[3px]"
            >
              {telefoon.weergave}
            </a>{" "}
            of mail je naar{" "}
            <a
              href="mailto:info@lunchroomrosi.nl"
              className="font-semibold underline decoration-primary/50 underline-offset-[3px]"
            >
              info@lunchroomrosi.nl
            </a>
            .
          </p>
          <div className="mt-6">
            <a
              href="https://ig.me/m/lunchroomrosi"
              target="_blank"
              rel="noopener noreferrer"
              className={knopPrimair}
            >
              Reserveer via Instagram
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <img
            src={fay}
            alt="Fay, de oprichter van Rosí, op de roestkleurige bank in de zaak"
            width={900}
            height={1081}
            fetchPriority="high"
            className="photo-soft mx-auto aspect-[4/5] w-full max-w-[440px] object-cover object-[50%_40%]"
          />
        </Reveal>
      </section>
    </>
  );
}
