import { motion } from 'motion/react';
import { ArrowRight, BarChart3, LineChart, Target, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumInteractiveCard from '../components/ui/PremiumInteractiveCard';

export default function Results() {
  return (
    <div className="w-full relative bg-brand-gray min-h-screen pb-20">
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden w-full bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="max-w-3xl">
            <span className="text-brand-red font-bold tracking-widest uppercase mb-4 block">The Outcomes</span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
            >
              Client <br className="hidden md:block"/>
              <span className="text-gray-400">Results.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed max-w-2xl"
            >
              We measure success by one metric alone: profitable foot traffic that translates to signed contracts. Discover how we track, measure, and scale growth for independent fitness facilities.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block shrink-0"
          >
            <div className="w-48 h-48 rounded-full border-4 border-black/10 flex items-center justify-center p-4">
              <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center text-white">
                <span className="text-brand-red font-bold mb-1">PROVEN</span>
                <span className="font-black text-xl leading-none">ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Breakdown Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          
          {/* Section: The Metrics That Matter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center mb-4">
              <Target className="text-brand-red" size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">
              The Metrics <br/>That Matter
            </h3>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              We do not report on "reach," "impressions," or "likes." Those are vanity metrics designed by mediocre agencies to hide a lack of results. We track the numbers that dictate your bottom line: Cost Per Lead (CPL), Show Rate, Cost Per Acquisition (CPA), and absolute return on ad spend. If a campaign isn't putting paying members onto your gym floor, it is shut down and recalibrated.
            </p>
          </motion.div>

          {/* Section: What Success Looks Like */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center mb-4">
              <TrendingUp className="text-brand-red" size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">
              What Success <br/>Looks Like
            </h3>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Success is not a sudden, unmanageable spike in traffic. True success is engineered predictability. When our systems are fully integrated, you will know exactly how much it costs to acquire a new member. You will know your show rates. More importantly, you will have a mechanical lever to pull when you have capacity to fill—turning marketing from a random expense into a predictable investment.
            </p>
          </motion.div>

          {/* Section: Our Reporting Philosophy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center mb-4">
              <LineChart className="text-brand-red" size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">
              Our Reporting <br/>Philosophy
            </h3>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Transparency is non-negotiable. You receive clear, actionable data regarding exactly what is happening with your lead flow. We track campaign velocity, lead quality indicators, and front-desk conversion efficiency. We analyze not just who clicked, but who showed up and why. We bridge the gap between digital marketing and the physical reality of running your facility.
            </p>
          </motion.div>

          {/* Section: Growth Is A System */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center mb-4">
              <BarChart3 className="text-brand-red" size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">
              Growth Is <br/>A System
            </h3>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              High-quality leads mean nothing if your retention model is broken. Acquisition is only the first step. By combining hyper-local ad strategies with robust speed-to-lead follow-up mechanisms, we ensure maximum ROI. We also analyze churn to ensure the members we put in your gym stay in your gym, allowing your Monthly Recurring Revenue to compound over time.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-12">
        <PremiumInteractiveCard 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white text-black p-12 md:p-20 text-center flex flex-col items-center shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-brand-border relative overflow-hidden"
          borderRadius="3rem"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none" />
          <ShieldCheck className="text-brand-red mb-8" size={64} />
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 relative z-10 font-sans">Stop Paying For Promises.<br/>Pay For Predictability.</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl relative z-10 font-medium font-sans">
            If you are ready to implement a data-backed acquisition engine that scales your facility to capacity, it's time to talk.
          </p>
          <Link 
            to="/contact#contact-form" 
            className="inline-flex h-16 px-10 items-center justify-center rounded-full bg-brand-red text-white font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(220,53,53,0.4)] relative z-10 whitespace-nowrap"
          >
            Request Project
            <ArrowRight className="ml-3" size={24} />
          </Link>
        </PremiumInteractiveCard>
      </section>
    </div>
  );
}

