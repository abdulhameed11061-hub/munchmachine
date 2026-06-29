import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Check } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Munch Machine Vending" },
      { name: "description", content: "Get a free vending or entertainment machine quote. Call +44 7944 947419 or email munchmachinevending.ltd@yahoo.com." },
      { property: "og:title", content: "Contact | Munch Machine Vending" },
      { property: "og:description", content: "Talk to our team about a free site survey and quote." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={<>Let's design your <span className="text-gradient">break.</span></>}
        subtitle="Tell us about your site and we'll come back with a tailored recommendation — typically within one working day."
      />

      <section className="pb-32">
        <div className="container-x grid lg:grid-cols-[1.3fr_1fr] gap-10">
          {/* Form */}
          <div className="p-8 lg:p-10 rounded-3xl border border-border bg-surface">
            {sent ? (
              <div className="text-center py-16">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/15 border border-primary/30 grid place-items-center text-primary">
                  <Check className="w-6 h-6" />
                </div>
                <h2 className="mt-6 text-3xl font-extrabold">Thank you</h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  We've received your enquiry and will be in touch shortly. For anything urgent,
                  please call <a href="tel:+447944947419" className="text-primary">+44 7944 947419</a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
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
                  <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">What are you interested in?</label>
                  <select
                    name="interest"
                    className="w-full bg-surface-elevated border border-input rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition"
                  >
                    {["Vending machines", "Coffee machines", "Sports & entertainment", "Combination — vending + entertainment", "Not sure yet"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Tell us about your site</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Type of business, headcount, location, anything specific…"
                    className="w-full bg-surface-elevated border border-input rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Request a free quote <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-muted-foreground">
                  By submitting this form you agree to be contacted about your enquiry. We will not share your details.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <ContactCard icon={Phone} label="Call us" value="+44 7944 947419" href="tel:+447944947419" />
            <ContactCard icon={Mail} label="Email us" value="munchmachinevending.ltd@yahoo.com" href="mailto:munchmachinevending.ltd@yahoo.com" />
            <ContactCard icon={MapPin} label="Coverage" value="London & Essex (and surrounding home counties)" />
            <div className="p-7 rounded-3xl border border-primary/30 bg-primary/5">
              <h3 className="font-extrabold text-lg">No upfront cost</h3>
              <p className="mt-2 text-sm text-muted-foreground">
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

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-surface-elevated border border-input rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition"
      />
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 p-6 rounded-3xl border border-border bg-surface hover-lift">
      <div className="w-11 h-11 rounded-xl grid place-items-center bg-primary/10 border border-primary/20 text-primary shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="mt-1 font-semibold break-all">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
