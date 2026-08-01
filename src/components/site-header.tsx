import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Moon, Phone, Sun, X } from "lucide-react";
import { BrandLock } from "@/components/brand";
import { useI18n, PHONE, PHONE_HREF } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "border-border bg-surface/70 text-muted-foreground hover:text-foreground relative inline-flex h-[1.85rem] w-[3.15rem] items-center rounded-full border p-0.5 backdrop-blur transition-colors duration-300",
        className,
      )}
    >
      <span
        className={cn(
          "bg-[image:var(--gradient-gold)] absolute top-0.5 left-0.5 h-[1.55rem] w-[1.55rem] rounded-full shadow-[var(--shadow-gold)] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isDark ? "translate-x-0" : "translate-x-[1.3rem]",
        )}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-[0.34rem]">
        <Moon
          className={cn(
            "h-3.5 w-3.5 transition-colors duration-300",
            isDark ? "text-primary-foreground" : "",
          )}
        />
        <Sun
          className={cn(
            "h-3.5 w-3.5 transition-colors duration-300",
            isDark ? "" : "text-primary-foreground",
          )}
        />
      </span>
    </button>
  );
}

function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div
      className={cn(
        "border-border bg-surface/70 relative flex items-center rounded-full border p-0.5 backdrop-blur",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {(["en", "pt"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "rounded-full px-2.5 py-1 text-[0.68rem] font-bold tracking-[0.12em] transition-colors duration-300",
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {l === "en" ? "EN" : "PT-BR"}
        </button>
      ))}
    </div>
  );
}


export function SiteHeader() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#sobre", label: t.nav.about },
    { href: "/#como-funciona", label: t.nav.how },
    { href: "/#simulador", label: t.nav.calculator },
    { href: "/#depoimentos", label: t.nav.testimonials },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-border bg-background/85 border-b shadow-[var(--shadow-elevated)] backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center gap-6 px-5 lg:px-8">
        <Link to="/" className="group shrink-0" aria-label="Leverage Capital Funding">
          <BrandLock className="transition-opacity duration-300 group-hover:opacity-80" />
        </Link>

        <div className="ml-auto hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground relative text-[0.82rem] font-semibold tracking-wide transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[var(--gradient-gold)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2.5 lg:ml-0">
          <a
            href={PHONE_HREF}
            className="text-muted-foreground hover:text-primary hidden items-center gap-1.5 text-[0.78rem] font-semibold xl:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {PHONE}
          </a>
          <LanguageToggle className="hidden lg:flex" />
          <ThemeToggle className="hidden lg:inline-flex" />

          <a
            href="/#solicitar"
            className="bg-[image:var(--gradient-gold)] text-primary-foreground hidden rounded-full px-5 py-2.5 text-[0.78rem] font-bold tracking-wide shadow-[var(--shadow-gold)] transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
          >
            {t.nav.ctaShort}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="border-border text-foreground inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden"
            aria-label={t.nav.menu}
            aria-expanded={open}
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "border-border bg-background/95 overflow-hidden border-t backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-foreground/85 hover:text-primary border-border/60 border-b py-3 text-sm font-semibold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="text-muted-foreground flex items-center gap-2 py-3 text-sm font-semibold"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <div className="flex items-center justify-between gap-3 pt-1">
            <LanguageToggle />
            <ThemeToggle />

            <a
              href="/#solicitar"
              onClick={() => setOpen(false)}
              className="bg-[image:var(--gradient-gold)] text-primary-foreground flex-1 rounded-full px-5 py-3 text-center text-[0.8rem] font-bold"
            >
              {t.nav.ctaShort}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
