import { motion } from 'motion/react';
import { Target, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumInteractiveCard from '../ui/PremiumInteractiveCard';

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brand-border">
      <div className="flex flex-col gap-12 lg:gap-20">
        
        {/* Massive Headline Group */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]"
            >
              Turning Empty <br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-black/50">Into Overbooked.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4 border-l-2 border-brand-red pl-6 py-2">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg md:text-xl font-medium tracking-tight"
            >
              Most agencies focus on vanity metrics. We focus on <strong className="text-black">Active Memberships</strong>.
            </motion.p>
          </div>
        </div>

        {/* Structural Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-brand-border divide-y md:divide-y-0 md:divide-x divide-brand-border">
             {[
               { icon: Target, title: 'Tactical Precision', desc: 'Granular targeting targeting only high-intent locals. No wasted ad spend on unqualified leads.' },
               { icon: Users, title: 'Audience Capture', desc: 'Gym Owners, Fitness Studios, Personal Trainers. The right people, the right time.' },
               { icon: TrendingUp, title: 'Predictable Scale', desc: 'Scalable systems that generate consistent leads daily, turning your front desk into a bottleneck.' }
             ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="p-8 md:p-12 hover:bg-brand-red hover:text-black transition-colors group flex flex-col justify-between"
                >
                  <div className="mb-12">
                    <feature.icon size={40} className="text-brand-red group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-black group-hover:text-white font-black text-2xl uppercase tracking-tight mb-4">{feature.title}</h4>
                    <p className="text-gray-600 group-hover:text-white/80 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
             ))}
        </div>

        {/* Sleek Custom Card without Image */}
        <PremiumInteractiveCard 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full bg-black border border-brand-border p-8 md:p-16 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group hover:border-brand-red transition-all duration-300 shadow-2xl"
          borderRadius="2rem"
        >
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
          
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            <div className="flex flex-col items-start text-left">
              <span className="bg-brand-red text-white text-xs font-black uppercase tracking-widest py-1.5 px-3.5 mb-6 inline-block rounded shadow-[0_4px_15px_rgba(220,53,53,0.3)]">
                High-Intensity Blueprint
              </span>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4 leading-none font-sans">
                UNVEIL THE <span className="text-brand-red">PEXEL PROTOCOL</span>
              </h3>
              <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-lg mb-8">
                We engineered a predictable client acquisition engine specifically for gym facilities. Walk through our step-by-step blueprint that turns empty spaces into overbooked training sessions.
              </p>
              
              <Link 
                to="/process" 
                className="w-full md:w-auto h-14 px-8 rounded-full bg-brand-red text-white flex items-center justify-center gap-3 font-black uppercase tracking-wider text-sm hover:bg-neutral-900 hover:text-white hover:scale-[1.03] active:scale-95 transition-all duration-200 shadow-[0_10px_25px_rgba(220,53,53,0.3)]"
              >
                <span>Discover Our Process</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>

            <div className="flex flex-col gap-3 md:pl-8 border-t md:border-t-0 md:border-l border-neutral-800 pt-8 md:pt-0">
              {[
                { step: "01", label: "Traffic Architecture", val: "Omni-Channel" },
                { step: "02", label: "Capture Mechanics", val: "High-Intent" },
                { step: "03", label: "Automated Nurture", val: "< 5 Min SLA" },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between p-4 md:p-5 rounded-[1.2rem] border border-neutral-800 bg-neutral-950/50 hover:bg-neutral-900 hover:border-brand-red/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-brand-red font-mono font-bold">{s.step}</span>
                    <span className="text-white font-medium">{s.label}</span>
                  </div>
                  <span className="text-gray-500 font-mono text-xs uppercase tracking-wider hidden sm:block">{s.val}</span>
                </div>
              ))}
            </div>
          </div>
        </PremiumInteractiveCard>

      </div>
    </section>
  );
}
