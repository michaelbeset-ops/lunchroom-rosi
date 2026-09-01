import { Instagram } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WaveDivider } from "@/components/site/WaveDivider";
import { instagramHandle, instagramPosts, instagramUrl } from "@/data/instagram";

export function InstagramFeed({ count = 8 }: { count?: number }) {
  const posts = instagramPosts.slice(0, count);

  return (
    <section className="bg-soft">
      <div className="container-prose py-20 md:py-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Uit de zaak</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
            Elke dag iets <span className="italic text-primary">vers</span> op de plaat.
          </h2>
          <WaveDivider className="mx-auto mt-7 max-w-[190px]" />
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.src} delay={i * 60}>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-card"
              >
                <img
                  src={post.src}
                  alt={post.alt}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 flex items-end bg-[color:var(--olive-deep)]/0 p-4 opacity-0 transition-all duration-300 group-hover:bg-[color:var(--olive-deep)]/70 group-hover:opacity-100 group-focus-visible:bg-[color:var(--olive-deep)]/70 group-focus-visible:opacity-100">
                  <span className="text-sm leading-snug text-[color:var(--cream)]">
                    {post.caption}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-[color:var(--terracotta)]"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Volg @{instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
