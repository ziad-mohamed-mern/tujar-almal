import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export default function DigitalMarketing() {
  return (
    <>
      <PageHero
        eyebrow="التسويق الإلكتروني"
        title="نمو مبني على البيانات لمتجرك"
        desc="سيو + حملات مدفوعة + محتوى + تتبع تحويلات. هدفنا: مبيعات قابلة للتكرار وتكاليف اكتساب محسوبة."
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "SEO للمتاجر العربية", d: "بنية صفحات، Schema، وتحسين محتوى المنتجات والتصنيفات." },
            { t: "إعلانات مدفوعة", d: "Meta/Google/TikTok مع قياس ROAS وتقارير أسبوعية." },
            { t: "تحليلات وأتمتة", d: "أحداث، قمع شراء، ورسائل سلة متروكة وخصومات." },
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

