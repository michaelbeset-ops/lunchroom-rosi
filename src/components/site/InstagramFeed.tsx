import { Instagram } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WaveDivider } from "@/components/site/WaveDivider";
import { RosiMedaillon } from "@/components/site/RosiMark";
import { instagramHandle, instagramPosts, instagramUrl } from "@/data/instagram";

/* Mozaïek: één grote foto als anker, kleinere tegels eromheen en de
   volg-knop als eigen tegel in het grid. De indexen verwijzen naar
   src/data/instagram.ts; kies foto's die elders op de homepage nog
   niet staan. */
const tegels = [
  instagramPosts[5], // groot: achter de bar
  instagramPosts[4], // cocktails op tafel
  instagramPosts[8], // limonade met bosbes
  instagramPosts[6], // drankje op de bank
].filter(Boolean);

export function InstagramFeed() {
  const [groot, ...klein] = tegels;

  return (
    <section className="bg-soft">
      <div className="container-prose py-20 md:py-28">
        <div className="text-center">
          <p className="font-script text-[1.9rem] leading-none text-[color:var(--terracotta)]">
            uit de zaak
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
            Elke dag iets <span className="italic text-primary">vers</span> op de plaat.
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
              className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[color:var(--olive-deep)] p-4 text-center text-[color:var(--cream)] transition-colors hover:bg-primary"
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
        width={groot ? 1600 : 800}
        height={groot ? 1600 : 800}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <span className="pointer-events-none absolute inset-0 flex items-end bg-[color:var(--olive-deep)]/0 p-4 opacity-0 transition-all duration-300 group-hover:bg-[color:var(--olive-deep)]/70 group-hover:opacity-100 group-focus-visible:bg-[color:var(--olive-deep)]/70 group-focus-visible:opacity-100">
        <span className="text-sm leading-snug text-[color:var(--cream)]">{post.caption}</span>
      </span>
    </a>
  );
}
