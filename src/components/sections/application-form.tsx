import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Lock, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const fields = ["name", "company", "email", "phone", "revenue"] as const;
type Field = (typeof fields)[number];

export function ApplicationForm() {
  const { t } = useI18n();
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    company: "",
    email: "",
    phone: "",
    revenue: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(2, t.form.required).max(100),
    company: z.string().trim().min(2, t.form.required).max(120),
    email: z.string().trim().email(t.form.invalidEmail).max(255),
    phone: z.string().trim().min(8, t.form.required).max(30),
    revenue: z.string().trim().min(1, t.form.required).max(40),
  });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as Field] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <section id="solicitar" className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-halo)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-8">
        <Reveal>
          <p className="eyebrow">{t.form.tag}</p>
          <h2 className="mt-5 text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.7rem]">
            {t.form.headline}
          </h2>
          <p className="text-muted-foreground mt-5 text-base leading-relaxed">{t.form.sub}</p>
          <p className="text-muted-foreground mt-8 inline-flex max-w-sm items-start gap-2.5 text-xs leading-relaxed">
            <Lock className="text-primary mt-0.5 h-4 w-4 shrink-0" />
            {t.form.security}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-panel rounded-3xl p-7 sm:p-9">
            {sent ? (
              <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                <CheckCircle2 className="text-success h-12 w-12" />
                <p className="mt-5 max-w-sm text-base leading-relaxed font-semibold">
                  {t.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                {fields.map((f) => (
                  <div key={f} className={cn(f === "revenue" && "sm:col-span-2")}>
                    <label
                      htmlFor={f}
                      className="text-muted-foreground text-[0.68rem] font-bold tracking-[0.14em] uppercase"
                    >
                      {t.form[f]}
                    </label>
                    <input
                      id={f}
                      name={f}
                      type={f === "email" ? "email" : f === "phone" ? "tel" : "text"}
                      autoComplete={
                        f === "email"
                          ? "email"
                          : f === "phone"
                            ? "tel"
                            : f === "name"
                              ? "name"
                              : f === "company"
                                ? "organization"
                                : "off"
                      }
                      value={values[f]}
                      maxLength={255}
                      onChange={(e) => setValues((v) => ({ ...v, [f]: e.target.value }))}
                      className={cn(
                        "border-input bg-background/60 text-foreground placeholder:text-muted-foreground/60 mt-2 w-full rounded-lg border px-4 py-3.5 text-sm transition-colors duration-300 outline-none",
                        "focus:border-primary/60 focus:ring-4 focus:ring-[var(--ring)]",
                        errors[f] && "border-destructive",
                      )}
                    />
                    {errors[f] && (
                      <p className="text-destructive mt-1.5 text-[0.7rem] font-semibold">
                        {errors[f]}
                      </p>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="group bg-[image:var(--gradient-gold)] text-primary-foreground mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold tracking-wide shadow-[var(--shadow-gold)] transition-transform duration-300 hover:-translate-y-0.5 sm:col-span-2"
                >
                  {t.form.submit}
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
