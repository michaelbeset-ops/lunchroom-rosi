// Foto's van @lunchroomrosi, aangeleverd door de zaak zelf en verkleind
// opgeslagen in src/assets/instagram/.
//
// Nieuwe posts erbij? Draai lokaal `node scripts/fetch-instagram.mjs`. Dat
// script haalt de laatste openbare posts op, zet ze in src/assets/instagram/
// en schrijft dit bestand opnieuw. Zonder netwerk naar Instagram blijft de
// lijst hieronder gewoon staan.

import terrasCookies from "@/assets/instagram/terras-cookies.jpg";
import barCookies from "@/assets/instagram/bar-cookies.jpg";
import cocktailsTafel from "@/assets/instagram/cocktails-tafel.jpg";
import limonadeBosbes from "@/assets/instagram/limonade-bosbes.jpg";
import drankjeBank from "@/assets/instagram/drankje-bank.jpg";
import matchaCookies from "@/assets/instagram/matcha-cookies.jpg";
import cheesecakeCitroen from "@/assets/instagram/cheesecake-citroen.jpg";
import achterDeBar from "@/assets/instagram/achter-de-bar.jpg";
import proost from "@/assets/instagram/proost.jpg";

export type InstagramPost = {
  src: string;
  alt: string;
  caption: string;
  permalink: string;
};

export const instagramHandle = "lunchroomrosi";
export const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

export const instagramPosts: InstagramPost[] = [
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
