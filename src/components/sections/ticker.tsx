import { TrendingUp, Zap, ShieldCheck, Handshake } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [TrendingUp, Zap, ShieldCheck, Handshake];

export function Ticker() {
  const { t } = useI18n();
  const items = [...t.ticker, ...t.ticker];

  return (
    <section
      className="border-border bg-surface/40 relative overflow-hidden border-y py-4"
      aria-label="Metrics"
    >
      <div
        className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent"
        aria-hidden="true"
      />
      <div
        className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l to-transparent"
        aria-hidden="true"
      />
      <div className="animate-marquee flex w-max items-center gap-12 pr-12">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <span key={i} className="flex shrink-0 items-center gap-3">
              <Icon className="text-primary h-4 w-4" />
              <span className="text-foreground/85 text-[0.8rem] font-semibold tracking-wide whitespace-nowrap">
                {item}
              </span>
              <span className="bg-primary/40 ml-9 h-1 w-1 rounded-full" aria-hidden="true" />
            </span>
          );
        })}
      </div>
    </section>
  );
}
