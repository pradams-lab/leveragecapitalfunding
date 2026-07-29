import { useMemo, useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { ArrowRight, Clock, Percent } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { formatBRL, useI18n } from "@/lib/i18n";

const MIN = 25000;
const MAX = 1000000;

export function Calculator() {
  const { t, lang } = useI18n();
  const [amount, setAmount] = useState(250000);
  const [term, setTerm] = useState(12);

  const { total, installment } = useMemo(() => {
    const factor = 1.12 + (term - 3) * 0.012;
    const totalValue = Math.round((amount * factor) / 100) * 100;
    return { total: totalValue, installment: Math.round(totalValue / term) };
  }, [amount, term]);

  return (
    <section id="simulador" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{t.calc.tag}</p>
          <h2 className="mt-5 text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.7rem]">
            {t.calc.headline}
          </h2>
          <p className="text-muted-foreground mt-5 text-base leading-relaxed">{t.calc.sub}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-panel mt-12 grid gap-10 rounded-3xl p-7 sm:p-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
            <div className="space-y-12">
              <SliderRow
                label={t.calc.amount}
                display={`${formatBRL(amount, lang)}${amount >= MAX ? "+" : ""}`}
                value={amount}
                min={MIN}
                max={MAX}
                step={5000}
                onChange={setAmount}
                minLabel={formatBRL(MIN, lang)}
                maxLabel={`${formatBRL(MAX, lang)}+`}
              />
              <SliderRow
                label={t.calc.term}
                display={`${term} ${t.calc.months}`}
                value={term}
                min={3}
                max={18}
                step={1}
                onChange={setTerm}
                minLabel={`3 ${t.calc.months}`}
                maxLabel={`18 ${t.calc.months}`}
              />
            </div>

            <div className="border-border bg-background/50 rounded-2xl border p-7">
              <div className="flex items-start gap-3">
                <Clock className="text-primary mt-0.5 h-4.5 w-4.5 shrink-0" />
                <div>
                  <p className="text-muted-foreground text-[0.7rem] font-semibold tracking-wide uppercase">
                    {t.calc.release}
                  </p>
                  <p className="mt-1 text-lg font-bold">{t.calc.releaseValue}</p>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <Percent className="text-primary mt-0.5 h-4.5 w-4.5 shrink-0" />
                <p className="text-foreground/90 text-sm font-semibold">{t.calc.rate}</p>
              </div>

              <div className="border-border mt-7 space-y-5 border-t pt-7">
                <div>
                  <p className="text-muted-foreground text-[0.7rem] font-semibold tracking-wide uppercase">
                    {t.calc.installment}
                  </p>
                  <p className="font-display text-gold mt-1 text-2xl font-extrabold">
                    {formatBRL(installment, lang)}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[0.7rem] font-semibold tracking-wide uppercase">
                    {t.calc.total}
                  </p>
                  <p className="font-display mt-1 text-xl font-bold">{formatBRL(total, lang)}</p>
                </div>
              </div>

              <a
                href="#solicitar"
                className="group bg-[image:var(--gradient-gold)] text-primary-foreground mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold tracking-wide shadow-[var(--shadow-gold)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t.calc.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <p className="text-muted-foreground mt-4 text-[0.68rem] leading-relaxed">
                {t.calc.disclaimer}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SliderRow({
  label,
  display,
  value,
  min,
  max,
  step,
  onChange,
  minLabel,
  maxLabel,
}: {
  label: string;
  display: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  minLabel: string;
  maxLabel: string;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-muted-foreground text-[0.72rem] font-bold tracking-[0.16em] uppercase">
          {label}
        </span>
        <span className="font-display text-gold text-2xl font-extrabold sm:text-3xl">
          {display}
        </span>
      </div>
      <Slider.Root
        className="relative mt-6 flex h-5 w-full touch-none items-center select-none"
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={([v]) => onChange(v)}
        aria-label={label}
      >
        <Slider.Track className="bg-secondary relative h-1.5 w-full grow overflow-hidden rounded-full">
          <Slider.Range className="absolute h-full bg-[image:var(--gradient-gold)]" />
        </Slider.Track>
        <Slider.Thumb className="border-primary bg-background block h-5 w-5 rounded-full border-2 shadow-[var(--shadow-gold)] transition-transform duration-200 hover:scale-110 focus-visible:ring-4 focus-visible:ring-[var(--ring)] focus-visible:outline-none" />
      </Slider.Root>
      <div className="text-muted-foreground mt-3 flex justify-between text-[0.7rem] font-medium">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}
