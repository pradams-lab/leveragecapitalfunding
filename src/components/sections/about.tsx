import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();

  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <p className="eyebrow">{t.about.tag}</p>
          <h2 className="mt-5 text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.7rem]">
            {t.about.headline}
          </h2>
          <Link
            to="/sobre"
            className="text-primary group mt-8 inline-flex items-center gap-1.5 text-sm font-bold tracking-wide"
          >
            {t.about.link}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <div className="text-muted-foreground space-y-5 text-base leading-relaxed">
            <p>{t.about.body1}</p>
            <p>{t.about.body2}</p>
          </div>
          <div className="border-border mt-10 grid grid-cols-3 gap-4 border-t pt-8">
            {t.about.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-gold text-2xl font-extrabold sm:text-3xl">
                  {s.value}
                </p>
                <p className="text-muted-foreground mt-1.5 text-[0.72rem] leading-snug font-semibold tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
