import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/vending-machines", label: "Vending Machines" },
  { to: "/sports-entertainment", label: "Sports & Entertainment" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-full px-5 lg:px-7 transition-all duration-500 ${
            scrolled
              ? "glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] py-2.5"
              : "py-3"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Munch Machine Vending home">
            <div className="relative grid place-items-center w-9 h-9 rounded-xl bg-[var(--gradient-primary)] text-primary-foreground font-display font-extrabold">
              M
              <span className="absolute inset-0 rounded-xl bg-primary/40 blur-lg opacity-60 group-hover:opacity-100 transition" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display font-extrabold tracking-tight text-[15px]">Munch Machine</span>
              <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Vending Ltd</span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="relative px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground group"
              >
                {item.label}
                <span className="absolute left-3.5 right-3.5 -bottom-px h-px scale-x-0 group-data-[status=active]:scale-x-100 origin-left bg-primary transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+447944947419"
              className="hidden md:inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              +44 7944 947419
            </a>
            <Link to="/contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-[13px]">
              Get a Free Quote
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="xl:hidden p-2.5 rounded-full glass"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden mt-3 glass rounded-3xl p-4 animate-fade-in">
            <nav className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm hover:bg-surface transition data-[status=active]:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3"
              >
                Get a Free Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
