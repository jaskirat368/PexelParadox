import { motion } from 'motion/react';
import { ArrowRight, Target, Activity, Zap, ShieldCheck, BarChart, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumInteractiveCard from '../components/ui/PremiumInteractiveCard';
import SEO from '../components/ui/SEO';
import { generateAboutSchema } from '../utils/seoSchemas';

export default function About() {
  return (
    <div className="w-full relative bg-brand-gray min-h-screen pb-20">
      <SEO 
        title="About Our Gym Marketing Agency | Pexel Paradox"
        description="Pexel Paradox is a dedicated performance marketing agency helping independent gym owners in India scale predictably through verified lead generation systems."
        canonicalUrl="https://pexelparadox.vercel.app/about"
        schema={generateAboutSchema()}
      />
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden w-full bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-3xl">
            <span className="text-brand-red font-bold tracking-widest uppercase mb-6 block">The Agency</span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-10"
            >
              We Build <br/>
              <span className="text-gray-200">Gyms.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-3xl font-bold text-black leading-tight max-w-2xl mb-6"
            >
              We engineer predictable growth systems for independent gym owners tired of erratic lead flow.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-medium text-gray-600 leading-relaxed max-w-2xl"
            >
              No generic brand awareness. No vanity metrics. We build acquisition machines that put active paying members onto your gym floor.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="hidden lg:flex shrink-0 w-80 h-80 bg-brand-red rounded-[3rem] text-white flex-col items-center justify-center p-8 text-center shadow-[0_20px_50px_rgba(220,53,53,0.3)] transform rotate-3"
          >
            <Target size={64} className="mb-6 opacity-80" strokeWidth={1.5} />
            <span className="font-bold tracking-widest uppercase text-sm mb-2 opacity-90">Our Mission</span>
            <span className="font-black text-4xl uppercase tracking-tighter leading-none">Max<br/>Capacity</span>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-1 bg-brand-red" />
             <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter">Our Core DNA</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* The Reality */}
            <PremiumInteractiveCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white p-8 md:p-12 border border-brand-border shadow-sm flex flex-col justify-between group"
              borderRadius="1.5rem"
            >
              <div className="flex justify-between items-start mb-8">
                 <div className="w-16 h-16 rounded-2xl bg-brand-gray flex items-center justify-center group-hover:bg-brand-red/10 group-hover:scale-110 transition-all duration-300">
                   <Activity className="text-brand-red" size={32} />
                 </div>
                 <span className="text-gray-300 font-black text-5xl opacity-50">01</span>
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-black mb-4 font-sans">
                  The Reality Of Gym Marketing
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed text-lg">
                  Most gym owners are operators, not marketers. You run a facility, manage trainers, and handle member retention. When you try to run ads, you compete against franchised mega-gyms with bottomless budgets. We replace typical agency "clicks" and "impressions" with signed contracts.
                </p>
              </div>
            </PremiumInteractiveCard>

            {/* Specialization */}
            <PremiumInteractiveCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-black text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group"
              borderRadius="1.5rem"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-red/20 rounded-full blur-[50px] pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-12 backdrop-blur-sm border border-white/10">
                <Users className="text-brand-red" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-tight font-sans">
                  Laser-Focused Specialization
                </h3>
                <p className="text-gray-400 font-medium text-sm leading-relaxed">
                  We don't work with restaurants. We don't work with e-commerce. Focused exclusively on independent fitness facilities, we know exactly how to execute <Link to="/services/performance-marketing" className="text-brand-red font-bold hover:underline">performance marketing</Link> and targeted <Link to="/services/lead-generation" className="text-brand-red font-bold hover:underline">lead generation</Link> campaigns that convert your local demographic into active members.
                </p>
              </div>
            </PremiumInteractiveCard>

            {/* Data-Driven */}
            <PremiumInteractiveCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-10 border border-brand-border shadow-sm flex flex-col justify-between group"
              borderRadius="1.5rem"
            >
              <div className="w-16 h-16 rounded-full border-4 border-brand-gray flex items-center justify-center mb-8 group-hover:border-brand-red/20 transition-colors duration-300">
                <BarChart className="text-black group-hover:text-brand-red transition-colors duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-4 leading-tight font-sans">
                  Tactical & Data-Driven
                </h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">
                  Data over emotion. Action over aesthetics. Every campaign is measured against one metric: Cost Per Acquisition. If it doesn't lower your CPA and increase MRR, it gets cut.
                </p>
              </div>
            </PremiumInteractiveCard>

            {/* Final Trust CTA */}
            <PremiumInteractiveCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-brand-red p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-[0_15px_40px_rgba(220,53,53,0.2)]"
              borderRadius="1.5rem"
            >
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none opacity-50" />
               
               <div className="relative z-10 max-w-xl text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                     <ShieldCheck size={16} />
                     <span className="text-xs font-bold uppercase tracking-widest">Our Guarantee</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 leading-tight font-sans">
                    We only win when your gym reaches capacity.
                  </h3>
                  <p className="text-white/80 font-medium text-lg mb-0 font-sans">
                    Partner with Pexel Paradox, and let us install the growth infrastructure your facility needs to dominate its local market.
                  </p>
               </div>

               <div className="relative z-10 shrink-0">
                  <Link 
                    to="/contact#contact-form" 
                    className="inline-flex h-16 px-10 items-center justify-center rounded-full bg-white text-brand-red font-bold text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-xl w-full md:w-auto"
                  >
                    Request Project
                    <ArrowRight className="ml-3" size={24} />
                  </Link>
               </div>
            </PremiumInteractiveCard>

          </div>
        </div>
      </section>
    </div>
  );
}
