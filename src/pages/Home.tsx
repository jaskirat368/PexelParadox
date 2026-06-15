import HeroSection from '../components/home/HeroSection';
import ProblemSolutionSection from '../components/home/ProblemSolutionSection';
import ServicesSection from '../components/home/ServicesSection';
import MarqueeSection from '../components/home/MarqueeSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import CtaSection from '../components/home/CtaSection';
import SEO from '../components/ui/SEO';
import { generateHomeSchema } from '../utils/seoSchemas';

const homeFaqs = [
  {
    question: "How can I get more gym members?",
    answer: "Getting more gym members requires a predictable client acquisition system. We use high-intent Facebook & Instagram Ads, combined with Google Ads for gyms, to drive qualified leads. Then, we implement follow-up systems to convert those leads into paying members."
  },
  {
    question: "Do Facebook Ads work for gyms?",
    answer: "Yes, Facebook Ads are one of the most effective tools for gym lead generation. By targeting local fitness enthusiasts and creating compelling offers, performance marketing can drastically increase your gym membership growth within days."
  },
  {
    question: "What is gym lead generation?",
    answer: "Gym lead generation is the process of attracting potential members in your local area and capturing their contact information. As a specialized performance marketing agency, we filter these leads to ensure you only speak with high-value prospects."
  },
  {
    question: "How long does it take to see results?",
    answer: "Once our gym marketing campaigns go live, you typically see the first high-intent leads within 24 to 48 hours. Our revenue growth systems are designed for immediate traction and scalable long-term growth."
  },
  {
    question: "Can you help independent gym owners?",
    answer: "Our systems are explicitly designed for independent gym owners, boutique fitness studios, and localized personal training facilities. We give you the marketing firepower to compete with franchise brands."
  },
  {
    question: "Do you provide content creation?",
    answer: "Yes, we handle content creation specifically optimized for gym advertising. From video ads to engaging social media marketing assets, we create creative materials designed to convert local prospects."
  },
  {
    question: "Do you work with gyms across India?",
    answer: "Absolutely. We are a specialized gym marketing agency serving fitness businesses across India, including major cities like Delhi, Mumbai, Bangalore, Pune, Chandigarh, Hyderabad, and more."
  },
  {
    question: "What makes Pexel Paradox different?",
    answer: "We don't just run ads; we fill gyms. While generic agencies guess, we use data-backed performance marketing systems to deliver guaranteed predictability and measurable membership revenue."
  }
];

export default function Home() {
  return (
    <>
      <SEO 
        title="Gym Marketing Agency India | Fitness Lead Generation"
        description="Pexel Paradox is India's leading performance marketing agency for independent gyms. We specialize in gym lead generation, Facebook ads for gyms, and scalable revenue growth consulting."
        canonicalUrl="https://pexelparadox.vercel.app/"
        schema={generateHomeSchema(homeFaqs)}
      />
      <HeroSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <MarqueeSection />
      <TestimonialsSection />
      <FAQSection />
      <CtaSection />
    </>
  );
}
