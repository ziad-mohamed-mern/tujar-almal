
import { Seo } from "@/components/seo";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Particles } from "@/components/ui/particles";
import { storesData } from "@/content/site-data";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Seo title="متاجر تجار المال" />

      <section className="relative min-h-screen overflow-hidden pt-24 pb-14">
        <div className="absolute inset-0 -z-10">
          <Particles className="absolute inset-0 opacity-70" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-balance text-4xl font-black leading-[1.15] tracking-tight md:text-5xl lg:text-6xl">
                تجار المال تطلق متاجرها الإلكترونية
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {storesData.map((store, index) => (
                <Link to={`/store/${store.id}`} key={index}>
                  <Card 
                    className="group relative overflow-hidden border-gold/20 bg-[#091834]/80 p-4 shadow-[0_12px_35px_rgba(245,158,11,0.12)] transition-transform hover:-translate-y-2 h-full"
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-gold/25 bg-[#0a1d43]">
                      <img
                        src={store.image}
                        alt={store.title}
                        className="h-full w-full object-cover saturate-110 transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="pt-4 text-center">
                      <h3 className="text-lg font-black text-gold">{store.title}</h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}


