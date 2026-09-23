# Nog aanleveren door Fay (INVULLEN-lijst)

De site staat, maar op deze plekken staan nog geloofwaardige voorbeelden
in plaats van echte gegevens:

1. **Menukaart en prijzen** — `src/data/menu.ts`. De hele kaart is nu een
   voorbeeld (staat ook als melding op de menupagina).
2. **Openingstijden** — bijgewerkt volgens de briefing, staan nu op één
   plek: `src/data/openingstijden.ts`.
3. **E-mailadres** — overal staat hallo@lunchroomrosi.nl. Bestaat dat, of
   moet er een ander adres in?
4. **Telefoonnummer** — +31 6 33011418 staat nu bij contact en in de
   footer (`src/data/openingstijden.ts`).
5. **Adres bevestigen** — Molenstraat 35, Monster staat overal, zonder
   postcode. Postcode aanleveren voor de contactpagina en Google.
6. **Naam/verhaal checken** — het verhaal op de over-pagina noemt Fay en
   het vrouwenteam en de opening op Koningsdag. Even laten meelezen.
7. **Grote sfeerfoto** — de herofoto is 850px breed en opgeschaald.
   Een origineel van 2000px+ maakt hem echt scherp.
8. **Logo** — de nieuwe roos en het woordmerk zijn als vector uit de
   briefing-PDF gehaald (`src/components/site/RosiMark.tsx`).

## Uit de briefing (september), nog open

9. **Foto's** — de foto van Fay komt nu uit de PDF (320px, wat klein).
   Graag het origineel. Ook de echte foto voor de maandspecial ontbreekt
   nog; tot die tijd staat er een matchafoto (`src/data/special.ts`).
10. **Herofoto** — twijfel of die anders moet; nog geen besluit.
11. **Menukaart als afbeeldingen** — per categorie een 1080x1920-afbeelding
    zonder achtergrond, dan komen die op de menupagina.
12. **Maandspecial** — elke maand nieuwe tekst, foto en videolink in
    `src/data/special.ts`.
13. **Lettertype** — Adobe Handwriting Ernie vervangen door het gratis
    Homemade Apple. Als er een Adobe Fonts-account is, kan Ernie er zo in.
14. **Instagram-collage** — nu vaste foto's; een automatische koppeling
    kan via een (betaalde) dienst als Behold of Elfsight.
