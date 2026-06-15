export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "MarketingAgency", "LocalBusiness"],
  "name": "Pexel Paradox",
  "url": "https://pexelparadox.vercel.app/",
  "logo": "https://i.ibb.co/8LCr5WGd/IMG-20260614-214548.png",
  "image": "https://i.ibb.co/8LCr5WGd/IMG-20260614-214548.png",
  "description": "Pexel Paradox is a leading performance marketing agency for gyms and fitness centers in India. We specialize in gym lead generation, Facebook ads, and scalable revenue growth consulting.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "areaServed": [
    "India",
    "Chandigarh",
    "Mohali",
    "Delhi",
    "Gurgaon",
    "Noida",
    "Mumbai",
    "Pune",
    "Bangalore",
    "Hyderabad",
    "Chennai"
  ],
  "sameAs": [
    "https://pexelparadox.vercel.app/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  }
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateServiceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "Organization",
    "name": "Pexel Paradox"
  },
  "serviceType": serviceName,
  "description": description,
  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
});

export const generateBreadcrumbSchema = (crumbs: { name: string; item: string }[]) => ({
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.item
  }))
});
