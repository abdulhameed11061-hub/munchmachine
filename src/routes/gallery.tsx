import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import hotelAsset from "@/assets/uploads/gallery-hotel-lobby-vending.png.asset.json";
import officeAsset from "@/assets/uploads/gallery-corporate-break-area.png.asset.json";
import gymAsset from "@/assets/uploads/gym-modern.png.asset.json";
import studentAsset from "@/assets/uploads/student-accommodation.png.asset.json";
import warehouseAsset from "@/assets/uploads/warehouse-welfare.jpg.asset.json";
import constructionAsset from "@/assets/uploads/construction-welfare.png.asset.json";

import smallAsset from "@/assets/uploads/small.png.asset.json";
import mediumAsset from "@/assets/uploads/medium.png.asset.json";
import largeAsset from "@/assets/uploads/large.png.asset.json";
import coffeeAsset from "@/assets/uploads/gallery-bean-to-cup-coffee-machine.png.asset.json";
import airHockeyAsset from "@/assets/uploads/gallery-air-hockey-table.jpg.asset.json";
import basketballAsset from "@/assets/uploads/gallery-basketball-arcade-machine.jpg.asset.json";
import footballAsset from "@/assets/uploads/gallery-football-table.png.asset.json";
import boxingAsset from "@/assets/uploads/gallery-boxing-arcade-machine.png.asset.json";
import racingAsset from "@/assets/uploads/gallery-racing-simulator.jpg.asset.json";
import arcadeAsset from "@/assets/uploads/gallery-arcade-machine.jpg.asset.json";
import grabAsset from "@/assets/uploads/gallery-prize-grab-machine.jpg.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Munch Machine Vending" },
      { name: "description", content: "Installations, environments and equipment from Munch Machine Vending — vending, coffee and entertainment machines across London and Essex." },
      { property: "og:title", content: "Gallery | Munch Machine Vending" },
      { property: "og:description", content: "A look at our installations, environments and available equipment." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Page,
});

function Page() {
  const environments = [
    { src: hotelAsset.url, label: "Hotel lobby vending machine", alt: "Hotel lobby vending machine install for London and Essex hotels" },
    { src: officeAsset.url, label: "Corporate break area", alt: "Corporate break area vending machine for offices" },
    { src: gymAsset.url, label: "Boutique gym environment", alt: "Gym vending machine with protein and isotonics" },
    { src: studentAsset.url, label: "Student accommodation common room", alt: "Student accommodation vending machine common room" },
    { src: warehouseAsset.url, label: "Warehouse welfare area", alt: "Warehouse welfare vending machine setup" },
    { src: constructionAsset.url, label: "Construction site welfare unit", alt: "Construction site welfare vending unit" },
  ];

  const machines = [
    { src: smallAsset.url, label: "Small snack vending machine", alt: "Small commercial snack vending machine for London and Essex businesses" },
    { src: mediumAsset.url, label: "Medium combo vending machine", alt: "Medium combo vending machine with snacks and drinks" },
    { src: largeAsset.url, label: "Large combination vending machine", alt: "Large combination vending machine for high-traffic sites" },
    { src: coffeeAsset.url, label: "Fresh bean-to-cup coffee machine", alt: "Bean-to-cup coffee machine for offices" },
    { src: airHockeyAsset.url, label: "Commercial air hockey table", alt: "Commercial LED air hockey table" },
    { src: basketballAsset.url, label: "Basketball arcade machine", alt: "Basketball arcade machine cabinet" },
    { src: footballAsset.url, label: "Football table", alt: "Premium football table for offices and venues" },
    { src: boxingAsset.url, label: "Boxing arcade machine", alt: "Boxing arcade machine with punch scoring" },
    { src: racingAsset.url, label: "Racing simulator", alt: "Racing simulator arcade cabinet" },
    { src: arcadeAsset.url, label: "Arcade machine", alt: "Multi-game arcade machine cabinet" },
    { src: grabAsset.url, label: "Prize / grab machine", alt: "Prize grab claw machine" },
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
