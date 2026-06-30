import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import logoAsset from "@/assets/uploads/logo-main.png.asset.json";

const nav = [
  { to: "/", label: "Home", short: "Home" },
  { to: "/vending-machines", label: "Vending", short: "Vending" },
  { to: "/sports-entertainment", label: "Entertainment", short: "Play" },
  { to: "/industries", label: "Industries", short: "Industries" },
  { to: "/about", label: "About", short: "About" },
  { to: "/gallery", label: "Gallery", short: "Gallery" },
  { to: "/faqs", label: "FAQs", short: "FAQs" },
  { to: "/contact", label: "Contact", short: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2.5" : "py-4"}`}
      >
        <div className="container-x">
          <div
            className={`flex items-center justify-between rounded-full pl-4 pr-2 lg:pl-6 lg:pr-2.5 transition-all duration-500 ${
              scrolled ? "glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] py-2" : "py-2.5 glass/0"
            } ${scrolled ? "" : "border border-transparent"}`}
          >
            <Link to="/" className="flex items-center gap-3 group min-w-0" aria-label="Munch Machine Vending home">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border bg-surface shrink-0 shadow-[var(--shadow-soft)]">
                <img src={logoAsset.url} alt="Munch Machine Vending Ltd logo" width={80} height={80} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col leading-none min-w-0">
                <span className="font-display font-extrabold tracking-tight text-[14px] truncate">Munch Machine</span>
                <span className="text-[9px] tracking-[0.28em] text-muted-foreground uppercase">Vending Ltd</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="relative px-3 py-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground whitespace-nowrap group"
                >
                  <span className="hidden xl:inline">{item.label}</span>
                  <span className="xl:hidden">{item.short}</span>
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px scale-x-0 group-data-[status=active]:scale-x-100 origin-left bg-primary transition-transform duration-300" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href="tel:+447944947419"
                className="hidden xl:inline-flex items-center gap-1.5 text-[12px] text-muted-foreground hover:text-foreground transition whitespace-nowrap pr-2"
                aria-label="Call +44 7944 947419"
              >
                <Phone className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                +44 7944 947419
              </a>
              <Link
                to="/contact"
                className="hidden sm:inline-flex btn-primary !py-2.5 !px-4 !text-[12px] !font-semibold"
              >
                Get a Quote <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <button
                onClick={() => setOpen((o) => !o)}
                className="lg:hidden p-2.5 rounded-full glass min-h-[44px] min-w-[44px] grid place-items-center"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X className="w-4 h-4" aria-hidden="true" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="lg:hidden mt-3 glass rounded-3xl p-3 animate-fade-in">
              <nav className="flex flex-col" aria-label="Mobile primary">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    className="px-4 py-3.5 rounded-2xl text-sm hover:bg-surface transition data-[status=active]:text-primary data-[status=active]:bg-surface"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <a href="tel:+447944947419" className="btn-ghost !text-sm" onClick={() => setOpen(false)}>
                    <Phone className="w-4 h-4" aria-hidden="true" /> Call
                  </a>
                  <Link to="/contact" className="btn-primary !text-sm" onClick={() => setOpen(false)}>
                    Get a Quote
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

/** Sticky bottom CTA bar — mobile only. */
export function MobileCTABar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 px-3 pb-3 pt-2 pointer-events-none">
      <div className="glass rounded-full p-1.5 grid grid-cols-2 gap-1.5 pointer-events-auto shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.6)]">
        <a href="tel:+447944947419" className="flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold border border-border bg-surface">
          <Phone className="w-4 h-4 text-primary" aria-hidden="true" /> Call
        </a>
        <Link to="/contact" className="flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold bg-[var(--gradient-primary)] text-primary-foreground">
          Get a Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
