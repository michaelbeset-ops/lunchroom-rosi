import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/instagram/terras-cookies.jpg";
import barCookies from "@/assets/instagram/bar-cookies.jpg";
import drankjeBank from "@/assets/instagram/drankje-bank.jpg";
import cheesecake from "@/assets/instagram/cheesecake-citroen.jpg";
import { Reveal } from "@/components/site/Reveal";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { menu } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lunchroom Rosi | Verse koffie & lunch in Monster" },
      {
        name: "description",
        content: "Lunchroom in het hart van Monster. Verse koffie, huisgemaakte lunch en taart.",
      },
      { property: "og:title", content: "Lunchroom Rosi | Monster" },
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
    number: "01",
    title: "Vers van dichtbij",
    body: "Brood van de bakker om de hoek, groente uit het Westland en bonen van branderij Stielman.",
  },
  {
    number: "02",
    title: "Zelf gebakken",
    body: "De taart, de granola en de soep maken we hier. Wat er vandaag staat, staat op het krijtbord.",
  },
  {
    number: "03",
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

function HomePage() {
  return (
    <>
      <section className="-mt-16 flex min-h-svh flex-col">
        <div className="flex flex-1 flex-col md:grid md:grid-cols-[7fr_5fr]">
          {/* Tekstkolom, laag uitgelijnd, veel lucht erboven */}
          <div className="relative z-10 flex flex-col justify-end px-5 pt-28 pb-10 md:px-10 md:pb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Lunchroom in Monster
            </p>
            <h1 className="mt-4 text-[clamp(3.4rem,10.5vw,9rem)] leading-[0.92] tracking-[-0.04em] text-foreground md:-mr-40">
              De lunch
              <br />
              staat klaar.
            </h1>
            <p className="mt-7 max-w-sm text-lg leading-snug text-foreground/80">
              Verse koffie, huisgemaakte taart en broodjes van de bakker om de hoek. Binnenlopen mag
              altijd.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                to="/menu"
                className="bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground"
              >
                Bekijk de kaart
              </Link>
              <Link
                to="/reserveren"
                className="text-sm font-semibold text-foreground underline decoration-2 underline-offset-4 transition-colors hover:text-primary"
              >
                Reserveer een tafel
              </Link>
            </div>
          </div>

          {/* Foto, hard afgesneden tegen de rechterrand */}
          <div className="relative min-h-[42svh] flex-1 md:mt-28 md:min-h-0">
            <img
              src={heroImg}
              alt="Schalen met verse cookies op het terras van Rosí, onder de roze parasols"
              width={1200}
              height={1600}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-[42%_center]"
            />
          </div>
        </div>

        {/* Feitenregel onderaan */}
        <div className="border-t border-border bg-background">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 px-5 py-4 text-sm text-foreground/80 md:px-10">
            <span className="font-semibold text-foreground">Choorstraat 12, Monster</span>
            <span>Zeven dagen per week open</span>
            <a
              href="https://instagram.com/lunchroomrosi"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2 underline-offset-4 transition-colors hover:text-primary"
            >
              @lunchroomrosi
            </a>
          </div>
        </div>
      </section>

      {/* Welkom */}
      <section className="border-t border-border px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-[6fr_5fr] md:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Welkom bij Rosi
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.04em] text-foreground">
              Een hoekje waar
              <br />
              de tijd wat trager
              <br />
              gaat.
            </h2>
            <div className="mt-7 max-w-md space-y-4 text-base leading-relaxed text-foreground/80">
              <p>
                Rosi zit aan de Choorstraat, midden in Monster. Fay staat er zelf achter de bar,
                bakt de taart en kent na een week je bestelling uit haar hoofd.
              </p>
              <p>
                Kom voor een snelle koffie, blijf voor de lunch, of neem gewoon je krant mee en doe
                een middag lang niets. Alle drie zijn ze prima.
              </p>
            </div>
            <Link
              to="/over"
              className="mt-8 inline-block text-sm font-semibold text-foreground underline decoration-2 underline-offset-4 transition-colors hover:text-primary"
            >
              Lees het verhaal van Fay
            </Link>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-3 self-start">
            <img
              src={barCookies}
              alt="Schalen met brownies en cookies op de bar bij Rosí"
              loading="lazy"
              width={1200}
              height={1600}
              className="aspect-[3/4] w-full object-cover"
            />
            <img
              src={drankjeBank}
              alt="Huisgemaakte limonade met bosbes en rozemarijn op een houten tafel"
              loading="lazy"
              width={1050}
              height={1400}
              className="mt-10 aspect-[3/4] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Drie beloftes */}
      <section className="border-t border-border bg-card">
        <ul className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {uspItems.map((usp, i) => (
            <Reveal
              as="li"
              key={usp.number}
              delay={i * 80}
              className="px-5 py-10 md:px-10 md:py-14"
            >
              <p className="font-semibold tabular-nums text-primary">{usp.number}</p>
              <h3 className="mt-4 text-2xl leading-tight tracking-[-0.03em] text-foreground">
                {usp.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{usp.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Uit de kaart */}
      <section className="border-t border-border px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Uit de kaart
            </p>
            <h2 className="mt-3 text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.04em] text-foreground">
              Een greep uit
              <br />
              wat er staat.
            </h2>
          </div>
          <Link
            to="/menu"
            className="text-sm font-semibold text-foreground underline decoration-2 underline-offset-4 transition-colors hover:text-primary"
          >
            De hele kaart
          </Link>
        </div>

        <div className="mt-10 grid gap-x-16 gap-y-12 md:mt-14 md:grid-cols-3">
          {highlights.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 80}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {cat.title}
              </h3>
              <ul className="mt-5 space-y-5">
                {cat.items.map((item) => (
                  <li key={item.name} className="border-t border-border pt-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-lg leading-tight tracking-[-0.02em] text-foreground">
                        {item.name}
                      </h4>
                      <span className="font-semibold tabular-nums text-foreground">
                        € {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <InstagramFeed />

      {/* Openingstijden en bezoek */}
      <section className="border-t border-border">
        <div className="grid md:grid-cols-[5fr_7fr]">
          <div className="order-2 px-5 py-14 md:order-1 md:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Kom langs
            </p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.04em] text-foreground">
              Choorstraat 12,
              <br />
              Monster.
            </h2>
            <ul className="mt-8 text-sm">
              {openingHours.map(([days, hours]) => (
                <li
                  key={days}
                  className="flex items-baseline justify-between gap-4 border-t border-border py-3"
                >
                  <span className="text-foreground/80">{days}</span>
                  <span className="font-semibold tabular-nums text-foreground">{hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                to="/reserveren"
                className="bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground"
              >
                Reserveer een tafel
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold text-foreground underline decoration-2 underline-offset-4 transition-colors hover:text-primary"
              >
                Route en contact
              </Link>
            </div>
          </div>

          <div className="order-1 min-h-[40svh] md:order-2 md:min-h-0">
            <img
              src={cheesecake}
              alt="Punt citroencheesecake op een schulpbordje in de zon"
              loading="lazy"
              width={935}
              height={1247}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
