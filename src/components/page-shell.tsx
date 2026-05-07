import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function PageShell() {
  const location = useLocation();

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-hero-radial opacity-90" aria-hidden="true" />
      <Navbar />

      <main className="relative pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

