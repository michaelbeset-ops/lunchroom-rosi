// Na de build: zet voor elke pagina een eigen index.html neer in dist/,
// zodat GitHub Pages /menu, /catering enz. met status 200 serveert in plaats
// van via de 404-omleiding. Google wijst pagina's met een 404-status af.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const sitemap = readFileSync(join("public", "sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>https:\/\/[^/]+\/([^<]*)<\/loc>/g)]
  .map((m) => m[1])
  .filter(Boolean);

for (const route of routes) {
  mkdirSync(join(dist, route), { recursive: true });
  copyFileSync(join(dist, "index.html"), join(dist, route, "index.html"));
}
console.log(`Routes gekopieerd: ${routes.join(", ")}`);
