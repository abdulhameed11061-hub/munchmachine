import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import gymAsset from "@/assets/uploads/gym-modern.png";
import hotelAsset from "@/assets/uploads/gallery-hotel-lobby-vending.png";
import officeAsset from "@/assets/uploads/gallery-corporate-break-area.png";
import warehouseAsset from "@/assets/uploads/warehouse-welfare.jpg";
import studentAsset from "@/assets/uploads/student-accommodation.png";
import constructionAsset from "@/assets/uploads/construction-welfare.png";
import hospitalAsset from "@/assets/uploads/hospital.png";
import schoolAsset from "@/assets/uploads/school.png";
import universityAsset from "@/assets/uploads/university.jpg";
import leisureAsset from "@/assets/uploads/leisure-centre.jpg";
import retailImg from "@/assets/industry-retail.jpg";
import factoryImg from "@/assets/industry-factory.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve in London & Essex | Munch Machine Vending" },
      { name: "description", content: "Vending, coffee and interactive entertainment machines for offices, hotels, hospitals, schools, universities, warehouses, construction sites, gyms, leisure centres, retail and factories across London & Essex." },
      { property: "og:title", content: "Industries We Serve | London & Essex | Munch Machine Vending" },
      { property: "og:description", content: "Tailored vending, coffee and entertainment for every environment in London & Essex." },
      { property: "og:url", content: "https://munchmachine.lovable.app/industries" },
      { property: "og:image", content: "https://munchmachine.lovable.app/og-industries.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://munchmachine.lovable.app/industries" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://munchmachine.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Industries", item: "https://munchmachine.lovable.app/industries" },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

const industries = [
  { name: "Gyms",                   img: gymAsset,          copy: "Protein, isotonics and recovery essentials, restocked around peak class times." },
  { name: "Hotels",                 img: hotelAsset,        copy: "Guest-ready 24/7 with premium ranges that match your brand standard." },
  { name: "Offices",                img: officeAsset,       copy: "Bean-to-cup coffee and balanced snacks that keep teams focused." },
  { name: "Warehouses",             img: warehouseAsset,    copy: "Welfare-room ready — rugged kit for heavy-traffic break areas with rapid engineer response." },
  { name: "Construction Sites",     img: constructionAsset, copy: "Site-tough machines for cabin offices and welfare units, installed fast." },
  { name: "Student Accommodation",  img: studentAsset,      copy: "Late-night fuel and cashless convenience that builds community." },
  { name: "Hospitals",              img: hospitalAsset,     copy: "Reliable, 24/7 service for staff rooms, waiting areas and visitor spaces." },
  { name: "Schools",                img: schoolAsset,       copy: "Healthier ranges and audit-friendly reporting for sixth-form and common areas." },
  { name: "Universities & Colleges",img: universityAsset,   copy: "Common rooms, libraries and student unions — coffee and snacks around the clock." },
  { name: "Leisure Centres",        img: leisureAsset,      copy: "Isotonics, protein and healthy snacks for members between sessions." },
  { name: "Retail",                 img: retailImg,             copy: "Brand-aligned ranges and presentation for premium customer spaces." },
  { name: "Factories",              img: factoryImg,            copy: "Heavy-duty machines built for shift workers and round-the-clock demand." },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        kicker="Industries"
        title={<>One partner, <span className="text-gradient">every environment.</span></>}
        subtitle="We provide fully managed vending machines, coffee machines and entertainment equipment for gyms, hotels, offices, warehouses, construction sites, schools, hospitals, retail locations and student accommodation across London & Essex."
      >
        <Link to="/contact" className="btn-primary">Discuss your site <ArrowRight className="w-4 h-4" /></Link>
      </PageHero>

      <section className="pb-28">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((i) => (
            <article key={i.name} className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-surface media-zoom">
              <img
                src={i.img}
                alt={`${i.name} environment with premium vending`}
                loading="lazy"
                decoding="async"
                width={1280}
                height={1600}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h2 className="font-display text-2xl font-extrabold">{i.name}</h2>
                <p className="mt-2.5 text-sm text-muted-foreground max-w-[22rem] leading-relaxed">{i.copy}</p>
                <Link to="/contact" className="btn-primary mt-4 text-xs px-4 py-2">
                  Request Machines for This Site <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
