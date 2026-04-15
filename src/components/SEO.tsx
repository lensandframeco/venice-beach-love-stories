import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  /** Absolute path for this page, e.g. "/services" */
  canonical?: string;
  ogImage?: string;
  /** JSON-LD structured data object */
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Drop this at the top of every page component.
 *
 * Example:
 *   <SEO
 *     title="Asylum Defense | Law Office of Todd Becraft"
 *     description="Expert asylum attorneys in Los Angeles…"
 *     canonical="/services/asylum"
 *     schema={{ "@context": "https://schema.org", "@type": "LegalService", … }}
 *   />
 */
export default function SEO({ title, description, canonical, ogImage, schema }: SEOProps) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const url = canonical ? `${origin}${canonical}` : (typeof window !== "undefined" ? window.location.href : "");

  const schemas = schema
    ? Array.isArray(schema) ? schema : [schema]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
