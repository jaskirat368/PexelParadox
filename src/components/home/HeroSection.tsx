import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Trophy, Users, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-12 md:pt-40 md:pb-16 px-6 overflow-hidden w-full bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] z-20 transition-all duration-500">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract Red Glows */}
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-red/5 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-brand-red/5 blur-[100px]" />
        
        {/* Tech Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at center, #000000 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        
        {/* Dynamic Subheading Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-gray border border-brand-border mb-6 shadow-sm"
        >
          <div className="relative flex items-center justify-center w-3 h-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-600">
            Accepting New Partners • FY2026
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-black leading-[0.95] mb-6"
        >
          We Don't Just<br/>Run Ads. <br className="hidden md:block"/>
          <span className="text-brand-red relative inline-block mt-2">
             We Fill Gyms.
            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 text-brand-red/20 blur-[1px]" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeWidth="6" />
            </svg>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl balance mb-8 font-medium leading-relaxed"
        >
          A specialized growth partner for independent gym owners. We build high-ticket performance marketing systems that deliver measurable memberships and revenue.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link 
              to="/contact#contact-form" 
              className="inline-flex h-14 w-full sm:w-auto px-8 items-center justify-center rounded-full bg-brand-red text-white font-bold text-lg transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,53,53,0.3)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              Request Project
            </Link>
            <Link 
              to="/process" 
              className="inline-flex h-14 w-full sm:w-auto px-8 items-center justify-center rounded-full border-2 border-black bg-transparent text-black font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 group"
            >
              See How We Work
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Stat Cards (Out of the Box Interactive Element) */}
      <div className="max-w-5xl mx-auto mt-12 hidden md:grid grid-cols-3 gap-5 relative z-10 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-brand-gray border border-brand-border rounded-[1.5rem] p-5 flex items-center gap-5 transform hover:-translate-y-1 transition-transform duration-300 hover:border-brand-red/30 cursor-default"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center border border-brand-red/20 shrink-0">
            <Trophy className="text-brand-red" size={24} />
          </div>
          <div>
            <div className="text-2xl font-black text-black leading-none mb-1">75+</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Active Facilities</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-brand-gray border border-brand-border rounded-[1.5rem] p-5 flex items-center gap-5 transform hover:-translate-y-1 transition-transform duration-300 hover:border-brand-red/30 cursor-default"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center border border-brand-red/20 shrink-0">
            <TrendingUp className="text-brand-red" size={24} />
          </div>
          <div>
            <div className="text-2xl font-black text-black leading-none mb-1">$10M+</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Revenue Gen.</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-brand-gray border border-brand-border rounded-[1.5rem] p-5 flex items-center gap-5 transform hover:-translate-y-1 transition-transform duration-300 hover:border-brand-red/30 cursor-default"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center border border-brand-red/20 shrink-0">
            <Users className="text-brand-red" size={24} />
          </div>
          <div>
            <div className="text-2xl font-black text-black leading-none mb-1">3.5X</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Avg ROI</div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
