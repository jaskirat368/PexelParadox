import { motion } from 'motion/react';
import { Target, Users, TrendingUp } from 'lucide-react';

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-brand-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Side */}
        <div className="flex flex-col gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight"
          >
            Turning Empty <br /> 
            <span className="text-gray-500">Into Overbooked.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed max-w-lg"
          >
            Most marketing agencies focus on likes, clicks, and brand awareness. We are a performance growth team focusing on one metric: <strong className="text-white">Active Memberships</strong>. By deploying aggressive, tactical campaigns, we turn independent gyms into market leaders.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
             {[
               { icon: Target, title: 'Tactical Precision', desc: 'Granular targeting targeting only high-intent locals.' },
               { icon: TrendingUp, title: 'Predictability', desc: 'Scalable systems that generate consistent leads daily.' }
             ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="bg-brand-gray border border-brand-border p-6 rounded-2xl flex flex-col gap-4"
                >
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
             ))}
          </div>
        </div>

        {/* Image/Bento Side */}
        <div className="grid grid-cols-2 gap-4 h-[600px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2rem] overflow-hidden relative col-span-1 h-full bg-brand-gray border border-brand-border"
          >
             <div className="absolute inset-0 bg-brand-black/20 z-10" />
             <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
               <span className="bg-brand-red text-white text-xs font-bold uppercase tracking-widest py-1 px-3 inline-block w-max mb-4">High-Intensity</span>
               <h3 className="text-xl font-bold">Gritty Content</h3>
             </div>
             {/* Placeholder for Gym image */}
             <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-50 transition-opacity hover:opacity-100 hover:grayscale-0 duration-500" />
          </motion.div>

          <div className="flex flex-col gap-4 col-span-1 h-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-[2rem] overflow-hidden relative flex-1 bg-brand-gray border border-brand-border p-8 flex flex-col justify-center"
            >
               <Users className="text-brand-red mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-2">Target Audience</h3>
               <p className="text-gray-400 text-sm">Gym Owners, Fitness Studios, Personal Trainers.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
               className="rounded-[2rem] overflow-hidden relative flex-1 bg-brand-black border border-brand-border"
            >
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
               <h3 className="text-xl font-bold">Data-Driven</h3>
             </div>
             <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30 transition-opacity hover:opacity-80 duration-500" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
