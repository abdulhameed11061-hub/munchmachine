import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, PhotoPlaceholder } from "@/components/site/PageShell";
import hotelImg from "@/assets/industry-hotel.jpg";
import officeImg from "@/assets/industry-office.jpg";
import gymAsset from "@/assets/uploads/gym-modern.png.asset.json";
import studentImg from "@/assets/industry-student.jpg";
import warehouseImg from "@/assets/industry-warehouse.jpg";
import constructionAsset from "@/assets/uploads/construction-welfare.png.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Munch Machine Vending" },
      { name: "description", content: "Installations, environments and equipment from Munch Machine Vending — vending and entertainment machines across London and Essex." },
      { property: "og:title", content: "Gallery | Munch Machine Vending" },
      { property: "og:description", content: "A look at our installations and environments." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Page,
});

function Page() {
  const photos = [
    { src: hotelImg, label: "Luxury hotel lobby install" },
    { src: officeImg, label: "Corporate break area" },
    { src: gymAsset.url, label: "Boutique gym environment" },
    { src: studentImg, label: "Student common room" },
    { src: warehouseImg, label: "Warehouse welfare zone" },
    { src: constructionAsset.url, label: "Construction site welfare unit" },
  ];
  const placeholders = [
    "Small snack vending machine — close up",
    "Medium glass-front combo machine",
    "Large full-height combination machine",
    "Bean-to-cup coffee machine",
    "Commercial LED air hockey table",
    "Arcade basketball cabinet",
    "Tournament football table",
    "Boxing arcade machine",
    "Racing simulator cabinet",
    "Multi-game arcade cabinet",
    "Branded claw / grab machine",
  ];

  return (
    <PageShell>
      <PageHero
        kicker="Gallery"
        title={<>Installations &amp; <span className="text-gradient">environments.</span></>}
        subtitle="A look at the kind of spaces we equip — and the kit we install. Product photography placeholders are marked clearly so we can replace them with your specific installs."
      />

      <section className="pb-24">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((p, i) => (
              <figure key={i} className={`relative overflow-hidden rounded-3xl border border-border group ${i % 5 === 0 ? "md:col-span-2 aspect-[16/10]" : "aspect-[4/5]"}`}>
                <img src={p.src} alt={p.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background to-transparent text-sm">{p.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface/40 border-y border-border">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Equipment</span>
            <h2 className="mt-5 text-4xl md:text-5xl">Awaiting product photography.</h2>
            <p className="mt-4 text-muted-foreground">
              These slots are reserved for high-resolution commercial photography of the actual
              machines we install. Swap in your supplier's product shots when ready.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {placeholders.map((p) => <PhotoPlaceholder key={p} label={p} ratio="4/5" />)}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
