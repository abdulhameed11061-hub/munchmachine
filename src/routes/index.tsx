import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Check, ChevronDown, Coffee, Cookie, CupSoda,
  Wrench, CreditCard, ShieldCheck, Leaf, Zap, BadgePoundSterling,
  Gamepad2, Trophy, Sparkles, MapPin, Banknote, Phone, Quote, Star,
} from "lucide-react";
import heroImg from "@/assets/hero-cinematic.jpg";
import gymImg from "@/assets/industry-gym.jpg";
import hotelImg from "@/assets/industry-hotel.jpg";
import officeImg from "@/assets/industry-office.jpg";
import warehouseImg from "@/assets/industry-warehouse.jpg";
import studentImg from "@/assets/industry-student.jpg";
import constructionImg from "@/assets/industry-construction.jpg";
import smallImg from "@/assets/machine-small.jpg";
import mediumImg from "@/assets/machine-medium.jpg";
import largeImg from "@/assets/machine-large.jpg";
import airHockeyImg from "@/assets/ent-air-hockey.jpg";
import basketballImg from "@/assets/ent-basketball.jpg";
import foosballImg from "@/assets/ent-foosball.jpg";
import arcadeImg from "@/assets/ent-arcade.jpg";
import grabImg from "@/assets/ent-grab.jpg";
import prizeImg from "@/assets/ent-prize.jpg";
import { PageShell, SectionHeader } from "@/components/site/PageShell";


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
      <TrustStrip />
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
  const badges = [
    { icon: BadgePoundSterling, label: "Free Installation" },
    { icon: Wrench, label: "Fully Managed" },
    { icon: CreditCard, label: "Cashless Payments" },
    { icon: MapPin, label: "London & Essex" },
  ];
  return (
    <section className="relative min-h-dvh flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Premium vending machine glowing in a modern London skyline lobby at dusk"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      {/* Cinematic letterboxing + colour grade */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/20" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/35 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/80 to-transparent" aria-hidden="true" />

      <div className="container-x relative pb-28 lg:pb-32 pt-40 w-full">
        <div className="max-w-5xl">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-primary font-semibold animate-fade-up">
            <span className="w-10 h-px bg-primary" /> London &amp; Essex · Est. since day one
          </span>
          <h1
            className="mt-6 font-display text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[5.25rem] xl:text-[5.75rem] leading-[0.96] tracking-tight animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Workplace fuel,<br />
            <span className="text-gradient">cinematically</span> delivered.
          </h1>
          <p
            className="mt-8 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            Premium vending, bean-to-cup coffee and interactive entertainment —
            installed, stocked and maintained for the businesses London &amp; Essex
            care most about.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <Link to="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link to="/vending-machines" className="btn-ghost">
              Explore the range
            </Link>
          </div>

          <div
            className="mt-10 flex flex-wrap gap-2.5 animate-fade-up"
            style={{ animationDelay: "420ms" }}
            aria-label="Trust badges"
          >
            {badges.map((b) => (
              <span key={b.label} className="trust-badge">
                <b.icon className="w-3.5 h-3.5 text-primary" aria-hidden="true" /> {b.label}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.32em]">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-scroll-hint" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}


/* ──────────────── TRUST STRIP ──────────────── */
function TrustStrip() {
  const items = ["Hotels", "Gyms", "Universities", "Offices", "Hospitals", "Construction", "Student Accommodation", "Retail", "Warehouses", "Schools"];
  return (
    <section className="border-y border-border py-6 overflow-hidden bg-surface/40" aria-label="Industries we serve">
      <div className="flex gap-12 animate-marquee whitespace-nowrap motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
        {[...items, ...items, ...items].map((x, i) => (
          <span key={i} className="inline-flex items-center gap-12 text-[11px] sm:text-xs uppercase tracking-[0.28em] text-muted-foreground">
            {x}
            <span className="w-1 h-1 rounded-full bg-primary/70" aria-hidden="true" />
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
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16 items-end mb-12 lg:mb-16">
          <SectionHeader
            kicker="What we do"
            title={<>Eight services. <span className="text-accent">One quiet partner.</span></>}
          />
          <p className="text-muted-foreground leading-relaxed lg:pb-2">
            We don't just drop off a machine. We design the offer, install the kit, restock on
            schedule and respond fast when something needs attention.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative p-7 rounded-2xl border border-border bg-surface hover-lift overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-primary/0 group-hover:bg-primary/15 blur-3xl transition-all duration-700" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl grid place-items-center border border-border bg-surface-elevated text-primary mb-5">
                  <s.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-extrabold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
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
      features: ["Compact footprint", "Contactless ready", "Energy-efficient cooling"],
      img: smallImg,
    },
    {
      tag: "Most popular",
      title: "Medium",
      capacity: "Up to ~40 snack & drink lines",
      ideal: "Hotels, gyms, mid-size offices",
      features: ["Glass-front combo", "Cash + card + contactless", "LED interior lighting"],
      img: mediumImg,
      featured: true,
    },
    {
      tag: "Flagship",
      title: "Large",
      capacity: "60+ snack & drink lines",
      ideal: "Sites, warehouses, large floors",
      features: ["Full-height capacity", "Dual temp zones", "Smart telemetry"],
      img: largeImg,
    },
  ];
  return (
    <section className="py-28 lg:py-36 bg-surface/40 border-y border-border">
      <div className="container-x">
        <SectionHeader
          kicker="The range"
          title={<>Three classes. <span className="text-accent">Engineered to fit.</span></>}
          intro="Every machine ships with cashless payments as standard — installed, stocked and serviced as part of our fully managed package."
          align="center"
        />
        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <article
              key={t.title}
              className={`card-glass group ${t.featured ? "lg:-translate-y-4 shadow-[var(--shadow-glow)]" : ""}`}
            >
              {t.featured && (
                <div className="absolute top-5 right-5 z-10 text-[9px] uppercase tracking-[0.24em] text-primary border border-primary/40 px-2.5 py-1 rounded-full bg-primary/10 backdrop-blur-sm">
                  Most popular
                </div>
              )}
              <div className="media-zoom relative aspect-[4/5]">
                <img src={t.img} alt={`${t.title} commercial vending machine`} loading="lazy" width={1280} height={1600} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent pointer-events-none" />
              </div>
              <div className="p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-2xl font-extrabold">{t.title}</h3>
                  {!t.featured && <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{t.tag}</span>}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.capacity}</p>
                <p className="mt-1 text-xs text-muted-foreground">Ideal: {t.ideal}</p>
                <ul className="mt-6 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="story-link mt-7 text-sm">
                  Request this machine <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              kicker="Why us"
              title={<>The difference is in the <span className="text-accent">detail.</span></>}
              intro="We treat every site like our flagship — because to the people using it, that's exactly what it is. The machine should be the most reliable thing in the room."
            />
            <Link to="/about" className="mt-8 inline-flex btn-ghost">
              More about us <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((it) => (
              <div key={it.t} className="group p-6 rounded-2xl border border-border bg-surface hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl grid place-items-center bg-primary/10 text-primary border border-primary/20">
                    <it.icon className="w-4 h-4" aria-hidden="true" />
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
    { title: "Air Hockey",        img: airHockeyImg,  desc: "Tournament-grade LED tables that magnetise a room." },
    { title: "Basketball Arcade", img: basketballImg, desc: "Commercial hoops with electronic scoring and timers." },
    { title: "Foosball Tables",   img: foosballImg,   desc: "Tournament-spec tables engineered for non-stop play." },
    { title: "Arcade Machines",   img: arcadeImg,     desc: "Modern cabinets with 4K screens and premium controls." },
    { title: "Grab Machines",     img: grabImg,       desc: "Branded prize cabinets that reward engagement." },
    { title: "Prize Machines",    img: prizeImg,      desc: "Ticket and redemption systems, cashless ready." },
  ];
  return (
    <section className="relative py-28 lg:py-36 bg-surface/40 border-y border-border overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px]" aria-hidden="true" />
      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeader
            kicker="Interactive Entertainment Solutions"
            title={<>Turn dwell time into <span className="text-accent">delight.</span></>}
          />
          <Link to="/sports-entertainment" className="btn-ghost shrink-0">Explore all 10 <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((g) => (
            <article key={g.title} className="card-glass group">
              <div className="media-zoom relative aspect-[16/11]">
                <img src={g.img} alt={g.title} loading="lazy" width={1280} height={880} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-7">
                <h3 className="text-lg font-extrabold">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                <Link to="/sports-entertainment" className="story-link mt-4 text-sm">Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ──────────────── INDUSTRIES ──────────────── */
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
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          kicker="Industries"
          title={<>Built for <span className="text-accent">every environment.</span></>}
          intro="From boutique hotels to busy construction sites — we tailor the machine, the range and the schedule to the people using it."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {list.map((i) => (
            <article key={i.name} className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
              <img
                src={i.img}
                alt={`${i.name} environment`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl font-extrabold">{i.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-[18rem]">{i.copy}</p>
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
    <section className="py-24 lg:py-32 bg-surface/40 border-y border-border">
      <div className="container-x">
        <SectionHeader
          kicker="How it works"
          title={<>From enquiry to <span className="text-accent">first cup.</span></>}
        />
        <div className="mt-14 relative">
          <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden lg:block" aria-hidden="true" />
          <ol className="grid gap-3 lg:grid-cols-5">
            {steps.map(([n, t, d]) => (
              <li key={n} className="relative p-6 rounded-2xl border border-border bg-surface hover-lift">
                <div className="w-11 h-11 rounded-full grid place-items-center bg-[var(--gradient-primary)] text-primary-foreground font-display font-extrabold mb-5 shadow-[var(--shadow-glow)]">
                  {n}
                </div>
                <h3 className="text-base font-extrabold">{t}</h3>
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
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          kicker="Clients"
          title={<>Trusted by teams that <span className="text-accent">notice the details.</span></>}
        />
        <div className="mt-12 grid md:grid-cols-3 gap-3">
          {items.map((t) => (
            <figure key={t.n} className="p-7 rounded-2xl border border-border bg-surface hover-lift relative">
              <div className="flex gap-0.5 mb-5 text-primary" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />)}
              </div>
              <Quote className="w-7 h-7 text-primary/30 mb-4" aria-hidden="true" />
              <blockquote className="text-foreground/95 leading-relaxed text-[15px]">"{t.q}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
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
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-10 md:p-14 lg:p-20">
          <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[140px]" aria-hidden="true" />
          <div className="absolute -bottom-32 -right-24 w-[480px] h-[480px] rounded-full bg-primary/10 blur-[160px]" aria-hidden="true" />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <div>
              <span className="kicker">Ready when you are</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl max-w-2xl leading-[1.05]">
                Let's build a <span className="text-accent">better break</span> for your team.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl">
                Free survey. No upfront cost for qualifying businesses. Premium machines installed
                across London &amp; Essex.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/contact" className="btn-primary">Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
              <a href="tel:+447944947419" className="btn-ghost"><Phone className="w-4 h-4" aria-hidden="true" /> +44 7944 947419</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
