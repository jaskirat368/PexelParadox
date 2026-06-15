import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, any> | Record<string, any>[];
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  keywords = "gym marketing agency, fitness marketing agency, gym lead generation, gym advertising agency, facebook ads for gyms, gym growth agency",
  ogType = "website",
  ogImage = "https://i.ibb.co/N6ms3C45/IMG-20260615-190044.jpg", // Using the brand featured image as default OG image
  schema,
  noindex = false
}: SEOProps) {
  const fullTitle = title.includes("Pexel Paradox") ? title : `${title} | Pexel Paradox`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Basic local/lang tags if relevant */}
      <meta property="og:locale" content="en_IN" />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
