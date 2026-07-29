import { cn } from "@/lib/utils";

/** The Leverage Capital Funding mark: an ascending chart arrow rendered in brand gold. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-8 w-8", className)} aria-hidden="true">
      <defs>
        <linearGradient id="lcf-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.11 74)" />
          <stop offset="50%" stopColor="oklch(0.92 0.09 92)" />
          <stop offset="100%" stopColor="oklch(0.7 0.11 72)" />
        </linearGradient>
      </defs>
      <g fill="url(#lcf-gold)">
        <path d="M10 6h9v34h-9z" />
        <path d="M10 44h9l10 9H10z" opacity="0.9" />
        <path d="M22 46h30l-7 8H29z" />
        <path d="M26 32l9-9 7 7 9-11-4-1 12-4-3 12-3-3-11 14-7-7-6 6z" />
      </g>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-[0.82rem] leading-tight font-semibold tracking-[0.16em] uppercase",
        className,
      )}
    >
      <span className="text-foreground">Leverage </span>
      <span className="text-gold">Capital Funding</span>
    </span>
  );
}

export function BrandLock({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-7 w-7 shrink-0" />
      <Wordmark />
    </span>
  );
}

export function BBBBadge({ label }: { label: string }) {
  return (
    <span className="border-border bg-surface/70 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur">
      <svg viewBox="0 0 24 24" className="text-primary h-4 w-4" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2l8 3v6.2c0 4.9-3.3 9.2-8 10.8-4.7-1.6-8-5.9-8-10.8V5l8-3z"
          opacity=".18"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          d="M12 2.9l7.1 2.7v5.6c0 4.4-2.9 8.3-7.1 9.8-4.2-1.5-7.1-5.4-7.1-9.8V5.6L12 2.9z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          d="M8.6 12.1l2.3 2.3 4.5-4.6"
        />
      </svg>
      <span className="text-muted-foreground text-[0.72rem] font-semibold tracking-wide">
        {label}
      </span>
    </span>
  );
}

export function GoogleStars({ label }: { label: string }) {
  return (
    <span className="border-border bg-surface/70 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur">
      <span className="text-primary flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
            <path d="M10 1.6l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.4l-5 2.6.9-5.6-4-3.9 5.6-.8z" />
          </svg>
        ))}
      </span>
      <span className="text-muted-foreground text-[0.72rem] font-semibold tracking-wide">
        {label}
      </span>
    </span>
  );
}
