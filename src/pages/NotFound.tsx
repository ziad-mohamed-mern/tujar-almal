import { Link } from "react-router-dom";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <PageHero title="الصفحة غير موجودة" desc="قد يكون الرابط غير صحيح أو تم نقل الصفحة." />
      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <Link to="/">
          <Button variant="gold">العودة للرئيسية</Button>
        </Link>
      </div>
    </>
  );
}

