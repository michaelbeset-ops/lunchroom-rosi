import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";

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

function HomePage() {
  return (
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
            alt="Vers brood en een kop koffie op een houten tafel in Lunchroom Rosi"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
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
  );
}
