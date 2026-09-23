import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import fay from "@/assets/fay.jpg";
import { Reveal } from "@/components/site/Reveal";
import { RosiRoos } from "@/components/site/RosiMark";

export const Route = createFileRoute("/ons-verhaal")({
  head: () => ({
    meta: [
      { title: "Ons verhaal | Rosí Monster" },
      {
        name: "description",
        content:
          "Hoe Lunchroom Rosí in Monster begon: van een droom van Fay tot een gezellige plek voor lekker eten, een goed glas wijn en fijne momenten samen.",
      },
      { property: "og:title", content: "Ons verhaal | Rosí" },
      { property: "og:url", content: "/ons-verhaal" },
    ],
    links: [{ rel: "canonical", href: "/ons-verhaal" }],
  }),
  component: OnsVerhaalPage,
});

/* Het verhaal van Fay, letterlijk zoals aangeleverd in de briefing */
const alineas = [
  "Het was altijd al een droom om mijn eigen lunchroom te beginnen. Maar ja, een eigen lunchroom starten klinkt best ambitieus.",
  "Tot ik het er op een dag met mijn vriend en familie over had en zij zeiden: “Waarom niet?”",
  "En zo zijn we ervoor gegaan! Met veel enthousiasme hebben we een pand gevonden en helemaal omgetoverd tot de lunchroom die we vandaag de dag kennen: Lunchroom Rosí.",
  "Een gezellige plek waar je kunt genieten van lekker eten, een goed glas wijn en fijne momenten samen.",
];

function OnsVerhaalPage() {
  return (
    <section className="container-prose grid items-center gap-12 py-14 md:grid-cols-[5fr_6fr] md:gap-20 md:py-24">
      <Reveal>
        <img
          src={fay}
          alt="Fay, de oprichter van Rosí, op de roestkleurige bank in de zaak"
          width={320}
          height={405}
          fetchPriority="high"
          className="photo-soft photo-arch mx-auto aspect-[4/5] w-full max-w-[400px] object-cover"
        />
      </Reveal>

      <Reveal delay={120}>
        <RosiRoos className="h-14 w-auto text-[color:var(--terracotta)]" />
        <h1 className="mt-5 font-script text-[clamp(1.6rem,4.5vw,2.4rem)] font-normal leading-[1.5] tracking-normal text-primary">
          Hoe het allemaal is begonnen&hellip;
        </h1>

        <div className="mt-8 max-w-lg space-y-5 text-[1.05rem] leading-relaxed text-foreground">
          {alineas.map((tekst) => (
            <p key={tekst}>{tekst}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="https://instagram.com/lunchroomrosi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-aperol px-7 py-3.5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta-deep)]"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Volg ons op Instagram
          </a>
          <Link
            to="/menu"
            className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[color:var(--terracotta-deep)]"
          >
            Bekijk de menukaart
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
