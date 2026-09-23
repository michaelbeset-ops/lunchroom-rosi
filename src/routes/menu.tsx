import { createFileRoute, Link } from "@tanstack/react-router";
import { menu } from "@/data/menu";
import { Reveal } from "@/components/site/Reveal";
import { WaveDivider } from "@/components/site/WaveDivider";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menukaart | Rosí Monster" },
      {
        name: "description",
        content:
          "Vers belegde broodjes, soepen, salades, huisgemaakte taart en goede koffie. Bekijk de hele menukaart van Rosí in Monster.",
      },
      { property: "og:title", content: "Menukaart | Rosí" },
      { property: "og:description", content: "De volledige menukaart van Rosí in Monster." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <section className="container-prose pt-12 pb-10 md:pt-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">onze kaart</p>
        <h1 className="mt-3 font-script font-normal tracking-normal text-[1.9rem] leading-[1.5] text-primary sm:text-[2.6rem]">
          Vers, eerlijk en huisgemaakt.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          De kaart wisselt mee met de seizoenen. Vraag gerust naar de specials, die staan op het
          bord boven de bar.
        </p>
        <WaveDivider className="mt-8 mx-auto max-w-[200px]" />
      </section>

      {/* Categorie nav */}
      <nav aria-label="Menucategorieën" className="container-prose">
        <ul className="flex flex-wrap justify-center gap-2 text-sm">
          {menu.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="container-prose mt-16 grid gap-16 pb-20 md:grid-cols-2 md:gap-x-16">
        {menu.map((cat, i) => (
          <Reveal key={cat.id} delay={i * 60}>
            <article id={cat.id} className="scroll-mt-28">
              <header className="mb-6">
                <h2 className="font-script font-normal tracking-normal text-2xl leading-[1.5] text-primary">
                  {cat.title}
                </h2>
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
                      <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
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
            </article>
          </Reveal>
        ))}
      </section>

      <section className="container-prose pb-20">
        <div className="rounded-[28px] bg-[color:var(--blush)]/25 p-10 text-center">
          <h2 className="font-script font-normal tracking-normal text-2xl leading-[1.5] text-primary">
            Allergie of dieetwens?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Laat het ons weten, we doen wat we kunnen om iets lekkers voor je te maken. Vegan,
            glutenvrij of lactosevrij is bijna altijd mogelijk.
          </p>
          <a
            href="https://ig.me/m/lunchroomrosi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-colors hover:bg-[color:var(--terracotta-deep)]"
          >
            Stuur ons een berichtje
          </a>
        </div>
      </section>
    </>
  );
}
