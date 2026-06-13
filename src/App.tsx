import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-gray w-full overflow-hidden">
        <Navbar />
        <main className="flex-grow flex flex-col w-full relative z-10">
          <Routes>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}
