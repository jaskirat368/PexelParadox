import { motion } from 'motion/react';

const stats = [
  { value: '[RESULT]', label: 'Active Members Added' },
  { value: '[RESULT]', label: 'In Tracked Revenue' },
  { value: '[RESULT]', label: 'Return on Ad Spend' },
  { value: '[RESULT]', label: 'Cost Per Acquisition' },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-brand-border/50">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center text-center px-4"
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black mb-2">
              {stat.value}
            </h3>
            <p className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-widest text-brand-red">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
