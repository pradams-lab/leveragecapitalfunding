import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, Zap, UserCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

const title = "Sobre Nós | Leverage Capital Funding";
const description =
  "Infraestrutura financeira sólida para empresas que movem o mercado: transparência absoluta, agilidade operacional e proteção total do seu equity.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobrePage,
});

const icons = [ShieldCheck, Zap, UserCheck];

function SobrePage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44">
          <div
            className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-halo)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
            <p className="eyebrow">{t.aboutPage.tag}</p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-[3.4rem]">
              {t.aboutPage.headline}
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
              {t.aboutPage.sub}
            </p>
          </div>
        </section>

        <section className="border-border bg-[image:var(--gradient-deep)] border-y py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <Reveal>
              <h2 className="text-3xl leading-[1.14] font-bold sm:text-4xl">
                {t.aboutPage.missionHeadline}
              </h2>
            </Reveal>
            <Reveal delay={120} className="text-muted-foreground space-y-5 leading-relaxed">
              <p>{t.aboutPage.missionBody1}</p>
              <p>{t.aboutPage.missionBody2}</p>
            </Reveal>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow">{t.aboutPage.pillarsTag}</p>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {t.aboutPage.pillars.map((p, i) => {
                const Icon = icons[i];
                return (
                  <Reveal key={p.title} delay={i * 120}>
                    <article className="surface-panel h-full rounded-2xl p-7 transition-transform duration-500 hover:-translate-y-1.5">
                      <span className="border-primary/30 bg-primary/10 text-primary inline-flex h-11 w-11 items-center justify-center rounded-xl border">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-6 text-lg font-bold">{p.title}</h3>
                      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                        {p.desc}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <Link
              to="/"
              className="text-primary mt-14 inline-flex items-center gap-2 text-sm font-bold"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.common.back}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
