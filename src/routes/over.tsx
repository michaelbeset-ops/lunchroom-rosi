import { createFileRoute, Link } from "@tanstack/react-router";
import achterDeBar from "@/assets/instagram/achter-de-bar.jpg";
import barCookies from "@/assets/instagram/bar-cookies.jpg";
import cocktailsTafel from "@/assets/instagram/cocktails-tafel.jpg";
import matchaCookies from "@/assets/instagram/matcha-cookies.jpg";
import proost from "@/assets/instagram/proost.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/over")({
  head: () => ({
    meta: [
      { title: "Over ons | Rosí Monster" },
      {
        name: "description",
        content:
          "Rosí is de lunchroom aan de Molenstraat in Monster. Verse koffie, huisgemaakt gebak, lunch en wine nights.",
      },
      { property: "og:title", content: "Over ons | Rosí" },
      { property: "og:description", content: "Het verhaal achter Rosí in Monster." },
      { property: "og:url", content: "/over" },
    ],
    links: [{ rel: "canonical", href: "/over" }],
  }),
  component: OverPage,
});

function OverPage() {
  return (
    <>
      <section className="container-prose pt-12 pb-10 md:pt-20">
        <div className="max-w-2xl">
          <p className="font-script text-[1.9rem] leading-none text-[color:var(--terracotta)]">
            over ons
          </p>
          <h1 className="mt-3 font-serif text-5xl text-foreground sm:text-6xl">
            Een nieuwe plek in <span className="italic text-primary">Monster</span>.
          </h1>
        </div>
      </section>

      <section className="container-prose grid gap-12 pb-20 md:grid-cols-[5fr_7fr]">
        <Reveal>
          <img
            src={achterDeBar}
            alt="Achter de bar bij Rosí wordt een ijskoffie gemaakt"
            loading="lazy"
            width={900}
            height={1600}
            className="photo-soft h-[480px] w-full object-cover md:h-[600px]"
          />
        </Reveal>
        <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-foreground/85">
          <p>
            Rosí is de lunchroom aan de Molenstraat in Monster, gerund door twee vriendinnen met een
            liefde voor lekker eten en mooie dingen. Olijfgroene muren, een warme bar, verse bloemen
            op tafel: we hebben er een plek van gemaakt waar we zelf graag zouden zitten.
          </p>
          <p>
            Overdag draaien we op verse koffie, huisgemaakte cookies en brownies, en een lunchkaart
            die meegaat met de seizoenen. We werken met verse ingrediënten en bakken zoveel mogelijk
            zelf.
          </p>
          <p>
            En als de zon zakt, schuiven we door: om de zoveel weken is er een wine night, met goede
            wijn, bites en muziek. Hou onze Instagram in de gaten voor de data.
          </p>
          <p>
            Reserveren kan via een berichtje op Instagram. Binnenlopen mag natuurlijk altijd, voor
            jong en oud.
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--olive-deep)] text-[color:var(--cream)]">
        <div className="container-prose py-20 text-center">
          <Reveal>
            <p className="font-script text-[2.2rem] leading-none text-[color:var(--blush)]">
              your new favorite lunch spot
            </p>
            <blockquote className="mx-auto mt-6 max-w-3xl font-serif text-2xl leading-relaxed sm:text-3xl">
              Coffee, bites & wine nights. Voor de eerste koffie van de dag tot het laatste glas van
              de avond.
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="container-prose grid gap-6 py-20 md:grid-cols-4">
        {[
          { src: matchaCookies, alt: "IJskoude matcha latte naast een schaaltje cookies" },
          { src: barCookies, alt: "Schalen met brownies en cookies op de bar" },
          { src: cocktailsTafel, alt: "Spritz en een coupe met aardbei tussen de bloesem" },
          { src: proost, alt: "Twee handen proosten voor een kast vol bloemen" },
        ].map((img, i) => (
          <Reveal key={img.src} delay={i * 80}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1000}
              height={1000}
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </Reveal>
        ))}
      </section>

      <section className="container-prose pb-20 text-center">
        <h2 className="font-serif text-4xl text-foreground">Kom een keer langs</h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Loop binnen voor een koffie, of reserveer via Instagram voor de lunch of een wine night.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="https://ig.me/m/lunchroomrosi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-aperol px-6 py-3 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta)]"
          >
            Reserveer via Instagram
          </a>
          <Link
            to="/menu"
            className="rounded-full border border-primary/30 bg-card px-6 py-3 text-sm text-foreground transition-colors hover:border-primary"
          >
            Bekijk de kaart
          </Link>
        </div>
      </section>
    </>
  );
}
