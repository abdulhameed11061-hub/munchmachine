import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Check, Clock, ShieldCheck } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Munch Machine Vending" },
      { name: "description", content: "Get a free vending or entertainment machine quote. Call +44 7944 947419 or email munchmachinevending.ltd@yahoo.com. We reply within one working day." },
      { property: "og:title", content: "Contact | Munch Machine Vending" },
      { property: "og:description", content: "Talk to our team about a free site survey and quote." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Munch Machine Vending Ltd",
          mainEntity: {
            "@type": "LocalBusiness",
            name: "Munch Machine Vending Ltd",
            telephone: "+44 7944 947419",
            email: "munchmachinevending.ltd@yahoo.com",
            areaServed: ["London", "Essex"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+44 7944 947419",
              contactType: "sales",
              areaServed: "GB",
              availableLanguage: "English",
            },
          },
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero
        kicker="Contact"
        title={<>Let's design your <span className="text-accent">better break.</span></>}
        subtitle="Tell us about your site and we'll come back with a tailored recommendation — typically within one working day."
      >
        <TrustStrip />
      </PageHero>

      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-[1.3fr_1fr] gap-8">
          {/* Form */}
          <div className="p-7 lg:p-10 rounded-3xl border border-border bg-surface">
            {sent ? (
              <div className="text-center py-16">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/15 border border-primary/30 grid place-items-center text-primary">
                  <Check className="w-6 h-6" aria-hidden="true" />
                </div>
                <h2 className="mt-6 text-3xl font-extrabold">Thank you</h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  We've received your enquiry and will be in touch within one working day. For
                  anything urgent please call <a href="tel:+447944947419" className="text-primary">+44 7944 947419</a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
                aria-label="Quote enquiry form"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name" name="name" required />
                  <Field label="Company" name="company" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <Field label="Site address (city / postcode)" name="postcode" />
                <div>
                  <label htmlFor="interest" className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2 font-semibold">What are you interested in?</label>
                  <select id="interest" name="interest" className="input-field">
                    {["Vending machines", "Coffee machines", "Sports & entertainment", "Combination — vending + entertainment", "Not sure yet"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2 font-semibold">Tell us about your site</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Type of business, headcount, location, anything specific…"
                    className="input-field resize-none"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-1">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Request a free quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Free survey · No obligation · Reply within 1 working day
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-3" aria-label="Contact details">
            <ContactCard icon={Phone} label="Call us" value="+44 7944 947419" href="tel:+447944947419" sub="Mon–Fri 8am–6pm" />
            <ContactCard icon={Mail} label="Email us" value="munchmachinevending.ltd@yahoo.com" href="mailto:munchmachinevending.ltd@yahoo.com" sub="We reply within 1 working day" />
            <ContactCard icon={MapPin} label="Coverage" value="London & Essex" sub="And surrounding home counties" />
            <div className="p-6 rounded-3xl border border-primary/30 bg-primary/5">
              <div className="flex items-center gap-2 text-primary mb-2">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span className="kicker !text-primary">No upfront cost</span>
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">
                Qualifying businesses pay nothing to install. The machine, the delivery and the
                fitting are on us.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

function TrustStrip() {
  const items = [
    { icon: Clock, t: "Reply within 1 working day" },
    { icon: ShieldCheck, t: "Free survey, no obligation" },
    { icon: Check, t: "No upfront cost for qualifying sites" },
  ];
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
      {items.map((i) => (
        <li key={i.t} className="flex items-center gap-2 text-muted-foreground">
          <i.icon className="w-4 h-4 text-primary" aria-hidden="true" />
          {i.t}
        </li>
      ))}
    </ul>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2 font-semibold">
        {label}{required && " *"}
      </label>
      <input id={name} name={name} type={type} required={required} className="input-field" />
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, sub, href }: { icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>; label: string; value: string; sub?: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-surface hover-lift">
      <div className="w-10 h-10 rounded-xl grid place-items-center bg-primary/10 border border-primary/20 text-primary shrink-0">
        <Icon className="w-4 h-4" aria-hidden={true} />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">{label}</div>
        <div className="mt-1 font-semibold break-words">{value}</div>
        {sub && <div className="mt-0.5 text-xs text-muted-foreground">{sub}</div>}
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}
