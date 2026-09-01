import { Instagram } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { instagramHandle, instagramPosts, instagramUrl } from "@/data/instagram";

export function InstagramFeed({ count = 8 }: { count?: number }) {
  const posts = instagramPosts.slice(0, count);

  return (
    <section className="border-t border-border bg-background">
      <div className="px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Uit de zaak
            </p>
            <h2 className="mt-3 text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.04em] text-foreground">
              Elke dag iets
              <br />
              vers op de plaat.
            </h2>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Volg @{instagramHandle}
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-2 md:mt-14 md:grid-cols-4 md:gap-3">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.src} delay={i * 60}>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden bg-card"
              >
                <img
                  src={post.src}
                  alt={post.alt}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 flex items-end bg-foreground/0 p-4 opacity-0 transition-all duration-300 group-hover:bg-foreground/55 group-hover:opacity-100 group-focus-visible:bg-foreground/55 group-focus-visible:opacity-100">
                  <span className="text-sm leading-snug text-background">{post.caption}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
