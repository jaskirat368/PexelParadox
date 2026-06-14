import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ResponsiveLogo from '../ui/ResponsiveLogo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Results', path: '/results' },
  { name: 'Process', path: '/process' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-none px-4 sm:px-6 md:px-8 mt-4 lg:mt-5`}
    >
      <div 
        className={`max-w-7xl mx-auto rounded-full pointer-events-auto transition-all duration-300 ${
          isScrolled 
            ? 'py-3 px-6 md:px-8 bg-brand-red/95 border border-white/20 shadow-lg shadow-brand-red/20 text-white lg:bg-white/95 lg:border-neutral-200/80 lg:shadow-xl lg:shadow-black/5' 
            : 'py-4 px-6 md:px-8 bg-brand-red/90 border border-transparent shadow-md text-white lg:bg-white/80 lg:border-white/50 lg:shadow-md lg:shadow-black/2'
        } backdrop-blur-md`}
      >
        <div className="flex items-center justify-between">
          <ResponsiveLogo onClick={closeMenu} />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || 
                              (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm xl:text-base font-semibold tracking-wide transition-all duration-200 relative py-1.5 px-1 ${
                    isActive 
                      ? 'text-white font-bold drop-shadow-md lg:text-brand-red lg:font-bold lg:drop-shadow-none' 
                      : 'text-white/80 hover:text-white lg:text-neutral-600 lg:hover:text-brand-red'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-active-line"
                      className="hidden lg:block absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 lg:gap-4 shrink-0">
            <a 
              href="tel:+919833000052" 
              className="hidden lg:flex items-center gap-2 px-4 h-10 rounded-full border border-white/30 text-white hover:bg-white hover:text-brand-red transition-all text-sm font-bold shadow-sm lg:border-neutral-200 lg:text-neutral-700 lg:hover:bg-neutral-100 lg:hover:text-black"
            >
              <Phone size={14} />
              <span>Call Now</span>
            </a>
            <Link
              to="/contact#contact-form"
              className="hidden lg:inline-flex h-10 px-6 items-center justify-center rounded-full bg-white text-brand-red font-bold text-sm transition-all hover:scale-105 active:scale-95 shrink-0 lg:bg-black lg:text-white lg:hover:bg-brand-red lg:hover:shadow-[0_4px_15px_rgba(220,53,53,0.3)]"
              onClick={closeMenu}
            >
              Request Project
            </Link>

            <button
              className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-4 right-4 mt-4 bg-[#0F1012] border border-gray-800 rounded-3xl xl:hidden overflow-hidden pointer-events-auto shadow-2xl text-white outline outline-1 outline-white/5"
          >
            <div className="p-6 md:p-8 flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <span className="text-gray-500 font-bold tracking-widest uppercase text-xs mb-2">Navigation</span>
                {navLinks.map((link, index) => {
                   const isActive = location.pathname === link.path || 
                                (link.path !== '/' && location.pathname.startsWith(link.path));
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                      key={link.name}
                    >
                      <Link
                        to={link.path}
                        className={`group flex items-center justify-between px-4 py-3 rounded-2xl text-lg font-bold transition-all duration-300 ${
                          isActive ? 'bg-brand-red text-white' : 'bg-gray-900/50 hover:bg-gray-800 text-gray-300 hover:text-white'
                        }`}
                        onClick={closeMenu}
                      >
                        {link.name}
                        {isActive && <motion.div layoutId="mobile-indicator" className="w-2 h-2 rounded-full bg-white" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="pt-6 border-t border-gray-800 flex flex-col gap-4"
              >
                <Link
                  to="/contact#contact-form"
                  className="w-full h-14 inline-flex items-center justify-center rounded-2xl bg-white text-brand-red font-black text-lg hover:bg-gray-100 transition-colors shadow-lg"
                  onClick={closeMenu}
                >
                  Request Project
                </Link>
                
                <a 
                  href="tel:+919833000052" 
                  className="w-full h-14 inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-700 bg-transparent text-white font-bold text-lg hover:bg-gray-800 transition-colors"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
