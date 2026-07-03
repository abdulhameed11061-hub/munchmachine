import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-primary">Error 404</p>
        <h1 className="mt-4 text-6xl font-display font-extrabold">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-primary">Return home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-display font-extrabold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#111111" },
      { name: "format-detection", content: "telephone=no" },
      { title: "Munch Machine Vending Ltd | Vending & Coffee Machines London & Essex" },
      { name: "description", content: "Commercial vending machines, bean-to-cup coffee machines and interactive entertainment machines supplied, installed and fully managed across London and Essex. No upfront cost for qualifying businesses." },
      { name: "author", content: "Munch Machine Vending Ltd" },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:site_name", content: "Munch Machine Vending Ltd" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://munchmachine.lovable.app/#organization",
              name: "Munch Machine Vending Ltd",
              url: "https://munchmachine.lovable.app",
              email: "munchmachinevending.ltd@yahoo.com",
              telephone: "+44 7944 947419",
              areaServed: [
                { "@type": "City", name: "London" },
                { "@type": "AdministrativeArea", name: "Essex" },
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://munchmachine.lovable.app/#website",
              url: "https://munchmachine.lovable.app",
              name: "Munch Machine Vending Ltd",
              publisher: { "@id": "https://munchmachine.lovable.app/#organization" },
              inLanguage: "en-GB",
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://munchmachine.lovable.app/#business",
              name: "Munch Machine Vending Ltd",
              url: "https://munchmachine.lovable.app",
              description: "Commercial vending machine, bean-to-cup coffee machine and interactive entertainment machine supply, installation and management across London and Essex.",
              telephone: "+44 7944 947419",
              email: "munchmachinevending.ltd@yahoo.com",
              areaServed: [
                { "@type": "City", name: "London" },
                { "@type": "AdministrativeArea", name: "Essex" },
              ],
              priceRange: "££",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44 7944 947419",
                email: "munchmachinevending.ltd@yahoo.com",
                contactType: "sales",
                areaServed: "GB",
                availableLanguage: ["English"],
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "16:00" },
              ],
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Snack vending machine supply, installation and management, London & Essex" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drinks vending machine supply, installation and management, London & Essex" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bean-to-cup coffee machine supply and servicing, London & Essex" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interactive entertainment machine supply and servicing, London & Essex" } },
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
