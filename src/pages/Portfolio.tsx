import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

const projects = [
  { name: "متجر عطور فاخر", tag: "Shopify + تحسين تحويل", desc: "تجربة شراء فاخرة مع صفحات منتجات محسّنة." },
  { name: "متجر أزياء", tag: "Headless + أداء", desc: "سرعة عالية، صور محسّنة، وواجهة RTL حديثة." },
  { name: "متجر أجهزة", tag: "تكاملات شحن ومخزون", desc: "مزامنة مخزون + تتبع طلبات + تقارير." },
  { name: "متجر متعدد البائعين", tag: "Multi-vendor", desc: "بنية قابلة للتوسع مع صلاحيات وأدوار." },
];

export default function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="أعمالنا السابقة"
        title="نماذج من مشاريعنا"
        desc="هنا عرض واجهة (Portfolio UI) — يمكن استبدال البيانات بمشاريعك الحقيقية بسهولة."
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-radial opacity-50" aria-hidden="true" />
                <div className="relative">
                  <div className="text-xs font-black text-foreground/70">{p.tag}</div>
                  <div className="mt-2 text-xl font-black">{p.name}</div>
                  <p className="mt-2 text-sm leading-7 text-foreground/70">{p.desc}</p>
                  <div className="mt-5 h-24 rounded-2xl border border-white/10 bg-white/10" aria-hidden="true" />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

