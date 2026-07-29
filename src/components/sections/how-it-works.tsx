import { Link } from "@tanstack/react-router";
import { ArrowUpRight, FileText, SearchCheck, Banknote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

const icons = [FileText, SearchCheck, Banknote];

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="como-funciona" className="bg-[image:var(--gradient-deep)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{t.how.tag}</p>
          <h2 className="mt-5 text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.7rem]">
            {t.how.headline}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.how.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={card.title} delay={i * 120}>
                <article className="surface-panel group relative h-full overflow-hidden rounded-2xl p-7 transition-transform duration-500 hover:-translate-y-1.5">
                  <div
                    className="pointer-events-none absolute inset-x-0 -top-px h-px bg-[image:var(--gradient-gold)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between">
                    <span className="border-primary/30 bg-primary/10 text-primary inline-flex h-11 w-11 items-center justify-center rounded-xl border">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-foreground/10 text-4xl font-extrabold">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg leading-snug font-bold">{card.title}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <Link
            to="/como-funciona"
            className="text-primary group mt-12 inline-flex items-center gap-1.5 text-sm font-bold tracking-wide"
          >
            {t.how.link}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
