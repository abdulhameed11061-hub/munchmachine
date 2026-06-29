import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface/40">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container-x py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="grid place-items-center w-10 h-10 rounded-xl bg-[var(--gradient-primary)] text-primary-foreground font-display font-extrabold">M</div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-extrabold text-base">Munch Machine</span>
                <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Vending Ltd</span>
              </div>
            </Link>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Premium vending and interactive entertainment solutions, installed and maintained
              across London and Essex. A fully managed service with no upfront cost for
              qualifying businesses.
            </p>
            <div className="mt-6 flex gap-2.5">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition" aria-label="Social link">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Services" links={[
            ["Snack Vending", "/vending-machines"],
            ["Drink Vending", "/vending-machines"],
            ["Coffee Solutions", "/vending-machines"],
            ["Sports & Entertainment", "/sports-entertainment"],
            ["Fully Managed Service", "/about"],
            ["Cashless Payments", "/about"],
          ]} />

          <FooterCol title="Industries" links={[
            ["Hotels", "/industries"],
            ["Gyms", "/industries"],
            ["Offices", "/industries"],
            ["Construction", "/industries"],
            ["Student Accommodation", "/industries"],
            ["Warehouses", "/industries"],
          ]} />

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">Get in touch</h4>
            <ul className="space-y-4 text-sm">
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
                Serving London &amp; Essex
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Munch Machine Vending Ltd. All rights reserved.</p>
          <div className="flex gap-6">
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
      <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">{title}</h4>
      <ul className="space-y-3 text-sm">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-muted-foreground hover:text-foreground transition">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
