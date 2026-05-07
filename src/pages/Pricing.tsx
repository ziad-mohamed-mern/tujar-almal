import { Link } from "react-router-dom";
import { pricingPlans } from "@/content/site-data";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="الأسعار والباقات"
        title="استثمر في متجر يبيع أكثر"
        desc="باقات مرنة—ونقدر نخصصها حسب عدد الصفحات والتكاملات والمتطلبات."
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <Card className={p.featured ? "ring-1 ring-cyan-400/40" : ""}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-black">{p.name}</div>
                    <div className="text-xs text-foreground/70">{p.desc}</div>
                  </div>
                  {p.featured ? (
                    <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-black text-cyan-200">
                      الأكثر طلبًا
                    </span>
                  ) : null}
                </div>
                <div className="mt-5 text-3xl font-black">
                  {p.price} <span className="text-sm font-bold text-foreground/70">{p.period}</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-foreground/75">
                  {p.features.map((f) => (
                    <li key={f} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link to="/contact">
                    <Button variant={p.featured ? "gold" : "secondary"} className="w-full">
                      اطلب عرض سعر
                    </Button>
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

