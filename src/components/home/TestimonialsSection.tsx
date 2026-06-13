import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brand-border">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
        <div>
          <span className="text-brand-red font-bold tracking-widest uppercase mb-4 block">Real Outcomes</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            We let our <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">results speak.</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col divide-y border-y border-brand-border">
        {[1, 2].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-1 hidden lg:block">
              <Quote className="text-brand-red" size={48} strokeWidth={1} />
            </div>
            <div className="lg:col-span-7">
              <p className="text-3xl md:text-4xl font-medium leading-tight tracking-tight text-black mb-2">
                "[CASE STUDY TO PROVIDE]: Pexel Paradox implemented a predictable growth system that entirely transformed our lead volume. Our front desk is booking appointments daily."
              </p>
            </div>
            <div className="lg:col-span-4 flex items-center lg:justify-end gap-6 mt-6 lg:mt-0">
              <div className="text-left lg:text-right">
                <h4 className="font-black text-xl text-black uppercase tracking-tight">[CLIENT NAME]</h4>
                <p className="text-sm text-brand-red uppercase tracking-widest font-bold mt-1">[Gym Name] Owner</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white border border-brand-border shrink-0" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
