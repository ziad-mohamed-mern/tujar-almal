import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export default function StoreDesign() {
  return (
    <>
      <PageHero
        eyebrow="تصميم المتاجر الإلكترونية"
        title="واجهات فاخرة RTL تحول الزوار إلى عملاء"
        desc="تصميم تجربة شراء عربية مستقبلية مع micro-interactions، انتقالات سلسة، وواجهة تشبه منصات SaaS الحديثة."
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "تصميم UI/UX", d: "تدفقات شراء مختبرة، صفحات منتجات مصممة لرفع التحويل." },
            { t: "هوية بصرية", d: "نظام ألوان وخطوط ومساحات فاخرة تعكس علامة تجارية قوية." },
            { t: "مكتبة مكونات", d: "مكوّنات قابلة لإعادة الاستخدام لمتجر سريع ومتسق." },
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

