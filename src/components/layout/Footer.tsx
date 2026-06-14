import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Instagram, Twitter } from 'lucide-react';
import ResponsiveLogo from '../ui/ResponsiveLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-gray-900 relative z-10 w-full text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Middle Section - Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <ResponsiveLogo className="mb-6 mb-8 w-48 md:w-64" invert={true} />
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-8">
              We Don't Just Run Ads. We Fill Gyms. A specialized growth partner for independent gym owners focused on predictable systems.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/919833000052" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
              <a href="https://www.instagram.com/pexelparadox?igsh=NzNtY3V3ejJmNm9k" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm md:text-base">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-red transition-colors">Services</Link></li>
              <li><Link to="/results" className="text-gray-400 hover:text-brand-red transition-colors">Results</Link></li>
              <li><Link to="/process" className="text-gray-400 hover:text-brand-red transition-colors">Our Process</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-sm md:text-base">
              <li><Link to="/services/performance-marketing" className="text-gray-400 hover:text-brand-red transition-colors">Performance Marketing</Link></li>
              <li><Link to="/services/meta-ads" className="text-gray-400 hover:text-brand-red transition-colors">Meta Ads</Link></li>
              <li><Link to="/services/lead-generation" className="text-gray-400 hover:text-brand-red transition-colors">Lead Generation</Link></li>
              <li><Link to="/services/conversion-funnels" className="text-gray-400 hover:text-brand-red transition-colors">Conversion Funnels</Link></li>
              <li><Link to="/services" className="text-brand-red font-semibold hover:text-white transition-colors">View All Services →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm md:text-base">
              <li><a href="mailto:info@pexelparadox.com" className="text-gray-400 hover:text-brand-red transition-colors">info@pexelparadox.com</a></li>
              <li><a href="tel:+919833000052" className="text-gray-400 hover:text-brand-red transition-colors">+91 9833-0000-52</a></li>
              
              <li className="pt-4 border-t border-gray-800 flex gap-4">
                 <a href="https://wa.me/919833000052" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    WhatsApp
                 </a>
              </li>
              <li>
                 <a href="https://www.instagram.com/pexelparadox?igsh=NzNtY3V3ejJmNm9k" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors flex items-center gap-2">
                    <Instagram size={18} />
                    Instagram
                 </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 py-6 border-t border-gray-900 text-sm text-gray-500">
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center md:justify-start text-xs font-bold uppercase tracking-widest text-gray-400">
             <Link to="/privacy" className="hover:text-white hover:text-brand-red transition-colors border-b border-transparent hover:border-brand-red pb-1">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-white hover:text-brand-red transition-colors border-b border-transparent hover:border-brand-red pb-1">Terms of Service</Link>
             <Link to="/disclaimer" className="hover:text-white hover:text-brand-red transition-colors border-b border-transparent hover:border-brand-red pb-1">Disclaimer</Link>
             <Link to="/refund" className="hover:text-white hover:text-brand-red transition-colors border-b border-transparent hover:border-brand-red pb-1">Refund Policy</Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-900">
            <p>&copy; {currentYear} Pexel Paradox. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
