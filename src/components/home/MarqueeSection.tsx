import { motion } from 'motion/react';

export default function MarqueeSection() {
  const words = [
    "Predictable Growth", "+", 
    "High-Ticket Clients", "+", 
    "Scalable Systems", "+",
    "Active Members", "+",
    "Performance Marketing", "+"
  ];

  return (
    <section className="py-12 border-y border-brand-border bg-brand-gray overflow-hidden flex items-center relative">
      <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-brand-gray to-transparent z-10" />
      <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-brand-gray to-transparent z-10" />
      
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex whitespace-nowrap items-center self-center"
      >
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span 
            key={i} 
            className={`text-4xl md:text-6xl font-black uppercase tracking-tighter mx-8 ${
              word === '+' ? 'text-brand-red' : 'text-black'
            }`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
