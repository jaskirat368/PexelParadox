import { motion } from 'motion/react';
import { Target, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

        {/* Full Bleed Image Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] border border-brand-border overflow-hidden group"
        >
          <div className="absolute inset-0 bg-brand-black/40 z-10 group-hover:bg-brand-black/10 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full flex justify-between items-end">
            <div>
              <span className="bg-brand-red text-white text-sm font-bold uppercase tracking-widest py-2 px-4 mb-6 inline-block shadow-lg">High-Intensity</span>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Data-Driven Domination</h3>
            </div>
            <Link to="/process" className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform hidden md:flex">
              <ArrowRight size={24} />
            </Link>
          </div>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105" />
        </motion.div>

      </div>
    </section>
  );
}
