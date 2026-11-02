// Na de build: render elke pagina in een echte browser en bewaar de HTML in
// dist/<pad>/index.html. Zo staan title, description, canonical, JSON-LD en
// de volledige tekst (ook de menukaart) al in de HTML die GitHub Pages
// serveert, en krijgt elke pagina status 200 in plaats van de 404-omleiding.
// De app start daarna gewoon op; main.tsx ruimt de voorgerenderde head-tags
// (gemarkeerd met data-prerender) op zodat niets dubbel staat.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright-core";
import { preview } from "vite";

const dist = "dist";
const sitemap = readFileSync(join("public", "sitemap.xml"), "utf8");
const paden = [...sitemap.matchAll(/<loc>https:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);
/* Wel renderen, niet in de sitemap (noindex) */
paden.push("/privacy/");

const server = await preview({ preview: { port: 0, open: false }, logLevel: "silent" });
const adres = server.resolvedUrls.local[0].replace(/\/$/, "");

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

/* Markeer de head-tags die de app zelf zet, zodat main.tsx ze kan opruimen */
function markeerHead(html) {
  return html.replace(/<head>([\s\S]*?)<\/head>/, (_, head) => {
    const gemarkeerd = head.replace(
      /<(title|meta|link rel="canonical"|script type="application\/ld\+json")(?![^>]*data-prerender)/g,
      '<$1 data-prerender=""',
    );
    return `<head>${gemarkeerd}</head>`;
  });
}

const uitvoer = new Map();
for (const pad of paden) {
  await page.goto(adres + pad, { waitUntil: "networkidle" });
  await page.waitForSelector("h1", { timeout: 15000 });
  // Alle "Reveal"-blokken zichtbaar maken, anders staat de tekst met opacity 0 in de HTML
  await page.evaluate(() =>
    document.querySelectorAll(".fade-in-up").forEach((el) => el.classList.add("is-visible")),
  );
  const html = await page.content();
  uitvoer.set(pad, "<!doctype html>\n" + markeerHead(html.replace(/^<!doctype html>\s*/i, "")));
  console.log(`${pad.padEnd(14)} ${/<title>([^<]*)<\/title>/.exec(html)?.[1]}`);
}

await browser.close();
await new Promise((r) => server.httpServer.close(r));

/* Pas ná alle renders wegschrijven: anders serveert de previewserver een al
   voorgerenderde homepage als fallback voor de volgende pagina's */
for (const [pad, html] of uitvoer) {
  const map = pad === "/" ? dist : join(dist, pad.replace(/^\/|\/$/g, ""));
  mkdirSync(map, { recursive: true });
  writeFileSync(join(map, "index.html"), html);
}
