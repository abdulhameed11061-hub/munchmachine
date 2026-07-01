import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Trophy, Gamepad2, Target } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import airHockey from "@/assets/ent-air-hockey.jpg";
import basketball from "@/assets/ent-basketball.jpg";
import football from "@/assets/ent-foosball.jpg";
import arcade from "@/assets/ent-arcade.jpg";
import grab from "@/assets/ent-grab.jpg";
import prize from "@/assets/ent-prize.jpg";
import dance from "@/assets/ent-dance.jpg";
import racingAsset from "@/assets/uploads/racing-simulator-03.jpg.asset.json";
import boxing from "@/assets/ent-boxing.jpg";
import kiddie from "@/assets/ent-kiddie.jpg";

export const Route = createFileRoute("/sports-entertainment")({
  head: () => ({
    meta: [
      { title: "Interactive Entertainment Solutions | Munch Machine Vending" },
      { name: "description", content: "Premium interactive entertainment for hotels, gyms, sites and venues — air hockey, basketball, football tables, arcade, claw, racing, dance, boxing, prize machines and kiddie rides." },
      { property: "og:title", content: "Interactive Entertainment Solutions | Munch Machine" },
      { property: "og:description", content: "Commercial-grade entertainment that transforms common rooms, lobbies and break areas." },
      { property: "og:url", content: "/sports-entertainment" },
    ],
    links: [{ rel: "canonical", href: "/sports-entertainment" }],
  }),
  component: Page,
});

const items = [
  { name: "Air Hockey",        img: airHockey,  desc: "Tournament-grade LED tables that magnetise a room and never sit unused." },
  { name: "Basketball Arcade", img: basketball, desc: "Commercial hoops with electronic scoring — the room's most reliable conversation starter." },
  { name: "Football Tables",   img: football,   desc: "Heavy, tournament-spec tables engineered for ten thousand hours of play." },
  { name: "Arcade Machines",   img: arcade,     desc: "Modern multi-game cabinets with 4K displays and premium controls." },
  { name: "Grab Machines",     img: grab,       desc: "Branded prize cabinets with adjustable grip — engagement, packaged." },
  { name: "Prize Machines",    img: prize,      desc: "Ticket and redemption systems built for arcades, parks and leisure venues." },
  { name: "Dance Machines",    img: dance,      desc: "Illuminated floor pads and big-screen graphics that fill the floor." },
  { name: "Racing Games",      img: racingAsset.url, desc: "Twin-seat racing simulators with curved screens and force-feedback wheels." },
  { name: "Boxing Machines",   img: boxing,     desc: "Punch-power cabinets with digital scoring — the loudest fun in the room." },
  { name: "Kiddie Rides",      img: kiddie,     desc: "Family-friendly rides that quietly turn dwell time into delight." },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        kicker="Interactive Entertainment Solutions"
        title={<>Equipment that <span className="text-gradient">earns its space.</span></>}
        subtitle="Commercial-grade entertainment that turns common rooms, lobbies and break areas into the most talked-about spaces in the building."
      >
        <Link to="/contact" className="btn-primary">Plan your install <ArrowRight className="w-4 h-4" /></Link>
      </PageHero>

      <section className="pb-28">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((g) => (
              <article key={g.name} className="card-glass group">
                <div className="media-zoom relative aspect-[4/3]">
                  <img src={g.img} alt={g.name} loading="lazy" width={1280} height={960} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent pointer-events-none" />
                </div>
                <div className="p-8">
                  <h2 className="text-xl font-extrabold">{g.name}</h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                  <Link to="/contact" className="story-link mt-5 text-sm">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-surface/40 border-y border-border">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { icon: Trophy, t: "Built for venues", d: "Heavy-duty cabinets engineered for thousands of hours of play." },
            { icon: Gamepad2, t: "Cashless ready", d: "Token, card or contactless — your venue, your choice." },
            { icon: Target, t: "Curated bundles", d: "We spec the right mix for your space, audience and footfall." },
          ].map((b) => (
            <div key={b.t} className="card-glass p-8">
              <b.icon className="w-6 h-6 text-primary" />
              <h3 className="mt-5 text-lg font-extrabold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
