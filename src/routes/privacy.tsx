import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & cookies | Rosí Monster" },
      {
        name: "description",
        content:
          "Hoe Lunchroom Rosí in Monster omgaat met je gegevens en welke cookies de site gebruikt.",
      },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const h2 = "mt-10 font-serif text-2xl text-foreground";
const p = "mt-3 leading-relaxed text-foreground/80";

function PrivacyPage() {
  return (
    <section className="container-prose py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="font-script text-[1.9rem] leading-none text-[color:var(--terracotta)]">
          goed geregeld
        </p>
        <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
          Privacy &amp; cookies
        </h1>
        <p className={p}>
          Wij zijn Lunchroom Rosí, Molenstraat 35 in Monster. Zo simpel als onze kaart is, zo simpel
          houden we ook je privacy: we verzamelen zo min mogelijk en verkopen nooit iets door.
        </p>

        <h2 className={h2}>Welke gegevens we krijgen</h2>
        <p className={p}>
          Vul je het contact- of reserveringsformulier in, dan opent dat een e-mail in je eigen
          mailprogramma. Wij slaan die gegevens niet op in een database; ze staan alleen in onze
          mailbox, en we gebruiken ze uitsluitend om je bericht te beantwoorden. Reserveer je via
          Instagram, dan gelden daar de voorwaarden van Instagram.
        </p>

        <h2 className={h2}>Cookies</h2>
        <p className={p}>
          Deze site gebruikt geen advertentie- of volgcookies en geen statistiekdiensten. We
          onthouden twee dingen in je browser: je cookiekeuze en of je onze welkomstmelding al hebt
          gezien. Dat zijn functionele voorkeuren; die verlaten je apparaat niet.
        </p>
        <p className={p}>
          Op de contactpagina staat een kaart van Google Maps. Die laden we pas nadat je cookies
          hebt geaccepteerd of zelf op de kaart klikt, omdat Google daarbij cookies kan plaatsen.
          Zie het{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-primary decoration-2 underline-offset-2 hover:text-primary"
          >
            privacybeleid van Google
          </a>
          .
        </p>

        <h2 className={h2}>Je rechten</h2>
        <p className={p}>
          Je mag altijd vragen welke gegevens we van je hebben, en of we ze aanpassen of
          verwijderen. Mail ons op{" "}
          <a
            href="mailto:hallo@lunchroomrosi.nl"
            className="underline decoration-primary decoration-2 underline-offset-2 hover:text-primary"
          >
            hallo@lunchroomrosi.nl
          </a>{" "}
          en we regelen het. Kom je er met ons niet uit, dan kun je terecht bij de Autoriteit
          Persoonsgegevens.
        </p>

        <h2 className={h2}>Vragen?</h2>
        <p className={p}>
          Loop even binnen of stuur een berichtje. We leggen het graag uit, het liefst met een
          koffie erbij.
        </p>

        <Link
          to="/"
          className="mt-10 inline-flex items-center rounded-full border border-primary/30 bg-card px-6 py-3 text-sm text-foreground transition-colors hover:border-primary"
        >
          Terug naar home
        </Link>
      </div>
    </section>
  );
}
