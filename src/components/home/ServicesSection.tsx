import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <section className="py-28 px-6 md:px-12 w-full max-w-[1400px] mx-auto relative">
      {/* Outer wrapper with the custom fold clip-path to create a dual-fold folder tab look */}
      <div 
        className="relative flex flex-col lg:flex-row overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(220,53,53,0.15)] bg-neutral-800"
        style={{
          clipPath: 'polygon(0% 24px, 48px 24px, 72px 0px, calc(100% - 72px) 0px, calc(100% - 48px) 24px, 100% 24px, 100% calc(100% - 24px), calc(100% - 48px) calc(100% - 24px), calc(100% - 72px) 100%, 72px 100%, 48px calc(100% - 24px), 0% calc(100% - 24px))'
        }}
      >
        {/* Flawless Inner Content Container with matching clip-path to form a sharp 1px border outline */}
        <div 
          className="absolute inset-[1px] bg-[#0F1012] z-0"
          style={{
            clipPath: 'polygon(0% 24px, 48px 24px, 72px 0px, calc(100% - 72px) 0px, calc(100% - 48px) 24px, 100% 24px, 100% calc(100% - 24px), calc(100% - 48px) calc(100% - 24px), calc(100% - 72px) 100%, 72px 100%, 48px calc(100% - 24px), 0% calc(100% - 24px))'
          }}
        />

        {/* 3D Fold Crease Visual Accent Lines at the angled vertices */}
        <div className="absolute left-[47px] top-0 w-[26px] h-6 border-r border-[#ffffff20] bg-[#ffffff05] skew-x-[45deg] origin-bottom-left pointer-events-none z-10" />
        <div className="absolute right-[47px] top-0 w-[26px] h-6 border-l border-[#ffffff20] bg-[#ffffff05] -skew-x-[45deg] origin-bottom-right pointer-events-none z-10" />
        <div className="absolute left-[47px] bottom-0 w-[26px] h-6 border-r border-[#ffffff20] bg-[#ffffff05] -skew-x-[45deg] origin-top-left pointer-events-none z-10" />
        <div className="absolute right-[47px] bottom-0 w-[26px] h-6 border-l border-[#ffffff20] bg-[#ffffff05] skew-x-[45deg] origin-top-right pointer-events-none z-10" />

        {/* Vertical Tag - Absolute positioned on left */}
        <div className="hidden lg:flex absolute left-0 top-16 bg-brand-red py-6 px-2 rounded-r-lg z-10 flex-col items-center">
          <span className="text-white font-bold tracking-widest text-xs" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            WHAT WE DO
          </span>
        </div>

        {/* Left Column - Services List */}
        <div className="relative z-10 flex-1 p-8 md:p-12 lg:pl-20 lg:py-16 flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white mb-6"
          >
            Our <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/50">Services.</span>
          </motion.h2>
          
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-sm">
            We offer a range of tactical and data-driven services designed to help your facility dominate its local market.
          </p>

          <div className="flex flex-col gap-4 mt-auto">
            {servicesList.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group flex items-center justify-between px-6 py-4 rounded-full border border-gray-800 bg-gray-900/50 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
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
        <div className="relative z-10 flex-1 p-8 md:p-12 lg:py-16 lg:pr-16 flex flex-col sm:flex-row gap-6">
          
          {/* Tall Image */}
          <div className="flex-1 rounded-[2rem] overflow-hidden min-h-[300px] sm:min-h-[400px] relative">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&authfit=crop&auto=format" 
              alt="Gym owner working" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[50%]"
            />
            {/* Overlay gradient just in case */}
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-6 sm:w-[220px]">
            {/* Top Card - Dark */}
            <Link to="/process" className="flex-1 rounded-3xl bg-[#1C1D21] p-6 flex flex-col justify-between group hover:bg-[#25262A] transition-colors border border-gray-800">
              <p className="text-sm font-medium text-gray-400 mb-8">
                Ever wondered how predictable growth happens?
              </p>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-white font-bold text-lg leading-tight w-2/3">
                  See how we work
                </span>
                <div className="w-10 h-10 rounded-full bg-[#303236] flex items-center justify-center group-hover:bg-gray-700 transition-colors shrink-0">
                  <ArrowUpRight className="text-white" size={20} />
                </div>
              </div>
            </Link>

            {/* Bottom Card - Red (Green in original) */}
            <Link to="/contact" className="flex-1 rounded-3xl bg-brand-red p-6 flex flex-col justify-between group hover:bg-red-600 transition-colors">
              <p className="text-sm font-medium text-white/90 mb-8">
                Looking for experts who can scale your gym to maximum capacity?
              </p>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-white font-black text-xl leading-tight w-2/3">
                  Contact Us
                </span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <ArrowUpRight className="text-brand-red" size={20} />
                </div>
              </div>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

