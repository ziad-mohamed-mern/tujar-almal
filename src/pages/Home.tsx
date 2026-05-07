import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Seo } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { Particles } from "@/components/ui/particles";
import {
  ecommerceFeatures,
  partners,
  pricingPlans,
  site,
  stats,
  steps,
  testimonials,
  faqs,
} from "@/content/site-data";

function DashboardMock() {
  return (
    <div className="relative">
      <div className="absolute inset-0 soft-grid opacity-70" aria-hidden="true" />
      <motion.div
        className="relative rounded-3xl border border-white/10 bg-white/10 p-5 shadow-glow backdrop-blur-xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-[#0b1c3d]/70 px-3 py-2 text-xs">
          <div className="font-bold text-gold">تجار المال</div>
          <div className="flex items-center gap-3 text-foreground/75">
            <span>الرئيسية</span>
            <span>المنتجات</span>
            <span>الطلبات</span>
            <span>التحليلات</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-extrabold">لوحة المتجر</div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-xs text-foreground/70">مباشر</span>
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            { t: "الطلبات", v: "1,284" },
            { t: "الإيرادات", v: "SAR 92K" },
            { t: "سلة الشراء", v: "+18%" },
            { t: "التحويل", v: "3.9%" },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <div className="text-xs text-foreground/70">{x.t}</div>
              <div className="mt-2 text-lg font-black">{x.v}</div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div className="h-2 w-2/3 rounded-full bg-[linear-gradient(110deg,rgba(56,189,248,0.95),rgba(99,102,241,0.95))]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-foreground/70">ملخص التحليلات</div>
          <div className="mt-3 grid grid-cols-10 gap-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="col-span-1 rounded-lg bg-cyan-400/30"
                style={{ height: 8 + ((i * 7) % 26) }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Seo title="الرئيسية" />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Particles className="absolute inset-0 opacity-70" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-foreground/80 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span>تصميم فاخر + أداء سريع + سيو جاهز</span>
              </div>
              <h1 className="mt-5 text-balance text-4xl font-black leading-[1.15] tracking-tight md:text-6xl">
                {site.name}
                <span className="block bg-[linear-gradient(110deg,rgba(56,189,248,0.95),rgba(99,102,241,0.95),rgba(245,158,11,0.85))] bg-clip-text text-transparent">
                  نُطلق متجرك بمستوى عالمي
                </span>
              </h1>
              <p className="mt-5 text-pretty text-base leading-8 text-foreground/75 md:text-lg">
                {site.tagline}. من واجهات Shopify-inspired إلى تكاملات دفع وشحن وتحليلات—كل شيء
                جاهز للانطلاق والنمو.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    ابدأ مشروعك الآن
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    شاهد أعمالنا
                  </Button>
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="text-xs text-foreground/70">{s.label}</div>
                    <div className="mt-2 text-2xl font-black">
                      <Counter value={s.value as number} suffix={s.suffix as string | undefined} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Reveal>
              <DashboardMock />
            </Reveal>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 opacity-90">
            {partners.map((p) => (
              <span
                key={p}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-foreground/75"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <div dir="ltr" className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <DashboardMock />
            </div>
            <div dir="rtl">
              <h2 className="text-center text-3xl font-black leading-tight md:text-4xl">
                تجار المال تطلق متاجرها الإلكترونية
              </h2>
              <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    ابدأ مشروعك الآن
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    احجز مكالمة
                  </Button>
                </Link>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  "متجر الملابس والأزياء",
                  "متجر المواد الغذائية",
                  "متجر المقتنيات الثمينة والنادرة",
                  "متجر الأجهزة الكهربائية",
                ].map((title) => (
                  <Card key={title} className="overflow-hidden border-gold/20 bg-[#091834]/80 p-3 shadow-[0_12px_35px_rgba(245,158,11,0.12)]">
                    <div className="overflow-hidden rounded-2xl border border-gold/25 bg-[#0a1d43]">
                      <img
                        src="/logo-tujar-almal.png"
                        alt={title}
                        className="h-56 w-full object-cover saturate-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="pt-3 text-center text-sm font-black text-gold">{title}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <div className="text-sm font-extrabold text-foreground/80">لماذا تجار المال؟</div>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">تجربة SaaS فاخرة لبيع أكثر</h2>
              <p className="mt-4 text-base leading-8 text-foreground/70">
                نُصمم ونطوّر متاجر عربية بواجهة مستقبلية، ونعمل على السرعة والسيو والتحويل—مع تكاملات
                تدفع عملك للأمام.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {ecommerceFeatures.map((f) => (
                  <div key={f} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold">
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-hero-radial opacity-60" aria-hidden="true" />
              <div className="relative">
                <div className="text-sm font-extrabold">عرض مباشر</div>
                <p className="mt-2 text-sm leading-7 text-foreground/70">
                  واجهة متجر متوافقة مع الجوال + دفع آمن + تتبع طلبات + توصيات منتجات.
                </p>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {["Checkout آمن", "مخزون ذكي", "قوالب منتجات", "تحليلات متقدمة"].map((t) => (
                    <div key={t} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <div className="text-sm font-black">{t}</div>
                      <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                        <div className="h-2 w-1/2 rounded-full bg-gold/80" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="gold" className="w-full">
                    جرّب نسخة ديمو
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <div className="text-sm font-extrabold text-foreground/80">مراحل إنشاء المتجر الإلكتروني</div>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">من فكرة إلى متجر يبيع بثقة</h2>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <Card className="h-full">
                <div className="text-xs font-black text-foreground/70">المرحلة {i + 1}</div>
                <div className="mt-2 text-lg font-black">{s.title}</div>
                <p className="mt-2 text-sm leading-7 text-foreground/70">{s.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="h-full">
                <div className="text-sm font-black">{t.name}</div>
                <div className="text-xs text-foreground/70">{t.role}</div>
                <p className="mt-4 text-sm leading-7 text-foreground/75">“{t.quote}”</p>
                <div className="mt-5 h-1 w-16 rounded-full bg-[linear-gradient(110deg,rgba(56,189,248,0.95),rgba(99,102,241,0.95))]" />
              </Card>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <div className="text-sm font-extrabold text-foreground/80">الأسعار والباقات</div>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">باقات مرنة تناسب نموك</h2>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((p) => (
            <Reveal key={p.name}>
              <Card className={p.featured ? "ring-1 ring-cyan-400/40" : ""}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-lg font-black">{p.name}</div>
                    <div className="text-xs text-foreground/70">{p.desc}</div>
                  </div>
                  {p.featured ? (
                    <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-black text-cyan-300">
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
                      تواصل للحصول على عرض
                    </Button>
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/pricing" className="text-sm font-bold text-cyan hover:underline">
            عرض تفاصيل الأسعار والباقات
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-radial opacity-70" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-extrabold text-foreground/80">AI Chatbot</div>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">مساعد ذكي لزيادة المبيعات</h2>
                <p className="mt-4 text-base leading-8 text-foreground/70">
                  واجهة شات بوت جاهزة للربط (هيكل UI) لتجارب دعم وبيع أسرع—مناسبة للمتاجر العربية.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact">
                    <Button variant="primary" className="w-full sm:w-auto">اطلب الإضافة</Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="secondary" className="w-full sm:w-auto">شاهد حلولنا</Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="text-sm font-black">دردشة تجريبية</div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="max-w-[90%] rounded-2xl bg-white/10 px-4 py-3 text-foreground/80">
                    أهلًا! هل ترغب بعرض أفضل باقة تناسب متجرك؟
                  </div>
                  <div className="mr-auto max-w-[90%] rounded-2xl bg-cyan-400/15 px-4 py-3 font-bold text-cyan-200">
                    نعم، أريد متجر سريع ومتوافق مع الجوال.
                  </div>
                  <div className="max-w-[90%] rounded-2xl bg-white/10 px-4 py-3 text-foreground/80">
                    ممتاز. نقترح باقة “نمو” مع تحسين سرعة + تحليلات + تكامل دفع وشحن.
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <input
                    className="h-11 flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm outline-none placeholder:text-foreground/50 focus:ring-2 focus:ring-cyan-300"
                    placeholder="اكتب رسالتك… (واجهة فقط)"
                    disabled
                  />
                  <Button variant="gold" disabled>إرسال</Button>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <div className="text-sm font-extrabold text-foreground/80">النشرة البريدية</div>
              <div className="mt-3 text-2xl font-black">نصائح سريعة لتطوير متجرك</div>
              <p className="mt-2 text-sm leading-7 text-foreground/70">
                اشترك لتصلك تحديثات السيو والأداء وتجربة المستخدم للمتاجر العربية.
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <input
                  className="h-12 flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm outline-none placeholder:text-foreground/50 focus:ring-2 focus:ring-cyan-300"
                  placeholder="بريدك الإلكتروني"
                />
                <Button variant="primary">اشتراك</Button>
              </div>
            </Card>

            <Card>
              <div className="text-sm font-extrabold text-foreground/80">الأسئلة الشائعة</div>
              <div className="mt-3 text-2xl font-black">إجابات واضحة قبل البدء</div>
              <div className="mt-4 space-y-3">
                {faqs.slice(0, 3).map((f) => (
                  <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="text-sm font-black">{f.q}</div>
                    <div className="mt-1 text-sm leading-7 text-foreground/70">{f.a}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <Link to="/faq">
                  <Button variant="secondary" className="w-full">عرض كل الأسئلة</Button>
                </Link>
              </div>
            </Card>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-radial opacity-70" aria-hidden="true" />
            <div className="relative grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-extrabold text-foreground/80">جاهز للانطلاق؟</div>
                <div className="mt-3 text-3xl font-black md:text-4xl">دعنا نبني متجرك التالي</div>
                <p className="mt-4 text-base leading-8 text-foreground/70">
                  املأ النموذج وسنتواصل خلال 24 ساعة مع خطة واضحة للتصميم والتطوير والتسويق.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="grid gap-3">
                  <input className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm outline-none focus:ring-2 focus:ring-cyan-300" placeholder="الاسم" />
                  <input className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm outline-none focus:ring-2 focus:ring-cyan-300" placeholder="رقم الجوال" />
                  <input className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm outline-none focus:ring-2 focus:ring-cyan-300" placeholder="البريد الإلكتروني" />
                  <textarea className="min-h-28 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-300" placeholder="صف مشروعك باختصار" />
                  <Button variant="gold">إرسال الطلب</Button>
                  <div className="text-xs text-foreground/60">* هذا نموذج واجهة فقط (Lead UI) ويمكن ربطه بأي خدمة لاحقًا.</div>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </section>
    </>
  );
}

