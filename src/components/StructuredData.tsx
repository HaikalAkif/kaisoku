'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function StructuredData() {
  const pathname = usePathname();
  const baseUrl = 'https://kaisoku.com';
  const currentUrl = `${baseUrl}${pathname}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kaisoku",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Streamline your workflow, boost productivity, and scale effortlessly with Kaisoku's innovative SaaS platform.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+60-12-345-6789",
      "contactType": "Customer Service",
      "email": "haikalakif@kaisoku.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/kaisoku",
      "https://www.linkedin.com/company/kaisoku",
      "https://www.instagram.com/kaisoku"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kuala Lumpur",
      "addressCountry": "MY"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kaisoku",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kaisoku",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "19",
      "priceCurrency": "RM"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  let pageSchema = null;

  if (pathname === '/') {
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Kaisoku - Transform Your Business with Powerful SaaS Solutions",
      "description": "Streamline your workflow, boost productivity, and scale effortlessly with Kaisoku's innovative SaaS platform.",
      "url": currentUrl,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Kaisoku",
        "url": baseUrl
      }
    };
  } else if (pathname === '/about') {
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Kaisoku",
      "description": "Learn about Kaisoku's mission, values, and the team behind our innovative SaaS platform.",
      "url": currentUrl
    };
  } else if (pathname === '/contact') {
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Kaisoku",
      "description": "Get in touch with Kaisoku. Send us a message and we'll respond as soon as possible.",
      "url": currentUrl
    };
  } else if (pathname === '/pricing') {
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Pricing - Kaisoku",
      "description": "Simple, transparent pricing. Choose a plan that grows with your team.",
      "url": currentUrl
    };
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      {pageSchema && (
        <Script
          id="page-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
      )}
    </>
  );
}

