import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plus } from "lucide-react";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Munch Machine Vending" },
      { name: "description", content: "Frequently asked questions about vending machine installation, costs, payments, maintenance and managed service from Munch Machine Vending." },
      { property: "og:title", content: "FAQs | Munch Machine Vending" },
      { property: "og:description", content: "Answers to common questions about our vending and entertainment service." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Page,
});

const faqs = [
  { q: "Is there really no upfront cost?", a: "For qualifying businesses, yes — installation, delivery and the machine itself come at no upfront cost. You pay for products and we handle the rest." },
  { q: "Which areas do you cover?", a: "We supply, install and maintain machines throughout London and Essex, with selected coverage in surrounding home counties." },
  { q: "What payment methods do your machines support?", a: "All machines come with contactless, chip & PIN, Apple Pay and Google Pay as standard. Coin and note acceptors are available where required." },
  { q: "Who restocks the machine?", a: "We do. As part of our fully managed service, our team curates the range, monitors stock and refills on a schedule that matches your demand." },
  { q: "What happens if a machine breaks?", a: "Report it once and we respond fast — typically same-day across London and Essex, with engineers on-site within hours where possible." },
  { q: "Can you offer healthier ranges?", a: "Absolutely. We can build healthier-only, balanced or category-specific ranges including protein, low-sugar, vegan and gluten-free options." },
  { q: "Do you supply entertainment machines too?", a: "Yes — air hockey, basketball, foosball, arcade cabinets, claw and prize machines. Often supplied alongside vending for hotels, student accommodation and leisure venues." },
  { q: "How long does installation take?", a: "Most single-machine installs are completed within a couple of hours, including testing and a handover with your team." },
];

function Page() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell>
      <PageHero
        kicker="FAQs"
        title={<>Everything you need <span className="text-gradient">to know.</span></>}
        subtitle="If your question isn't here, our team will happily answer it — usually within the hour."
      >
        <Link to="/contact" className="btn-primary">Ask a question <ArrowRight className="w-4 h-4" /></Link>
      </PageHero>

      <section className="pb-32">
        <div className="container-x max-w-3xl">
          <ul className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="rounded-2xl border border-border bg-surface overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 text-left p-6 hover:bg-surface-elevated transition"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-extrabold text-lg">{f.q}</span>
                    <Plus className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
