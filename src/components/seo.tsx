import { Helmet } from "react-helmet-async";
import { site } from "@/content/site-data";

export function Seo({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | حلول التجارة الإلكترونية`;
  const desc = description ?? site.tagline;
  const canonical = path;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ar_SA" />
    </Helmet>
  );
}

