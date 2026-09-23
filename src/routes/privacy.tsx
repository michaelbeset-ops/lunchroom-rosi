import { createFileRoute, Link } from "@tanstack/react-router";
import { beholdFeedId } from "@/data/instagram";

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

const h2 = "mt-10 font-script text-xl font-normal leading-[1.6] tracking-normal text-primary";
const p = "mt-3 leading-relaxed text-foreground";

function PrivacyPage() {
  return (
    <section className="container-prose py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          goed geregeld
        </p>
        <h1 className="mt-3 font-script font-normal tracking-normal text-[1.9rem] leading-[1.5] text-primary sm:text-[2.6rem]">
          Privacy &amp; cookies
        </h1>
        <p className={p}>
          Wij zijn Lunchroom Rosí, Molenstraat 35 in Monster. Zo simpel als onze kaart is, zo simpel
          houden we ook je privacy: we verzamelen zo min mogelijk en verkopen nooit iets door.
        </p>

        <h2 className={h2}>Welke gegevens we krijgen</h2>
        <p className={p}>
          Op deze site vul je niets in en hoef je nergens in te loggen. Mail je ons of bel je, dan
          gebruiken we je gegevens alleen om je te antwoorden. Reserveer je of volg je ons via
          Instagram, dan gelden daar de voorwaarden en het privacybeleid van Instagram.
        </p>

        <h2 className={h2}>Cookies</h2>
        <p className={p}>
          Deze site gebruikt geen advertentie- of volgcookies en geen statistiekdiensten. We
          onthouden alleen je cookiekeuze in je browser. Dat is een functionele voorkeur; die
          verlaat je apparaat niet.
        </p>
        {beholdFeedId && (
          <p className={p}>
            Accepteer je cookies, dan laden we onze nieuwste Instagram-foto&apos;s via Behold
            (behold.so). Je browser haalt die foto&apos;s dan op bij Behold; daarbij ziet Behold je
            IP-adres. Weiger je cookies, dan zie je een vaste selectie foto&apos;s en wordt er niets
            extern geladen.
          </p>
        )}
        <p className={p}>
          Links naar Instagram en Google Maps openen die diensten in een nieuw tabblad. Vanaf dat
          moment gelden hun eigen regels; zie het{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-primary decoration-2 underline-offset-2 hover:text-primary"
          >
            privacybeleid van Google
          </a>{" "}
          en dat van{" "}
          <a
            href="https://privacycenter.instagram.com/policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-primary decoration-2 underline-offset-2 hover:text-primary"
          >
            Instagram
          </a>
          .
        </p>

        <h2 className={h2}>Je rechten</h2>
        <p className={p}>
          Je mag altijd vragen welke gegevens we van je hebben, en of we ze aanpassen of
          verwijderen. Mail ons op{" "}
          <a
            href="mailto:info@lunchroomrosi.nl"
            className="underline decoration-primary decoration-2 underline-offset-2 hover:text-primary"
          >
            info@lunchroomrosi.nl
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
