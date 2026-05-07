import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/theme-context";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-foreground/90 backdrop-blur transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      aria-label={theme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

