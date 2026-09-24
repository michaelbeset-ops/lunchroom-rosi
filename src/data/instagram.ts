// Foto's van @lunchroomrosi, aangeleverd door de zaak zelf en verkleind
// opgeslagen in src/assets/instagram/.
//
// Nieuwe posts erbij? Draai lokaal `node scripts/fetch-instagram.mjs`. Dat
// script haalt de laatste openbare posts op, zet ze in src/assets/instagram/
// en schrijft dit bestand opnieuw. Zonder netwerk naar Instagram blijft de
// lijst hieronder gewoon staan.

import terrasCookies from "@/assets/instagram/terras-cookies.webp";
import barCookies from "@/assets/instagram/bar-cookies.webp";
import cocktailsTafel from "@/assets/instagram/cocktails-tafel.webp";
import limonadeBosbes from "@/assets/instagram/limonade-bosbes.webp";
import drankjeBank from "@/assets/instagram/drankje-bank.webp";
import matchaCookies from "@/assets/instagram/matcha-cookies.webp";
import cheesecakeCitroen from "@/assets/instagram/cheesecake-citroen.webp";
import achterDeBar from "@/assets/instagram/achter-de-bar.webp";
import proost from "@/assets/instagram/proost.webp";
import ontbijtLunch from "@/assets/instagram/ontbijt-lunch.webp";
import koffie from "@/assets/instagram/koffie.webp";
import koekje from "@/assets/instagram/koekje.webp";
import wijn from "@/assets/instagram/wijn.webp";

export type InstagramPost = {
  src: string;
  alt: string;
  caption: string;
  permalink: string;
};

export const instagramHandle = "lunchroomrosi";

/* Behold (behold.so): automatische Instagram-koppeling. Maak op behold.so een
   feed van het type "API / JSON", plak hier het feed-ID en de collage laadt
   de nieuwste posts. Leeg = vaste foto's hieronder. */
export const beholdFeedId = "";
export const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

/* TikTok: handle nog te bevestigen door Rosí */
export const tiktokHandle = "lunchroomrosi";
export const tiktokUrl = `https://www.tiktok.com/@${tiktokHandle}`;

export const instagramPosts: InstagramPost[] = [
  /* Aangeleverde foto's (aanlevering/), gebruikt in de collage op de homepage */
  {
    src: ontbijtLunch,
    alt: "Toast met avocado en granaatappel, met een matcha latte op tafel",
    caption: "Ontbijt en lunch, elke dag vers.",
    permalink: instagramUrl,
  },
  {
    src: koffie,
    alt: "Een cappuccino in een witte kop, vastgehouden voor een groene muur",
    caption: "Koffie van Costadoro.",
    permalink: instagramUrl,
  },
  {
    src: koekje,
    alt: "Een koekje op een geschulpt schoteltje, op de terracotta bar",
    caption: "Vers uit de oven.",
    permalink: instagramUrl,
  },
  {
    src: wijn,
    alt: "Een glas witte wijn in het zonlicht, met de schaduw van een fles",
    caption: "Wine nights.",
    permalink: instagramUrl,
  },
  {
    src: barCookies,
    alt: "Twee medewerkers achter de bar met schalen brownies, cookies en matcha cookies",
    caption: "Vers uit de oven: brownies, chocolate chip en matcha.",
    permalink: instagramUrl,
  },
  {
    src: matchaCookies,
    alt: "IJskoude matcha latte naast een schaaltje cookies",
    caption: "IJsmatcha met een cookie ernaast. Zo hoort het.",
    permalink: instagramUrl,
  },
  {
    src: cheesecakeCitroen,
    alt: "Punt citroencheesecake op een schulpbordje in de zon",
    caption: "Citroencheesecake, precies goed bij de middagzon.",
    permalink: instagramUrl,
  },
  {
    src: terrasCookies,
    alt: "Medewerker met schalen cookies op het terras onder roze parasols",
    caption: "Terras open, schalen vol. Kom maar langs.",
    permalink: instagramUrl,
  },
  {
    src: cocktailsTafel,
    alt: "Spritz en een coupe met aardbei op een houten tafel tussen bloesem",
    caption: "Borreltijd bij Rosí.",
    permalink: instagramUrl,
  },
  {
    src: achterDeBar,
    alt: "Medewerker in Rosí-shirt roert een ijskoffie achter de bar",
    caption: "Even roeren en hij kan de bar over.",
    permalink: instagramUrl,
  },
  {
    src: drankjeBank,
    alt: "Longdrinkglas met bosbessen en rozemarijn naast twee terracotta vaasjes",
    caption: "Huisgemaakte limonade met bosbes en rozemarijn.",
    permalink: instagramUrl,
  },
  {
    src: proost,
    alt: "Twee handen proosten met een spritz en een coupe voor een bloemenkast",
    caption: "Proost op de zondag.",
    permalink: instagramUrl,
  },
  {
    src: limonadeBosbes,
    alt: "Glas met ijs, bosbessen, citroen en rozemarijn op een houten tafel",
    caption: "Fris, met veel ijs.",
    permalink: instagramUrl,
  },
];
