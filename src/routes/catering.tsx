import { createFileRoute } from "@tanstack/react-router";
import etenBowl from "@/assets/eten-bowl.webp";
import { Reveal } from "@/components/site/Reveal";
import { RosiRoos } from "@/components/site/RosiMark";
import { telefoon } from "@/data/openingstijden";
import { catering, cateringInfo, cateringIntro } from "@/data/catering";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering | Rosí Monster" },
      {
        name: "description",
        content:
          "Catering by Rosí: broodjes, soepen, drankjes, sweets box en borrelbox, vers klaargemaakt en bezorgd in Monster en het Westland. Bestellen via WhatsApp of e-mail.",
      },
      { property: "og:title", content: "Catering | Rosí" },
      { property: "og:url", content: "/catering" },
    ],
    links: [{ rel: "canonical", href: "/catering" }],
  }),
  component: CateringPage,
});

const whatsapp = `https://wa.me/${telefoon.link.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hoi Rosí, ik wil graag catering bestellen.",
)}`;

const knopPrimair =
  "inline-flex items-center gap-2 rounded-full bg-aperol px-7 py-3.5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta-deep)]";
const knopSecundair =
  "inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[color:var(--terracotta-deep)]";

function CateringPage() {
  return (
    <>
      {/* Intro: het verhaal van de flyer, met de foto ernaast */}
      <section className="container-prose grid items-center gap-12 py-14 md:grid-cols-[6fr_5fr] md:gap-20 md:py-24">
        <Reveal>
          <RosiRoos className="h-14 w-auto text-[color:var(--terracotta)]" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            catering
          </p>
          <h1 className="mt-3 font-script text-[clamp(1.6rem,4.5vw,2.4rem)] font-normal leading-[1.5] tracking-normal text-primary">
            Kunnen jullie niet naar Rosí komen? Dan brengen wij Rosí naar jullie.
          </h1>
          <div className="mt-8 max-w-lg space-y-4 leading-relaxed text-foreground">
            {cateringIntro.map((tekst) => (
              <p key={tekst}>{tekst}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={knopPrimair}>
              <WhatsAppIcoon className="h-4 w-4" />
              Bestel via WhatsApp
            </a>
            <a
              href="mailto:info@lunchroomrosi.nl?subject=Cateringbestelling"
              className={knopSecundair}
            >
              Bestel via e-mail
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <img
            src={etenBowl}
            alt="Een salade in een schaaltje, er wordt een kroket bij gepakt, met een glas wijn"
            width={900}
            height={1350}
            className="photo-soft mx-auto aspect-[4/5] w-full max-w-[440px] object-cover"
          />
        </Reveal>
      </section>

      {/* Het aanbod, in dezelfde stijl als de menukaart */}
      <section className="bg-[color:var(--blush)]/45">
        <div className="container-prose py-16 md:py-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              ons aanbod
            </p>
            <h2 className="mt-3 font-script text-[1.9rem] leading-[1.5] font-normal tracking-normal text-primary sm:text-[2.6rem]">
              Catering by Rosí
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Alles wordt per stuk of per punt verkocht. Voorkeur voor iets anders? Neem even
              contact met ons op, er is altijd meer mogelijk.
            </p>
          </div>

          <nav aria-label="Cateringcategorieën" className="mt-8">
            <ul className="flex flex-wrap justify-center gap-2 text-sm">
              {catering.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-x-16">
            {catering.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 60}>
                <article id={cat.id} className="scroll-mt-28">
                  <header className="mb-6">
                    <h3 className="font-script text-2xl leading-[1.5] font-normal tracking-normal text-primary">
                      {cat.title}
                    </h3>
                    {cat.subtitle && (
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        {cat.subtitle}
                      </p>
                    )}
                    <div className="mt-3 h-px w-full bg-primary/30" />
                  </header>
                  <ul className="space-y-5">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <div className="flex items-baseline">
                          <h4 className="text-lg font-semibold text-foreground">{item.name}</h4>
                          <span className="menu-dots" aria-hidden="true" />
                          <span className="tabular-nums text-foreground">€ {item.price}</span>
                        </div>
                        {item.description && (
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Goed om te weten + bestellen */}
      <section className="container-prose grid gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            goed om te weten
          </p>
          <h2 className="mt-3 font-script text-[1.9rem] leading-[1.5] font-normal tracking-normal text-primary">
            Bestellen en bezorgen
          </h2>
          <ul className="mt-6 max-w-lg space-y-3 text-foreground">
            {cateringInfo.map((punt) => (
              <li key={punt} className="flex items-start gap-3">
                <RosiRoos className="mt-1 h-5 w-auto flex-none text-[color:var(--terracotta)]" />
                {punt}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-[28px] bg-[color:var(--olive-deep)] p-8 text-[color:var(--cream)] md:p-10">
            <p className="font-script text-[1.6rem] leading-[1.5]">
              Zien we Rosí binnenkort bij jullie op kantoor?
            </p>
            <p className="mt-4 leading-relaxed">
              Stel jullie favoriete bestelling samen en neem gerust contact met ons op. Ook bij
              grotere bestellingen, allergieën of dieetwensen denken we graag met jullie mee.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={knopPrimair}>
                <WhatsAppIcoon className="h-4 w-4" />
                WhatsApp {telefoon.weergave}
              </a>
              <a
                href="mailto:info@lunchroomrosi.nl?subject=Cateringbestelling"
                className="text-sm font-semibold underline decoration-[color:var(--cream)]/60 decoration-2 underline-offset-[5px] transition-colors hover:decoration-[color:var(--cream)]"
              >
                info@lunchroomrosi.nl
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function WhatsAppIcoon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.07.9.9-2.98-.2-.31a8.2 8.2 0 1 1 6.87 3.72Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.47c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.47-.29Z" />
    </svg>
  );
}
