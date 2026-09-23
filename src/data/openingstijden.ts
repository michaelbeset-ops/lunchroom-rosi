// Openingstijden en contactgegevens op één plek; homepage en footer
// lezen allebei hieruit.

export const openingstijden = [
  ["Maandag", "Gesloten"],
  ["Dinsdag t/m donderdag", "09:00 – 17:00"],
  ["Vrijdag & zaterdag", "09:00 – 19:00"],
  ["Zondag", "10:00 – 16:00"],
] as const;

export const telefoon = {
  weergave: "+31 6 33011418",
  link: "tel:+31633011418",
};
