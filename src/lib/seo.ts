// Eén plek voor alles wat Google per pagina nodig heeft: title, description,
// Open Graph en een absolute canonical met slash (zo serveert GitHub Pages
// de pagina's, dus zo horen ze ook in de index).

export const SITE = "https://lunchroomrosi.nl";
export const MERK = "Lunchroom Rosí";

export function absoluteUrl(pad: string) {
  const metSlash = pad.endsWith("/") ? pad : `${pad}/`;
  return `${SITE}${metSlash}`;
}

export function paginaHead({
  title,
  description,
  pad,
  ogDescription,
  noindex = false,
}: {
  title: string;
  description: string;
  pad: string;
  ogDescription?: string;
  noindex?: boolean;
}) {
  const url = absoluteUrl(pad);
  const meta = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: ogDescription ?? description },
    { property: "og:url", content: url },
  ];
  if (noindex) {
    meta.push({ name: "robots", content: "noindex" });
    return { meta, links: [] as { rel: string; href: string }[] };
  }
  return { meta, links: [{ rel: "canonical", href: url }] };
}
