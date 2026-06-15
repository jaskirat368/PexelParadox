const BASE_URL = "https://pexelparadox.vercel.app";

const AREA_SERVED_CITIES = [
  "Chandigarh", "Mohali", "Delhi", "Gurgaon", "Noida", "Mumbai", "Pune", 
  "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Jaipur", 
  "Lucknow", "Indore", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"
];

const SAME_AS_LINKS = [
  "https://pexelparadox.vercel.app/",
  "https://www.instagram.com/pexelparadox/"
];

// Reusable core nodes
const organizationNode = {
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  "name": "Pexel Paradox",
  "url": BASE_URL,
  "logo": {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#logo`,
    "url": "https://i.ibb.co/8LCr5WGd/IMG-20260614-214548.png",
    "caption": "Pexel Paradox - Gym Performance Marketing Agency Logo in India"
  },
  "image": {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#heroImage`,
    "url": "https://i.ibb.co/cSthH6G9/IMG-20260614-120137.jpg"
  },
  "description": "Pexel Paradox is a leading, high-performance marketing agency for gyms and fitness centers in India. We specialize in local gym lead generation, Facebook and Instagram Ads for gyms, Google Ads, and automated member follow-up systems.",
  "sameAs": SAME_AS_LINKS
};

const localBusinessNode = {
  "@type": ["LocalBusiness", "ProfessionalService", "MarketingAgency"],
  "@id": `${BASE_URL}/#localbusiness`,
  "name": "Pexel Paradox",
  "image": "https://i.ibb.co/8LCr5WGd/IMG-20260614-214548.png",
  "url": BASE_URL,
  "email": "contact@pexelparadox.app",
  "telephone": "+91-99999-99999",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chandigarh",
    "addressRegion": "Punjab/Haryana",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.7333",
    "longitude": "76.7794"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "India"
    },
    ...AREA_SERVED_CITIES.map(city => ({
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "Country",
        "name": "India"
      }
    }))
  ],
  "knowsAbout": [
    "Gym Marketing",
    "Fitness Marketing",
    "Gym Lead Generation",
    "Performance Marketing",
    "Facebook Ads for Gyms",
    "Instagram Marketing for Gyms",
    "Google Ads for Gyms",
    "Gym Membership Growth",
    "Gym Client Acquisition",
    "Marketing Strategy",
    "Revenue Growth Consulting for Gyms",
    "Boutique Fitness Center Marketing"
  ],
  "parentOrganization": {
    "@id": `${BASE_URL}/#organization`
  }
};

const webSiteNode = {
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "url": BASE_URL,
  "name": "Pexel Paradox",
  "description": "High-Performance Gym Marketing Agency in India representing premium fitness brands.",
  "publisher": {
    "@id": `${BASE_URL}/#organization`
  }
};

export const generateHomeSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      localBusinessNode,
      webSiteNode,
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/#webpage`,
        "url": BASE_URL,
        "name": "Pexel Paradox | Gym Marketing Agency India & Fitness Lead Generation",
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "about": {
          "@id": `${BASE_URL}/#localbusiness`
        },
        "description": "Pexel Paradox is India's premier performance marketing agency for independent gym owners. Optimize your acquisition with Facebook Ads, Instagram Ads, and automated systems."
      },
      {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/#faqpage`,
        "isPartOf": {
          "@id": `${BASE_URL}/#webpage`
        },
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      // Distinct services linked to the local business entity
      {
        "@type": "Service",
        "@id": `${BASE_URL}/#service-gym-marketing`,
        "name": "Gym Marketing & Advertising",
        "serviceType": "MarketingAgency",
        "provider": { "@id": `${BASE_URL}/#localbusiness` },
        "description": "End-to-end local business performance marketing tailored exclusively for independent gyms and boutique fitness studios. Includes audience analysis, target scaling, and high-conversion client acquisition campaigns.",
        "areaServed": { "@type": "Country", "name": "India" }
      },
      {
        "@type": "Service",
        "@id": `${BASE_URL}/#service-lead-generation`,
        "name": "Fitness Lead Generation",
        "serviceType": "LeadGeneration",
        "provider": { "@id": `${BASE_URL}/#localbusiness` },
        "description": "Specialized high-intent lead generation using local geofencing and custom fitness campaigns to funnel active prospects straight to your gym sales team.",
        "areaServed": { "@type": "Country", "name": "India" }
      },
      {
        "@type": "Service",
        "@id": `${BASE_URL}/#service-meta-ads`,
        "name": "Facebook & Instagram Ads Management for Gyms",
        "serviceType": "SocialMediaMarketing",
        "provider": { "@id": `${BASE_URL}/#localbusiness` },
        "description": "Strategically targeted and continuously scaled Meta ad campaigns designed to consistently attract high-value monthly members and premium training signups.",
        "areaServed": { "@type": "Country", "name": "India" }
      }
    ]
  };
};

export const generateAboutSchema = () => {
  const pageUrl = `${BASE_URL}/about`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      localBusinessNode,
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": pageUrl,
        "name": "About Our Gym Marketing Agency | Pexel Paradox",
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "description": "Pexel Paradox is a dedicated gym and fitness marketing agency in India, engineered from the ground up to secure predictable membership revenue without false promises.",
        "breadcrumb": {
          "@id": `${pageUrl}/#breadcrumb`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": pageUrl
          }
        ]
      }
    ]
  };
};

export const generateServicesSchema = () => {
  const pageUrl = `${BASE_URL}/services`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      localBusinessNode,
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": pageUrl,
        "name": "Gym Marketing Services | Lead Generation & Ads",
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "description": "Professional performance services for fitness businesses, including Facebook Ads, active local lead acquisition, professional content creation, and auto nurturing setups.",
        "breadcrumb": {
          "@id": `${pageUrl}/#breadcrumb`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": pageUrl
          }
        ]
      },
      // Professional Services listed as core entities
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service-performance-marketing`,
        "name": "Performance Marketing for Gyms",
        "provider": { "@id": `${BASE_URL}/#localbusiness` },
        "description": "Data-focused budget allocation centered around high-performance client acquisition systems."
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service-meta-ads-service`,
        "name": "Meta Ads Management for Gyms",
        "provider": { "@id": `${BASE_URL}/#localbusiness` },
        "description": "Hyper-local Facebook and Instagram campaigns built to target and convert fitness buyers in your backyard."
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service-lead-gen`,
        "name": "High-Intent Gym Lead Generation",
        "provider": { "@id": `${BASE_URL}/#localbusiness` },
        "description": "Capturing and qualifying serious local prospects interested in long-term memberships."
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service-content-creation`,
        "name": "Gym Advertising Content & Creative",
        "provider": { "@id": `${BASE_URL}/#localbusiness` },
        "description": "Engaging visual and video content creation that highlights facilities and turns heads locally."
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service-conversion-funnels`,
        "name": "Gym Direct Conversion Funnels",
        "provider": { "@id": `${BASE_URL}/#localbusiness` },
        "description": "Highly responsive digital landing pages engineered strictly for converting signups."
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service-follow-up`,
        "name": "Speed-to-Lead Automation & Nurturing",
        "provider": { "@id": `${BASE_URL}/#localbusiness` },
        "description": "Instant lead follow-up automation via SMS and active messaging to keep booked trials high."
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service-growth-consulting`,
        "name": "Gym Business Growth Strategy",
        "provider": { "@id": `${BASE_URL}/#localbusiness` },
        "description": "Comprehensive consultive advisory focusing on unit economics, group scaling, and member retention."
      }
    ]
  };
};

export const generateProcessSchema = () => {
  const pageUrl = `${BASE_URL}/process`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      localBusinessNode,
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": pageUrl,
        "name": "Our 8-Phase Process | Gym Marketing & Lead Generation System",
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "description": "Review the exact 8-phase tactical performance marketing framework utilized by Pexel Paradox to scale gym client acquisition from zero stability to capacity in India.",
        "breadcrumb": {
          "@id": `${pageUrl}/#breadcrumb`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Process",
            "item": pageUrl
          }
        ]
      }
    ]
  };
};

export const generateResultsSchema = () => {
  const pageUrl = `${BASE_URL}/results`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      localBusinessNode,
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": pageUrl,
        "name": "Client Results & Case Proofs | Gym Lead Generation Agency",
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "description": "Verify the high-yield performance marketing outcomes. Authentic metrics, real growth figures, and predictable fitness lead results across India.",
        "breadcrumb": {
          "@id": `${pageUrl}/#breadcrumb`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Results",
            "item": pageUrl
          }
        ]
      }
    ]
  };
};

export const generateContactSchema = () => {
  const pageUrl = `${BASE_URL}/contact`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      localBusinessNode,
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}/#webpage`,
        "url": pageUrl,
        "name": "Contact Pexel Paradox | Gym Marketing Agency",
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "description": "Ready to scale your gym membership predictably? Secure a strategy call with our specialists and end the chaos today.",
        "breadcrumb": {
          "@id": `${pageUrl}/#breadcrumb`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": pageUrl
          }
        ]
      }
    ]
  };
};

export const generateProcessDetailSchema = (id: string, title: string, tagline: string, description: string) => {
  const pageUrl = `${BASE_URL}/process/${id}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      localBusinessNode,
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": pageUrl,
        "name": `${title} | Gym Marketing Process Stage | Pexel Paradox`,
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "description": description || tagline,
        "breadcrumb": {
          "@id": `${pageUrl}/#breadcrumb`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Process",
            "item": `${BASE_URL}/process`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": pageUrl
          }
        ]
      }
    ]
  };
};

export const generateServiceDetailSchema = (id: string, title: string, tagline: string, overview: string) => {
  const pageUrl = `${BASE_URL}/services/${id}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      localBusinessNode,
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": pageUrl,
        "name": `${title} | Gym Marketing & Lead Generation Services | Pexel Paradox`,
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "description": overview || tagline,
        "breadcrumb": {
          "@id": `${pageUrl}/#breadcrumb`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `${BASE_URL}/services`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": pageUrl
          }
        ]
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        "name": title,
        "serviceType": "MarketingAgency",
        "provider": { "@id": `${BASE_URL}/#localbusiness` },
        "description": overview || tagline,
        "areaServed": { "@type": "Country", "name": "India" }
      }
    ]
  };
};

export const generateLegalPageSchema = (pageType: string, title: string, description: string) => {
  const typeSlug = pageType.toLowerCase().replace(/\s+/g, '-');
  const pageUrl = `${BASE_URL}/legal/${typeSlug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      localBusinessNode,
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": pageUrl,
        "name": `${title} | Legal | Pexel Paradox`,
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "description": description,
        "breadcrumb": {
          "@id": `${pageUrl}/#breadcrumb`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": title,
            "item": pageUrl
          }
        ]
      }
    ]
  };
};
