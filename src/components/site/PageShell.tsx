import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 [background:var(--gradient-hero)] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[160px] pointer-events-none" />
      <div className="container-x relative">
        <span className="eyebrow animate-fade-up">{eyebrow}</span>
        <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.02] animate-fade-up" style={{ animationDelay: "80ms" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "160ms" }}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10 animate-fade-up" style={{ animationDelay: "240ms" }}>{children}</div>}
      </div>
    </section>
  );
}

/**
 * Use for any spot where a real product photograph is required.
 * Renders an elegant, clearly-marked area instead of fake imagery.
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
      className="relative w-full overflow-hidden rounded-3xl border border-dashed border-primary/30 bg-surface"
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-primary)/10,transparent_60%)] opacity-40" />
      <div className="absolute inset-0 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
      <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
        <span className="text-[10px] tracking-[0.3em] uppercase text-primary/80 mb-3">Photo placeholder</span>
        <p className="font-display font-extrabold text-lg leading-tight max-w-[16rem]">{label}</p>
        {hint && <p className="mt-2 text-xs text-muted-foreground max-w-[18rem]">{hint}</p>}
      </div>
    </div>
  );
}
