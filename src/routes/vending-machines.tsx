import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Coffee, Cookie, CupSoda, Layers } from "lucide-react";
import { PageShell, PageHero, PhotoPlaceholder } from "@/components/site/PageShell";

export const Route = createFileRoute("/vending-machines")({
  head: () => ({
    meta: [
      { title: "Vending Machines — Snack, Drink, Combo & Coffee | Munch Machine" },
      { name: "description", content: "Premium snack, drink, combination and bean-to-cup coffee vending machines. Supplied, installed and fully managed across London and Essex." },
      { property: "og:title", content: "Vending Machines | Munch Machine Vending" },
      { property: "og:description", content: "Snack, drink, combo and coffee vending machines, fully managed." },
      { property: "og:url", content: "/vending-machines" },
    ],
    links: [{ rel: "canonical", href: "/vending-machines" }],
  }),
  component: Page,
});

function Page() {
  const categories = [
    { icon: Cookie, name: "Snack Vending", desc: "Crisps, chocolate, healthy bars and grab-and-go essentials, curated to your audience.", features: ["Adjustable spirals", "Drop sensors", "Healthy options available"] },
    { icon: CupSoda, name: "Drink Vending", desc: "Chilled cans, bottles, isotonics and waters. Refilled on a schedule that matches demand.", features: ["Triple-zone cooling", "Brand favourites", "Bottle & can compatible"] },
    { icon: Layers, name: "Combination Machines", desc: "Snacks and drinks in one beautifully presented unit — the most popular choice.", features: ["Single glass-front", "Dual temp zones", "High-capacity"] },
    { icon: Coffee, name: "Bean-to-Cup Coffee", desc: "Barista-grade espresso, lattes and flat whites at the press of a button.", features: ["Fresh beans", "Steam-frothed milk", "Custom branding"] },
  ];

  const sizes = [
    { title: "Small", capacity: "Up to ~30 lines", ideal: "Salons, studios, small offices", footprint: "W 700mm · D 800mm · H 1830mm" },
    { title: "Medium", capacity: "Up to ~40 lines", ideal: "Hotels, gyms, mid-size offices", footprint: "W 900mm · D 850mm · H 1900mm", featured: true },
    { title: "Large", capacity: "60+ lines", ideal: "Warehouses, large sites, hospitals", footprint: "W 1050mm · D 900mm · H 1950mm" },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="Vending Machines"
        title={<>A range engineered for <span className="text-gradient">every footprint.</span></>}
        subtitle="From compact countertop units to flagship full-height machines — every option is supplied, installed and maintained as part of a fully managed service."
      >
        <Link to="/contact" className="btn-primary">Request a site survey <ArrowRight className="w-4 h-4" /></Link>
      </PageHero>

      {/* Categories */}
      <section className="pb-24">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-4">
            {categories.map((c) => (
              <article key={c.name} className="p-8 rounded-3xl border border-border bg-surface hover-lift">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="py-24 bg-surface/40 border-y border-border">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Choose your size</span>
            <h2 className="mt-5 text-4xl md:text-5xl">Three machine classes.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            {sizes.map((s) => (
              <article key={s.title} className={`p-7 rounded-3xl border ${s.featured ? "border-primary/50 shadow-[var(--shadow-glow)]" : "border-border"} bg-surface hover-lift`}>
                <PhotoPlaceholder label={`${s.title} vending machine`} hint={s.footprint} />
                <div className="mt-6">
                  <h3 className="text-2xl font-extrabold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.capacity}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Ideal: {s.ideal}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
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
    <section className="py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-10 lg:p-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[140px]" />
          <div className="relative">
            <span className="eyebrow">Payments</span>
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
          <div className="relative">
            <PhotoPlaceholder label="Contactless payment reader module" hint="Card · Apple Pay · Google Pay" ratio="4/3" />
          </div>
        </div>
      </div>
    </section>
  );
}
