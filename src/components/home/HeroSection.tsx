import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Trophy, Users, TrendingUp, Target, Dumbbell, ShieldCheck, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-12 md:pt-40 md:pb-16 lg:pt-32 lg:pb-8 xl:pt-40 xl:pb-16 px-6 overflow-hidden w-full bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] z-20 transition-all duration-500">
      
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
        
        {/* Floating "Live Leads" Element (Desktop Only) */}
        <motion.div 
          initial={{ opacity: 0, x: -50, rotate: -15 }}
          animate={{ opacity: 1, x: 0, rotate: -12 }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
          className="absolute lg:left-[-3rem] xl:left-[-6rem] 2xl:left-[-10rem] top-[22%] hidden lg:flex flex-col items-center gap-2 bg-white/85 backdrop-blur-md border border-brand-border p-3 rounded-2xl shadow-xl z-20 origin-top-left"
        >
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=11" alt="avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
              <img src="https://i.pravatar.cc/100?img=32" alt="avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-red flex items-center justify-center shadow-sm">
                <span className="text-white text-[10px] font-bold">+12</span>
              </div>
            </div>
            <p className="text-[10px] font-bold text-gray-500 uppercase text-center mt-1 leading-tight">Live Leads<br/><span className="text-[#25D366] flex items-center justify-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span> Generated</span></p>
        </motion.div>

        {/* Floating "ROAS" Element (Desktop Only) */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotate: 15 }}
          animate={{ opacity: 1, x: 0, rotate: 12 }}
          transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
          className="absolute lg:right-[-3rem] xl:right-[-6rem] 2xl:right-[-10rem] top-[30%] hidden lg:flex flex-col items-center gap-2 bg-[#0F1012] p-4 rounded-2xl shadow-xl z-20 border border-neutral-800 origin-top-right"
        >
            <div className="flex items-center gap-2 bg-brand-red/20 px-3 py-1.5 rounded-full">
              <Zap size={14} className="text-brand-red fill-current" />
              <span className="text-brand-red text-xs font-bold tracking-wider">ACTIVE CAMPAIGN</span>
            </div>
            <div>
              <p className="text-2xl font-black text-white text-center leading-none mt-1">4.2x</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase text-center mt-1">Avg ROAS <br/>This Week</p>
            </div>
        </motion.div>

        {/* Dynamic Subheading Badge */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-gray border border-brand-border mb-6 lg:mb-4 xl:mb-6 shadow-sm"
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
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-black tracking-tighter text-black leading-[0.95] mb-6 lg:mb-4 xl:mb-6"
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
          className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl balance mb-8 lg:mb-5 xl:mb-8 font-medium leading-relaxed"
        >
          A specialized growth partner for independent gym owners. We build high-ticket performance marketing systems that deliver measurable memberships and revenue.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative w-full max-w-sm sm:max-w-md mx-auto"
        >
          {/* Mobile Floating Card: Live Leads (Placed on the left of Request Project button) */}
          <motion.div 
            initial={{ opacity: 0, x: -30, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: -12 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
            className="absolute -left-3 sm:-left-12 top-[-10px] flex lg:hidden flex-col items-center gap-1 bg-white/95 backdrop-blur-md border border-brand-border p-2 rounded-xl shadow-xl z-20 scale-[0.7] sm:scale-80 origin-left pointer-events-none"
          >
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=11" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=32" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-red flex items-center justify-center shadow-sm">
                  <span className="text-white text-[9px] font-bold">+12</span>
                </div>
              </div>
              <p className="text-[9px] font-bold text-gray-500 uppercase text-center mt-0.5 leading-tight">Live Leads<br/><span className="text-[#25D366] flex items-center justify-center gap-1 mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span> Generated</span></p>
          </motion.div>

          {/* Mobile Floating Card: ACTIVE CAMPAIGN (Placed on the right of See How We Work button) */}
          <motion.div 
            initial={{ opacity: 0, x: 30, rotate: 15 }}
            animate={{ opacity: 1, x: 0, rotate: 12 }}
            transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
            className="absolute -right-3 sm:-right-12 bottom-[-10px] flex lg:hidden flex-col items-center gap-1 bg-[#0F1012]/95 backdrop-blur-md p-2 rounded-xl shadow-xl z-20 border border-neutral-800 scale-[0.7] sm:scale-80 origin-right pointer-events-none"
          >
              <div className="flex items-center gap-1.5 bg-brand-red/20 px-2 py-0.5 rounded-full">
                <Zap size={10} className="text-brand-red fill-current" />
                <span className="text-brand-red text-[8px] font-bold tracking-wider">ACTIVE CAMPAIGN</span>
              </div>
              <div>
                <p className="text-lg font-black text-white text-center leading-none mt-0.5">4.2x</p>
                <p className="text-[8px] font-bold text-gray-400 uppercase text-center mt-0.5">Avg ROAS <br/>This Week</p>
              </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center relative z-10 w-full px-6 sm:px-0">
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
      <div className="max-w-6xl mx-auto mt-12 lg:mt-6 xl:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 px-2 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-brand-gray border border-brand-border rounded-[1.5rem] p-5 flex items-center gap-4 transform hover:-translate-y-1 transition-transform duration-300 hover:border-brand-red/30 cursor-default relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center border border-brand-red/20 shrink-0 relative z-10">
            <Target className="text-brand-red" size={24} />
          </div>
          <div className="relative z-10">
            <div className="text-2xl font-black text-black leading-none mb-1">87%</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Digital Acquisition</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-brand-gray border border-brand-border rounded-[1.5rem] p-5 flex items-center gap-4 transform hover:-translate-y-1 transition-transform duration-300 hover:border-brand-red/30 cursor-default relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center border border-brand-red/20 shrink-0 relative z-10">
            <TrendingUp className="text-brand-red" size={24} />
          </div>
          <div className="relative z-10">
            <div className="text-2xl font-black text-black leading-none mb-1">3×</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Avg Lead Growth</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-brand-gray border border-brand-border rounded-[1.5rem] p-5 flex items-center gap-4 transform hover:-translate-y-1 transition-transform duration-300 hover:border-brand-red/30 cursor-default relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center border border-brand-red/20 shrink-0 relative z-10">
            <Dumbbell className="text-brand-red" size={24} />
          </div>
          <div className="relative z-10">
            <div className="text-2xl font-black text-black leading-none mb-1">100%</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Gyms Only</div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="bg-brand-gray border border-brand-border rounded-[1.5rem] p-5 flex items-center gap-4 transform hover:-translate-y-1 transition-transform duration-300 hover:border-brand-red/30 cursor-default relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center border border-brand-red/20 shrink-0 relative z-10">
            <ShieldCheck className="text-brand-red" size={24} />
          </div>
          <div className="relative z-10">
            <div className="text-2xl font-black text-black leading-none mb-1">₹0</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Wasted Ad Spend</div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
