import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import gymAsset from "@/assets/uploads/gym-modern.png.asset.json";
import hotelAsset from "@/assets/uploads/hotel.png.asset.json";
import officeAsset from "@/assets/uploads/office.png.asset.json";
import warehouseImg from "@/assets/industry-warehouse.jpg";
import studentAsset from "@/assets/uploads/student-accommodation.png.asset.json";
import constructionAsset from "@/assets/uploads/construction-welfare.png.asset.json";
import hospitalAsset from "@/assets/uploads/hospital.png.asset.json";
import schoolAsset from "@/assets/uploads/school.png.asset.json";
import retailImg from "@/assets/industry-retail.jpg";
import factoryImg from "@/assets/industry-factory.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Munch Machine Vending" },
      { name: "description", content: "Premium vending and interactive entertainment for hotels, gyms, offices, warehouses, sites, student accommodation, hospitals, schools, retail and factories across London & Essex." },
      { property: "og:title", content: "Industries | Munch Machine Vending" },
      { property: "og:description", content: "Tailored vending and entertainment for every environment." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Page,
});

const industries = [
  { name: "Gyms",                   img: gymAsset.url,          copy: "Protein, isotonics and recovery essentials, restocked around peak class times." },
  { name: "Hotels",                 img: hotelAsset.url,        copy: "Guest-ready 24/7 with premium ranges that match your brand standard." },
  { name: "Offices",                img: officeAsset.url,       copy: "Bean-to-cup coffee and balanced snacks that keep teams focused." },
  { name: "Warehouses",             img: warehouseImg,          copy: "Rugged kit for heavy-traffic break areas with rapid engineer response." },
  { name: "Construction Sites",     img: constructionAsset.url, copy: "Site-tough machines for cabin offices and welfare units, installed fast." },
  { name: "Student Accommodation",  img: studentAsset.url,      copy: "Late-night fuel and cashless convenience that builds community." },
  { name: "Hospitals",              img: hospitalAsset.url,     copy: "Reliable, 24/7 service for staff rooms, waiting areas and visitor spaces." },
  { name: "Schools",                img: schoolAsset.url,       copy: "Healthier ranges and audit-friendly reporting for sixth-form and common areas." },
  { name: "Retail",                 img: retailImg,             copy: "Brand-aligned ranges and presentation for premium customer spaces." },
  { name: "Factories",              img: factoryImg,            copy: "Heavy-duty machines built for shift workers and round-the-clock demand." },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        kicker="Industries"
        title={<>One partner, <span className="text-gradient">every environment.</span></>}
        subtitle="We tailor the machine, the product range and the service schedule to your team, your traffic and your space."
      >
        <Link to="/contact" className="btn-primary">Discuss your site <ArrowRight className="w-4 h-4" /></Link>
      </PageHero>

      <section className="pb-28">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((i) => (
            <article key={i.name} className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-border media-zoom">
              <img src={i.img} alt={`${i.name} environment`} loading="lazy" width={1280} height={1600} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h2 className="font-display text-2xl font-extrabold">{i.name}</h2>
                <p className="mt-2.5 text-sm text-muted-foreground max-w-[22rem] leading-relaxed">{i.copy}</p>
                <Link to="/contact" className="story-link mt-4 text-sm">Discuss this sector <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
