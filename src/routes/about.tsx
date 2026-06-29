import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Munch Machine Vending Ltd" },
      { name: "description", content: "Munch Machine Vending Ltd supplies, installs and maintains premium vending and entertainment machines across London and Essex." },
      { property: "og:title", content: "About | Munch Machine Vending" },
      { property: "og:description", content: "A fully managed vending and entertainment partner for London and Essex businesses." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageHero
        kicker="About"
        title={<>A quietly excellent <span className="text-gradient">vending partner.</span></>}
        subtitle="We supply, install, stock and maintain commercial vending and interactive entertainment machines across London and Essex — as a fully managed service."
      />

      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="eyebrow">Our approach</span>
            <h2 className="mt-5 text-4xl md:text-5xl">Premium kit. Quiet service.</h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Munch Machine Vending Ltd was built on a single, stubborn idea: that the
              vending machine in your hotel lobby, break room or student common room should
              look like it belongs there — and never, ever let you down.
            </p>
            <p>
              We install premium, modern equipment and back it with a fully managed service.
              Stocking, cleaning, payments, telemetry and rapid-response engineering — all
              handled by us, all included.
            </p>
            <p>
              For qualifying businesses there is no upfront cost. You get a beautifully sited
              machine, the right range for your audience, and a single point of contact
              who actually picks up the phone.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 pt-4">
              {["No upfront cost", "Free installation", "Cashless ready", "Healthy ranges available", "24/7 support", "London & Essex coverage"].map((x) => (
                <li key={x} className="flex gap-2 text-foreground text-sm"><Check className="w-4 h-4 text-primary mt-0.5" />{x}</li>
              ))}
            </ul>
            <div className="pt-4">
              <Link to="/contact" className="btn-primary">Start a conversation <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface/40 border-y border-border">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ["12+", "Years in the trade"],
            ["£0", "Upfront cost"],
            ["24/7", "Engineer response"],
            ["100%", "Managed service"],
          ].map(([n, l]) => (
            <div key={l} className="p-8 rounded-3xl border border-border bg-surface text-center">
              <div className="font-display text-5xl font-extrabold text-gradient">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
