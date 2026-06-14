import HeroSection from '../components/home/HeroSection';
import ProblemSolutionSection from '../components/home/ProblemSolutionSection';
import ServicesSection from '../components/home/ServicesSection';
import MarqueeSection from '../components/home/MarqueeSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import CtaSection from '../components/home/CtaSection';

export default function Home() {
  return (
    <>
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
