import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { PopUpProvider } from "./Context/PopUpContext";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "icon",
    href: "/nav_logo.png",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="At Elite Shine Detailing Ltd, we specialise in professional car valeting and detailing across Bolton and Greater Manchester."
        />
        <meta
          name="keywords"
          content="mobile car detailing Manchester, car valet Manchester, interior car cleaning, exterior car wash, affordable car detailing, mobile valeting service"
        />
        <meta name="author" content="Elite Shine" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Elite Shine - Professional Car Detailing Services"
        />
        <meta
          property="og:description"
          content="At Elite Shine Detailing Ltd, we specialise in professional car valeting and detailing across Bolton and Greater Manchester."
        />
        <meta property="og:image" content="/nav_logo.png" />
        <meta property="og:url" content="https://eliteshine.co.uk" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Elite Shine - Professional Car Detailing Services"
        />
        <meta
          name="twitter:description"
          content="At Elite Shine Detailing Ltd, we specialise in professional car valeting and detailing across Bolton and Greater Manchester."
        />
        <meta name="twitter:image" content="/nav_logo.png" />

        <Meta />
        <Links />
      </head>
      <body className="bg-black">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <PopUpProvider>
      <Outlet />
    </PopUpProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
