import { navLinks, site } from "@/content/site-data";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/10 dark:bg-black/20">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo-tujar-almal.png"
                alt="شعار تجار المال"
                className="h-12 w-12 rounded-2xl object-cover ring-1 ring-white/20"
                loading="lazy"
              />
              <div className="text-lg font-extrabold">{site.name}</div>
            </div>
            <p className="mt-3 text-sm leading-7 text-foreground/70">{site.tagline}</p>
            <div className="mt-4 space-y-2 text-sm text-foreground/70">
              <div>البريد: {site.email}</div>
              <div>الهاتف: {site.phone}</div>
              <div>الموقع: {site.location}</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-extrabold">روابط سريعة</div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.slice(0, 10).map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="rounded-xl px-3 py-2 text-foreground/75 transition hover:bg-white/10 hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-extrabold">تابعنا</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {Object.entries(site.socials).map(([k, v]) => (
                <a
                  key={k}
                  href={v}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-foreground/80 transition hover:bg-white/10"
                >
                  {k.toUpperCase()}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-foreground/60">
              جاهزون لبناء متجر سريع، آمن، وملهم — بواجهة عربية فاخرة.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-foreground/60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {site.name}. جميع الحقوق محفوظة.</div>
          <div>مبنيّة للأداء — جاهزة للتوسع — صديقة لمحركات البحث.</div>
        </div>
      </div>
    </footer>
  );
}

