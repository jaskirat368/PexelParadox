import { motion } from 'motion/react';

export default function MarqueeSection() {
  const words = [
    "Predictable", "+", 
    "Results-Focused", "+", 
    "Specialized", "+",
    "Transparent", "+",
    "Authoritative", "+"
  ];

  return (
    <section className="py-12 border-y border-red-800 bg-brand-red overflow-hidden flex items-center relative">
      <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-brand-red to-transparent z-10" />
      <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-brand-red to-transparent z-10" />
      
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex whitespace-nowrap items-center self-center"
      >
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span 
            key={i} 
            className={`text-4xl md:text-6xl font-black uppercase tracking-tighter mx-8 ${
              word === '+' ? 'text-black font-normal' : 'text-white'
            }`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
