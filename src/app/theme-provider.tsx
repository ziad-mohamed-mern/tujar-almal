import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "@/app/theme-context";
import type { Theme } from "@/app/theme-context";

function applyTheme(t: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", t === "dark");
  root.style.colorScheme = t;
}

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // ignore
  }
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const api = useMemo(() => {
    return {
      theme,
      toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
      setTheme,
    };
  }, [theme]);

  return <ThemeContext.Provider value={api}>{children}</ThemeContext.Provider>;
}

