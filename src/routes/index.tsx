import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/instagram/terras-cookies.jpg";
import barCookies from "@/assets/instagram/bar-cookies.jpg";
import drankjeBank from "@/assets/instagram/drankje-bank.jpg";
import cheesecake from "@/assets/instagram/cheesecake-citroen.jpg";
import { Reveal } from "@/components/site/Reveal";
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

const uspItems = [
  {
    title: "Vers van dichtbij",
    body: "Brood van de bakker om de hoek, groente uit het Westland en bonen van branderij Stielman.",
  },
  {
    title: "Zelf gebakken",
    body: "De cookies, de brownies en de taart maken we hier. Wat er vandaag is, staat op het krijtbord.",
  },
  {
    title: "Zeven dagen open",
    body: "Van vroeg ontbijt tot late koffie. Reserveren mag, binnenlopen mag net zo goed.",
  },
];

const openingHours = [
  ["Maandag t/m vrijdag", "08:30 – 17:00"],
  ["Zaterdag", "09:00 – 17:00"],
  ["Zondag", "10:00 – 16:00"],
] as const;

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
      {/* Hero: de foto vult het volledige scherm; de tekst staat op een
          crème vlak dat onderaan verankerd is, met de parasolrand erboven.
          Geen overlay over de foto zelf. */}
      <section className="relative -mt-16 flex min-h-svh flex-col justify-end overflow-hidden">
        {/* Ideale foto om aan te leveren: gouden avondlicht, de twee
            eigenaressen proosten met een spritz voor het raam met het
            Rosí-logo. Ongefilterd, minimaal 2000px breed. */}
        <img
          src={heroImg}
          alt="Zomermarkt voor de deur van Rosí: een van de eigenaressen met schalen verse cookies, onder de roze parasols"
          width={1200}
          height={1600}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
        />

        {/* Crème verloop bovenin zodat de navigatie leesbaar blijft */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background via-background/60 to-transparent"
        />

        {/* Tekstvlak, vast aan de onderrand. Op desktop rechtsonder, zodat
            het gezicht op de foto links altijd vrij blijft. */}
        <div className="relative z-10 w-full md:ml-auto md:w-[min(620px,48vw)]">
          <div className="volant -scale-y-100" aria-hidden="true" />
          <div className="bg-background px-5 pt-4 pb-6 md:px-10 md:pt-6 md:pb-9">
            <p className="font-script text-[2rem] leading-none text-[color:var(--terracotta)] md:text-[2.4rem]">
              lunchroom
            </p>
            <h1 className="mt-2 font-serif text-[clamp(2.2rem,8.5vw,3.6rem)] leading-[1.04] text-foreground">
              Eerst koffie, straks een <em className="italic text-primary">spritz</em>.
            </h1>
            <p className="mt-3 max-w-md leading-relaxed text-foreground/80 md:mt-4">
              Cookies uit de oven, lunch in het zonnetje en om de zoveel weken een wine night.
              Schuif gewoon aan, een plan is niet nodig.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-6">
              <a
                href="https://ig.me/m/lunchroomrosi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-aperol px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[color:var(--terracotta)]"
              >
                Reserveer via Instagram
              </a>
              <Link
                to="/menu"
                className="text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-[5px] transition-colors hover:text-primary"
              >
                Bekijk de kaart
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2.5 border-t border-border/60 pt-4 text-sm tracking-wide text-foreground/70">
              <svg
                viewBox="0 0 20 34"
                width="14"
                height="24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-none text-primary"
              >
                <path d="M10 11.5a5 5 0 1 1 4.7-6.6A3.4 3.4 0 1 1 8 7.2a1.9 1.9 0 1 1 3.4 1.2" />
                <path d="M10 12v20" />
                <path d="M10 21c-3.6-.8-5.6-3.2-5.9-6.4" />
                <path d="M10 26c3.6-.8 5.6-3.2 5.9-6.4" />
              </svg>
              Molenstraat 35, Monster &middot; elke dag open
            </p>
          </div>
        </div>
      </section>

      {/* Welkom */}
      <section className="container-prose grid gap-12 py-20 md:grid-cols-[6fr_5fr] md:gap-16 md:py-28">
        <Reveal>
          <p className={eyebrow}>Welkom bij Rosí</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
            Een hoekje waar de tijd wat <span className="italic text-primary">trager</span> gaat.
          </h2>
          <div className="mt-7 max-w-md space-y-4 text-base leading-relaxed text-foreground/80">
            <p>
              Rosí zit aan de Molenstraat, midden in Monster. Olijfgroene muren, een terracotta bar
              en bloemen op tafel. Je wordt er zo weer even rustig van.
            </p>
            <p>
              Kom voor een snelle koffie, blijf voor de lunch, of neem gewoon je krant mee en doe
              een middag lang niets. Alle drie zijn ze prima.
            </p>
          </div>
          <Link to="/over" className={`${btnQuiet} mt-8`}>
            Lees ons verhaal
          </Link>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-4 self-start">
          <img
            src={barCookies}
            alt="Schalen met brownies en cookies op de bar bij Rosí"
            loading="lazy"
            width={1200}
            height={1600}
            className="photo-soft aspect-[3/4] w-full object-cover"
          />
          <img
            src={drankjeBank}
            alt="Huisgemaakte limonade met bosbes en rozemarijn op een houten tafel"
            loading="lazy"
            width={1050}
            height={1400}
            className="photo-soft mt-10 aspect-[3/4] w-full object-cover"
          />
        </Reveal>
      </section>

      {/* Drie beloftes */}
      <section className="bg-soft">
        <ul className="container-prose grid gap-6 py-16 md:grid-cols-3 md:py-20">
          {uspItems.map((usp, i) => (
            <Reveal as="li" key={usp.title} delay={i * 80}>
              <div className="h-full rounded-3xl bg-background/70 p-8">
                <span
                  aria-hidden="true"
                  className="block h-1 w-10 rounded-full bg-[color:var(--terracotta)]"
                />
                <h3 className="mt-5 font-serif text-2xl text-foreground">{usp.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{usp.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
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
              <h3 className="font-serif text-2xl text-primary">{cat.title}</h3>
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

      {/* Kom langs */}
      <section className="container-prose grid items-center gap-12 py-20 md:grid-cols-[5fr_6fr] md:gap-16 md:py-28">
        <Reveal>
          <p className={eyebrow}>Kom langs</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
            Molenstraat 35, <span className="italic text-primary">Monster</span>.
          </h2>
          <ul className="mt-8 text-sm">
            {openingHours.map(([days, hours]) => (
              <li
                key={days}
                className="flex items-baseline justify-between gap-4 border-b border-border/60 py-3 last:border-0"
              >
                <span className="text-foreground/80">{days}</span>
                <span className="font-serif tabular-nums text-foreground">{hours}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9">
            <Link to="/reserveren" className={btnPrimary}>
              Reserveer een tafel
            </Link>
            <Link to="/contact" className={btnQuiet}>
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
      </section>
    </>
  );
}
