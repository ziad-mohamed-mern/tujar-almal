import { faqs } from "@/content/site-data";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="الأسئلة الشائعة"
        title="إجابات مختصرة وواضحة"
        desc="نجاوب على أكثر الأسئلة شيوعًا قبل البدء بمشروع المتجر."
      />

      <section className="mx-auto max-w-3xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.03}>
              <Card>
                <div className="text-base font-black">{f.q}</div>
                <p className="mt-2 text-sm leading-7 text-foreground/70">{f.a}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

