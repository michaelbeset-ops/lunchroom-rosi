import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { instagramHandle, instagramUrl } from "@/data/instagram";

export const Route = createFileRoute("/socials")({
  head: () => ({
    meta: [
      { title: "Socials | Rosí Monster" },
      {
        name: "description",
        content:
          "Volg Lunchroom Rosí op Instagram voor de maandspecial, wine nights en wat er vandaag uit de oven komt.",
      },
      { property: "og:title", content: "Socials | Rosí" },
      { property: "og:url", content: "/socials" },
    ],
    links: [{ rel: "canonical", href: "/socials" }],
  }),
  component: SocialsPage,
});

function SocialsPage() {
  return (
    <>
      <section className="container-prose pt-12 text-center md:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">socials</p>
        <h1 className="mt-3 font-script text-[1.9rem] leading-[1.5] font-normal tracking-normal text-primary sm:text-[2.6rem]">
          Volg ons op Instagram
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          De maandspecial, de data van de wine nights en wat er vandaag uit de oven komt: dat zetten
          we op Instagram. Reserveren gaat daar ook, met een berichtje.
        </p>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-aperol px-7 py-3.5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta-deep)]"
        >
          <Instagram className="h-4 w-4" aria-hidden="true" />@{instagramHandle}
        </a>
      </section>
      <InstagramFeed />
    </>
  );
}
