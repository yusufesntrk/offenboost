import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/lib/seo-config";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  ogType?: "website" | "article";
  structuredData?: object;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  noindex = false,
  ogImage = SITE_CONFIG.ogImage,
  ogType = "website",
  structuredData,
}: SEOProps) => {
  const fullUrl = canonical
    ? `${SITE_CONFIG.url}${canonical}`
    : SITE_CONFIG.url;
  const imageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${SITE_CONFIG.url}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={SITE_CONFIG.company.name} />
      <link rel="canonical" href={fullUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />

      {/* Twitter */}
      <meta name="twitter:card" content={SITE_CONFIG.twitter.card} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
