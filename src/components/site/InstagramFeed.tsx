import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WaveDivider } from "@/components/site/WaveDivider";
import { RosiMedaillon } from "@/components/site/RosiMark";
import {
  beholdFeedId,
  instagramHandle,
  instagramPosts,
  instagramUrl,
  type InstagramPost,
} from "@/data/instagram";

/* Mozaïek: één grote foto als anker, kleinere tegels eromheen en de
   volg-knop als eigen tegel in het grid. De indexen verwijzen naar
   src/data/instagram.ts; kies foto's die elders op de homepage nog
   niet staan. */
const vasteTegels = [
  instagramPosts[0], // groot: ontbijt en lunch
  instagramPosts[1], // koffie
  instagramPosts[2], // koekje
  instagramPosts[3], // wijn
].filter(Boolean);

/* Wat Behold teruggeeft (alleen de velden die we gebruiken) */
type BeholdPost = {
  id: string;
  permalink: string;
  mediaType?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  caption?: string;
  sizes?: Record<string, { mediaUrl?: string } | undefined>;
};

/* Haalt de laatste posts op via Behold. Zonder feed-ID of bij een fout
   blijven de vaste foto's staan. */
function useBeholdPosts(): InstagramPost[] | null {
  const [posts, setPosts] = useState<InstagramPost[] | null>(null);

  useEffect(() => {
    if (!beholdFeedId) return;
    const ctrl = new AbortController();
    fetch(`https://feeds.behold.so/${beholdFeedId}`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: { posts?: BeholdPost[] } | BeholdPost[]) => {
        const lijst = Array.isArray(data) ? data : (data.posts ?? []);
        const nieuw = lijst
          .map((p) => ({
            src:
              p.sizes?.medium?.mediaUrl ??
              (p.mediaType === "VIDEO" ? p.thumbnailUrl : p.mediaUrl) ??
              p.thumbnailUrl ??
              "",
            alt: p.caption ? p.caption.slice(0, 120) : "Instagram-foto van Rosí",
            caption: p.caption ? p.caption.split("\n")[0].slice(0, 120) : "",
            permalink: p.permalink || instagramUrl,
          }))
          .filter((p) => p.src)
          .slice(0, 4);
        if (nieuw.length >= 4) setPosts(nieuw);
      })
      .catch(() => {
        /* dan blijven de vaste foto's staan */
      });
    return () => ctrl.abort();
  }, []);

  return posts;
}

export function InstagramFeed() {
  const live = useBeholdPosts();
  const [groot, ...klein] = live ?? vasteTegels;

  return (
    <section className="bg-background">
      <div className="container-prose py-20 md:py-28">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            uit de zaak
          </p>
          <h2 className="mt-3 font-script font-normal tracking-normal text-[1.9rem] leading-[1.5] text-primary sm:text-[2.6rem]">
            Elke dag iets vers op je bord.
          </h2>
          <WaveDivider className="mx-auto mt-7 max-w-[190px]" />
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {groot && (
            <Reveal as="li" className="col-span-2 row-span-2 aspect-square">
              <FeedTegel post={groot} groot />
            </Reveal>
          )}
          {klein.map((post, i) => (
            <Reveal as="li" key={post.src} delay={(i + 1) * 70} className="aspect-square">
              <FeedTegel post={post} />
            </Reveal>
          ))}
          <Reveal as="li" delay={320} className="aspect-square">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[color:var(--olive-deep)] p-4 text-center text-[color:var(--cream)] transition-colors hover:bg-[color:var(--terracotta)]"
            >
              <RosiMedaillon className="w-20 sm:w-24" />
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Volg @{instagramHandle}
              </span>
            </a>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}

function FeedTegel({
  post,
  groot = false,
}: {
  post: (typeof instagramPosts)[number];
  groot?: boolean;
}) {
  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full w-full overflow-hidden rounded-2xl bg-card"
    >
      <img
        src={post.src}
        alt={post.alt}
        loading="lazy"
        decoding="async"
        width={groot ? 1600 : 800}
        height={groot ? 1600 : 800}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
    </a>
  );
}
