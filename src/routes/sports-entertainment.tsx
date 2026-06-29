import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gamepad2, Trophy, Target } from "lucide-react";
import { PageShell, PageHero, PhotoPlaceholder } from "@/components/site/PageShell";

export const Route = createFileRoute("/sports-entertainment")({
  head: () => ({
    meta: [
      { title: "Sports & Entertainment Machines | Munch Machine Vending" },
      { name: "description", content: "Air hockey, basketball, foosball, arcade cabinets, claw and prize machines. Supplied and maintained across London and Essex." },
      { property: "og:title", content: "Sports & Entertainment Machines | Munch Machine" },
      { property: "og:description", content: "Premium interactive entertainment for hotels, gyms, sites and venues." },
      { property: "og:url", content: "/sports-entertainment" },
    ],
    links: [{ rel: "canonical", href: "/sports-entertainment" }],
  }),
  component: Page,
});

function Page() {
  const items = [
    { name: "Air Hockey", desc: "Tournament-grade LED tables with digital scoring. A genuine crowd-puller for hotels, bars and student venues.", hint: "LED rail · digital scoring" },
    { name: "Basketball", desc: "Commercial arcade hoops with electronic timers and high-score modes. Single and double cabinets available.", hint: "Single & double cabinet" },
    { name: "Foosball Tables", desc: "Heavy, tournament-spec foosball with telescopic safety rods, designed for non-stop play.", hint: "Tournament spec" },
    { name: "Arcade Cabinets", desc: "Modern multi-game cabinets stacked with classics and current hits. 4K displays and premium controls.", hint: "Multi-game · 4K display" },
    { name: "Claw Machines", desc: "Branded prize cabinets with adjustable grip and payout. A reliable way to reward engagement.", hint: "Adjustable grip & payout" },
    { name: "Prize Machines", desc: "Ticket, token and prize redemption systems — turnkey for arcades, leisure parks and venues.", hint: "Cashless ready" },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="Sports & Entertainment"
        title={<>Interactive equipment that <span className="text-gradient">earns its space.</span></>}
        subtitle="Commercial-grade entertainment machines that transform common rooms, lobbies and break areas into the most-talked-about spaces in the building."
      >
        <Link to="/contact" className="btn-primary">Plan your install <ArrowRight className="w-4 h-4" /></Link>
      </PageHero>

      <section className="pb-24">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((g) => (
              <article key={g.name} className="rounded-3xl border border-border bg-surface overflow-hidden hover-lift group">
                <PhotoPlaceholder label={g.name} hint={g.hint} ratio="4/3" />
                <div className="p-7">
                  <h2 className="text-xl font-extrabold">{g.name}</h2>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface/40 border-y border-border">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { icon: Trophy, t: "Built for venues", d: "Heavy-duty cabinets engineered for thousands of hours of play." },
            { icon: Gamepad2, t: "Cashless ready", d: "Token, card or contactless — your venue, your choice." },
            { icon: Target, t: "Curated bundles", d: "We'll spec the right mix for your space, audience and footfall." },
          ].map((b) => (
            <div key={b.t} className="p-7 rounded-3xl border border-border bg-surface">
              <b.icon className="w-6 h-6 text-primary" />
              <h3 className="mt-4 text-lg font-extrabold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
