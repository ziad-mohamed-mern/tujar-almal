import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="هويتنا"
        title="من نحن"
        desc="تجار المال فريق متخصص في تصميم وتطوير المتاجر الإلكترونية والحلول الرقمية للتجارة الإلكترونية — بجودة SaaS وأداء سريع وتجربة عربية أصلية."
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "رؤية", d: "نصنع متاجر عربية فاخرة تُحوّل الزوار إلى عملاء." },
            { t: "منهجية", d: "بحث → تصميم UI/UX → تطوير → تكاملات → إطلاق → تحسين." },
            { t: "ثقة", d: "شفافية، قياس، وتقارير واضحة—بدون تعقيد." },
          ].map((x, i) => (
            <Reveal key={x.t} delay={i * 0.05}>
              <Card>
                <div className="text-lg font-black">{x.t}</div>
                <p className="mt-2 text-sm leading-7 text-foreground/70">{x.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

