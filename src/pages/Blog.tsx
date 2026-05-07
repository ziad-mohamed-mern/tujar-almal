import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

const posts = [
  {
    title: "كيف تختار منصة متجرك الإلكتروني؟",
    desc: "معايير عملية للمفاضلة بين Shopify و Headless وحلول مخصصة.",
    date: "2026-05-07",
  },
  {
    title: "أفضل ممارسات السيو للمتاجر العربية",
    desc: "خطوات واضحة لتحسين الظهور ورفع الزيارات العضوية.",
    date: "2026-05-07",
  },
  {
    title: "تحسين سرعة المتجر: من 3 ثوانٍ إلى أقل من 1 ثانية",
    desc: "أدوات قياس، تحسين صور، وتجربة مستخدم أسرع.",
    date: "2026-05-07",
  },
];

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="المدونة"
        title="معرفة عملية لأصحاب المتاجر"
        desc="هيكل جاهز للـ CMS لاحقًا. حاليًا صفحة واجهة مع بطاقات مقالات."
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <Card className="h-full">
                <div className="text-xs font-black text-foreground/60">{p.date}</div>
                <div className="mt-2 text-lg font-black">{p.title}</div>
                <p className="mt-2 text-sm leading-7 text-foreground/70">{p.desc}</p>
                <div className="mt-6 h-10 rounded-2xl border border-white/10 bg-white/5" aria-hidden="true" />
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

