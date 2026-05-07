import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site-data";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="تواصل معنا"
        title="لنحوّل فكرتك إلى متجر يبيع بثقة"
        desc="أرسل تفاصيل مشروعك وسنعود لك بخطة واضحة للتصميم والتطوير والتسويق."
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="text-lg font-black">بيانات التواصل</div>
            <div className="mt-4 space-y-2 text-sm text-foreground/70">
              <div>البريد: {site.email}</div>
              <div>الهاتف: {site.phone}</div>
              <div>الموقع: {site.location}</div>
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-foreground/70">
              ملاحظة: يمكن ربط النموذج لاحقًا بأي خدمة (Email, CRM, WhatsApp API) بسهولة.
            </div>
          </Card>

          <Card>
            <div className="text-lg font-black">نموذج الاستفسار</div>
            <div className="mt-5 grid gap-3">
              <input className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm outline-none focus:ring-2 focus:ring-cyan-300" placeholder="الاسم" />
              <input className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm outline-none focus:ring-2 focus:ring-cyan-300" placeholder="رقم الجوال" />
              <input className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm outline-none focus:ring-2 focus:ring-cyan-300" placeholder="البريد الإلكتروني" />
              <select className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm outline-none focus:ring-2 focus:ring-cyan-300">
                <option>اختر الخدمة</option>
                <option>تصميم متجر إلكتروني</option>
                <option>تطوير تطبيق</option>
                <option>تسويق إلكتروني</option>
              </select>
              <textarea className="min-h-32 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-300" placeholder="صف مشروعك باختصار" />
              <Button variant="gold">إرسال</Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

