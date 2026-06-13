import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-brand-border relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {location.pathname === '/' && (
          <>
            {/* Top Section - Big CTA */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-black max-w-3xl leading-[0.9]">
                READY TO <br className="hidden md:block"/>
                <span className="text-brand-red">FILL YOUR</span> GYM?
              </h2>
              <Link
                to="/contact"
                className="group relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-red text-white hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(220,53,53,0.3)] shrink-0"
              >
                <span className="font-semibold text-lg md:text-xl">Let's Talk</span>
                <ArrowUpRight 
                  className="absolute top-8 right-8 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" 
                  size={24} 
                />
              </Link>
            </div>

            <div className="w-full h-px bg-brand-border mb-16" />
          </>
        )}

        {/* Middle Section - Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-10 h-10 border-2 border-brand-red rounded flex items-center justify-center bg-white overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand-red/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                 <span className="font-bold text-xl tracking-tighter text-black relative z-10">P</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-black">
                Pexel Paradox
              </span>
            </Link>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed mb-8">
              We Don't Just Run Ads. We Fill Gyms. A specialized growth partner for independent gym owners focused on predictable systems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-gray-400 hover:text-black hover:border-brand-red transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-gray-400 hover:text-black hover:border-brand-red transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-gray-400 hover:text-black hover:border-brand-red transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/results" className="text-gray-600 hover:text-black transition-colors">Results</Link></li>
              <li><Link to="/process" className="text-gray-600 hover:text-black transition-colors">Our Process</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/services/performance-marketing" className="text-gray-600 hover:text-black transition-colors">Performance Marketing</Link></li>
              <li><Link to="/services/meta-ads" className="text-gray-600 hover:text-black transition-colors">Meta Ads</Link></li>
              <li><Link to="/services/lead-generation" className="text-gray-600 hover:text-black transition-colors">Lead Generation</Link></li>
              <li><Link to="/services/conversion-funnels" className="text-gray-600 hover:text-black transition-colors">Conversion Funnels</Link></li>
              <li><Link to="/services" className="text-brand-red font-semibold hover:text-red-700 transition-colors">View All Services →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-gray-600">
                Chandigarh & Mohali<br />
                India
              </li>
              <li><a href="mailto:jaskiratforbusiness@gmail.com" className="text-gray-600 hover:text-black transition-colors">jaskiratforbusiness@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-brand-border text-sm text-gray-500">
          <p>&copy; {currentYear} Pexel Paradox. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
