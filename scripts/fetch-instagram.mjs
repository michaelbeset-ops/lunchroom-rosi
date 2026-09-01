#!/usr/bin/env node
/**
 * Haalt de laatste openbare posts van een Instagram-account op, zet de foto's
 * in src/assets/instagram/ en schrijft src/data/instagram.ts opnieuw.
 *
 * Gebruik:  node scripts/fetch-instagram.mjs [gebruikersnaam] [aantal]
 * Standaard: lunchroomrosi, 8 posts.
 *
 * Instagram serveert dit alleen aan niet-geblokkeerde IP's. Draai het dus
 * lokaal, niet in CI. Lukt het niet, dan blijft de bestaande data staan.
 */
import { mkdir, writeFile, readdir, unlink } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetDir = join(root, "src/assets/instagram");
const dataFile = join(root, "src/data/instagram.ts");

const username = process.argv[2] || "lunchroomrosi";
const limit = Math.min(Number(process.argv[3]) || 8, 12);

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";

async function fetchProfile() {
  const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(username)}`;
  const res = await fetch(url, {
    headers: { "User-Agent": UA, "x-ig-app-id": "936619743392459", Accept: "*/*" },
  });
  if (!res.ok)
    throw new Error(`Instagram gaf HTTP ${res.status}. Waarschijnlijk rate limit of login-muur.`);
  const json = await res.json();
  const edges = json?.data?.user?.edge_owner_to_timeline_media?.edges;
  if (!Array.isArray(edges) || edges.length === 0)
    throw new Error("Geen posts gevonden in het antwoord.");
  return edges
    .map(({ node }) => ({
      shortcode: node.shortcode,
      src: node.display_url,
      caption: node.edge_media_to_caption?.edges?.[0]?.node?.text?.trim() || "",
      isVideo: Boolean(node.is_video),
    }))
    .filter((p) => p.src && !p.isVideo)
    .slice(0, limit);
}

const oneLine = (s, max) => {
  const t = s.replace(/\s+/g, " ").trim();
  return t.length > max ? `${t.slice(0, max - 1).trimEnd()}…` : t;
};
const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

async function main() {
  const posts = await fetchProfile();

  // Eerst alles binnenhalen, pas daarna wegschrijven. Zo blijft de site heel
  // als het downloaden halverwege stukloopt.
  const entries = [];
  for (const post of posts) {
    const res = await fetch(post.src, { headers: { "User-Agent": UA } });
    if (!res.ok) {
      console.warn(`  overslaan ${post.shortcode}: HTTP ${res.status}`);
      continue;
    }
    const name = `post-${String(entries.length + 1).padStart(2, "0")}.jpg`;
    entries.push({ name, bytes: Buffer.from(await res.arrayBuffer()), ...post });
    console.log(`  ${name}  ${post.shortcode}`);
  }

  if (entries.length === 0) throw new Error("Geen enkele foto kon worden gedownload.");

  await mkdir(assetDir, { recursive: true });
  for (const f of await readdir(assetDir).catch(() => [])) {
    if (f.endsWith(".jpg")) await unlink(join(assetDir, f));
  }
  for (const e of entries) await writeFile(join(assetDir, e.name), e.bytes);

  const imports = entries
    .map((e, i) => `import img${i + 1} from "@/assets/instagram/${e.name}";`)
    .join("\n");
  const items = entries
    .map(
      (e, i) =>
        `  {\n    src: img${i + 1},\n    alt: "${esc(oneLine(e.caption, 120) || `Foto van @${username}`)}",\n    caption: "${esc(oneLine(e.caption, 140))}",\n    permalink: "https://www.instagram.com/p/${e.shortcode}/",\n  },`,
    )
    .join("\n");

  await writeFile(
    dataFile,
    `// Gegenereerd door scripts/fetch-instagram.mjs op ${new Date().toISOString().slice(0, 10)}.
// Niet met de hand aanpassen, draai het script opnieuw.
${imports}

export type InstagramPost = {
  src: string;
  alt: string;
  caption: string;
  permalink: string;
};

export const instagramHandle = "${esc(username)}";
export const instagramUrl = \`https://www.instagram.com/\${instagramHandle}/\`;

export const instagramPosts: InstagramPost[] = [
${items}
];
`,
  );
  console.log(
    `\nKlaar: ${entries.length} foto's in src/assets/instagram/, src/data/instagram.ts bijgewerkt.`,
  );
}

main().catch((err) => {
  console.error(`\nOphalen mislukt: ${err.message}`);
  console.error("De bestaande foto's en src/data/instagram.ts blijven ongewijzigd.");
  process.exit(1);
});
