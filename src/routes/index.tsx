import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
/* Aangeleverd interieur met saliegroene muren en olijfgroene stoelen,
   past een-op-een op het palet. Een 2000px-versie maakt dit nog
   scherper op grote schermen. */
import heroImg from "@/assets/hero-sfeer-v2.jpg";
import barCookies from "@/assets/instagram/bar-cookies.jpg";
import drankjeBank from "@/assets/instagram/drankje-bank.jpg";
import cheesecake from "@/assets/instagram/cheesecake-citroen.jpg";
import terrasCookies from "@/assets/instagram/terras-cookies.jpg";
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
      {/* Hero: schermvullende foto; tekst op een diep olijfgroen vlak
          rechtsonder, met het Rosí-medaillon als lakzegel op de rand. */}
      <section className="relative -mt-16 flex min-h-svh flex-col justify-end overflow-hidden">
        {/* Ideale foto om aan te leveren: gouden avondlicht, de twee
            eigenaressen proosten met een spritz voor het raam met het
            Rosí-logo. Ongefilterd, minimaal 2000px breed. */}
        <img
          src={heroImg}
          alt="Restaurantinterieur met saliegroene muren, olijfgroene stoelen en veel planten"
          width={1800}
          height={1200}
          fetchPriority="high"
          className="kenburns absolute inset-0 h-full w-full object-cover object-[42%_58%]"
        />

        {/* Donker verloop bovenin zodat de lichte navigatie leesbaar blijft */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[color:var(--shadow)]/55 via-[color:var(--shadow)]/20 to-transparent"
        />

        {/* Tekstvlak, vast aan de onderrand; op desktop rechtsonder zodat
            het gezicht op de foto links vrij blijft. */}
        <div className="relative z-10 w-full md:ml-auto md:w-[min(620px,48vw)]">
          <RosiMedaillon className="absolute -top-14 right-5 z-20 w-[104px] md:-top-16 md:right-10 md:w-[124px]" />
          <div className="schulprand" aria-hidden="true" />
          <div className="hero-reveal bg-[color:var(--olive-deep)] px-5 pt-5 pb-6 text-[color:var(--cream)] md:px-10 md:pt-7 md:pb-9">
            <h1 className="mt-1 max-w-[11em] font-serif text-[clamp(2.2rem,8.5vw,3.6rem)] leading-[1.04]">
              Koffie, lunch &amp; <em className="italic">wine nights</em>.
            </h1>
            <p className="mt-3 max-w-md leading-relaxed text-[color:var(--cream)]/85 md:mt-4">
              Vers en huisgemaakt, midden in Monster. Reserveren kan met een berichtje via
              Instagram, binnenlopen mag altijd.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-6">
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
            <p className="mt-5 border-t border-[color:var(--cream)]/20 pt-4 text-sm tracking-wide text-[color:var(--cream)]/75">
              Molenstraat 35, Monster &middot; dinsdag t/m zondag open
            </p>
          </div>
        </div>
      </section>

      {/* Welkom: verhaal, beloftes en de collage met polaroid */}
      <section
        id="verhaal"
        className="container-prose grid scroll-mt-20 gap-14 py-20 pb-28 md:grid-cols-[6fr_5fr] md:gap-16 md:py-28"
      >
        <Reveal>
          <p className="font-script text-[1.3rem] leading-[1.6] text-[color:var(--terracotta)]">
            welkom bij Rosí
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
            Jouw plek voor koffie, lunch en <span className="italic text-primary">meer</span>.
          </h2>
          <div className="mt-7 max-w-md space-y-4 text-base leading-relaxed text-foreground/80">
            <p>
              Rosí begon als de droom van Fay: toen dit pand vrijkwam, kwam alles samen en opende ze
              op Koningsdag de deuren. Inmiddels staat hier een team van allemaal vrouwen.
            </p>
            <p>
              Olijfgroene muren, een warme bar en verse bloemen op tafel: een plek om even te
              blijven hangen.
            </p>
          </div>
          <ul className="mt-7 max-w-md space-y-3 text-[0.95rem] text-foreground/85">
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
            className="mt-8 inline-flex text-sm font-semibold text-primary underline decoration-[color:var(--terracotta)] decoration-2 underline-offset-[5px] transition-colors hover:text-[color:var(--terracotta)]"
          >
            Lees hoe het allemaal begon
          </Link>
        </Reveal>

        {/* Collage: de dames achter de bar, met de terrasfoto als polaroid */}
        <Reveal delay={120} className="relative self-center pb-16 md:pb-20">
          <img
            src={barCookies}
            alt="Het team van Rosí achter de bar, met schalen verse cookies"
            loading="lazy"
            width={1200}
            height={1600}
            className="photo-soft aspect-[4/5] w-full object-cover"
          />
          <figure className="absolute bottom-0 left-1 w-[52%] max-w-[240px] -rotate-[5deg] bg-[color:var(--cream)] p-2.5 pb-1 shadow-[0_16px_36px_-16px_rgb(0_0_0/0.4)] md:-left-6">
            <img
              src={terrasCookies}
              alt="Een van ons met schalen cookies op het terras, onder de roze parasols"
              loading="lazy"
              width={800}
              height={800}
              className="aspect-square w-full object-cover object-[45%_25%]"
            />
            <figcaption className="py-1.5 text-center font-script text-[1.45rem] leading-none text-[color:var(--terracotta)]">
              dat zijn wij
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Uitgelicht: de maandspecial, elke maand nieuw via src/data/special.ts */}
      <section className="bg-[color:var(--blush)]/45">
        <div className="container-prose grid items-center gap-12 py-16 md:grid-cols-[6fr_5fr] md:gap-16 md:py-24">
          <Reveal>
            <p className="font-script text-[1.3rem] leading-[1.6] text-[color:var(--terracotta)]">
              {special.maand}
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.1] text-primary sm:text-5xl">
              {special.titel}
              <span className="text-[color:var(--terracotta)]">.</span>
            </h2>
            <p className="mt-6 max-w-lg font-serif text-xl italic text-primary">
              {special.ondertitel}
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-foreground/85">{special.tekst}</p>

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
                className="text-sm font-semibold text-primary underline decoration-[color:var(--terracotta)] decoration-2 underline-offset-[5px] transition-colors hover:text-[color:var(--terracotta)]"
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
              width={788}
              height={1400}
              className="photo-soft aspect-[4/5] w-full object-cover"
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
            <h2 className="mt-3 font-serif text-4xl leading-[1.1] sm:text-5xl">
              Molenstraat 35, <span className="italic">Monster</span>.
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
              width={320}
              height={405}
              className="photo-soft mx-auto aspect-[4/5] w-full max-w-[360px] object-cover"
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
          <p className="font-script text-[1.3rem] leading-[1.6] text-[color:var(--terracotta)]">
            lieve woorden
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
            Wat gasten <span className="italic text-primary">zeggen</span>.
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
              <div
                className="text-[color:var(--terracotta)]"
                role="img"
                aria-label="Vijf van de vijf sterren"
              >
                {"\u2605\u2605\u2605\u2605\u2605"}
              </div>
              <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-foreground">
                {review.tekst}
              </blockquote>
              <figcaption className="mt-4 text-sm text-foreground/60">
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
