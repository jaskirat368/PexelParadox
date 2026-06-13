import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-gray-900 relative z-10 w-full text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Middle Section - Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex h-12 w-48 md:w-64 relative">
              <img 
                src="https://i.ibb.co/JRMTckSp/file-0000000040047208885869e9a710d1ab.png" 
                alt="Pexel Paradox Logo" 
                className="absolute w-full h-[400%] max-w-none object-contain inset-0 -top-[150%] pointer-events-none brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-8">
              We Don't Just Run Ads. We Fill Gyms. A specialized growth partner for independent gym owners focused on predictable systems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm md:text-base">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-red transition-colors">About Us</Link></li>
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
              <li className="text-gray-400">
                Chandigarh & Mohali<br />
                India
              </li>
              <li><a href="mailto:jaskiratforbusiness@gmail.com" className="text-gray-400 hover:text-brand-red transition-colors">jaskiratforbusiness@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-8 py-8 border-t border-gray-900 text-sm text-gray-500">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-gray-500">
            <div>
               <Link to="/privacy" className="font-semibold text-gray-400 hover:text-white transition-colors block mb-2">Privacy Policy</Link>
               <p>We respect your data and never sell it. Your information is used securely and solely to provide our services.</p>
            </div>
            <div>
               <Link to="/terms" className="font-semibold text-gray-400 hover:text-white transition-colors block mb-2">Terms of Service</Link>
               <p>By using our site and services, you agree to our standard operating procedures and professional guidelines.</p>
            </div>
            <div>
               <Link to="/disclaimer" className="font-semibold text-gray-400 hover:text-white transition-colors block mb-2">Disclaimer</Link>
               <p>Results are not guaranteed. Past performance in marketing does not guarantee future results for your facility.</p>
            </div>
            <div>
               <Link to="/refund" className="font-semibold text-gray-400 hover:text-white transition-colors block mb-2">Refund Policy</Link>
               <p>Due to the digital, service-based nature of our agency, payments for completed work and active retainers are non-refundable.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-900">
            <p>&copy; {currentYear} Pexel Paradox. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
