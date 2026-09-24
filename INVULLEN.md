# Nog aanleveren door Fay (INVULLEN-lijst)

De site staat, maar op deze plekken staan nog geloofwaardige voorbeelden
in plaats van echte gegevens:

1. **Menukaart en prijzen** — `src/data/menu.ts`. De hele kaart is nu een
   voorbeeld (staat ook als melding op de menupagina).
2. **Openingstijden** — bijgewerkt volgens de briefing, staan nu op één
   plek: `src/data/openingstijden.ts`.
3. **E-mailadres** — info@lunchroomrosi.nl, overal doorgevoerd.
4. **Telefoonnummer** — +31 6 33011418 staat nu bij contact en in de
   footer (`src/data/openingstijden.ts`).
5. **Adres bevestigen** — Molenstraat 35, Monster staat overal, zonder
   postcode. Postcode aanleveren voor de contactpagina en Google.
6. **Naam/verhaal checken** — het verhaal op de over-pagina noemt Fay en
   het vrouwenteam en de opening op Koningsdag. Even laten meelezen.
7. **Herofoto** — nu "Gezelligheid in Monster" uit de aanlevering, scherp.
8. **Logo** — de aangeleverde SVG's (roos in ovaal en woordmerk) zitten in
   `src/components/site/RosiMark.tsx` en de favicon.

## Uit de briefing (september), nog open

9. **Foto's** — Fay, de gerechten en de collage komen uit de aanlevering
   (map `aanlevering/`, verkleind in `src/assets/`). De Pear Matcha-foto
   komt van de Instagram-post (695px, scherp genoeg voor de site).
10. **Niet gebruikt** — "Rosí World" en "Get to know Team Rosí" (svg) zijn
    Instagram-graphics; die passen nergens op de site.
11. **Menukaart als afbeeldingen** — per categorie een 1080x1920-afbeelding
    zonder achtergrond, dan komen die op de menupagina.
12. **Maandspecial** — elke maand nieuwe tekst, foto en videolink in
    `src/data/special.ts`.
13. **Lettertype** — titels in Homemade Apple (gratis tegenhanger van Adobe
    Handwriting Ernie), de rest in Montserrat. Met een Adobe Fonts-account
    kan Ernie er zo in.
14. **Instagram-koppeling via Behold** — klaar in de code. Nog te doen:
    account maken op behold.so, Instagram koppelen, een feed van het type
    "API / JSON" aanmaken en het feed-ID plakken in `src/data/instagram.ts`
    (`beholdFeedId`). Zolang dat leeg is, staan de vaste foto's.
15. **Catering** — tekst, aanbod en prijzen overgenomen van de flyer
    (`src/data/catering.ts`). Wijzigt de flyer, dan dat bestand aanpassen.
16. **Cookiemelding** — verwijderd: de site plaatst geen cookies. Komt er
    ooit Google Analytics of een Instagram-widget met cookies, dan moet
    er weer een melding bij.
