import { createFileRoute, Link } from "@tanstack/react-router";
/* Aangeleverd interieur met saliegroene muren en olijfgroene stoelen,
   past een-op-een op het palet. Een 2000px-versie maakt dit nog
   scherper op grote schermen. */
import heroImg from "@/assets/hero-sfeer-v2.jpg";
import barCookies from "@/assets/instagram/bar-cookies.jpg";
import drankjeBank from "@/assets/instagram/drankje-bank.jpg";
import cheesecake from "@/assets/instagram/cheesecake-citroen.jpg";
import matchaCookies from "@/assets/instagram/matcha-cookies.jpg";
import terrasCookies from "@/assets/instagram/terras-cookies.jpg";
import { Reveal } from "@/components/site/Reveal";
import { RosiMedaillon, RosiRoos } from "@/components/site/RosiMark";
import { WaveDivider } from "@/components/site/WaveDivider";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { menu } from "@/data/menu";

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

const openingHours = [
  ["Maandag t/m vrijdag", "08:30 – 17:00"],
  ["Zaterdag", "09:00 – 17:00"],
  ["Zondag", "10:00 – 16:00"],
] as const;

const highlightFotos: Record<string, { src: string; alt: string }> = {
  lunch: { src: matchaCookies, alt: "IJskoude matcha latte naast een schaaltje cookies" },
  broodjes: { src: barCookies, alt: "Schalen met vers gebak op de bar" },
  zoet: { src: cheesecake, alt: "Punt citroencheesecake op een schulpbordje" },
};

const highlightIds = ["lunch", "broodjes", "zoet"] as const;

const highlights = highlightIds
  .map((id) => menu.find((c) => c.id === id))
  .filter((c): c is NonNullable<typeof c> => Boolean(c))
  .map((cat) => ({ ...cat, items: cat.items.slice(0, 3) }));

const btnPrimary =
  "inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-[color:var(--terracotta)]";
const btnQuiet =
  "inline-flex items-center rounded-full border border-primary/30 bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary";
const eyebrow = "text-xs uppercase tracking-[0.28em] text-primary/80";

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
          width={1700}
          height={1134}
          fetchPriority="high"
          className="kenburns absolute inset-0 h-full w-full object-cover object-[42%_58%]"
        />

        {/* Crème verloop bovenin zodat de navigatie leesbaar blijft */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background via-background/60 to-transparent"
        />

        {/* Tekstvlak, vast aan de onderrand; op desktop rechtsonder zodat
            het gezicht op de foto links vrij blijft. */}
        <div className="relative z-10 w-full md:ml-auto md:w-[min(620px,48vw)]">
          <RosiMedaillon className="absolute -top-14 right-5 z-20 w-[104px] md:-top-16 md:right-10 md:w-[124px]" />
          <div className="schulprand" aria-hidden="true" />
          <div className="hero-reveal bg-[color:var(--olive-deep)] px-5 pt-5 pb-6 text-[color:var(--cream)] md:px-10 md:pt-7 md:pb-9">
            <p className="font-script text-[2rem] leading-none text-[color:var(--blush)] md:text-[2.4rem]">
              lunchroom
            </p>
            <h1 className="mt-2 max-w-[11em] font-serif text-[clamp(2.2rem,8.5vw,3.6rem)] leading-[1.04]">
              Eerst koffie, straks een <em className="italic text-[color:var(--blush)]">spritz</em>.
            </h1>
            <p className="mt-3 max-w-md leading-relaxed text-[color:var(--cream)]/85 md:mt-4">
              Cookies uit de oven, lunch in het zonnetje en om de zoveel weken een wine night.
              Schuif gewoon aan, een plan is niet nodig.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-6">
              <a
                href="https://ig.me/m/lunchroomrosi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-aperol px-7 py-3.5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta)]"
              >
                Reserveer via Instagram
              </a>
              <Link
                to="/menu"
                className="text-sm font-semibold text-[color:var(--cream)] underline decoration-[color:var(--blush)] decoration-2 underline-offset-[5px] transition-colors hover:text-[color:var(--blush)]"
              >
                Bekijk de kaart
              </Link>
            </div>
            <p className="mt-5 border-t border-[color:var(--cream)]/20 pt-4 text-sm tracking-wide text-[color:var(--cream)]/75">
              Molenstraat 35, Monster &middot; elke dag open
            </p>
          </div>
        </div>
      </section>

      {/* Welkom: verhaal, beloftes en de collage met polaroid */}
      <section className="container-prose grid gap-14 py-20 pb-28 md:grid-cols-[6fr_5fr] md:gap-16 md:py-28">
        <Reveal>
          <p className="font-script text-[1.9rem] leading-none text-[color:var(--terracotta)]">
            welkom bij Rosí
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
            Jouw plek voor koffie, lunch en <span className="italic text-primary">meer</span>.
          </h2>
          <div className="mt-7 max-w-md space-y-4 text-base leading-relaxed text-foreground/80">
            <p>
              Rosí begon als de droom van Fay en wordt gerund door een team van allemaal vrouwen.
              Olijfgroene muren, een warme bar en verse bloemen op tafel: een plek om even te
              blijven hangen.
            </p>
          </div>
          <ul className="mt-7 max-w-md space-y-3 text-[0.95rem] text-foreground/85">
            {[
              "Cookies, brownies en taarten uit onze eigen oven",
              "Van de eerste koffie tot de laatste wine night",
              "Elke dag open, reserveren via Instagram",
            ].map((punt) => (
              <li key={punt} className="flex items-center gap-3">
                <RosiRoos className="h-6 w-auto flex-none text-primary [--roos-bloem:var(--terracotta)]" />
                {punt}
              </li>
            ))}
          </ul>
          <Link to="/over" className={`${btnQuiet} mt-8`}>
            Lees ons verhaal
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

      {/* Uit de kaart */}
      <section className="container-prose py-20 md:py-28">
        <div className="text-center">
          <p className={eyebrow}>Uit de kaart</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
            Een greep uit wat er <span className="italic text-primary">staat</span>.
          </h2>
          <WaveDivider className="mx-auto mt-7 max-w-[190px]" />
        </div>

        <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-3">
          {highlights.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 80}>
              <img
                src={highlightFotos[cat.id].src}
                alt={highlightFotos[cat.id].alt}
                loading="lazy"
                width={800}
                height={800}
                className="photo-soft mb-5 aspect-[4/3] w-full object-cover"
              />
              <h3 className="font-serif text-2xl text-[color:var(--terracotta)]">{cat.title}</h3>
              <div className="rule-soft mt-3" />
              <ul className="mt-5 space-y-5">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline">
                      <h4 className="font-serif text-lg text-foreground">{item.name}</h4>
                      <span className="menu-dots" aria-hidden="true" />
                      <span className="font-serif tabular-nums text-foreground">
                        € {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/menu" className={btnPrimary}>
            De hele kaart
          </Link>
        </div>
      </section>

      <InstagramFeed />

      {/* Kom langs: donkergroen, als warme afsluiter */}
      <section className="bg-[color:var(--olive-deep)] text-[color:var(--cream)]">
        <div className="container-prose grid items-center gap-12 py-20 md:grid-cols-[5fr_6fr] md:gap-16 md:py-28">
          <Reveal>
            <p className="font-script text-[1.9rem] leading-none text-[color:var(--blush)]">
              tot zo
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.1] sm:text-5xl">
              Molenstraat 35, <span className="italic text-[color:var(--blush)]">Monster</span>.
            </h2>
            <ul className="mt-8 text-sm">
              {openingHours.map(([days, hours]) => (
                <li
                  key={days}
                  className="flex items-baseline justify-between gap-4 border-b border-[color:var(--cream)]/15 py-3 last:border-0"
                >
                  <span className="text-[color:var(--cream)]/80">{days}</span>
                  <span className="font-serif tabular-nums">{hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="https://ig.me/m/lunchroomrosi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-aperol px-7 py-3.5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta)]"
              >
                Reserveer via Instagram
              </a>
              <Link
                to="/contact"
                className="text-sm font-semibold text-[color:var(--cream)] underline decoration-[color:var(--blush)] decoration-2 underline-offset-[5px] transition-colors hover:text-[color:var(--blush)]"
              >
                Route en contact
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src={cheesecake}
              alt="Punt citroencheesecake op een schulpbordje in de zon"
              loading="lazy"
              width={935}
              height={1247}
              className="photo-soft aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
