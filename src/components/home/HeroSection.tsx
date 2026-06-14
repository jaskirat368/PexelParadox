import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Trophy, Users, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-40 px-6 overflow-hidden w-full bg-[#050505] text-white rounded-b-[3rem] md:rounded-b-[5rem] z-20 transition-all duration-500">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract Red Glows */}
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-red/10 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-brand-red/10 blur-[100px]" />
        
        {/* Tech Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`, 
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
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <div className="relative flex items-center justify-center w-3 h-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">
            Accepting New Partners • FY2026
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] mb-8"
        >
          We Don't Just<br/>Run Ads. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500 relative inline-block mt-2">
             We Fill Gyms.
            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 text-brand-red/40 blur-[2px]" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeWidth="6" />
            </svg>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-neutral-400 max-w-3xl balance mb-14 font-medium leading-relaxed"
        >
          A specialized growth partner for independent gym owners. We build high-ticket performance marketing systems that deliver measurable memberships and revenue.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
            <Link 
              to="/contact#contact-form" 
              className="inline-flex h-16 w-full sm:w-auto px-10 items-center justify-center rounded-full bg-brand-red text-white font-bold text-lg md:text-xl transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(220,53,53,0.4)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              Request Project
            </Link>
            <Link 
              to="/process" 
              className="inline-flex h-16 w-full sm:w-auto px-10 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 group"
            >
              See How We Work
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Stat Cards (Out of the Box Interactive Element) */}
      <div className="max-w-6xl mx-auto mt-24 hidden md:grid grid-cols-3 gap-6 relative z-10 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 flex items-center gap-6 transform hover:-translate-y-2 transition-transform duration-300 hover:border-brand-red/30 cursor-default"
        >
          <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center border border-brand-red/20 shrink-0">
            <Trophy className="text-brand-red" size={28} />
          </div>
          <div>
            <div className="text-3xl font-black text-white leading-none mb-1">75+</div>
            <div className="text-sm font-medium text-neutral-400 uppercase tracking-wider">Active Facilities</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 flex items-center gap-6 transform hover:-translate-y-2 transition-transform duration-300 hover:border-brand-red/30 cursor-default"
        >
          <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center border border-brand-red/20 shrink-0">
            <TrendingUp className="text-brand-red" size={28} />
          </div>
          <div>
            <div className="text-3xl font-black text-white leading-none mb-1">$10M+</div>
            <div className="text-sm font-medium text-neutral-400 uppercase tracking-wider">Revenue Generated</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 flex items-center gap-6 transform hover:-translate-y-2 transition-transform duration-300 hover:border-brand-red/30 cursor-default"
        >
          <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center border border-brand-red/20 shrink-0">
            <Users className="text-brand-red" size={28} />
          </div>
          <div>
            <div className="text-3xl font-black text-white leading-none mb-1">3.5X</div>
            <div className="text-sm font-medium text-neutral-400 uppercase tracking-wider">Avg ROI Delivered</div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
