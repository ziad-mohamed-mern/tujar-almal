import { useParams, Navigate, Link, useLocation } from "react-router-dom";
import { storesData } from "@/content/site-data";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function StorePage() {
  const { id } = useParams();
  const location = useLocation();
  const storeId = id || location.pathname.substring(1); // removes the leading slash
  const store = storesData.find((s) => s.id === storeId);

  if (!store) {
    return <Navigate to="/not-found" />;
  }

  return (
    <>
      <PageHero
        eyebrow="تصفح المتجر"
        title={store.title}
        desc={store.desc}
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="overflow-hidden rounded-3xl border border-gold/20 shadow-[0_12px_35px_rgba(245,158,11,0.12)]">
              <img
                src={store.image}
                alt={store.title}
                className="w-full object-cover aspect-video sm:aspect-square md:aspect-auto md:h-[500px]"
              />
            </div>
          </div>
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-black text-gold mb-4">أهلاً بك في {store.title}</h2>
              <p className="text-foreground/80 leading-8 mb-6">
                هذا المتجر هو وجهتك الأولى للحصول على أفضل المنتجات في هذا القسم. نحن نقدم مجموعة واسعة ومتنوعة لضمان تلبية جميع احتياجاتك.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                  <span>منتجات أصلية 100%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                  <span>توصيل سريع لجميع المناطق</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                  <span>دعم فني متواصل</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to="/contact" className="w-full">
                  <Button variant="gold" className="w-full">تواصل معنا للاستفسار</Button>
                </Link>
                <Link to="/" className="w-full">
                  <Button variant="secondary" className="w-full">العودة للرئيسية</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
