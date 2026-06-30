import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react";
import logoAsset from "@/assets/uploads/logo-main.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border overflow-hidden">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/10 blur-[180px] pointer-events-none" aria-hidden="true" />

      <div className="container-x relative py-24">
        {/* CTA banner */}
        <div className="card-glass p-10 lg:p-14 mb-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="kicker">Ready when you are</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.05]">A premium service, <span className="text-gradient">arranged in a single call.</span></h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">Site survey, equipment recommendation and a fully-managed proposal — at no upfront cost to qualifying businesses.</p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">Get a free quote <ArrowRight className="w-4 h-4" /></Link>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr]">
          <div>
            <Link to="/" className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-border bg-surface shadow-[var(--shadow-soft)] shrink-0">
                <img src={logoAsset.url} alt="Munch Machine Vending Ltd logo" width={112} height={112} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-extrabold text-xl">Munch Machine</span>
                <span className="text-[10px] tracking-[0.32em] text-muted-foreground uppercase">Vending Ltd · Est. London</span>
              </div>
            </Link>
            <p className="mt-7 text-sm text-muted-foreground max-w-md leading-relaxed">
              Premium vending and interactive entertainment, installed and maintained across
              London &amp; Essex. A fully managed service — with no upfront cost for qualifying
              businesses.
            </p>
            <div className="mt-7 flex gap-2.5">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-11 h-11 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Solutions" links={[
            ["Snack Vending", "/vending-machines"],
            ["Drink Vending", "/vending-machines"],
            ["Combination Machines", "/vending-machines"],
            ["Bean-to-Cup Coffee", "/vending-machines"],
            ["Interactive Entertainment", "/sports-entertainment"],
            ["Fully Managed Service", "/about"],
          ]} />

          <FooterCol title="Industries" links={[
            ["Hotels", "/industries"],
            ["Gyms", "/industries"],
            ["Offices", "/industries"],
            ["Warehouses", "/industries"],
            ["Hospitals", "/industries"],
            ["Construction", "/industries"],
          ]} />

          <div>
            <h4 className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-6">Speak to us</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="tel:+447944947419" className="hover:text-primary transition">+44 7944 947419</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:munchmachinevending.ltd@yahoo.com" className="hover:text-primary transition break-all">munchmachinevending.ltd@yahoo.com</a>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                Serving London &amp; Essex · Mon–Sat
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Munch Machine Vending Ltd. All rights reserved.</p>
          <div className="flex gap-7">
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href="#" className="hover:text-foreground transition">Terms</a>
            <a href="#" className="hover:text-foreground transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-6">{title}</h4>
      <ul className="space-y-3.5 text-sm">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-muted-foreground hover:text-primary transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
