import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Results', path: '/results' },
  { name: 'Process', path: '/process' },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-none px-4 sm:px-6 md:px-8 mt-6`}
    >
      <div 
        className={`max-w-5xl mx-auto rounded-full pointer-events-auto transition-all duration-500 py-4 px-6 md:px-8 shadow-2xl ${
          isScrolled 
            ? 'border border-white/20 shadow-brand-red/50 bg-brand-red/95 backdrop-blur-md text-white' 
            : 'border border-transparent bg-brand-red/90 backdrop-blur-md text-white'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded flex items-center justify-center bg-transparent overflow-hidden relative">
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
               <span className="font-bold text-lg md:text-xl tracking-tighter text-white relative z-10">P</span>
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tight hidden sm:block">
              Pexel Paradox
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || 
                              (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-white font-bold drop-shadow-md' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex h-10 px-6 items-center justify-center rounded-full bg-white text-brand-red font-bold text-sm transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
              onClick={closeMenu}
            >
              Book Strategy Call
            </Link>

            <button
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 bg-brand-red/95 backdrop-blur-md border border-white/20 rounded-2xl md:hidden overflow-hidden pointer-events-auto shadow-2xl text-white"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                 const isActive = location.pathname === link.path || 
                              (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive ? 'bg-white/20 font-bold text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="mt-2 w-full h-12 inline-flex items-center justify-center rounded-xl bg-white text-brand-red font-bold text-base hover:bg-gray-100 transition-colors shadow-lg"
                onClick={closeMenu}
              >
                Book Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
