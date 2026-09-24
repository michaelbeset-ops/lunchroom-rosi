import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { instagramHandle, instagramUrl, tiktokHandle, tiktokUrl } from "@/data/instagram";

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
          Volg ons online
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          De maandspecial, de data van de wine nights en wat er vandaag uit de oven komt: dat zetten
          we op Instagram. Reserveren gaat daar ook, met een berichtje.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-aperol px-7 py-3.5 text-sm font-semibold text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta-deep)]"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />@{instagramHandle}
          </a>
          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[color:var(--terracotta-deep)]"
          >
            <TikTokIcoon className="h-4 w-4" />@{tiktokHandle}
          </a>
        </div>
      </section>
      <InstagramFeed />
    </>
  );
}

/* TikTok-logo (lucide heeft er geen) */
function TikTokIcoon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1-2.59-2.59 2.59 2.59 0 0 1 3.4-2.46V9.66a5.7 5.7 0 0 0-.81-.06A5.7 5.7 0 0 0 4.18 15.3 5.7 5.7 0 0 0 9.86 21a5.7 5.7 0 0 0 5.68-5.7V9.01a7.35 7.35 0 0 0 4.28 1.37V7.3a4.3 4.3 0 0 1-3.22-1.48Z" />
    </svg>
  );
}
