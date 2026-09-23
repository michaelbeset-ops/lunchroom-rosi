import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
/* Herofoto uit de aanlevering: roze pioenrozen met "Gezelligheid in
   Monster" in handschrift (aanlevering/Homepage foto 1). */
import heroImg from "@/assets/hero-gezelligheid.jpg";
import etenBowl from "@/assets/eten-bowl.jpg";
import etenBroodje from "@/assets/eten-broodje.jpg";
import drankjeBank from "@/assets/instagram/drankje-bank.jpg";
import cheesecake from "@/assets/instagram/cheesecake-citroen.jpg";
import proost from "@/assets/instagram/proost.jpg";
import fay from "@/assets/fay.jpg";
import { Reveal } from "@/components/site/Reveal";
import { RosiMedaillon, RosiRoos } from "@/components/site/RosiMark";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { openingstijden, telefoon } from "@/data/openingstijden";
import { special } from "@/data/special";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rosí | Verse koffie & lunch in Monster" },
      {
        name: "description",
        content: "Lunchroom in het hart van Monster. Verse koffie, huisgemaakte lunch en taart.",
      },
      { property: "og:title", content: "Rosí | Monster" },
      {
        property: "og:description",
        content: "Verse koffie, lunch en huisgemaakt gebak in Monster.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const btnQuiet =
  "inline-flex items-center rounded-full border border-primary/30 bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary";

function HomePage() {
  return (
    <>
      {/* Hero: de pioenrozenfoto met "Gezelligheid in Monster" volledig in
          beeld, daaronder een groen vlak met de tekst. */}
      <section className="relative -mt-16 flex min-h-svh flex-col">
        <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[420px] md:flex-1">
          <img
            src={heroImg}
            alt="Roze pioenrozen met de tekst Gezelligheid in Monster"
            width={2400}
            height={1351}
            fetchPriority="high"
            className="kenburns absolute inset-0 h-full w-full object-cover object-[50%_45%]"
          />
          {/* Donker verloop bovenin zodat de lichte navigatie leesbaar blijft */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[color:var(--shadow)]/55 via-[color:var(--shadow)]/20 to-transparent"
          />
        </div>

        <div className="relative z-10 w-full">
          <RosiMedaillon
            licht
            className="absolute -top-14 right-5 z-20 w-[104px] md:-top-16 md:right-10 md:w-[124px]"
          />
          <div className="schulprand" aria-hidden="true" />
          <div className="hero-reveal bg-[color:var(--olive-deep)] text-[color:var(--cream)]">
            <div className="container-prose grid gap-x-16 gap-y-5 py-8 md:grid-cols-[7fr_5fr] md:items-end md:py-10">
              <div>
                <h1 className="max-w-[12em] font-script text-[clamp(1.7rem,4.5vw,2.6rem)] leading-[1.45] font-normal tracking-normal">
                  Koffie, lunch &amp; wine nights.
                </h1>
                <p className="mt-3 max-w-md leading-relaxed text-[color:var(--cream)]">
                  Vers en huisgemaakt, midden in Monster. Reserveren kan met een berichtje via
                  Instagram, binnenlopen mag altijd.
                </p>
              </div>
              <div className="md:pb-1">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href="https://ig.me/m/lunchroomrosi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-aperol px-7 py-3.5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta-deep)]"
                  >
                    Reserveer via Instagram
                  </a>
                  <Link
                    to="/menu"
                    className="text-sm font-semibold text-[color:var(--cream)] underline decoration-[color:var(--cream)]/60 decoration-2 underline-offset-[5px] transition-colors hover:decoration-[color:var(--cream)]"
                  >
                    Bekijk de kaart
                  </Link>
                </div>
                <p className="mt-5 text-sm tracking-wide text-[color:var(--cream)]">
                  Molenstraat 35, Monster &middot; dinsdag t/m zondag open
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welkom: verhaal, beloftes en de fotocollage */}
      <section
        id="verhaal"
        className="container-prose grid scroll-mt-20 gap-14 py-20 pb-28 md:grid-cols-[6fr_5fr] md:gap-16 md:py-28"
      >
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            welkom bij Rosí
          </p>
          <h2 className="mt-3 font-script font-normal tracking-normal text-[1.9rem] leading-[1.5] text-primary sm:text-[2.6rem]">
            Jouw plek voor koffie, lunch en meer.
          </h2>
          <div className="mt-7 max-w-md space-y-4 text-base leading-relaxed text-foreground">
            <p>
              Rosí begon als de droom van Fay: toen dit pand vrijkwam, kwam alles samen en opende ze
              op Koningsdag de deuren. Inmiddels staat hier een team van allemaal vrouwen.
            </p>
            <p>
              Olijfgroene muren, een warme bar en verse bloemen op tafel: een plek om even te
              blijven hangen.
            </p>
          </div>
          <ul className="mt-7 max-w-md space-y-3 text-[0.95rem] text-foreground">
            {[
              "Cookies, brownies en taarten uit onze eigen oven",
              "Van de eerste koffie tot de laatste wine night",
              "Dinsdag t/m zondag open, reserveren via Instagram",
            ].map((punt) => (
              <li key={punt} className="flex items-center gap-3">
                <RosiRoos className="h-7 w-auto flex-none text-[color:var(--terracotta)]" />
                {punt}
              </li>
            ))}
          </ul>
          <Link
            to="/ons-verhaal"
            className="mt-8 inline-flex text-sm font-semibold text-primary underline decoration-primary/50 hover:decoration-primary decoration-2 underline-offset-[5px] transition-colors hover:opacity-75"
          >
            Lees hoe het allemaal begon
          </Link>
        </Reveal>

        {/* Collage uit de briefing: twee gerechten die elkaar overlappen */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-[520px] self-center">
          <img
            src={etenBowl}
            alt="Een salade in een schaaltje, er wordt een kroket bij gepakt, met een glas wijn"
            loading="lazy"
            width={1200}
            height={1800}
            className="photo-soft relative aspect-[4/5] w-[62%] object-cover"
          />
          <img
            src={etenBroodje}
            alt="Een belegd broodje dat wordt aangesneden, met een matcha latte ernaast"
            loading="lazy"
            width={1200}
            height={1800}
            className="photo-soft relative -mt-[45%] ml-auto aspect-[4/5] w-[62%] object-cover"
          />
        </Reveal>
      </section>

      {/* Uitgelicht: de maandspecial, elke maand nieuw via src/data/special.ts */}
      <section className="bg-[color:var(--blush)]/45">
        <div className="container-prose grid items-center gap-12 py-16 md:grid-cols-[6fr_5fr] md:gap-16 md:py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Uitgelicht &middot; {special.maand}
            </p>
            <h2 className="mt-3 font-script font-normal tracking-normal text-[1.9rem] leading-[1.5] text-primary sm:text-[2.6rem]">
              {special.titel}.
            </h2>
            <p className="mt-6 max-w-lg text-lg font-semibold text-primary">{special.ondertitel}</p>
            <p className="mt-4 max-w-lg leading-relaxed text-foreground">{special.tekst}</p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={special.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-aperol px-7 py-3.5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta-deep)]"
              >
                Bekijk de video
              </a>
              <Link
                to="/menu"
                className="text-sm font-semibold text-primary underline decoration-primary/50 hover:decoration-primary decoration-2 underline-offset-[5px] transition-colors hover:opacity-75"
              >
                Bekijk de hele kaart
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src={special.foto}
              alt={special.fotoAlt}
              loading="lazy"
              width={276}
              height={359}
              className="photo-soft mx-auto w-full max-w-[340px] object-cover"
            />
          </Reveal>
        </div>
      </section>

      <InstagramFeed />

      <Reviews />

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
            <h2 className="mt-3 font-script font-normal tracking-normal text-[1.9rem] leading-[1.5] sm:text-[2.6rem]">
              Molenstraat 35, Monster.
            </h2>
            <ul className="mt-8 text-sm">
              {openingstijden.map(([days, hours]) => (
                <li
                  key={days}
                  className="flex items-baseline justify-between gap-4 border-b border-[color:var(--cream)]/15 py-3 last:border-0"
                >
                  <span className="text-[color:var(--cream)]/80">{days}</span>
                  <span className="font-serif tabular-nums">{hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--cream)]/85">
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

const reviews = [
  {
    tekst:
      "Heerlijk broodje gehad, er is echt zorg aan besteed. Mooi opgemaakt en smaakte top. Leuk personeel, gezellig praatje aan tafel.",
    naam: "Ellen",
  },
  {
    tekst:
      "Prachtige zaak met een heel fijne sfeer, aan elk detail is aandacht besteed. We bestelden een lunch om te delen: supersmakelijk en mooi opgemaakt.",
    naam: "Marjon & Kees",
  },
  {
    tekst:
      "Een mooie aanvulling voor het dorp. Lekker gevarieerde kaart, voor ieder wat wils. En het terras is heerlijk vanaf de middag.",
    naam: "Marvin",
  },
  {
    tekst:
      "Wat een aanwinst! Eindelijk een plek voor heerlijke thee, een echte matcha en arretjescake erbij, mooi gepresenteerd.",
    naam: "Gitta",
  },
  {
    tekst:
      "Superleuke, gezellige lunchroom met een heel vriendelijke eigenaresse en lieve meiden in de bediening. Heerlijke broodjes.",
    naam: "Christiny",
  },
  {
    tekst:
      "Op de openingsdag heerlijke koffie en appeltaart gehad. Mooi ingericht en supervriendelijk personeel. Wij komen zeker terug.",
    naam: "Martin",
  },
  {
    tekst:
      "Gisteren langs geweest: het eten was heerlijk, de koffie en matcha top (ook om mee te nemen) en het personeel vriendelijk. En 's middags zit je buiten in het zonnetje.",
    naam: "",
  },
  {
    tekst:
      "Geweldig! Een fantastische aanwinst voor Monster. De kaart is verrassend en het eten erg goed. Een aanrader!",
    naam: "",
  },
  {
    tekst: "Supergezellig en heerlijk eten, dikke aanrader.",
    naam: "",
  },
];

function Reviews() {
  const baan = useRef<HTMLUListElement>(null);

  function schuif(richting: number) {
    const el = baan.current;
    if (!el) return;
    const kaart = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: richting * ((kaart?.clientWidth ?? 340) + 24), behavior: "smooth" });
  }

  return (
    <section className="py-20 md:py-24">
      <div className="container-prose flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            lieve woorden
          </p>
          <h2 className="mt-3 font-script font-normal tracking-normal text-[1.9rem] leading-[1.5] text-primary sm:text-[2.6rem]">
            Wat gasten zeggen.
          </h2>
        </div>
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            onClick={() => schuif(-1)}
            aria-label="Vorige reviews"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <svg
              viewBox="0 0 16 16"
              width="15"
              height="15"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 3 5 8l5 5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => schuif(1)}
            aria-label="Volgende reviews"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <svg
              viewBox="0 0 16 16"
              width="15"
              height="15"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 3 5 5-5 5" />
            </svg>
          </button>
        </div>
      </div>

      <ul
        ref={baan}
        className="geen-scrollbalk review-baan mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth"
      >
        {reviews.map((review) => (
          <li key={review.naam} className="w-[82%] max-w-[360px] flex-none snap-start sm:w-[360px]">
            <figure className="flex h-full flex-col rounded-3xl bg-card p-8">
              <div className="text-primary" role="img" aria-label="Vijf van de vijf sterren">
                {"\u2605\u2605\u2605\u2605\u2605"}
              </div>
              <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-foreground">
                {review.tekst}
              </blockquote>
              <figcaption className="mt-4 text-sm text-foreground">
                {review.naam} &middot; via Google
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <p className="container-prose mt-8 text-sm">
        <a
          href="https://www.google.com/maps/search/Lunchroom+Ros%C3%AD+Monster"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-[5px] transition-colors hover:text-primary"
        >
          Lees alle 22 reviews op Google
        </a>
      </p>
    </section>
  );
}
