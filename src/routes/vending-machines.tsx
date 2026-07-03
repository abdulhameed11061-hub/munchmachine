import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Coffee, Cookie, CupSoda, Layers } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import smallAsset from "@/assets/uploads/small.png";
import mediumAsset from "@/assets/uploads/medium.png";
import largeAsset from "@/assets/uploads/large.png";
import coffeeImg from "@/assets/machine-coffee.jpg";

export const Route = createFileRoute("/vending-machines")({
  head: () => ({
    meta: [
      { title: "Commercial Vending Machines London & Essex | Snack, Drink & Coffee" },
      { name: "description", content: "Snack, drink, combination and bean-to-cup coffee vending machines supplied, installed and fully managed across London and Essex. Cashless payments fitted as standard." },
      { property: "og:title", content: "Commercial Vending Machines London & Essex | Munch Machine Vending" },
      { property: "og:description", content: "Snack, drink, combo and bean-to-cup coffee vending machines, fully managed across London & Essex." },
      { property: "og:url", content: "https://munchmachine.lovable.app/vending-machines" },
      { property: "og:image", content: "https://munchmachine.lovable.app/og-vending.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://munchmachine.lovable.app/vending-machines" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://munchmachine.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Vending Machines", item: "https://munchmachine.lovable.app/vending-machines" },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const categories = [
    { icon: Cookie, name: "Snack Vending",        img: smallAsset,  desc: "Crisps, chocolate, healthy bars and grab-and-go essentials, curated to your audience.", features: ["Adjustable spirals", "Drop sensors", "Healthy options available"] },
    { icon: CupSoda, name: "Drink Vending",       img: mediumAsset, desc: "Chilled cans, bottles, isotonics and waters. Refilled on a schedule that matches demand.", features: ["Triple-zone cooling", "Brand favourites", "Bottle & can compatible"] },
    { icon: Layers, name: "Combination Machines", img: largeAsset,  desc: "Snacks and drinks in one beautifully presented unit — the most popular choice.", features: ["Single glass-front", "Dual temp zones", "High-capacity"] },
    { icon: Coffee, name: "Bean-to-Cup Coffee",   img: coffeeImg, desc: "Barista-grade espresso, lattes and flat whites at the press of a button.", features: ["Fresh beans", "Steam-frothed milk", "Custom branding"] },
  ];

  const sizes = [
    { title: "Small",  capacity: "Up to ~30 lines", ideal: "Salons, studios, small offices",       footprint: "W 700mm · D 800mm · H 1830mm",  img: smallAsset },
    { title: "Medium", capacity: "Up to ~40 lines", ideal: "Hotels, gyms, mid-size offices",       footprint: "W 900mm · D 850mm · H 1900mm",  img: mediumAsset, featured: true },
    { title: "Large",  capacity: "60+ lines",       ideal: "Warehouses, large sites, hospitals",   footprint: "W 1050mm · D 900mm · H 1950mm", img: largeAsset },
  ];

  return (
    <PageShell>
      <PageHero
        kicker="Vending Machines"
        title={<>A range engineered for <span className="text-gradient">every footprint.</span></>}
        subtitle="From compact countertop units to flagship full-height machines — every option is supplied, installed and maintained as part of a fully managed service."
      >
        <Link to="/contact" className="btn-primary">Request a site survey <ArrowRight className="w-4 h-4" /></Link>
      </PageHero>

      {/* Categories */}
      <section className="pb-28">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((c) => (
              <article key={c.name} className="card-glass group">
                <div className="media-zoom relative aspect-[5/3]">
                  <img src={c.img} alt={c.name} loading="lazy" width={1280} height={768} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-2xl grid place-items-center bg-primary/10 border border-primary/20 text-primary mb-6">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-extrabold">{c.name}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.desc}</p>
                  <ul className="mt-5 grid sm:grid-cols-3 gap-2">
                    {c.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="py-28 bg-surface/40 border-y border-border">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <span className="kicker">Choose your class</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Three machine classes.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {sizes.map((s) => (
              <article key={s.title} className={`card-glass group ${s.featured ? "lg:-translate-y-4 shadow-[var(--shadow-glow)]" : ""}`}>
                <div className="media-zoom relative aspect-[4/5]">
                  <img src={s.img} alt={`${s.title} vending machine`} loading="lazy" width={1280} height={1600} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.capacity}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Ideal: {s.ideal}</p>
                  <p className="mt-3 text-xs text-muted-foreground tracking-wide">{s.footprint}</p>
                  <Link to="/contact" className="story-link mt-6 text-sm">
                    Discuss this machine <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PaymentBlock />
    </PageShell>
  );
}

function PaymentBlock() {
  return (
    <section className="py-28">
      <div className="container-x">
        <div className="relative card-glass p-10 lg:p-16 grid lg:grid-cols-2 gap-10 items-center overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />
          <div className="relative">
            <span className="kicker">Payments</span>
            <h2 className="mt-5 text-3xl md:text-4xl">Cash, card, contactless and mobile — fitted as standard.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Every machine ships with modern payment hardware. We support coins, notes,
              chip &amp; PIN, contactless, Apple Pay and Google Pay — so nobody is locked out.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm">
              {["Apple & Google Pay", "Contactless cards", "Chip & PIN", "Coin & note acceptors", "Refund button", "Cashless reporting"].map((x) => (
                <li key={x} className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="relative media-zoom rounded-2xl overflow-hidden aspect-[4/3] border border-border">
            <img src={coffeeImg} alt="Premium contactless payment integrated into a bean-to-cup machine" loading="lazy" width={1280} height={960} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
