import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "lcf-theme";

/** Inline script: applies the stored theme before paint to avoid a flash. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t="dark"}var e=document.documentElement;e.classList.toggle("dark",t==="dark");e.classList.toggle("light",t==="light");e.style.colorScheme=t;}catch(_){}})();`;

type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function apply(theme: Theme) {
  const el = document.documentElement;
  el.classList.toggle("dark", theme === "dark");
  el.classList.toggle("light", theme === "light");
  el.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial: Theme = stored === "light" || stored === "dark" ? stored : "dark";
    setThemeState(initial);
    apply(initial);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    apply(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
    }),
    [theme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
