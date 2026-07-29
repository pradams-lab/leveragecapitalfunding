import { ArrowRight, Lock, TrendingUp } from "lucide-react";
import { BBBBadge, GoogleStars } from "@/components/brand";
import { useI18n, PHONE, PHONE_HREF } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-halo)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,oklch(1_0_0/6%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/6%)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(70%_60%_at_50%_0%,#000,transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <BBBBadge label={t.hero.bbb} />
            <GoogleStars label={t.hero.google} />
            <a
              href={PHONE_HREF}
              className="border-primary/40 bg-primary/10 text-primary hover:bg-primary/15 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.72rem] font-bold tracking-wide transition-colors"
            >
              {PHONE}
              <span className="text-primary/60 font-medium">· {t.hero.phoneTab}</span>
            </a>
          </div>

          <h1 className="mt-8 text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-[3.6rem]">
            {t.hero.headline}
          </h1>

          <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
            {t.hero.sub}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#simulador"
              className="group bg-[image:var(--gradient-gold)] text-primary-foreground inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold tracking-wide shadow-[var(--shadow-gold)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t.hero.primary}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={PHONE_HREF}
              className="border-border-strong text-foreground hover:bg-surface inline-flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-sm font-bold tracking-wide transition-colors duration-300"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="bg-primary/20 absolute -inset-6 rounded-[2rem] blur-3xl"
            aria-hidden="true"
          />
          <div className="surface-panel relative rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="eyebrow">{t.hero.panelTitle}</span>
              <span className="bg-success/15 text-success inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.68rem] font-bold">
                <span className="bg-success h-1.5 w-1.5 animate-pulse rounded-full" />
                {t.hero.panelStatus}
              </span>
            </div>

            <div className="mt-7">
              <p className="text-muted-foreground text-xs font-semibold tracking-wide">
                {t.hero.panelAmount}
              </p>
              <p className="font-display mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
                <span className="text-gold">R$ 250.000</span>
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="border-border bg-background/40 rounded-xl border p-4">
                <p className="text-muted-foreground text-[0.68rem] font-semibold tracking-wide uppercase">
                  {t.hero.panelTerm}
                </p>
                <p className="mt-1.5 text-sm font-bold">{t.hero.panelTermValue}</p>
              </div>
              <div className="border-border bg-background/40 rounded-xl border p-4">
                <p className="text-muted-foreground text-[0.68rem] font-semibold tracking-wide uppercase">
                  {t.hero.panelRelease}
                </p>
                <p className="text-primary mt-1.5 text-sm font-bold">
                  {t.hero.panelReleaseValue}
                </p>
              </div>
            </div>

            <div className="border-border mt-7 flex items-end gap-1.5 border-t pt-6">
              {[38, 52, 45, 68, 61, 82, 74, 96].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-[image:var(--gradient-gold)] opacity-80"
                  style={{ height: `${h * 0.6}px` }}
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-muted-foreground inline-flex items-center gap-1.5 text-[0.68rem]">
                <Lock className="h-3 w-3" /> {t.hero.panelNote}
              </span>
              <TrendingUp className="text-primary h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
