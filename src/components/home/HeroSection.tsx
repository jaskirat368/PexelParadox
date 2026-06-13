import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden max-w-7xl mx-auto rounded-b-[3rem] md:rounded-b-[5rem] bg-brand-gray w-full border-x border-b border-brand-border">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-red/10 blur-[100px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-brand-red/5 blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-black/50 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-gray-300">New: Predictable Gym Growth System</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.05] mb-8"
        >
          We Don't Just Run Ads. <br className="hidden md:block"/>
          <span className="text-brand-red relative inline-block">
             We Fill Gyms.
            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 text-brand-red" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeWidth="4" />
            </svg>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl balance mb-12"
        >
          A specialized growth partner for independent gym owners. We build high-ticket performance marketing systems that deliver measurable memberships and revenue.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link 
            to="/contact" 
            className="inline-flex h-14 px-8 items-center justify-center rounded-full bg-brand-red text-white font-semibold text-lg transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,53,53,0.4)]"
          >
            Start Your Growth Project
          </Link>
          <Link 
            to="/process" 
            className="inline-flex h-14 px-8 items-center justify-center rounded-full border border-brand-border bg-black/50 text-white font-semibold text-lg hover:bg-white/5 transition-colors group"
          >
            See How We Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col gap-1">
          <div className="w-12 h-1 bg-brand-red" />
          <div className="w-8 h-1 bg-brand-red/50" />
        </div>
      </div>
    </section>
  );
}
