import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContactButtons from './components/layout/FloatingContactButtons';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ProcessDetail from './pages/ProcessDetail';
import Results from './pages/Results';
import Process from './pages/Process';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import GenericPage from './components/layout/GenericPage';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import Disclaimer from './pages/legal/Disclaimer';
import RefundPolicy from './pages/legal/RefundPolicy';
import ErrorPage from './pages/ErrorPage';
import { PageSkeleton } from './components/ui/SkeletonViews';
import BrandIntroLoader from './components/ui/BrandIntroLoader';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 550);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key={`skeleton-${location.pathname}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full flex-grow flex flex-col"
        >
          <PageSkeleton path={location.pathname} />
        </motion.div>
      ) : (
        <motion.div
          key={`content-${location.pathname}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="w-full flex-grow flex flex-col"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/process/:id" element={<ProcessDetail />} />
            <Route path="/results" element={<Results />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/blog" element={<GenericPage title="Growth Insights" subtitle="Tactical articles on gym marketing and predictable systems." />} />
            <Route path="/thank-you" element={<GenericPage title="Application Received" subtitle="Your strategy call request has been received. Our team will contact you shortly." />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/page-not-found-error" element={<ErrorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [introLoading, setIntroLoading] = useState(true);

  const handleIntroComplete = () => {
    setIntroLoading(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence>
        {introLoading && <BrandIntroLoader onComplete={handleIntroComplete} />}
      </AnimatePresence>
      <div className="flex flex-col min-h-screen bg-brand-gray w-full overflow-hidden">
        <Navbar />
        <main className="flex-grow flex flex-col w-full relative z-10">
          <AppContent />
        </main>
        <Footer />
        <FloatingContactButtons />
      </div>
    </Router>
  );
}
