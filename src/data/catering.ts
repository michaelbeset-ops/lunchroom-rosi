// Cateringaanbod, overgenomen van de cateringflyer (aanlevering/).
// Prijzen in euro's, per stuk.

import type { MenuCategory } from "@/data/menu";

export const cateringIntro = [
  "Voor wie ons nog niet kent: wij zijn Rosí, een van de nieuwste horecazaken in Monster. Een gezellige plek voor ontbijt, lunch, homemade sweets, lekkere drankjes en bites.",
  "Natuurlijk snappen we heel goed dat het tijdens een drukke werkdag niet altijd lukt om gezellig bij ons langs te komen. Daarom draaien we het gewoon om: kunnen jullie niet naar Rosí komen? Dan brengen wij Rosí naar jullie!",
  "Bestel jouw favoriete broodjes, huisgemaakte taartjes, verse soepjes en borrelbites eenvoudig bij ons. Perfect voor een gezamenlijke lunch op kantoor, een vergadering, verjaardag, teammoment of gezellige vrijdagmiddagborrel. Jullie hoeven alleen maar te kiezen waar je zin in hebt. Wij zorgen ervoor dat alles vers wordt klaargemaakt, mooi wordt verzorgd en bij jullie wordt bezorgd.",
];

export const catering: MenuCategory[] = [
  {
    id: "sandwiches",
    title: "Sandwiches",
    subtitle: "Alle broodjes op een schiacciata broodje",
    items: [
      {
        name: "Carpaccio",
        description:
          "Carpaccio, olijventapenade, rucola, broad beans, rode ui, Parmezaanse kaas, truffelmayo en zongedroogde tomaat",
        price: "12,95",
      },
      {
        name: "Tonijnsalade",
        description: "Huisgemaakte tonijnsalade, komkommer, tomaat en romeinse sla",
        price: "9,95",
      },
      {
        name: "Filet american",
        description:
          "Filet american, broad beans, gekookt ei, rode ui, Parmezaanse kaas en truffelmayo",
        price: "11,95",
      },
      {
        name: "Eiersalade",
        description: "Huisgemaakte eiersalade, tomaat, bosui en romeinse sla",
        price: "9,95",
      },
      {
        name: "Brie",
        description: "Brie, serranoham, vijgencompote, walnoten en rucola",
        price: "10,50",
      },
      {
        name: "Burrata",
        description: "Burrata, pesto, mortadella, pistache en balsamico",
        price: "11,95",
      },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    items: [
      {
        name: "Courgette",
        description: "Courgette, broccoli, geitenkaas en crispy chili oil",
        price: "5,50",
      },
      {
        name: "Mosterd",
        description: "Prei, mosterd, crème fraîche en peterselie",
        price: "5,50",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      {
        name: "Iced matcha",
        description:
          "Ook verkrijgbaar met kokosmelk of havermelk (+0,50), of met een lekker siroopje (+0,50)",
        price: "6,50",
      },
      { name: "Smoothie", description: "Berry bliss of golden glow", price: "6,00" },
      {
        name: "Iced latte",
        description: "Salted caramel, pistachio, tiramisu of witte choco",
        price: "6,20",
      },
      {
        name: "Lemonade",
        description: "Passievrucht, perzik, lavendel, groene appel of Rosí",
        price: "5,50",
      },
    ],
  },
  {
    id: "sweets",
    title: "Sweets box",
    subtitle: "Stel je eigen sweetsbox samen voor vergaderingen of meetings",
    items: [
      { name: "Appeltaart", description: "", price: "5,00" },
      { name: "Kwarktaart", description: "", price: "4,50" },
      {
        name: "Koek",
        description: "Citroen, witte chocolade met framboos, matcha, oreo of nutella",
        price: "4,00",
      },
      { name: "Arretjescake", description: "", price: "4,00" },
      { name: "Rocky road", description: "", price: "4,00" },
    ],
  },
  {
    id: "borrel",
    title: "Borrelbox",
    subtitle: "Stel je eigen borrelbox samen voor bij de vrijmibo",
    items: [
      { name: "Bitterballen", description: "6 stuks, mosterd", price: "7,00" },
      { name: "Chicken tenders", description: "6 stuks, sriracha mayo", price: "9,00" },
      { name: "Gyoza's", description: "6 stuks, sriracha mayo", price: "9,00" },
      { name: "Truffel kroketjes", description: "6 stuks, truffel mayo", price: "10,00" },
      {
        name: "Burrata met tomaat",
        description: "Burrata, snacktomaten, balsamico en basilicum",
        price: "9,00",
      },
      { name: "Olives", description: "", price: "3,00" },
      { name: "Vega bitterballen", description: "6 stuks, mosterd", price: "7,00" },
      { name: "Bread & dips", description: "Flatbread met dips", price: "6,00" },
    ],
  },
];

export const cateringInfo = [
  "24 uur van tevoren bestellen; de sweets box 48 uur van tevoren.",
  "Minimaal bestelbedrag van €30 voor bezorging in Monster.",
  "Minimaal bestelbedrag van €60 voor bezorging in Poeldijk, 's-Gravenzande of Naaldwijk.",
  "Bestellen via mail of WhatsApp.",
  "Alles wordt per stuk of per punt verkocht; bij grote hoeveelheden prijs in overleg.",
  "Maandelijkse factuurbasis mogelijk in overleg.",
  "Allergenen of dieetwensen? Vraag naar de mogelijkheden.",
];
