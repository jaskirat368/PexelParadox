import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="bg-white py-20 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-brand-border pb-20">
          
          {/* Desktop Heading - hidden on mobile */}
          <h2 className="hidden md:block text-6xl lg:text-8xl font-bold tracking-tighter text-black max-w-3xl leading-[0.9]">
            READY TO <br />
            <span className="text-brand-red">FILL YOUR</span> GYM?
          </h2>

          {/* Mobile Heading - completely different layout, hidden on md+ */}
          <div className="md:hidden w-full flex flex-col gap-6">
            <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-black uppercase leading-[0.9]">
              Ready To <br/>
              <span className="text-brand-red text-[1.2em] leading-[0.9] block mt-2">Fill Your</span> 
              <span className="block mt-2">Gym?</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg max-w-sm">
              Stop guessing. Start growing. Let us install the predictable systems your fitness business needs to scale.
            </p>
          </div>

          <Link
            to="/contact"
            className="group relative flex items-center justify-center w-full md:w-40 h-20 md:h-40 rounded-2xl md:rounded-full bg-brand-red text-white hover:bg-red-700 transition-colors md:hover:scale-105 md:transition-transform md:duration-300 shadow-[0_0_30px_rgba(220,53,53,0.3)] shrink-0 mt-8 md:mt-0"
          >
            <span className="font-bold text-xl md:text-xl uppercase tracking-wider md:normal-case md:tracking-normal">Let's Talk</span>
            <ArrowUpRight 
              className="absolute right-6 opacity-100 hidden md:block md:top-8 md:right-8 md:opacity-0 md:-translate-x-4 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:translate-y-0 transition-all duration-300" 
              size={24} 
            />
            {/* Mobile arrow */}
            <ArrowUpRight className="block md:hidden ml-3" size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
