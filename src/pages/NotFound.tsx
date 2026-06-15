import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';
import SEO from '../components/ui/SEO';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center px-6 py-24 md:py-40 bg-white relative overflow-hidden">
      <SEO 
        title="Page Not Found (404)"
        description="The page you are looking for does not exist on Pexel Paradox."
        canonicalUrl="https://pexelparadox.vercel.app/404"
        noindex={true}
      />
      {/* Background technical elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center max-w-2xl"
      >
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gray border border-brand-border text-xs font-mono tracking-widest uppercase shadow-sm">
          <Terminal className="w-4 h-4 text-brand-red" />
          <span>Error 404: Route Not Found</span>
        </div>

        <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter text-black leading-none mb-4">
          4<span className="text-brand-red">0</span>4
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
          Page Not Found
        </h2>
        
        <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-lg mx-auto font-medium balance">
          The acquisition funnel you're looking for doesn't exist or has been relocated to a new active campaign.
        </p>

        <Link 
          to="/" 
          className="group inline-flex h-14 px-8 items-center justify-center gap-3 rounded-full bg-black text-white font-bold text-lg hover:bg-brand-red transition-all duration-300 shadow-xl"
        >
          Return to Dashboard 
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}

