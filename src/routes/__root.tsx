import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
} from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { telefoon } from "@/data/openingstijden";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-script font-normal tracking-normal text-6xl text-primary">404</h1>
        <h2 className="mt-4 font-script font-normal tracking-normal text-2xl text-primary">
          Hier is niets te vinden
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Deze pagina bestaat niet (meer). Loop gerust terug naar de voordeur.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-[color:var(--terracotta-deep)] transition-colors"
        >
          Terug naar home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-script font-normal tracking-normal text-2xl text-primary">
          Oeps, dat ging niet helemaal goed
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Probeer het nog eens of ga terug naar de homepagina.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-[color:var(--terracotta-deep)] transition-colors"
          >
            Probeer opnieuw
          </button>
          <a
            href="/"
            className="rounded-full border border-input bg-card px-5 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
          >
            Naar home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Rosí | Verse koffie & lunch in Monster" },
      {
        name: "description",
        content:
          "Rosí in het hart van Monster. Verse koffie, huisgemaakte lunch en taart, en een warm welkom.",
      },
      { name: "theme-color", content: "#777758" },
      { property: "og:title", content: "Rosí | Monster" },
      {
        property: "og:description",
        content: "Een knus hoekje in Monster met verse koffie, lunch en huisgemaakt gebak.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://michaelbeset-ops.github.io/lunchroom-rosi/og.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:site_name", content: "Rosí" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Lunchroom Rosí",
          url: "https://michaelbeset-ops.github.io/lunchroom-rosi/",
          image: "https://michaelbeset-ops.github.io/lunchroom-rosi/og.jpg",
          telephone: telefoon.link.replace("tel:", ""),
          email: "info@lunchroomrosi.nl",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Molenstraat 35",
            addressLocality: "Monster",
            addressCountry: "NL",
          },
          sameAs: ["https://www.instagram.com/lunchroomrosi/"],
          /* Openingstijden voor Google (zelfde bron als de site) */
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
              opens: "09:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Friday", "Saturday"],
              opens: "09:00",
              closes: "19:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "10:00",
              closes: "16:00",
            },
          ],
          servesCuisine: ["Lunch", "Koffie", "Gebak"],
          priceRange: "€€",
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
