import { createFileRoute } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { useI18n, PHONE, PHONE_HREF } from "@/lib/i18n";

const title = "Como Funciona o MCA | Leverage Capital Funding";
const description =
  "Entenda o Adiantamento de Recebíveis (MCA): sem garantia física, pagamento proporcional ao faturamento e desembolso em até 24 horas.";

export const Route = createFileRoute("/como-funciona")({
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
  component: ComoFuncionaPage,
});

function ComoFuncionaPage() {
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
            <p className="eyebrow">{t.howPage.tag}</p>
            <h1 className="mt-5 text-3xl leading-[1.1] font-extrabold sm:text-4xl lg:text-[3rem]">
              {t.howPage.headline}
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
              {t.howPage.sub}
            </p>
          </div>
        </section>

        <section className="border-border bg-[image:var(--gradient-deep)] border-y py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <Reveal>
              <h2 className="text-3xl leading-[1.14] font-bold sm:text-4xl">
                {t.howPage.deepHeadline}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-muted-foreground leading-relaxed">{t.howPage.deepBody}</p>
              <ul className="mt-8 space-y-4">
                {t.howPage.bullets.map((b) => (
                  <li
                    key={b.title}
                    className="border-border bg-surface/50 flex gap-4 rounded-xl border p-5"
                  >
                    <span className="border-primary/30 bg-primary/10 text-primary mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold">{b.title}</h3>
                      <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow">{t.howPage.stepsTag}</p>
            </Reveal>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {t.howPage.steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 120} as="li">
                  <div className="surface-panel h-full rounded-2xl p-7">
                    <span className="font-display text-gold text-3xl font-extrabold">
                      0{i + 1}
                    </span>
                    <h3 className="mt-5 text-base leading-snug font-bold">{s.title}</h3>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={200}>
              <div className="surface-panel mt-16 flex flex-col items-center gap-6 rounded-3xl p-10 text-center">
                <h2 className="max-w-xl text-2xl font-bold sm:text-3xl">
                  {t.howPage.ctaHeadline}
                </h2>
                <a
                  href={PHONE_HREF}
                  className="bg-[image:var(--gradient-gold)] text-primary-foreground inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold tracking-wide shadow-[var(--shadow-gold)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  {t.howPage.ctaButton} ({PHONE})
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
