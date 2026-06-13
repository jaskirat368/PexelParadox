import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-block px-4 py-1 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red font-bold text-sm tracking-widest uppercase mb-6">
            Real Outcomes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            We let our results <br />
            <span className="text-gray-500">do the talking.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-brand-gray border border-brand-border p-8 md:p-10 rounded-[2rem] flex flex-col justify-between"
          >
            <div>
              <Quote className="text-brand-red mb-6" size={32} />
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10">
                "[CASE STUDY TO PROVIDE]: Pexel Paradox implemented a predictable growth system that entirely transformed our lead volume. Our front desk is booking appointments daily."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-brand-border" />
              <div>
                <h4 className="font-bold text-white">[CLIENT NAME]</h4>
                <p className="text-sm text-brand-red uppercase tracking-widest font-bold">[Gym Name] Owner</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
