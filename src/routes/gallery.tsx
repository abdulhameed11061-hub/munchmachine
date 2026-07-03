import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import hotelAsset from "@/assets/uploads/gallery-hotel-lobby-vending.png";
import officeAsset from "@/assets/uploads/gallery-corporate-break-area.png";
import gymAsset from "@/assets/uploads/gym-modern.png";
import studentAsset from "@/assets/uploads/student-accommodation.png";
import warehouseAsset from "@/assets/uploads/warehouse-welfare.jpg";
import constructionAsset from "@/assets/uploads/construction-welfare.png";

import smallAsset from "@/assets/uploads/small.png";
import mediumAsset from "@/assets/uploads/medium.png";
import largeAsset from "@/assets/uploads/large.png";
import coffeeAsset from "@/assets/uploads/gallery-bean-to-cup-coffee-machine.png";
import airHockeyAsset from "@/assets/uploads/gallery-air-hockey-table.jpg";
import basketballAsset from "@/assets/uploads/gallery-basketball-arcade-machine.jpg";
import footballAsset from "@/assets/uploads/gallery-football-table.png";
import boxingAsset from "@/assets/uploads/gallery-boxing-arcade-machine.png";
import racingAsset from "@/assets/uploads/gallery-racing-simulator.jpg";
import arcadeAsset from "@/assets/uploads/gallery-arcade-machine.jpg";
import grabAsset from "@/assets/uploads/gallery-prize-grab-machine.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Machine Gallery | Vending, Coffee & Entertainment | London & Essex" },
      { name: "description", content: "See our vending machines, bean-to-cup coffee machines and interactive entertainment machines installed across London and Essex hotels, offices, gyms and sites." },
      { property: "og:title", content: "Machine Gallery | Munch Machine Vending London & Essex" },
      { property: "og:description", content: "Installations and equipment from Munch Machine Vending across London & Essex." },
      { property: "og:url", content: "https://munchmachine.lovable.app/gallery" },
      { property: "og:image", content: "https://munchmachine.lovable.app/og-gallery.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://munchmachine.lovable.app/gallery" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://munchmachine.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Gallery", item: "https://munchmachine.lovable.app/gallery" },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const environments = [
    { src: hotelAsset, label: "Hotel lobby vending machine", alt: "Hotel lobby vending machine install for London and Essex hotels" },
    { src: officeAsset, label: "Corporate break area", alt: "Corporate break area vending machine for offices" },
    { src: gymAsset, label: "Boutique gym environment", alt: "Gym vending machine with protein and isotonics" },
    { src: studentAsset, label: "Student accommodation common room", alt: "Student accommodation vending machine common room" },
    { src: warehouseAsset, label: "Warehouse welfare area", alt: "Warehouse welfare vending machine setup" },
    { src: constructionAsset, label: "Construction site welfare unit", alt: "Construction site welfare vending unit" },
  ];

  const machines = [
    { src: smallAsset, label: "Small snack vending machine", alt: "Small commercial snack vending machine for London and Essex businesses" },
    { src: mediumAsset, label: "Medium combo vending machine", alt: "Medium combo vending machine with snacks and drinks" },
    { src: largeAsset, label: "Large combination vending machine", alt: "Large combination vending machine for high-traffic sites" },
    { src: coffeeAsset, label: "Fresh bean-to-cup coffee machine", alt: "Bean-to-cup coffee machine for offices" },
    { src: airHockeyAsset, label: "Commercial air hockey table", alt: "Commercial LED air hockey table" },
    { src: basketballAsset, label: "Basketball arcade machine", alt: "Basketball arcade machine cabinet" },
    { src: footballAsset, label: "Football table", alt: "Premium football table for offices and venues" },
    { src: boxingAsset, label: "Boxing arcade machine", alt: "Boxing arcade machine with punch scoring" },
    { src: racingAsset, label: "Racing simulator", alt: "Racing simulator arcade cabinet" },
    { src: arcadeAsset, label: "Arcade machine", alt: "Multi-game arcade machine cabinet" },
    { src: grabAsset, label: "Prize / grab machine", alt: "Prize grab claw machine" },
  ];

  return (
    <PageShell>
      <PageHero
        kicker="Gallery"
        title={<>Installations &amp; <span className="text-gradient">environments.</span></>}
        subtitle="A look at the kind of spaces we equip across London & Essex — and the vending, coffee and entertainment machines available for suitable commercial locations."
      />

      <section className="pb-24">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {environments.map((p, i) => (
              <figure key={i} className={`relative overflow-hidden rounded-3xl border border-border group bg-surface ${i % 5 === 0 ? "md:col-span-2 aspect-[16/10]" : "aspect-[4/5]"}`}>
                <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium">{p.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="machine-gallery" className="py-24 bg-surface/40 border-y border-border scroll-mt-28">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Equipment</span>
            <h2 className="mt-5 text-4xl md:text-5xl">Machine Gallery</h2>
            <p className="mt-4 text-muted-foreground">
              Examples of the vending, coffee and entertainment equipment available for suitable
              commercial locations. Final machine model and branding may vary depending on site
              requirements, availability and agreed setup.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {machines.map((m) => (
              <figure key={m.label} className="relative overflow-hidden rounded-2xl border border-border bg-surface aspect-[4/5] group">
                <img src={m.src} alt={m.alt} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/5 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium">{m.label}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground/80 max-w-2xl">
            Equipment images show available or representative machine styles. Exact model, size,
            branding and product range are confirmed during the free site survey.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
