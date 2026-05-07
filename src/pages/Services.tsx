import { Link } from "react-router-dom";
import { services, ecommerceFeatures } from "@/content/site-data";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="خدماتنا"
        title="حلول متاجر رقمية متكاملة"
        desc="نصمّم ونطوّر وننمو معك: متجر سريع، تكاملات دفع وشحن، تحليلات، وتسويق يقود المبيعات."
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <Card className="h-full">
                <div className="text-lg font-black">{s.title}</div>
                <p className="mt-2 text-sm leading-7 text-foreground/70">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <span key={c} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black">
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link to={s.href}>
                    <Button variant={i === 0 ? "primary" : "secondary"} className="w-full">
                      التفاصيل
                    </Button>
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-2">
          {ecommerceFeatures.map((f) => (
            <div key={f} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold">
              {f}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

