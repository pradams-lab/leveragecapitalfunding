import { Quote, BadgeCheck, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section id="depoimentos" className="bg-[image:var(--gradient-deep)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{t.testimonials.tag}</p>
          <h2 className="mt-5 text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.7rem]">
            {t.testimonials.headline}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {t.testimonials.items.map((item, i) => (
            <Reveal key={item.author} delay={i * 120}>
              <figure className="surface-panel relative h-full rounded-2xl p-8 transition-transform duration-500 hover:-translate-y-1.5">
                <Quote className="text-primary/25 h-9 w-9" />
                <blockquote className="mt-5 text-base leading-relaxed font-medium">
                  “{item.quote}”
                </blockquote>
                <figcaption className="border-border mt-7 flex items-center justify-between gap-4 border-t pt-6">
                  <div>
                    <p className="text-sm font-bold">{item.author}</p>
                    <p className="text-muted-foreground mt-1 text-xs">{item.role}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-primary flex justify-end gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </span>
                    <span className="text-muted-foreground mt-1.5 inline-flex items-center gap-1 text-[0.68rem] font-semibold">
                      <BadgeCheck className="text-success h-3.5 w-3.5" />
                      {t.testimonials.verified}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
