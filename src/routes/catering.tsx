import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import etenBowl from "@/assets/eten-bowl.webp";
import { Reveal } from "@/components/site/Reveal";
import { RosiRoos } from "@/components/site/RosiMark";
import { telefoon } from "@/data/openingstijden";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering | Rosí Monster" },
      {
        name: "description",
        content:
          "Catering van Lunchroom Rosí in Monster. Vraag vrijblijvend naar de mogelijkheden.",
      },
      { property: "og:title", content: "Catering | Rosí" },
      { property: "og:url", content: "/catering" },
    ],
    links: [{ rel: "canonical", href: "/catering" }],
  }),
  component: CateringPage,
});

/* De tekst voor deze pagina is nog niet aangeleverd (zie INVULLEN.md);
   tot die tijd staat hier een korte uitnodiging om contact op te nemen. */
function CateringPage() {
  return (
    <section className="container-prose grid items-center gap-12 py-14 md:grid-cols-[6fr_5fr] md:gap-20 md:py-24">
      <Reveal>
        <RosiRoos className="h-14 w-auto text-[color:var(--terracotta)]" />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          catering
        </p>
        <h1 className="mt-3 font-script text-[clamp(1.6rem,4.5vw,2.4rem)] font-normal leading-[1.5] tracking-normal text-primary">
          Rosí bij jou op locatie
        </h1>
        <p className="mt-8 max-w-lg text-[1.05rem] leading-relaxed text-foreground">
          Vertel ons wat je viert en met hoeveel mensen, dan kijken we samen wat er mogelijk is.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="https://ig.me/m/lunchroomrosi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-aperol px-7 py-3.5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta-deep)]"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Stuur een berichtje
          </a>
          <a
            href={telefoon.link}
            className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[color:var(--terracotta-deep)]"
          >
            Bel {telefoon.weergave}
          </a>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <img
          src={etenBowl}
          alt="Een salade in een schaaltje, er wordt een kroket bij gepakt, met een glas wijn"
          width={1200}
          height={1800}
          className="photo-soft mx-auto aspect-[4/5] w-full max-w-[440px] object-cover"
        />
      </Reveal>
    </section>
  );
}
