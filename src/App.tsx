import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Results from './pages/Results';
import Process from './pages/Process';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import GenericPage from './components/layout/GenericPage';

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
      <div className="flex flex-col min-h-screen bg-brand-black w-full overflow-hidden">
        <Navbar />
        <main className="flex-grow flex flex-col w-full relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/results" element={<Results />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<GenericPage title="Privacy Policy" subtitle="Legal information regarding your data." />} />
            <Route path="/terms" element={<GenericPage title="Terms of Service" subtitle="Rules and guidelines for using our services." />} />
            <Route path="/disclaimer" element={<GenericPage title="Disclaimer" subtitle="Legal disclaimers regarding fitness and marketing results." />} />
            <Route path="/blog" element={<GenericPage title="Growth Insights" subtitle="Tactical articles on gym marketing and predictable systems." />} />
            <Route path="/thank-you" element={<GenericPage title="Application Received" subtitle="Your strategy call request has been received. Our team will contact you shortly." />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
