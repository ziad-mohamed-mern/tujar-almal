import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, site } from "@/content/site-data";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const primary = navLinks.slice(0, 6);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-3xl glass shadow-glow">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <Link to="/" className="group inline-flex items-center gap-3" aria-label={site.name}>
              <img
                src="/logo-tujar-almal.png"
                alt="شعار تجار المال"
                className="h-10 w-10 rounded-2xl object-cover ring-1 ring-white/20 shadow-cyan"
                loading="eager"
              />
              <div className="leading-tight">
                <div className="text-sm font-extrabold md:text-base">{site.name}</div>
                <div className="hidden text-xs text-foreground/70 md:block">حلول التجارة الإلكترونية</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 md:flex" aria-label="التنقل الرئيسي">
              {primary.map((l) => (
                <NavLink
                  key={l.href}
                  to={l.href}
                  className={({ isActive }) =>
                    cn(
                      "rounded-2xl px-3 py-2 text-sm font-bold transition hover:bg-white/10",
                      isActive ? "bg-white/10 text-foreground" : "text-foreground/75"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <div className="hidden md:block">
                <Link to="/contact">
                  <Button variant="gold" size="sm">
                    احجز مكالمة
                  </Button>
                </Link>
              </div>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-foreground/90 backdrop-blur transition hover:bg-white/15 md:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
                aria-expanded={open}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden border-t border-white/10"
              >
                <div className="px-4 py-4">
                  <div className="grid gap-2">
                    {navLinks.map((l) => (
                      <NavLink
                        key={l.href}
                        to={l.href}
                        className={({ isActive }) =>
                          cn(
                            "rounded-2xl px-3 py-3 text-sm font-bold transition hover:bg-white/10",
                            isActive ? "bg-white/10" : "text-foreground/80"
                          )
                        }
                      >
                        {l.label}
                      </NavLink>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link to="/contact">
                      <Button variant="gold" className="w-full">
                        تواصل الآن
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

