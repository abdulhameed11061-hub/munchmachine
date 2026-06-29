import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero, PhotoPlaceholder } from "@/components/site/PageShell";
import gymImg from "@/assets/industry-gym.jpg";
import hotelImg from "@/assets/industry-hotel.jpg";
import officeImg from "@/assets/industry-office.jpg";
import warehouseImg from "@/assets/industry-warehouse.jpg";
import studentImg from "@/assets/industry-student.jpg";
import constructionImg from "@/assets/industry-construction.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Munch Machine Vending" },
      { name: "description", content: "Premium vending and entertainment solutions tailored for hotels, gyms, offices, sites, hospitals, schools, universities and more." },
      { property: "og:title", content: "Industries | Munch Machine Vending" },
      { property: "og:description", content: "Tailored vending and entertainment for every environment." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Page,
});

function Page() {
  const photo = [
    { name: "Hotels", img: hotelImg, copy: "Guest-ready, 24/7, with premium snack and drink selections that match your brand." },
    { name: "Gyms", img: gymImg, copy: "Protein, isotonics and recovery essentials, restocked to match peak class times." },
    { name: "Offices", img: officeImg, copy: "Bean-to-cup coffee and balanced ranges that keep teams focused and welcomed." },
    { name: "Warehouses", img: warehouseImg, copy: "Rugged kit for heavy-traffic break areas, with rapid response when needed." },
    { name: "Student Accommodation", img: studentImg, copy: "Late-night fuel, cashless convenience and entertainment that builds community." },
    { name: "Construction", img: constructionImg, copy: "Site-tough machines for cabin offices and welfare units, installed fast." },
  ];

  const placeholder = [
    { name: "Schools", hint: "Healthier ranges, audit-friendly reporting" },
    { name: "Universities", hint: "Bean-to-cup + entertainment for common rooms" },
    { name: "Hospitals", hint: "24/7 service for staff & visitor areas" },
    { name: "Retail", hint: "Brand-aligned ranges and presentation" },
    { name: "Factories", hint: "Heavy-duty machines for shift workers" },
    { name: "Property Management", hint: "Communal spaces & resident lounges" },
  ];

  return (
    <PageShell>
      <PageHero
        kicker="Industries"
        title={<>One partner, <span className="text-gradient">every environment.</span></>}
        subtitle="We tailor the machine, the product range and the service schedule to your team, your traffic and your space."
      >
        <Link to="/contact" className="btn-primary">Discuss your site <ArrowRight className="w-4 h-4" /></Link>
      </PageHero>

      <section className="pb-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photo.map((i) => (
            <article key={i.name} className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
              <img src={i.img} alt={`${i.name} environment`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h2 className="font-display text-2xl font-extrabold">{i.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-[20rem] leading-relaxed">{i.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-surface/40 border-y border-border">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Also serving</span>
            <h2 className="mt-5 text-4xl md:text-5xl">Specialist sectors.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {placeholder.map((p) => (
              <div key={p.name} className="rounded-3xl border border-border bg-surface overflow-hidden hover-lift">
                <PhotoPlaceholder label={p.name} hint={p.hint} ratio="16/10" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
