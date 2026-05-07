import { createContext, useContext } from "react";

export type Theme = "dark" | "light";

export const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
} | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

