import { createFileRoute } from "@tanstack/react-router";
import { ContactBlok } from "@/components/site/ContactBlok";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Rosí Monster" },
      {
        name: "description",
        content:
          "Lunchroom Rosí, Molenstraat 35 in Monster. Openingstijden, telefoonnummer en reserveren via Instagram.",
      },
      { property: "og:title", content: "Contact | Rosí" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <ContactBlok kop="h1" />;
}
