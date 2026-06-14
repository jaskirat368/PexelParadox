import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { PhoneCall, Search, Target, Settings, Rocket, Users, Activity, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumInteractiveCard from '../components/ui/PremiumInteractiveCard';

const steps = [
  {
    id: "strategy-call",
    icon: PhoneCall,
    title: "Strategy Call",
    purpose: "Evaluate alignment between your facility's goals and our systems.",
  },
  {
    id: "gym-growth-audit",
    icon: Search,
    title: "Gym Growth Audit",
    purpose: "Analyze your current marketing infrastructure, pricing, and historical conversion metrics.",
  },
  {
    id: "offer-positioning",
    icon: Target,
    title: "Offer Positioning",
    purpose: "Engineer a highly compelling, low-friction introductory offer tailored to your local demographic.",
  },
  {
    id: "marketing-system-setup",
    icon: Settings,
    title: "Marketing System Setup",
    purpose: "Deploy the backend infrastructure required to capture, track, and nurture traffic.",
  },
  {
    id: "campaign-launch",
    icon: Rocket,
    title: "Campaign Launch",
    purpose: "Release tactical, scroll-stopping creative assets across Meta and search platforms.",
  },
  {
    id: "lead-management",
    icon: Users,
    title: "Lead Management",
    purpose: "Bridge the gap between a digital opt-in and a physical front-door walk-in.",
  },
  {
    id: "optimization",
    icon: Activity,
    title: "Optimization",
    purpose: "Aggressively manage campaign budgets to lower Cost Per Acquisition (CPA).",
  },
  {
    id: "scaling",
    icon: TrendingUp,
    title: "Scaling",
    purpose: "Increase budget and market penetration once predictability is established.",
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="w-full relative bg-brand-gray min-h-screen pb-20">
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden w-full bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
          <span className="text-brand-red font-bold tracking-widest uppercase block">The Blueprint</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]"
          >
            How We <span className="text-brand-red">Work.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed max-w-3xl mt-4"
          >
            Predictability isn't an accident. It is the result of applying a disciplined, step-by-step strategy to gym acquisition.
          </motion.p>
        </div>
      </section>

      {/* Grid of steps */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 overflow-hidden">
        <div ref={containerRef} className="flex flex-col gap-12 sm:gap-24 relative">
          
          {/* The Static Background Line */}
          <div className="absolute top-0 bottom-0 left-[39px] md:left-1/2 w-[2px] bg-brand-border md:-translate-x-1/2 z-0" />
          
          {/* The Animated Red Line */}
          <motion.div 
            className="absolute top-0 left-[39px] md:left-1/2 w-[2px] bg-brand-red md:-translate-x-1/2 shadow-[0_0_15px_rgba(220,53,53,0.8)] z-0 origin-top"
            style={{ height: lineHeight }}
          />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline dot */}
              <motion.div 
                initial={{ borderColor: '#E5E7EB', color: '#9CA3AF' }}
                whileInView={{ borderColor: '#DC3535', color: '#DC3535' }}
                viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-20 h-20 rounded-full border-4 bg-white shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10"
              >
                <step.icon size={28} />
              </motion.div>
              
              {/* Content Box */}
              <Link 
                to={`/process/${step.id}`}
                className="w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] z-10 group/card block text-left"
              >
                <PremiumInteractiveCard
                  className="bg-white border border-brand-border p-5 sm:p-6 md:p-8 hover:border-brand-red transition-all duration-300 block overflow-hidden"
                  borderRadius="1rem"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-[40px] pointer-events-none group-hover/card:bg-brand-red/10 transition-colors" />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-4 sm:mb-6">
                     <span className="text-2xl sm:text-3xl font-black text-gray-205 group-hover/card:text-brand-red/20 transition-colors shrink-0">0{index + 1}</span>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black break-words min-w-0 font-sans">{step.title}</h3>
                  </div>
                  
                  <div className="flex flex-col gap-5">
                    <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">{step.purpose}</p>

                    <div className="flex items-center text-brand-red font-bold uppercase tracking-widest text-sm mt-4">
                      View Process Detail <ArrowRight size={16} className="ml-2 group-hover/card:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </PremiumInteractiveCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-12 mt-12">
        <PremiumInteractiveCard 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white text-black p-12 md:p-20 text-center flex flex-col items-center shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-brand-border relative overflow-hidden"
          borderRadius="3rem"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 relative z-10 font-sans">Stop the Chaos.<br/>Install the System.</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl relative z-10 font-medium font-sans">
            Ready to transition from random acts of marketing to a predictable growth machine?
          </p>
          <Link 
            to="/contact#contact-form" 
            className="inline-flex h-14 md:h-16 px-8 md:px-10 items-center justify-center rounded-full bg-brand-red text-white font-bold text-sm md:text-xl uppercase tracking-[0.15em] transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(220,53,53,0.4)] relative z-10 whitespace-nowrap w-full sm:w-auto max-w-[280px] sm:max-w-none"
          >
            <span>Request Project</span>
            <ArrowRight className="ml-3 flex-shrink-0" size={20} />
          </Link>
        </PremiumInteractiveCard>
      </section>
    </div>
  );
}
