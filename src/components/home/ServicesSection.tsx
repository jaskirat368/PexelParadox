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
                className={`group flex items-center justify-between px-6 py-4 border border-neutral-800 bg-neutral-950/40 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300 rounded-2xl ${index >= 6 ? 'lg:hidden' : ''}`}
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
        <div className="relative z-10 flex-1 flex flex-col gap-6">
          
          {/* Row 1: Horizontal Image */}
          <div className="w-full h-[280px] sm:h-[320px] relative border border-neutral-850 rounded-[2rem] overflow-hidden group/img order-1">
            <img 
              src="https://i.ibb.co/hxX4mPyT/dad70d8b79998b686eab8f852e611a91-webp.webp" 
              alt="Gym services preview" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%] transition-transform duration-500 group-hover/img:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-neutral-950/20 mix-blend-overlay transition-opacity duration-500 group-hover/img:opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Row 2: Buttons/Cards sitting horizontally on PC and larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full order-2">
            {/* Left Card - Dark */}
            <Link to="/process" className="flex flex-col group h-full">
              <PremiumInteractiveCard 
                className="h-full bg-[#1C1D21] p-6 flex flex-col justify-between border border-neutral-800 min-h-[160px] md:min-h-[180px]"
                borderRadius="2rem"
              >
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-6">
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
 
            {/* Right Card - Red */}
            <Link to="/contact#contact-form" className="flex flex-col group h-full">
              <PremiumInteractiveCard 
                className="h-full bg-brand-red p-6 flex flex-col justify-between min-h-[160px] md:min-h-[180px]"
                borderRadius="2rem"
              >
                <div>
                  <p className="text-sm font-medium text-white/90 mb-6">
                    Looking for experts who can scale your gym to maximum capacity?
                  </p>
                </div>
                <div className="flex items-end justify-between mt-auto">
                  <span className="text-white font-black text-xl leading-tight w-2/3">
                    Request Project
                  </span>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <ArrowUpRight className="text-brand-red" size={20} />
                  </div>
                </div>
              </PremiumInteractiveCard>
            </Link>
          </div>
 
          {/* Row 3: Last 2 Services placed below the cards to fill space (Desktop Only) */}
          <div className="hidden lg:flex flex-col gap-3 w-full order-3">
            {servicesList.slice(6, 8).map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group flex items-center justify-between px-6 py-4 border border-neutral-800 bg-neutral-950/40 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300 rounded-2xl w-full"
              >
                <div className="flex items-center gap-4">
                  <span className="text-brand-red font-black text-lg">0{index + 7}</span>
                  <span className="text-white font-semibold text-lg">{service.title}</span>
                </div>
                <ArrowRight className="text-gray-500 group-hover:text-white transition-colors" size={20} />
              </Link>
            ))}
          </div>
 
        </div>

      </div>
    </section>
  );
}

