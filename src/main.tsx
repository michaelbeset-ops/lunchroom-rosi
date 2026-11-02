import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

/* Voorgerenderde head-tags (scripts/prerender.mjs) weghalen; de app zet ze opnieuw */
document.querySelectorAll("[data-prerender]").forEach((el) => el.remove());

const router = getRouter();

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
