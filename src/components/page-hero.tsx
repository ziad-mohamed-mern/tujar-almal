import { motion } from "framer-motion";
import { Seo } from "@/components/seo";

export function PageHero({
  title,
  desc,
  eyebrow,
}: {
  title: string;
  desc?: string;
  eyebrow?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Seo title={title} description={desc} />
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-12">
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-extrabold text-foreground/80">
            <span className="h-2 w-2 rounded-full bg-cyan" />
            <span>{eyebrow}</span>
          </div>
        ) : null}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-balance text-3xl font-black tracking-tight md:text-5xl"
        >
          {title}
        </motion.h1>
        {desc ? (
          <p className="mt-4 max-w-3xl text-pretty text-base leading-8 text-foreground/70 md:text-lg">
            {desc}
          </p>
        ) : null}
      </div>
    </section>
  );
}

