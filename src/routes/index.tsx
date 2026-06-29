import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, Coffee, Cookie, CupSoda,
  Wrench, CreditCard, ShieldCheck, Leaf, Zap, BadgePoundSterling,
  Phone, Gamepad2, Trophy, Quote, Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-lobby.jpg";
import { PageShell, PhotoPlaceholder } from "@/components/site/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Munch Machine Vending — Premium Vending & Entertainment, London & Essex" },
      { name: "description", content: "Premium vending machines, coffee solutions and interactive entertainment installed and maintained across London and Essex. Fully managed. No upfront cost." },
      { property: "og:title", content: "Munch Machine Vending — Premium Vending & Entertainment" },
      { property: "og:description", content: "Fully managed vending and entertainment for hotels, gyms, offices, sites and student accommodation." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <MarqueeTrust />
      <Services />
      <MachineRange />
      <WhyUs />
      <Entertainment />
      <Industries />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </PageShell>
  );
}

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Premium corporate lobby with city skyline at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />

      <div className="container-x relative pb-24 lg:pb-32 pt-40 w-full">
        <div className="max-w-3xl">
          <span className="eyebrow animate-fade-up">London &amp; Essex · Fully Managed Service</span>
          <h1
            className="mt-6 text-5xl md:text-7xl lg:text-[5.25rem] leading-[0.98] animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Premium <span className="text-gradient">Vending</span><br />
            &amp; Entertainment<br />
            Solutions
          </h1>
          <p
            className="mt-7 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            We supply, install and maintain premium vending machines and interactive
            entertainment equipment throughout London &amp; Essex — without compromise.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <Link to="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/vending-machines" className="btn-ghost">
              Explore Our Machines
            </Link>
          </div>

          <dl
            className="mt-16 grid grid-cols-3 gap-6 max-w-xl animate-fade-up"
            style={{ animationDelay: "440ms" }}
          >
            {[
              ["£0", "Upfront cost"],
              ["24/7", "Support response"],
              ["100%", "Fully managed"],
            ].map(([n, l]) => (
              <div key={l as string}>
                <dt className="font-display text-3xl md:text-4xl font-extrabold text-gradient">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-scroll-hint" />
        </div>
      </div>
    </section>
  );
}

/* ──────────────── TRUST MARQUEE ──────────────── */
function MarqueeTrust() {
  const items = ["Hotels", "Gyms", "Universities", "Offices", "Hospitals", "Construction", "Student Accommodation", "Retail", "Warehouses", "Schools"];
  return (
    <section className="border-y border-border py-8 overflow-hidden bg-surface/40">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((x, i) => (
          <span key={i} className="text-sm uppercase tracking-[0.24em] text-muted-foreground flex items-center gap-16">
            {x}
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ──────────────── SERVICES ──────────────── */
function Services() {
  const services = [
    { icon: Cookie, title: "Snack Vending", text: "Curated, rotated selections that keep teams satisfied without lifting a finger." },
    { icon: CupSoda, title: "Drink Vending", text: "Chilled drinks, healthy options and brand favourites — restocked on schedule." },
    { icon: Coffee, title: "Coffee Solutions", text: "Bean-to-cup machines that bring barista-grade coffee to your workplace." },
    { icon: Gamepad2, title: "Sports & Entertainment", text: "Air hockey, foosball, basketball and arcade — installed for impact." },
    { icon: Wrench, title: "Fully Managed Service", text: "Stocking, cleaning, servicing and 24/7 support — all included." },
    { icon: CreditCard, title: "Cashless Payments", text: "Contactless, card and mobile payments fitted as standard." },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">
              Eight services, <span className="text-gradient">one quiet partner.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            We don't just drop off a machine. We design the offer, install the kit, restock on
            schedule and respond fast when something needs attention.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative p-8 rounded-3xl border border-border bg-surface hover-lift overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/0 group-hover:bg-primary/15 blur-3xl transition-all duration-700" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl grid place-items-center border border-border bg-surface-elevated text-primary mb-6">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground mt-6 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── MACHINE RANGE ──────────────── */
function MachineRange() {
  const tiers = [
    {
      tag: "Compact",
      title: "Small",
      capacity: "Up to ~30 snack lines",
      ideal: "Small offices, salons, studios",
      features: ["Compact footprint", "Contactless payments", "Energy-efficient cooling", "Curated snack range"],
    },
    {
      tag: "Most popular",
      title: "Medium",
      capacity: "Up to ~40 snack & drink lines",
      ideal: "Hotels, gyms, mid-size offices",
      features: ["Glass-front display", "Snack & drink combo", "Card + cash + contactless", "LED interior lighting"],
      featured: true,
    },
    {
      tag: "Flagship",
      title: "Large",
      capacity: "60+ snack & drink lines",
      ideal: "Sites, warehouses, large floors",
      features: ["Full-height capacity", "Dual temperature zones", "Smart telemetry", "Premium product mix"],
    },
  ];
  return (
    <section className="py-28 lg:py-36 bg-surface/40 border-y border-border">
      <div className="container-x">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="eyebrow">The range</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl max-w-3xl">
            Three sizes. <span className="text-gradient">Engineered to fit.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <article
              key={t.title}
              className={`relative p-7 rounded-3xl border ${
                t.featured ? "border-primary/50 bg-surface shadow-[var(--shadow-glow)]" : "border-border bg-surface"
              } hover-lift overflow-hidden`}
            >
              {t.featured && (
                <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.22em] text-primary border border-primary/40 px-2.5 py-1 rounded-full bg-primary/10">
                  {t.tag}
                </span>
              )}
              <PhotoPlaceholder
                label={`${t.title} commercial vending machine`}
                hint={t.featured ? "Glass-front snack & drink combo" : t.title === "Small" ? "Compact countertop / wall unit" : "Full-height combination machine"}
                ratio="4/5"
              />
              <div className="mt-7">
                {!t.featured && <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{t.tag}</span>}
                <h3 className="mt-2 text-3xl font-extrabold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.capacity}</p>
                <p className="mt-1 text-sm text-muted-foreground">Ideal for: {t.ideal}</p>
                <ul className="mt-6 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                  Request this machine <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── WHY US ──────────────── */
function WhyUs() {
  const items = [
    { icon: BadgePoundSterling, t: "No Upfront Cost", d: "Qualifying businesses pay nothing to install." },
    { icon: Wrench, t: "Fully Managed", d: "Stocking, cleaning and servicing — handled." },
    { icon: CreditCard, t: "Cash & Card", d: "Contactless and mobile payments as standard." },
    { icon: Leaf, t: "Healthy Options", d: "Balanced ranges curated to your audience." },
    { icon: Zap, t: "Fast Response", d: "Engineer on-site within hours, not days." },
    { icon: ShieldCheck, t: "Reliable Support", d: "Dedicated account manager from day one." },
    { icon: Sparkles, t: "Premium Equipment", d: "Modern machines, beautifully presented." },
    { icon: Trophy, t: "Free Installation", d: "Sited, fitted and tested at no charge." },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="eyebrow">Why us</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">
              The difference is in the <span className="text-gradient">detail.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              We treat every site like our flagship — because to the people using it, that's
              exactly what it is. The machine should be the most reliable thing in the room.
            </p>
            <Link to="/about" className="mt-8 inline-flex btn-ghost">
              More about us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((it) => (
              <div key={it.t} className="group p-6 rounded-2xl border border-border bg-surface hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl grid place-items-center bg-primary/10 text-primary border border-primary/20">
                    <it.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-extrabold">{it.t}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── ENTERTAINMENT ──────────────── */
function Entertainment() {
  const items = [
    { title: "Air Hockey", desc: "Commercial-grade LED tables that draw a crowd.", hint: "LED rail · digital scoring" },
    { title: "Basketball", desc: "Arcade hoops with electronic scoring and timers.", hint: "Single & double cabinet" },
    { title: "Foosball", desc: "Tournament-grade tables built to last.", hint: "Telescopic safety rods" },
    { title: "Arcade Cabinets", desc: "Modern cabinets stacked with classic titles.", hint: "Multi-game · 4K display" },
    { title: "Claw Machines", desc: "Branded prize cabinets that reward engagement.", hint: "Adjustable grip & payout" },
    { title: "Prize Machines", desc: "Token, ticket and prize systems for venues.", hint: "Cashless ready" },
  ];
  return (
    <section className="relative py-28 lg:py-36 bg-surface/40 border-y border-border overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">Sports &amp; entertainment</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">
              Turn dwell time into <span className="text-gradient">delight.</span>
            </h2>
          </div>
          <Link to="/sports-entertainment" className="btn-ghost">View all <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((g) => (
            <article key={g.title} className="group rounded-3xl border border-border bg-surface overflow-hidden hover-lift">
              <PhotoPlaceholder label={g.title} hint={g.hint} ratio="16/11" />
              <div className="p-6">
                <h3 className="text-xl font-extrabold">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── INDUSTRIES ──────────────── */
import gymImg from "@/assets/industry-gym.jpg";
import hotelImg from "@/assets/industry-hotel.jpg";
import officeImg from "@/assets/industry-office.jpg";
import warehouseImg from "@/assets/industry-warehouse.jpg";
import studentImg from "@/assets/industry-student.jpg";
import constructionImg from "@/assets/industry-construction.jpg";

function Industries() {
  const list = [
    { name: "Hotels", img: hotelImg, copy: "Guest-ready 24/7 with premium snack and drink selections." },
    { name: "Gyms", img: gymImg, copy: "Protein bars, isotonics and recovery essentials, on-tap." },
    { name: "Offices", img: officeImg, copy: "Bean-to-cup coffee and balanced snacks that boost focus." },
    { name: "Warehouses", img: warehouseImg, copy: "Rugged kit for heavy-traffic break areas." },
    { name: "Student Accommodation", img: studentImg, copy: "Late-night fuel with cashless convenience." },
    { name: "Construction Sites", img: constructionImg, copy: "Site-tough machines designed for fast turnaround." },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">Industries</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">
            Built for <span className="text-gradient">every environment.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            From boutique hotels to busy construction sites — we tailor the machine, the
            range and the schedule to the people using it.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((i) => (
            <article key={i.name} className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
              <img
                src={i.img}
                alt={`${i.name} environment`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-2xl font-extrabold">{i.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-[18rem]">{i.copy}</p>
                <Link to="/industries" className="mt-4 inline-flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── HOW IT WORKS ──────────────── */
function HowItWorks() {
  const steps = [
    ["01", "Contact Us", "Tell us about your site, your team and your goals."],
    ["02", "Free Survey", "We visit, measure up and recommend the right machine."],
    ["03", "Installation", "Delivered, sited and tested — at no cost to you."],
    ["04", "Restocking", "Curated ranges, refilled on a schedule that fits."],
    ["05", "Maintenance", "Rapid-response engineers keep everything humming."],
  ];
  return (
    <section className="py-28 lg:py-36 bg-surface/40 border-y border-border">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">
            From enquiry to <span className="text-gradient">first cup.</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden lg:block" />
          <ol className="grid gap-4 lg:grid-cols-5">
            {steps.map(([n, t, d]) => (
              <li key={n} className="relative p-6 rounded-3xl border border-border bg-surface hover-lift">
                <div className="w-12 h-12 rounded-full grid place-items-center bg-[var(--gradient-primary)] text-primary-foreground font-display font-extrabold mb-5 shadow-[var(--shadow-glow)]">
                  {n}
                </div>
                <h3 className="text-lg font-extrabold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── TESTIMONIALS ──────────────── */
function Testimonials() {
  const items = [
    { q: "Slick install, well-curated range and the team are always quick to respond. Our members notice the quality.", n: "James W.", r: "Operations Director, Boutique Gym Group" },
    { q: "Replaced our old vendor and immediately saw fewer complaints and more staff using the break room. Faultless service.", n: "Priya S.", r: "Office Manager, Central London" },
    { q: "The arcade and pool table package transformed our common room. Students love it and so do we.", n: "Daniel R.", r: "Property Manager, Student Accommodation" },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">Clients</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">
            Trusted by teams that <span className="text-gradient">notice the details.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((t) => (
            <figure key={t.n} className="p-8 rounded-3xl border border-border bg-surface hover-lift relative">
              <Quote className="w-7 h-7 text-primary/40 mb-5" />
              <blockquote className="text-foreground/95 leading-relaxed">"{t.q}"</blockquote>
              <figcaption className="mt-7 pt-5 border-t border-border">
                <div className="font-semibold text-sm">{t.n}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── CTA ──────────────── */
function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface p-10 md:p-16 lg:p-20">
          <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[140px]" />
          <div className="absolute -bottom-32 -right-24 w-[480px] h-[480px] rounded-full bg-primary/10 blur-[160px]" />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <span className="eyebrow">Ready when you are</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl max-w-2xl">
                Let's build a <span className="text-gradient">better break</span> for your team.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl">
                Free survey. No upfront cost for qualifying businesses. Premium machines installed
                across London &amp; Essex.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/contact" className="btn-primary">Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+447944947419" className="btn-ghost"><Phone className="w-4 h-4" /> +44 7944 947419</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
