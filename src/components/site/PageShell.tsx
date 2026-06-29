import type { ReactNode } from "react";
import { SiteNav, MobileCTABar } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteNav />
      <main id="main-content" className="pb-20 lg:pb-0">{children}</main>
      <SiteFooter />
      <MobileCTABar />
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  subtitle,
  children,
}: {
  kicker: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 [background:var(--gradient-hero)] pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[160px] pointer-events-none" aria-hidden="true" />
      <div className="container-x relative">
        <span className="kicker animate-fade-up">{kicker}</span>
        <h1
          className="mt-5 font-display text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.02] tracking-tight animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-9 animate-fade-up" style={{ animationDelay: "240ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

/** Section heading with consistent rhythm — replaces the eyebrow-pill repetition. */
export function SectionHeader({
  kicker,
  title,
  intro,
  align = "left",
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="kicker">{kicker}</span>
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.05]">
        {title}
      </h2>
      {intro && <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}

/**
 * Stylised SVG vending-machine silhouette for the homepage Range cards.
 * Replaces the heavy dashed "PHOTO PLACEHOLDER" boxes with a designed
 * icon-art approach that holds the layout while real product photography
 * is sourced.
 */
export function MachineSilhouette({ variant }: { variant: "small" | "medium" | "large" }) {
  const heights = { small: 0.7, medium: 0.85, large: 0.95 };
  const h = heights[variant];
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-[radial-gradient(circle_at_50%_20%,oklch(0.72_0.17_50_/_0.18),transparent_60%),var(--color-surface-elevated)]" style={{ aspectRatio: "4/5" }}>
      <div className="absolute inset-0 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:40px_40px] opacity-25" aria-hidden="true" />
      <svg viewBox="0 0 120 150" className="absolute inset-0 h-full w-full p-8" aria-hidden="true">
        <defs>
          <linearGradient id={`glass-${variant}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.3 0.01 30)" />
            <stop offset="100%" stopColor="oklch(0.18 0.005 30)" />
          </linearGradient>
        </defs>
        {/* body */}
        <rect x="20" y={150 - 150 * h} width="80" height={150 * h - 5} rx="4" fill="oklch(0.245 0.006 30)" stroke="oklch(1 0 0 / 0.1)" />
        {/* glass */}
        <rect x="26" y={150 - 150 * h + 6} width="50" height={150 * h - 30} rx="2" fill={`url(#glass-${variant})`} stroke="oklch(1 0 0 / 0.06)" />
        {/* shelves */}
        {Array.from({ length: variant === "small" ? 3 : variant === "medium" ? 5 : 7 }).map((_, i) => {
          const top = 150 - 150 * h + 12 + i * ((150 * h - 42) / (variant === "small" ? 3 : variant === "medium" ? 5 : 7));
          return <line key={i} x1="28" y1={top} x2="74" y2={top} stroke="oklch(1 0 0 / 0.08)" strokeWidth="0.5" />;
        })}
        {/* control panel */}
        <rect x="80" y={150 - 150 * h + 6} width="16" height={150 * h - 50} rx="2" fill="oklch(0.18 0.005 30)" stroke="oklch(1 0 0 / 0.06)" />
        <circle cx="88" cy={150 - 150 * h + 16} r="1.8" fill="oklch(0.72 0.17 50)" />
        <circle cx="88" cy={150 - 150 * h + 22} r="1.2" fill="oklch(0.4 0.04 50)" />
        <rect x="83" y={150 - 150 * h + 32} width="10" height="14" rx="1" fill="oklch(0.13 0.005 30)" />
        {/* dispenser */}
        <rect x="26" y={150 - 22} width="50" height="12" rx="1.5" fill="oklch(0.13 0.005 30)" stroke="oklch(1 0 0 / 0.06)" />
        {/* glow */}
        <circle cx="60" cy={150 - 150 * h + 10} r="1.5" fill="oklch(0.72 0.17 50)" opacity="0.7" />
      </svg>
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.28em] uppercase text-muted-foreground/60">{variant}</span>
    </div>
  );
}

/**
 * Reserved spot for real product photography on internal pages where the
 * brief explicitly forbids AI-generated machine imagery.
 */
export function PhotoPlaceholder({
  label,
  ratio = "4/5",
  hint,
}: {
  label: string;
  ratio?: string;
  hint?: string;
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface-elevated"
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.72_0.17_50_/_0.1),transparent_60%)]" />
      <div className="absolute inset-0 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
      <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
        <span className="text-[9px] tracking-[0.3em] uppercase text-primary/80 mb-2">Product photo</span>
        <p className="font-display font-extrabold text-base leading-tight max-w-[16rem]">{label}</p>
        {hint && <p className="mt-2 text-xs text-muted-foreground max-w-[18rem]">{hint}</p>}
      </div>
    </div>
  );
}
