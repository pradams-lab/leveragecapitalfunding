import { Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, BadgeCheck } from "lucide-react";
import { LogoMark } from "@/components/brand";
import { useI18n, PHONE, PHONE_HREF } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-border bg-[image:var(--gradient-deep)] border-t">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-9 w-9" />
            <span className="font-display text-sm font-semibold tracking-[0.14em] uppercase">
              Leverage <span className="text-gold">Capital Funding</span>
            </span>
          </div>
          <p className="text-muted-foreground mt-5 max-w-xs text-sm leading-relaxed">
            {t.footer.tagline}
          </p>
          <a
            href={PHONE_HREF}
            className="text-foreground hover:text-primary mt-6 inline-flex items-center gap-2 text-sm font-bold transition-colors"
          >
            <Phone className="text-primary h-4 w-4" />
            <span className="text-muted-foreground font-medium">{t.footer.directLine}:</span>
            {PHONE}
          </a>
        </div>

        <div>
          <h3 className="eyebrow">{t.footer.links}</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link
                to="/como-funciona"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.how}
              </Link>
            </li>
            <li>
              <a
                href="/#simulador"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.calculator}
              </a>
            </li>
            <li>
              <a
                href="/#solicitar"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">{t.footer.trust}</h3>
          <div className="mt-5 flex flex-col gap-3">
            <div className="border-border bg-surface/60 flex items-center gap-3 rounded-lg border px-4 py-3">
              <ShieldCheck className="text-primary h-5 w-5 shrink-0" />
              <span className="text-muted-foreground text-xs font-semibold tracking-wide">
                {t.footer.bbb}
              </span>
            </div>
            <div className="border-border bg-surface/60 flex items-center gap-3 rounded-lg border px-4 py-3">
              <BadgeCheck className="text-primary h-5 w-5 shrink-0" />
              <span className="text-muted-foreground text-xs font-semibold tracking-wide">
                {t.footer.google}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-border border-t">
        <p className="text-muted-foreground mx-auto max-w-7xl px-5 py-6 text-[0.72rem] leading-relaxed lg:px-8">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
