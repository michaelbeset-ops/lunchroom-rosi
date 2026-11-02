// Na de build: zet voor elke pagina een eigen index.html neer in dist/,
// zodat GitHub Pages /menu/, /catering/ enz. met status 200 serveert in plaats
// van via de 404-omleiding. Google wijst pagina's met een 404-status af.
//
// Elke kopie krijgt meteen de eigen title, description en canonical van die
// pagina in de HTML. Zo zien ook crawlers die geen JavaScript draaien (Bing,
// AI-crawlers) per pagina de juiste gegevens. De waarden komen uit de head()
// van de route in src/routes/, zodat er maar een bron is.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const domein = "https://lunchroomrosi.nl";
const sitemap = readFileSync(join("public", "sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>https:\/\/[^/]+\/([^<]*)<\/loc>/g)]
  .map((m) => m[1].replace(/\/$/, ""))
  .filter(Boolean);

// Pagina's die wel bestaan maar niet in de sitemap horen.
const extra = ["privacy"];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function headUitRoute(bestand) {
  if (!existsSync(bestand)) return {};
  const src = readFileSync(bestand, "utf8");
  const title = src.match(/\{\s*title:\s*"([^"]+)"\s*\}/)?.[1];
  const description = src.match(/name:\s*"description",\s*content:\s*"([^"]+)"/)?.[1];
  return { title, description };
}

function zetHead(html, { title, description, canonical }) {
  if (title) html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  if (description) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${esc(description)}" />`,
    );
  }
  const tags = `<link rel="canonical" href="${canonical}" />\n    <meta property="og:url" content="${canonical}" />\n  </head>`;
  return html.replace("</head>", tags);
}

const basis = readFileSync(join(dist, "index.html"), "utf8");

writeFileSync(
  join(dist, "index.html"),
  zetHead(basis, { ...headUitRoute(join("src", "routes", "index.tsx")), canonical: `${domein}/` }),
);

for (const route of [...routes, ...extra]) {
  mkdirSync(join(dist, route), { recursive: true });
  const head = headUitRoute(join("src", "routes", `${route}.tsx`));
  writeFileSync(
    join(dist, route, "index.html"),
    zetHead(basis, { ...head, canonical: `${domein}/${route}/` }),
  );
}
console.log(`Routes gekopieerd: ${[...routes, ...extra].join(", ")}`);
