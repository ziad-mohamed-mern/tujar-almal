import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="من نحن"
        title="تجار المال"
        desc="مجموعة من المتاجر الإلكترونية المتخصصة في تلبية احتياجاتك، من الأزياء الفاخرة إلى أحدث الأجهزة الإلكترونية والمواد الغذائية والمقتنيات الثمينة."
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "رؤيتنا", d: "أن نكون الوجهة الأولى للتسوق الرقمي الشامل، مع تقديم أعلى معايير الجودة." },
            { t: "مهمتنا", d: "توفير تجربة تسوق إلكترونية سلسة وآمنة، تجمع بين التنوع والأسعار التنافسية." },
            { t: "قيمنا", d: "الجودة، الثقة، سرعة التوصيل، ورضا العميل فوق كل شيء." },
          ].map((x, i) => (
            <Reveal key={x.t} delay={i * 0.05}>
              <Card>
                <div className="text-lg font-black text-gold">{x.t}</div>
                <p className="mt-2 text-sm leading-7 text-foreground/70">{x.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

