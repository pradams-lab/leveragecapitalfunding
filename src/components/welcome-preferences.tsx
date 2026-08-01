import { useEffect, useState } from "react";
import { Moon, Sun, X } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import { useTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "lcf-welcome-prefs";

const copy = {
  pt: {
    title: "Bem-vindo à Leverage Capital Funding",
    sub: "Personalize sua experiência antes de continuar.",
    language: "Idioma",
    theme: "Aparência",
    dark: "Modo escuro",
    light: "Modo claro",
    confirm: "Continuar",
    close: "Fechar",
  },
  en: {
    title: "Welcome to Leverage Capital Funding",
    sub: "Personalize your experience before you continue.",
    language: "Language",
    theme: "Appearance",
    dark: "Dark mode",
    light: "Light mode",
    confirm: "Continue",
    close: "Close",
  },
} as const;

export function WelcomePreferences() {
  const { lang, setLang } = useI18n();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (seen) return;
    const id = window.setTimeout(() => setOpen(true), 5000);
    return () => window.clearTimeout(id);
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  if (!open) return null;
  const c = copy[lang];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={c.title}
    >
      <div
        className="bg-background/70 absolute inset-0 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />
      <div className="surface-panel relative w-full max-w-md rounded-2xl p-6 shadow-[var(--shadow-elevated)] sm:p-8">
        <button
          type="button"
          onClick={dismiss}
          aria-label={c.close}
          className="border-border text-muted-foreground hover:text-foreground absolute -top-3 -right-3 inline-flex h-9 w-9 items-center justify-center rounded-full border bg-[var(--background)] transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <h2 className="font-display text-xl font-extrabold tracking-tight">{c.title}</h2>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{c.sub}</p>

        <p className="eyebrow mt-6">{c.language}</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {(["en", "pt"] as Lang[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={cn(
                "rounded-xl border px-4 py-3 text-sm font-bold transition-colors",
                lang === l
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {l === "en" ? "English" : "Português (BR)"}
            </button>
          ))}
        </div>

        <p className="eyebrow mt-6">{c.theme}</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {(
            [
              { key: "dark" as Theme, label: c.dark, Icon: Moon },
              { key: "light" as Theme, label: c.light, Icon: Sun },
            ]
          ).map(({ key, label, Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setTheme(key)}
              aria-pressed={theme === key}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition-colors",
                theme === key
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={dismiss}
          className="bg-[image:var(--gradient-gold)] text-primary-foreground mt-7 w-full rounded-full px-6 py-3.5 text-sm font-bold tracking-wide shadow-[var(--shadow-gold)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          {c.confirm}
        </button>
      </div>
    </div>
  );
}
