import { SITE_CONFIG } from "./seo-config";

// Founder/Person Schema (E-E-A-T Signal)
export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yusuf Esentürk",
  jobTitle: "Co-Founder",
  worksFor: {
    "@type": "Organization",
    name: SITE_CONFIG.company.name,
    url: SITE_CONFIG.url,
  },
  description:
    "Co-Founder von OffenBoost. Experte für digitale Wachstumsstrategien, Automatisierung und datenbasierte Unternehmensberatung.",
  knowsAbout: [
    "Digitales Marketing",
    "Automatisierung",
    "Recruiting",
    "Unternehmensberatung",
    "Wachstumsstrategien",
  ],
  sameAs: ["https://de.linkedin.com/in/yusuf-esentürk-078a16386"],
};

// Co-Founder Schema
export const coFounderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manuel Engelhardt",
  jobTitle: "Co-Founder",
  worksFor: {
    "@type": "Organization",
    name: SITE_CONFIG.company.name,
    url: SITE_CONFIG.url,
  },
  description:
    "Co-Founder von OffenBoost. Experte für Recruiting, Kanzleimarketing und Performance-Strategien.",
  knowsAbout: [
    "Recruiting",
    "Kanzleimarketing",
    "Performance Marketing",
    "Fachkräftegewinnung",
  ],
  sameAs: ["https://www.linkedin.com/in/manuel-engelhardt-a56b43171/"],
};

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.company.name,
  legalName: SITE_CONFIG.company.legalName,
  url: SITE_CONFIG.url,
  foundingDate: "2024",
  logo: `${SITE_CONFIG.url}/logo.svg`,
  email: SITE_CONFIG.company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.company.address.street,
    addressLocality: SITE_CONFIG.company.address.city,
    postalCode: SITE_CONFIG.company.address.postalCode,
    addressCountry: SITE_CONFIG.company.address.country,
  },
  sameAs: [SITE_CONFIG.social.linkedin],
  founder: [
    {
      "@type": "Person",
      name: "Yusuf Esentürk",
    },
    {
      "@type": "Person",
      name: "Manuel Engelhardt",
    },
  ],
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.url}/#website`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: "Wachstumspartner aus Offenburg - Marketing, Recruiting, Automatisierung",
  publisher: {
    "@id": `${SITE_CONFIG.url}/#organization`,
  },
};

// WebPage Schema - verhindert Datumsanzeige in Suchergebnissen
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_CONFIG.url}/#webpage`,
  url: SITE_CONFIG.url,
  name: "OffenBoost | Wachstumspartner aus Offenburg",
  description: "Ihr Wachstumspartner für digitales Marketing, Recruiting und Automatisierung. Wir helfen Unternehmen planbar zu wachsen.",
  isPartOf: {
    "@id": `${SITE_CONFIG.url}/#website`,
  },
  about: {
    "@id": `${SITE_CONFIG.url}/#organization`,
  },
  // Kein datePublished/dateModified = kein Datum in Suchergebnissen
};

// Service Schema for the main offering
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wachstumspartner für Unternehmen",
  description:
    "Digitales Marketing, Recruiting und Automatisierung für planbare Unternehmenswachstum.",
  provider: {
    "@type": "Organization",
    name: SITE_CONFIG.company.name,
    url: SITE_CONFIG.url,
  },
  serviceType: "Business Consulting",
  areaServed: {
    "@type": "Country",
    name: "Germany",
  },
};

// Combined schema for homepage
export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema, serviceSchema],
};

// Breadcrumb Schema generator
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_CONFIG.url}${item.url}`,
  })),
});

// FAQ Schema generator (for FAQ sections)
export const generateFAQSchema = (
  faqs: { question: string; answer: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// Review/Testimonial Schema generator (for social proof)
export const generateReviewSchema = (
  reviews: {
    name: string;
    role: string;
    company: string;
    quote: string;
  }[]
) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.company.name,
  url: SITE_CONFIG.url,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: reviews.length.toString(),
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: r.name,
      jobTitle: r.role,
      worksFor: {
        "@type": "Organization",
        name: r.company,
      },
    },
    reviewBody: r.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
  })),
});

// HowTo Schema generator (for step-by-step processes)
export const generateHowToSchema = (
  title: string,
  description: string,
  steps: { title: string; description: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description: description,
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description,
  })),
});

// Steps data for HowTo Schema (booking process)
export const bookingHowToSchema = generateHowToSchema(
  "Wie buche ich ein Erstgespräch bei OffenBoost?",
  "In 3 einfachen Schritten zum kostenlosen Strategiegespräch für dein Unternehmen.",
  [
    {
      title: "Termin auswählen",
      description:
        "Wähle im Kalender einen freien Slot aus, an dem du in Ruhe 45 Min. über dein Unternehmen sprechen kannst.",
    },
    {
      title: "Formular ausfüllen",
      description:
        "Beantworte die Fragen, damit wir dein Unternehmen kennenlernen. Wir stornieren Termine ohne relevante Antworten.",
    },
    {
      title: "Roadmap 1:1 erhalten",
      description:
        "Wir analysieren deine Situation. Wenn es passt, bekommst du von uns eine Roadmap für dein Wachstum.",
    },
  ]
);

// Testimonials data for Review Schema
export const testimonialReviews = [
  {
    name: "Yasar Sentürk",
    role: "Geschäftsführer",
    company: "searched GmbH",
    quote:
      "Dank OffenBoost haben wir die Sparkasse als Kunden gewonnen und direkt eine 200k Upfront Fee kassiert.",
  },
  {
    name: "Nordin Begdouri",
    role: "Geschäftsführer",
    company: "SalesWorx",
    quote: "Es ist WIRKLICH krank, was ihr für uns gebaut habt",
  },
  {
    name: "Alireza Nikjou",
    role: "Geschäftsführer",
    company: "Experiton UG",
    quote: "Die Automatisierung hat unsere Prozesse komplett transformiert",
  },
  {
    name: "Ekrem Topcan",
    role: "Geschäftsführer",
    company: "Hohenfeld Search",
    quote:
      "Durch OffenBoost haben wir ein optimiertes Selling System bekommen und durch das ATS-System konnte unser Fulfillment um 80% entlastet werden.",
  },
  {
    name: "Marc Wüst",
    role: "Steuerberater & Partner",
    company: "adam, wüst & partner",
    quote:
      "Nach zwei Wochen hatte ich die ersten qualifizierten Bewerbungen auf dem Schreibtisch.",
  },
  {
    name: "Florian Rendler",
    role: "Geschäftsführer",
    company: "Rendler & Hoferer",
    quote:
      "In kürzester Zeit genügend Anfragen für unsere Azubi-Stelle.",
  },
  {
    name: "Rüdiger Bruns",
    role: "Geschäftsführer",
    company: "AMONOVA GmbH",
    quote:
      "Das 1:1 ist mit keinem anderen Dienstleister zu vergleichen. Man wird rund um die Uhr betreut und eigene Wünsche, die höchst individuell sind, werden umgesetzt.",
  },
  {
    name: "Dr. Schmidt",
    role: "Zahnarzt & Inhaber",
    company: "Zahnärzte im Seerheincenter Konstanz",
    quote:
      "Durch OffenBoost haben wir nicht nur deutlich mehr Patienten gewonnen, sondern auch unsere komplette Praxisverwaltung automatisiert.",
  },
  {
    name: "Dr. Frieder Baldner",
    role: "Inhaber",
    company: "Baldner's Gasthof Schwanen",
    quote:
      "Seit über 200 Jahren führen wir den Gasthof Schwanen in fünfter Generation. Mit OffenBoost haben wir den Sprung ins digitale Zeitalter geschafft.",
  },
];

// FAQ data (matches FAQSection.tsx exactly)
export const homepageFAQs = [
  {
    question: "Was macht OffenBoost?",
    answer:
      "OffenBoost ist Ihr Wachstumspartner aus Offenburg. Wir bieten Marketing & Growth Services, Sales-Systeme, Webentwicklung und strategische Beratung aus einer Hand – alles mit dem Ziel, Ihr Unternehmen nachhaltig wachsen zu lassen.",
  },
  {
    question: "Für wen sind eure Leistungen geeignet?",
    answer:
      "Unsere Leistungen eignen sich für kleine und mittelständische Unternehmen, Startups und Selbstständige, die wachsen möchten. Besonders profitieren Unternehmen, die ihre Prozesse digitalisieren, mehr Kunden gewinnen oder ihre Online-Präsenz verbessern wollen.",
  },
  {
    question: "Wie läuft das Erstgespräch ab?",
    answer:
      "Im kostenlosen Erstgespräch lernen wir Sie und Ihr Unternehmen kennen. Wir analysieren Ihre aktuelle Situation, verstehen Ihre Ziele und prüfen, wie wir Ihnen am besten helfen können. Das Gespräch ist unverbindlich und dauert ca. 30 Minuten.",
  },
  {
    question: "Was kostet eine Zusammenarbeit?",
    answer:
      "Die Kosten hängen vom Umfang und der Komplexität Ihres Projekts ab. Nach dem Erstgespräch erstellen wir ein individuelles Angebot, das auf Ihre Bedürfnisse zugeschnitten ist. Wir legen Wert auf transparente Preisgestaltung ohne versteckte Kosten.",
  },
  {
    question: "Wie schnell kann ich mit Ergebnissen rechnen?",
    answer:
      "Das hängt vom jeweiligen Service ab. Bei Webprojekten liefern wir typischerweise innerhalb von 2-6 Wochen. Marketing-Kampagnen zeigen oft erste Ergebnisse nach 2-4 Wochen. Im Erstgespräch geben wir Ihnen eine realistische Einschätzung.",
  },
  {
    question: "Arbeitet ihr nur mit Unternehmen aus Offenburg?",
    answer:
      "Nein, wir arbeiten mit Unternehmen aus ganz Deutschland und dem DACH-Raum zusammen. Dank digitaler Kommunikation können wir Projekte ortsunabhängig umsetzen. Persönliche Treffen sind bei Bedarf natürlich möglich.",
  },
  {
    question: "Bietet ihr auch laufende Betreuung an?",
    answer:
      "Ja, neben Einzelprojekten bieten wir auch laufende Betreuung und Support an. Viele unserer Kunden arbeiten langfristig mit uns zusammen, um ihre Strategien kontinuierlich zu optimieren und neue Wachstumsmöglichkeiten zu erschließen.",
  },
  {
    question: "Wie kann ich euch kontaktieren?",
    answer:
      "Am einfachsten buchen Sie ein kostenloses Erstgespräch über unsere Website. Alternativ können Sie uns auch per E-Mail oder Telefon erreichen. Die Kontaktdaten finden Sie im Impressum.",
  },
];

// LocalBusiness Schema - für lokale Suchergebnisse
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_CONFIG.url}/#localbusiness`,
  name: SITE_CONFIG.company.name,
  description:
    "Wachstumspartner aus Offenburg für Recruiting, Marketing und Automatisierung.",
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.company.address.street,
    addressLocality: SITE_CONFIG.company.address.city,
    postalCode: SITE_CONFIG.company.address.postalCode,
    addressCountry: SITE_CONFIG.company.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.4738,
    longitude: 7.9447,
  },
  areaServed: [
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Switzerland" },
  ],
  priceRange: "€€",
};

// Combined schema for homepage (updated with all schemas)
export const homePageSchemaComplete = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    webPageSchema,
    serviceSchema,
    localBusinessSchema,
    founderSchema,
    coFounderSchema,
    bookingHowToSchema,
    generateReviewSchema(testimonialReviews),
    generateFAQSchema(homepageFAQs),
  ],
};
