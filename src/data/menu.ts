// De menukaart, in dezelfde volgorde als de kaart zelf, overgenomen van "Lunchroom Rosí - menukaart binnenkant,
// editie 1" (aanlevering/). Prijzen in euro's.

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  /* Tussenkopje boven een groepje gerechten (zoals "On toast" op de kaart) */
  groups?: { title: string; items: MenuItem[] }[];
  items: MenuItem[];
  /* Losse opmerkingen onderaan de categorie */
  notes?: string[];
};

export const menu: MenuCategory[] = [
  {
    id: "koffie",
    title: "Coffee and hot drinks",
    subtitle: "Hot",
    items: [
      { name: "Espresso", description: "", price: "enkel 3,25 / dubbel 4,10" },
      { name: "Koffie", description: "", price: "3,25" },
      { name: "Cappuccino", description: "", price: "3,90" },
      { name: "Latte macchiato", description: "", price: "4,50" },
      { name: "Cortado", description: "", price: "4,80" },
      { name: "Flat white", description: "", price: "4,80" },
      { name: "Koffie verkeerd", description: "", price: "4,00" },
      { name: "Americano", description: "", price: "3,25" },
      { name: "Warme choco", description: "Met echte chocolade en slagroom", price: "5,20" },
      {
        name: "Chai latte",
        description: "Zacht, romig en kruidig met een warme, cozy smaak. Dirty + 0,60",
        price: "4,90",
      },
      {
        name: "Pumpkin spice latte",
        description: "Zoet, kruidig en heerlijk warm voor een echte herfstvibe",
        price: "5,50",
      },
      {
        name: "Toasted marshmallow latte",
        description: "Romig en zoet met een geroosterde marshmallow bovenop",
        price: "5,50",
      },
      {
        name: "Apple pie latte",
        description: "Warm, zoet en vertrouwd met een heerlijk homemade gevoel",
        price: "5,50",
      },
      {
        name: "Standaard thee",
        description:
          "Wij hebben diverse theesoorten in ons assortiment; vraag naar onze theesmaken",
        price: "3,50",
      },
      {
        name: "Matcha latte",
        description:
          "Wij werken met Ceremonial Grade matcha, want als matcha-liefhebbers weten wij wat het verschil maakt",
        price: "6,00",
      },
      {
        name: "Verse thee",
        description: "Verse gember, verse munt, verse sinaasappel-kaneel of verse winterthee peer",
        price: "4,20",
      },
    ],
    notes: [
      "Maak je koffie helemaal naar jouw smaak, voeg een MONIN-siroop naar keuze toe voor 0,50 extra. Liever plantaardige melk? Kies dan voor haver-, kokos- of amandelmelk voor 0,50 extra.",
      "Een stukje gebak bij je koffie, of toch liever een koekje? Dat kan! Vraag een medewerkster naar ons assortiment.",
    ],
  },
  {
    id: "fris",
    title: "Drinks and juices",
    subtitle: "Cold",
    items: [
      {
        name: "Frisdranken",
        description: "Vraag een medewerkster naar ons assortiment",
        price: "vanaf 3,50",
      },
      {
        name: "Kids limo",
        description: "Little sips, big smiles! Voor de kleintjes fris en fruitig",
        price: "glas 2,00 / 1L 6,00",
      },
      {
        name: "Smoothie golden glow",
        description:
          "Golden hour, maar dan in een glas. Mango, ananas en sinaasappel voor de perfecte tropical mix",
        price: "6,00",
      },
      {
        name: "Smoothie berry bliss",
        description:
          "Berry good, berry bliss. Aardbei, banaan en appel voor een fruitige, creamy mix",
        price: "6,00",
      },
      {
        name: "Jus d'orange",
        description:
          "No fancy stuff, just the good stuff. Versgeperste sinaasappels, straight into your glass",
        price: "4,25",
      },
      {
        name: "Smoothie green boost",
        description:
          "Greens never tasted this good. Spinazie, banaan en yoghurt voor een frisse, creamy mix",
        price: "6,00",
      },
      {
        name: "Iced coffee",
        description: "Caramel zeezout, pistache, toasted marshmallow, tiramisu of Biscoff",
        price: "5,70",
      },
      {
        name: "Homemade lemonades",
        description: "Passievrucht, perzik, groene appel, lavendel of rozenbloesem",
        price: "5,50",
      },
      {
        name: "Iced matcha",
        description: "Vanille, witte chocolade, mango, aardbei of peer",
        price: "6,00",
      },
    ],
    notes: ["IJskoffie & matcha met MONIN-siroop + 0,50. Liever plantaardige melk? + 0,50."],
  },
  {
    id: "ontbijt",
    title: "Breakfast",
    subtitle: "Goodmorning",
    items: [],
    groups: [
      {
        title: "Yoghurt bowls",
        items: [
          {
            name: "Crunchy berry bowl",
            description:
              "Fruity, crunchy & chocolatey. Griekse yoghurt met huisgemaakte granola, chiazaad, warme bosvruchten en pure chocolade (tot 12.00u)",
            price: "9,50",
          },
          {
            name: "Peanut butter & banana bowl",
            description:
              "Creamy, crunchy & a little sweet. Griekse yoghurt met huisgemaakte granola, gebakken banaan, kaneel, 100% pindakaas en pecannoten (tot 12.00u)",
            price: "9,90",
          },
        ],
      },
      {
        title: "On toast",
        items: [
          {
            name: "Rosí eggs",
            description:
              "Our signature breakfast. Twee gepocheerde eieren met frisse yoghurtdressing, crispy chili oil, dille, peterselie en munt. Geserveerd met zuurdesem",
            price: "13,50",
          },
          {
            name: "Eggs Benedict",
            description:
              "A brunch favourite. Avocadospread, gerookte zalm, gepocheerd ei, rode ui, ijsbergsla, hollandaisesaus en green spice crumble. Geserveerd op brioche",
            price: "16,90",
          },
          {
            name: "Breakfast platter",
            description:
              "A little bit of everything (tot 12.00u), mini yoghurt bowl met granola en fruit, mini Rosí eggs en a little avocado toast",
            price: "18,50 p.p., vanaf 2 personen",
          },
        ],
      },
    ],
  },
  {
    id: "lunch-classics",
    title: "All-time favourites",
    subtitle: "Lunch classics",
    items: [
      {
        name: "Carpaccio club",
        description:
          "A Rosí classic. Carpaccio met olijventapenade, truffelmayo, Parmezaanse kaas, rucola, rode ui, zongedroogde tomaat en broad beans. Geserveerd op zuurdesem. Ook vega",
        price: "16,00",
      },
      {
        name: "Avo smash",
        description:
          "Fresh, creamy & colourful. Avocadospread met feta, cherrytomaatjes, balsamico, granaatappelpitjes en munt. Geserveerd op zuurdesem",
        price: "13,50",
      },
      {
        name: "Tuna melt",
        description:
          "Warm, cheesy & comforting. Tonijnsalade met rode ui, augurk en gesmolten kaas. Geserveerd op zuurdesem",
        price: "14,00",
      },
      {
        name: "Ham & cheese toastie",
        description:
          "Simple, crispy & cheesy. Ham, gesmolten kaas en ketchup. Geserveerd op zuurdesem",
        price: "6,50",
      },
      {
        name: "Croquette bun",
        description:
          "A Dutch classic. Echte Hollandse Holtkamp kroketten op brood met rode ui en rucola. Geserveerd met mosterd. Ook vega",
        price: "1 st. 8,00 / 2 st. 14,00",
      },
    ],
    notes: [
      "Onze classics zijn de vertrouwde favorieten die je op een menukaart verwacht, maar natuurlijk allemaal met een echte Rosí-twist. Weet je niet wat je moet kiezen? De persoonlijke aanrader van Fay is de Smokey chicken.",
    ],
  },
  {
    id: "lunch-signatures",
    title: "Our favourites",
    subtitle: "Lunch signatures",
    items: [
      {
        name: "Hot brie & fig",
        description:
          "Sweet, salty & cheesy. Warme brie, vijgencompote, serranoham, rucola en walnoten. Geserveerd op zuurdesem",
        price: "14,00",
      },
      {
        name: "Smokey chicken",
        description:
          "Smokey, saucy & full of flavour. Coleslaw, pulled chicken, BBQ-saus, bosui en broad beans. Geserveerd op schiacciata",
        price: "15,50",
      },
      {
        name: "Burrata & mortadella",
        description:
          "Italian goodness. Pesto, mortadella, burrata, tomaatjes, pistachenootjes, rucola en balsamico. Geserveerd op schiacciata",
        price: "15,00",
      },
      {
        name: "Pinsa burrata & serrano",
        description:
          "Crispy, creamy & Italian. Pesto, burrata, serranoham, rucola, tomaatjes en balsamico. Geserveerd op pinsa",
        price: "15,50",
      },
      {
        name: "Pinsa salmon",
        description:
          "Fresh, creamy & crispy. Roomkaas, gerookte zalm, dille, rode ui en kappertjes. Geserveerd op pinsa",
        price: "16,50",
      },
      {
        name: "Caesar salad",
        description:
          "The classic Caesar. IJsbergsla met komkommer, croutons, ansjovis, Caesardressing, Parmezaanse kaas, stukjes chicken tender en een gepocheerd ei. Geen zin in brood? Geniet van onze heerlijke salade!",
        price: "17,50",
      },
    ],
  },
  {
    id: "borrel",
    title: "Alcoholic drinks",
    subtitle: "Just one more",
    items: [],
    groups: [
      {
        title: "Wijn",
        items: [
          { name: "Preciso Grillo", description: "Witte wijn", price: "glas 5,75" },
          { name: "Preciso Pinot Grigio", description: "Rosé wijn", price: "glas 5,75" },
          { name: "Preciso Nero d'Avola", description: "Rode wijn", price: "glas 5,75" },
          {
            name: "Impío Brut",
            description: "Iets te vieren? Cheers to that! Bubbels",
            price: "glas 6,75 / fles 32,50",
          },
        ],
      },
      {
        title: "Cocktails",
        items: [
          { name: "Amaretto sour", description: "", price: "13,00" },
          { name: "Espresso martini", description: "", price: "14,00" },
          { name: "Aperol spritz", description: "", price: "9,00" },
          { name: "Rode sangria met Licor 43", description: "", price: "glas 8,00 / 1L 32,00" },
          { name: "Apple pie Licor 43", description: "", price: "13,00" },
          { name: "Gin cinnamon & orange", description: "", price: "13,50" },
        ],
      },
      {
        title: "Beers",
        items: [
          { name: "Hertog Jan pils (tap)", description: "", price: "3,90" },
          { name: "Leffe blond (tap)", description: "", price: "5,50" },
          { name: "Lowlander wit", description: "", price: "6,50" },
          { name: "Tripel Karmeliet", description: "", price: "6,50" },
          { name: "Corona", description: "", price: "5,00" },
        ],
      },
    ],
    notes: ["Alle biertjes ook verkrijgbaar 0.0."],
  },
  {
    id: "bites",
    title: "Made for sharing",
    subtitle: "Bites",
    items: [
      {
        name: "Truffle fries",
        description:
          "Definitely not just fries. Krokante frietjes met truffelmayo, Parmezaanse kaas en bosui",
        price: "6,50",
      },
      {
        name: "Truffle croquettes",
        description:
          "Crispy bites with lots of truffle. Truffelkroketjes met truffelmayo en Parmezaanse kaas",
        price: "6 st. 13,00",
      },
      {
        name: "Olives",
        description: "Salty & perfect with a drink. Ansjovisolijven",
        price: "4,00",
      },
      {
        name: "Kaastengels",
        description: "Crispy, cheesy & always good. Kaastengels met chilisaus",
        price: "8 st. 10,50",
      },
      {
        name: "Bread & dips",
        description: "Perfect to start with. Warm flatbread met aioli en olijventapenade",
        price: "7,50",
      },
      {
        name: "Bitterballen",
        description: "A Dutch favourite. Krokante bitterballen met mosterd",
        price: "6 st. 8,90 / 12 st. 15,90",
      },
      {
        name: "Baked camembert",
        description:
          "Hot & made for dipping. Warme camembert uit de oven met rood fruit, honing en rozemarijn. Geserveerd met flatbread",
        price: "15,50",
      },
      {
        name: "Loaded nachos",
        description:
          "Made for sharing. Nacho's met gesmolten cheddar, pulled chicken, salsa, rode ui, jalapeño, paprika, tomaat, guacamole en crème fraîche",
        price: "14,50",
      },
      {
        name: "Chicken tenders",
        description: "Crispy with a little kick. Krokante chicken tenders met spicy sriracha mayo",
        price: "6 st. 13,00",
      },
      {
        name: "Crispy gyoza",
        description: "Crispy, spicy & savoury. Krokante gyoza's met sriracha en sojasaus",
        price: "6 st. 11,50",
      },
    ],
    notes: [
      "Voor de borrelaar die wel van iets anders houdt, onze favorieten hebben een Aziatisch randje en zijn allesbehalve saai.",
    ],
  },
  {
    id: "little-rosi",
    title: "For the little ones",
    subtitle: "Little Rosí",
    items: [
      {
        name: "Mini pancakes",
        description:
          "Little bites of happiness. Warme poffertjes met vers fruit, poedersuiker en slagroom",
        price: "7,50",
      },
      {
        name: "Mini croissant duo",
        description:
          "Two little favourites. Een mini kaascroissantje en een mini croissantje met jam. Geserveerd met vers fruit",
        price: "8,50",
      },
      {
        name: "Yoghurt bowl",
        description: "Fruity & creamy. Griekse yoghurt met honing en vers fruit",
        price: "6,50",
      },
      {
        name: "Kids toastie",
        description:
          "A little classic. Casinobrood met ham en gesmolten kaas. Geserveerd met ketchup",
        price: "5,50",
      },
      {
        name: "100% peanutbutter toast",
        description: "Simple & yummy. 100% pindakaas en plakjes banaan. Geserveerd op zuurdesem",
        price: "5,00",
      },
      {
        name: "Nutella toast",
        description: "Something sweet. Nutella en vers fruit. Geserveerd op zuurdesem",
        price: "5,00",
      },
      {
        name: "Fruit cup",
        description: "Een bakje met verschillende soorten vers fruit",
        price: "5,00",
      },
      {
        name: "Veggie cup",
        description: "Een bakje met verschillende soorten verse groente",
        price: "5,00",
      },
    ],
  },
];
