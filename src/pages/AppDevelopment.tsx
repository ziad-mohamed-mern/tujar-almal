import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export default function AppDevelopment() {
  return (
    <>
      <PageHero
        eyebrow="تطوير التطبيقات"
        title="تطبيقات تجارة إلكترونية جاهزة للنمو"
        desc="نبني تطبيقات ولوحات تحكم مع APIs وتكاملات دفع وشحن وتحليلات—بأداء عالي وتجربة عربية ممتازة."
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "تطبيقات الجوال", d: "تجربة شراء سريعة مع تنبيهات وتتبع الطلبات." },
            { t: "لوحات تحكم", d: "إدارة طلبات، مخزون، حملات، وصلاحيات مستخدمين." },
            { t: "تكاملات", d: "ERP/CRM، بوابات دفع، شحن، وتحليلات أحداث." },
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

