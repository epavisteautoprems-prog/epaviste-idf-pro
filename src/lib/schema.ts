import type { Article, BreadcrumbItem, FAQ, Service } from "@/types";
import { SITE_CONFIG } from "@/lib/constants";

const sameAs: string[] = [];

const baseUrl = SITE_CONFIG.url.replace(/\/$/, "");

const orgId = `${baseUrl}/#organization`;
const businessId = `${baseUrl}/#business`;
const websiteId = `${baseUrl}/#website`;

/**
 * Graphe Schema.org unique (Organization + LocalBusiness + WebSite).
 * Évite le SearchAction fictif si le site n’a pas de moteur de recherche interne.
 */
export function siteWideGraphSchema(): object {
  const phone = SITE_CONFIG.phoneHref.replace("tel:", "");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_CONFIG.schemaBrandName,
        url: baseUrl,
        logo: `${baseUrl}/icon.svg`,
        email: SITE_CONFIG.email,
        ...(sameAs.length ? { sameAs } : {}),
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: phone,
            contactType: "customer service",
            areaServed: "FR",
            availableLanguage: ["French", "fr"],
          },
        ],
      },
      {
        "@type": ["LocalBusiness", "AutomotiveBusiness"],
        "@id": businessId,
        name: SITE_CONFIG.schemaBrandName,
        description: SITE_CONFIG.description,
        url: baseUrl,
        image:
          "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=630&fit=crop&q=80",
        telephone: phone,
        email: SITE_CONFIG.email,
        priceRange: "Gratuit",
        parentOrganization: { "@id": orgId },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "07:00",
          closes: "22:00",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Île-de-France",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address,
          addressRegion: "Île-de-France",
          addressCountry: "FR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: String(SITE_CONFIG.rating),
          reviewCount: String(SITE_CONFIG.reviewCount),
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services Épaviste",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Enlèvement épave gratuit",
                url: `${baseUrl}/enlevement-epave-gratuit`,
              },
              price: "0",
              priceCurrency: "EUR",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Rachat épave",
                url: `${baseUrl}/rachat-epave`,
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: SITE_CONFIG.schemaBrandName,
        url: baseUrl,
        inLanguage: "fr-FR",
        publisher: { "@id": orgId },
      },
    ],
  };
}

/** @deprecated Préférer siteWideGraphSchema dans layout */
export function localBusinessSchema(): object {
  return siteWideGraphSchema();
}

export function faqSchema(faqs: FAQ[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path.startsWith("http")
        ? item.path
        : `${baseUrl}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

export function articleSchema(article: Article): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image.startsWith("http")
      ? article.image
      : `${baseUrl}${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      "@type": "Organization",
      "@id": orgId,
      name: SITE_CONFIG.schemaBrandName,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}

export function serviceSchema(service: Service): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@id": businessId },
    areaServed: {
      "@type": "AdministrativeArea",
      name: service.areaServed ?? "Île-de-France",
    },
    url: service.url,
  };
}

/** @deprecated Inclus dans siteWideGraphSchema */
export function websiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.schemaBrandName,
    url: baseUrl,
  };
}

export function aggregateRatingSchema(rating: number, count: number): object {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: rating,
    reviewCount: count,
    bestRating: 5,
    worstRating: 1,
  };
}
