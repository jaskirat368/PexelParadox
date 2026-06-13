import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ProblemSolutionSection from '../components/home/ProblemSolutionSection';
import ServicesSection from '../components/home/ServicesSection';
import MarqueeSection from '../components/home/MarqueeSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <MarqueeSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
