import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { menu, type MenuItem } from "@/data/menu";
import { paginaHead, absoluteUrl } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { WaveDivider } from "@/components/site/WaveDivider";
import { RosiRoos } from "@/components/site/RosiMark";

export const Route = createFileRoute("/menu")({
  head: () => {
    const h = paginaHead({
      title: "Menukaart | Lunchroom Rosí Monster",
      description:
        "De menukaart van Lunchroom Rosí in Monster met prijzen, ontbijt, lunch classics en signatures, bites, Little Rosí, koffie, fris, wijn en cocktails.",
      pad: "/menu/",
      ogDescription: "De volledige menukaart van Lunchroom Rosí in Monster.",
    });
    return { ...h, scripts: [{ type: "application/ld+json", children: menuSchema() }] };
  },
  component: MenuPage,
});

/* Welke categorie staat open? Uit de URL-hash, anders de eerste. */
function useActieveCategorie() {
  const [id, setId] = useState(menu[0].id);
  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    if (menu.some((c) => c.id === h)) setId(h);
  }, []);
  const kies = (nieuw: string) => {
    setId(nieuw);
    window.history.replaceState(null, "", `#${nieuw}`);
  };
  return [id, kies] as const;
}

/* Prijs als getal voor schema.org, alleen als de prijs met een bedrag begint ("4,50") */
function prijsAlsGetal(prijs: string) {
  const m = /^(\d+),(\d{2})$/.exec(prijs.trim());
  return m ? `${m[1]}.${m[2]}` : null;
}

function menuItemNode(item: MenuItem) {
  const prijs = prijsAlsGetal(item.price);
  return {
    "@type": "MenuItem",
    name: item.name,
    ...(item.description ? { description: item.description } : {}),
    ...(prijs ? { offers: { "@type": "Offer", price: prijs, priceCurrency: "EUR" } } : {}),
  };
}

/* Schema.org Menu op basis van dezelfde data als de pagina zelf */
function menuSchema() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Menukaart Lunchroom Rosí",
    url: absoluteUrl("/menu/"),
    inLanguage: "nl-NL",
    hasMenuSection: menu.map((cat) => ({
      "@type": "MenuSection",
      name: cat.title,
      ...(cat.groups
        ? {
            hasMenuSection: cat.groups.map((g) => ({
              "@type": "MenuSection",
              name: g.title,
              hasMenuItem: g.items.map(menuItemNode),
            })),
          }
        : { hasMenuItem: cat.items.map(menuItemNode) }),
    })),
  });
}

function MenuPage() {
  const [actief, kies] = useActieveCategorie();
  const cat = menu.find((c) => c.id === actief) ?? menu[0];

  return (
    <>
      <section className="container-prose pt-12 pb-10 text-center md:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">onze kaart</p>
        <h1 className="mt-3 font-script text-[1.9rem] leading-[1.5] font-normal tracking-normal text-primary sm:text-[2.6rem]">
          Vers, eerlijk en huisgemaakt.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Kies een onderdeel van de kaart. De kaart wisselt mee met de seizoenen; vraag gerust naar
          de specials.
        </p>
        <WaveDivider className="mx-auto mt-8 max-w-[200px]" />
      </section>

      {/* Categorie-knoppen: filter, je ziet alleen de gekozen categorie */}
      <nav aria-label="Menucategorieën" className="container-prose">
        <ul className="flex flex-wrap justify-center gap-1.5 text-[0.8rem] md:gap-2 lg:flex-nowrap">
          {menu.map((c) => {
            const isActief = c.id === cat.id;
            return (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => kies(c.id)}
                  aria-pressed={isActief}
                  className={
                    isActief
                      ? "inline-flex items-center whitespace-nowrap rounded-full border border-primary bg-primary px-3 py-1.5 font-semibold text-primary-foreground"
                      : "inline-flex items-center whitespace-nowrap rounded-full border border-border bg-card px-3 py-1.5 text-foreground transition-colors hover:border-primary hover:text-primary"
                  }
                >
                  {c.title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Alle categorieën staan in de HTML (voor Google en voor wie zonder
          JavaScript kijkt); alleen de gekozen categorie is zichtbaar */}
      {menu.map((c) => {
        const groepen = c.groups ?? [{ title: "", items: c.items }];
        return (
          <section
            key={c.id}
            id={c.id}
            hidden={c.id !== cat.id}
            className="container-prose mt-14 pb-20"
          >
            <Reveal>
              <header className="mb-8 text-center">
                <h2 className="font-script text-[1.9rem] leading-[1.5] font-normal tracking-normal text-primary">
                  {c.title}
                </h2>
                {c.subtitle && (
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {c.subtitle}
                  </p>
                )}
                <div className="mx-auto mt-4 h-px w-full max-w-xs bg-primary/30" />
              </header>
            </Reveal>

            <div className="mx-auto max-w-5xl space-y-12">
              {groepen.map((groep) => {
                const ItemKop = groep.title ? "h4" : "h3";
                return (
                  <Reveal key={groep.title || c.id}>
                    {groep.title && (
                      <h3 className="mb-5 font-script text-xl leading-[1.5] font-normal tracking-normal text-primary">
                        {groep.title}
                      </h3>
                    )}
                    <ul className="grid gap-x-16 gap-y-6 md:grid-cols-2">
                      {groep.items.map((item) => (
                        <li key={item.name}>
                          <div className="flex items-baseline">
                            <ItemKop className="text-lg font-semibold text-foreground">
                              {item.name}
                            </ItemKop>
                            <span className="menu-dots" aria-hidden="true" />
                            <span className="whitespace-nowrap text-sm tabular-nums text-foreground md:text-base">
                              {/^\d/.test(item.price) ? `€ ${item.price}` : item.price}
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
                );
              })}
              {c.notes && (
                <Reveal>
                  {/* Opmerkingen bij de categorie, als opvallend kader in de huisstijl */}
                  <div className="mx-auto max-w-2xl rounded-[22px] bg-[color:var(--olive-deep)] px-7 py-6 text-center text-[color:var(--cream)]">
                    <RosiRoos className="mx-auto mb-3 h-8 w-auto" />
                    <div className="space-y-3 text-[0.95rem] leading-relaxed">
                      {c.notes.map((n) => (
                        <p key={n}>{n}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </section>
        );
      })}

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
