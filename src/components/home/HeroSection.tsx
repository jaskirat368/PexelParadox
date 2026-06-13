import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 md:pt-28 md:pb-32 px-6 overflow-hidden w-full bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] z-20 transition-all duration-500">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-red/5 blur-[100px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-brand-red/5 blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black leading-[1.05] mb-8"
        >
          We Don't Just Run Ads. <br className="hidden md:block"/>
          <span className="text-brand-red relative inline-block">
             We Fill Gyms.
            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 text-brand-red/20" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeWidth="4" />
            </svg>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl balance mb-12 font-medium"
        >
          A specialized growth partner for independent gym owners. We build high-ticket performance marketing systems that deliver measurable memberships and revenue.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/contact" 
              className="inline-flex h-14 px-8 items-center justify-center rounded-full bg-brand-red text-white font-semibold text-lg transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,53,53,0.3)]"
            >
              Start Your Growth Project
            </Link>
            <Link 
              to="/process" 
              className="inline-flex h-14 px-8 items-center justify-center rounded-full border-2 border-black bg-transparent text-black font-semibold text-lg hover:bg-black hover:text-white transition-colors group"
            >
              See How We Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block opacity-30">
        <div className="flex flex-col gap-1">
          <div className="w-12 h-1 bg-brand-red" />
          <div className="w-8 h-1 bg-brand-red/50" />
        </div>
      </div>
    </section>
  );
}
