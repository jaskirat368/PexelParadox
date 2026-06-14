import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumInteractiveCard from '../ui/PremiumInteractiveCard';

const servicesList = [
  { id: 'performance-marketing', title: 'Performance Marketing' },
  { id: 'lead-generation', title: 'Lead Generation' },
  { id: 'conversion-funnels', title: 'Conversion Funnels' },
  { id: 'meta-ads', title: 'Meta Ads' },
  { id: 'follow-up-systems', title: 'Follow-Up Systems' },
  { id: 'content-creation', title: 'Content Creation' },
  { id: 'gym-growth-strategy', title: 'Gym Growth Strategy' },
  { id: 'retention-strategies', title: 'Retention Strategies' },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#0F1012] py-24 w-full relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 relative items-stretch">
        
        {/* Left Column - Services List */}
        <div className="relative z-10 flex-1 flex flex-col justify-between">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white mb-6"
            >
              Our <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/50">Services.</span>
            </motion.h2>
            
            <p className="text-gray-400 text-base md:text-lg mb-10 max-w-sm font-medium leading-relaxed">
              We offer a range of tactical and data-driven services designed to help your facility dominate its local market.
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            {servicesList.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group flex items-center justify-between px-6 py-4 border border-neutral-800 bg-neutral-950/40 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300 rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <span className="text-brand-red font-black text-lg">0{index + 1}</span>
                  <span className="text-white font-semibold text-lg">{service.title}</span>
                </div>
                <ArrowRight className="text-gray-500 group-hover:text-white transition-colors" size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column - Image and Cards */}
        <div className="relative z-10 flex-1 flex flex-col sm:flex-row gap-6 items-stretch">
          
          {/* Tall Image */}
          <div className="flex-1 min-h-[300px] sm:min-h-[400px] relative border border-neutral-850 rounded-[2rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&fit=crop&auto=format" 
              alt="Gym owner working" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[50%]"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-6 sm:w-[220px] justify-between">
            {/* Top Card - Dark */}
            <Link to="/process" className="flex-1 flex flex-col group">
              <PremiumInteractiveCard 
                className="flex-1 bg-[#1C1D21] p-6 flex flex-col justify-between border border-neutral-800"
                borderRadius="2rem"
              >
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-8">
                    Ever wondered how predictable growth happens?
                  </p>
                </div>
                <div className="flex items-end justify-between mt-auto">
                  <span className="text-white font-bold text-lg leading-tight w-2/3">
                    See how we work
                  </span>
                  <div className="w-10 h-10 bg-[#303236] rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors shrink-0">
                    <ArrowUpRight className="text-white" size={20} />
                  </div>
                </div>
              </PremiumInteractiveCard>
            </Link>

            {/* Bottom Card - Red */}
            <Link to="/contact" className="flex-1 flex flex-col group">
              <PremiumInteractiveCard 
                className="flex-1 bg-brand-red p-6 flex flex-col justify-between"
                borderRadius="2rem"
              >
                <div>
                  <p className="text-sm font-medium text-white/90 mb-8">
                    Looking for experts who can scale your gym to maximum capacity?
                  </p>
                </div>
                <div className="flex items-end justify-between mt-auto">
                  <span className="text-white font-black text-xl leading-tight w-2/3">
                    Contact Us
                  </span>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <ArrowUpRight className="text-brand-red" size={20} />
                  </div>
                </div>
              </PremiumInteractiveCard>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

