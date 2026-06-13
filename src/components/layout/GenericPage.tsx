import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function GenericPage({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto w-full min-h-[70vh] flex flex-col justify-center text-center">
      <motion.div
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-gray backdrop-blur-sm mb-8 mx-auto"
      >
        <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
        <span className="text-sm font-medium tracking-wide text-gray-300">Under Construction</span>
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link 
          to="/contact" 
          className="inline-flex h-14 px-8 items-center justify-center rounded-full bg-brand-red text-white font-semibold text-lg transition-transform hover:scale-105"
        >
          Book Strategy Call Instead
        </Link>
      </motion.div>
    </section>
  );
}
