import { motion } from 'motion/react';
import { ArrowRight, Target, Activity, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full relative bg-brand-gray">
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden w-full bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="max-w-3xl">
            <span className="text-brand-red font-bold tracking-widest uppercase mb-4 block">The Agency</span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
            >
              We Build <br className="hidden md:block"/>
              <span className="text-gray-400">Gyms.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed max-w-2xl"
            >
              Pexel Paradox is a performance marketing team built specifically for the fitness industry. We engineer predictable growth systems for independent gym owners who are tired of erratic lead flow and wasted ad spend. We don't run generic brand awareness campaigns; we build acquisition machines that put active paying members onto your gym floor.
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
                <span className="text-brand-red font-bold mb-1">DATA</span>
                <span className="font-black text-xl leading-none">DRIVEN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Breakdown Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          
          {/* Section: Why Gym Owners Struggle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center mb-4">
              <Activity className="text-brand-red" size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">
              The Reality Of <br/>Gym Marketing
            </h3>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Most gym owners are operators, not marketers. You run a facility, manage trainers, and handle member retention. When you try to run ads, you compete against franchised mega-gyms with bottomless budgets. Typical agencies will sell you on "clicks" and "impressions," leaving you with vanity metrics instead of signed contracts.
            </p>
          </motion.div>

          {/* Section: Why Niche Specialization Matters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center mb-4">
              <Target className="text-brand-red" size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">
              Laser-Focused <br/>Specialization
            </h3>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              We don't work with restaurants, tech startups, or e-commerce brands. By focusing exclusively on independent fitness facilities, we know exactly what converts your local demographic. We know the offers that pull, the creative that stops the scroll, and the follow-up systems required to turn a cold internet lead into a booked appointment.
            </p>
          </motion.div>

          {/* Section: Company Philosophy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:col-span-2 lg:col-span-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center mb-4">
              <Zap className="text-brand-red" size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">
              Tactical & <br/>Data-Driven
            </h3>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Data over emotion. Action over aesthetics. Every campaign we launch, every creative we deploy, and every dollar we manage is measured against one metric: Cost Per Acquisition. If it doesn't demonstrably lower your CPA and increase your facility's Monthly Recurring Revenue (MRR), it gets cut. We believe in aggressive, tactical growth backed by hard math.
            </p>
          </motion.div>

          {/* Final Trust & CTA Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6 md:col-span-2 lg:col-span-1 justify-center"
          >
            <div className="bg-white border border-brand-border p-10 rounded-[2rem] flex flex-col items-start gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] pointer-events-none" />
              <ShieldCheck className="text-black" size={40} />
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black leading-tight">
                We only win when your gym reaches capacity.
              </p>
              <p className="text-gray-600 font-medium text-lg">
                Partner with Pexel Paradox, and let us install the growth infrastructure your facility needs to dominate its local market.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex h-14 px-8 mt-4 items-center justify-center rounded-full bg-brand-red text-white font-bold text-lg transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,53,53,0.3)] w-full sm:w-auto"
              >
                Book Strategy Call
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
