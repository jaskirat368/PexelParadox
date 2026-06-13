import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export default function ErrorPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center px-6 py-40 min-h-[80vh] max-w-xl mx-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-20 h-20 rounded-full bg-red-100 border border-brand-red flex items-center justify-center text-brand-red mb-8 shadow-[0_0_30px_rgba(220,53,53,0.2)]"
      >
        <AlertCircle size={40} />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-4 uppercase"
      >
        Form Submission Failed
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-500 mb-10 font-medium"
      >
        Your growth request couldn't be loaded into our system. Let's re-rack the weights, check your internet connection, and try submitting again.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link 
          to="/contact" 
          className="inline-flex h-14 px-8 items-center justify-center rounded-full bg-brand-red text-white font-bold uppercase tracking-wider text-sm transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(220,53,53,0.4)]"
        >
          <ArrowLeft size={18} className="mr-2" /> Try Re-submitting
        </Link>
      </motion.div>
    </div>
  );
}
