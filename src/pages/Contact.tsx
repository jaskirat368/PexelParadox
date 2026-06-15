import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, MessageCircle, Instagram, Send, Globe, CheckCircle2 } from 'lucide-react';
import PremiumInteractiveCard from '../components/ui/PremiumInteractiveCard';
import SEO from '../components/ui/SEO';
import { generateBreadcrumbSchema } from '../utils/seoSchemas';

export default function Contact() {
  const location = useLocation();
  const [name, setName] = useState('');
  const [gymName, setGymName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (location.hash === '#contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://pexelparadox.vercel.app/" },
    { name: "Contact", item: "https://pexelparadox.vercel.app/contact" }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@pexelparadox.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          gym_name: gymName,
          email: email,
          phone: phone,
          marketing_budget: budget,
          _subject: `New Project Request - ${gymName}`,
          _captcha: "false"
        })
      });

      if (response.ok) {
        setSuccess(true);
        setName('');
        setGymName('');
        setEmail('');
        setPhone('');
        setBudget('');
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full pt-44">
      <SEO 
        title="Contact Pexel Paradox | Gym Marketing Agency"
        description="Ready to scale your gym? Request a strategy call with Pexel Paradox, the leading performance marketing agency for fitness centers in India."
        canonicalUrl="https://pexelparadox.vercel.app/contact"
        schema={breadcrumbSchema}
      />
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#25D366] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20"
          >
            <CheckCircle2 className="text-white" size={24} />
            <span className="font-bold tracking-wide">Request for Project is sent!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Massive Bold Header */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <div className="flex items-center gap-3 mb-6 bg-brand-border/50 px-4 py-1.5 rounded-full border border-brand-border">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-black">Systems Online • Accepting Clients</span>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-black leading-[0.9]"
        >
          Initiate <br />
          <span className="text-brand-red">Connection.</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Column: Bento Grid of Contact Methods */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <PremiumInteractiveCard className="bg-black p-8 md:p-12 h-full flex flex-col justify-between overflow-hidden relative group border border-neutral-900" borderRadius="2rem">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={120} className="text-white" />
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-brand-red mb-8">
                <MapPin size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">Global Reach,<br/>Local Dominance.</h3>
              <p className="text-neutral-400 font-medium">Headquartered in Chandigarh & Mohali, India.</p>
            </div>
          </PremiumInteractiveCard>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PremiumInteractiveCard className="bg-white border border-brand-border p-8 hover:border-[#EA4335] hover:shadow-[0_10px_40px_rgba(234,67,53,0.1)] transition-all duration-300 group flex flex-col justify-between min-h-[220px] relative overflow-hidden" borderRadius="2rem">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity grayscale group-hover:grayscale-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-32 h-32">
                  <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.73V40h7.5C43.88,40,45,38.88,45,37.5V16.2z"/>
                  <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.68V40H5.5C4.12,40,3,38.88,3,37.5V16.2z"/>
                  <path fill="#e53935" d="M35,11.2V23.68l10-5.73V9.75C45,6.9,41.9,5.2,39.3,6.8L35,11.2z"/>
                  <path fill="#c62828" d="M13,11.2V23.68l-10-5.73V9.75C3,6.9,6.1,5.2,8.7,6.8L13,11.2z"/>
                  <path fill="#fbc02d" d="M13,11.2L24,19.3L35,11.2l-3-2.3L24,7L16,8.9L13,11.2z"/>
                </svg>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.73V40h7.5C43.88,40,45,38.88,45,37.5V16.2z"/>
                    <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.68V40H5.5C4.12,40,3,38.88,3,37.5V16.2z"/>
                    <path fill="#e53935" d="M35,11.2V23.68l10-5.73V9.75C45,6.9,41.9,5.2,39.3,6.8L35,11.2z"/>
                    <path fill="#c62828" d="M13,11.2V23.68l-10-5.73V9.75C3,6.9,6.1,5.2,8.7,6.8L13,11.2z"/>
                    <path fill="#fbc02d" d="M13,11.2L24,19.3L35,11.2l-3-2.3L24,7L16,8.9L13,11.2z"/>
                  </svg>
                </div>
                <h4 className="font-black text-2xl tracking-tighter text-black mb-1">Email</h4>
                <p className="text-sm font-medium text-gray-500">info@pexelparadox.com</p>
              </div>
              <a href="mailto:info@pexelparadox.com" className="relative z-10 font-bold text-sm text-[#EA4335] underline decoration-2 decoration-red-100 underline-offset-4 group-hover:decoration-[#EA4335] focus:outline-none transition-all mt-4 w-fit inline-flex items-center gap-1">
                Send a Message
              </a>
            </PremiumInteractiveCard>

            <PremiumInteractiveCard className="bg-white border border-brand-border p-8 hover:border-[#000080] hover:shadow-[0_10px_40px_rgba(0,0,128,0.08)] transition-all duration-300 group flex flex-col justify-between min-h-[220px] relative overflow-hidden" borderRadius="2rem">
              <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                <Phone className="w-32 h-32 text-[#000080]" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                  <Phone className="text-[#000080]" size={24} />
                </div>
                <h4 className="font-black text-2xl tracking-tighter text-black mb-1">Call</h4>
                <p className="text-sm font-medium text-gray-500">+91 9833-0000-52</p>
              </div>
              <a href="tel:+919833000052" className="relative z-10 font-bold text-sm text-[#000080] underline decoration-2 decoration-blue-100 underline-offset-4 group-hover:decoration-[#000080] focus:outline-none transition-all mt-4 w-fit inline-flex items-center gap-1">
                Dial Now
              </a>
            </PremiumInteractiveCard>

            <PremiumInteractiveCard className="bg-[#25D366] p-8 group flex flex-col justify-between min-h-[220px] shadow-lg hover:shadow-[#25D366]/40 transition-shadow duration-300 relative overflow-hidden" borderRadius="2rem">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm shadow-inner flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white drop-shadow-md">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <h4 className="font-black text-2xl tracking-tighter text-white mb-1">WhatsApp</h4>
                <p className="text-sm font-medium text-white/90">+91 9833-0000-52</p>
              </div>
              <a href="https://wa.me/919833000052" target="_blank" rel="noopener noreferrer" className="relative z-10 font-bold text-sm text-white underline decoration-2 decoration-white/40 underline-offset-4 group-hover:decoration-white focus:outline-none transition-all mt-4 w-fit inline-flex items-center gap-1">
                Text Us Directly
              </a>
            </PremiumInteractiveCard>

            <PremiumInteractiveCard className="bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] p-8 group flex flex-col justify-between min-h-[220px] shadow-lg hover:shadow-[0_10px_40px_rgba(225,48,108,0.4)] transition-shadow duration-300 relative overflow-hidden" borderRadius="2rem">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Instagram size={120} className="text-white" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm shadow-inner flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                    <Instagram className="text-white drop-shadow-md" size={24} />
                  </div>
                  <h4 className="font-black text-2xl tracking-tighter text-white mb-1">Instagram</h4>
                  <p className="text-sm font-medium text-white/90">@pexelparadox</p>
                </div>
                <a href="https://www.instagram.com/pexelparadox?igsh=NzNtY3V3ejJmNm9k" target="_blank" rel="noopener noreferrer" className="relative z-10 font-bold text-sm text-white underline decoration-2 decoration-white/40 underline-offset-4 group-hover:decoration-white focus:outline-none transition-all mt-4 w-fit inline-flex items-center gap-1">
                  Follow Journey
                </a>
            </PremiumInteractiveCard>
          </div>
        </div>

        {/* Right Column: Dynamic Form */}
        <motion.div 
           id="contact-form"
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="lg:col-span-5 w-full h-full scroll-mt-24"
        >
          <PremiumInteractiveCard className="bg-white border-2 border-brand-border p-8 md:p-12 h-full flex flex-col justify-between shadow-2xl" borderRadius="2.5rem">
            <div>
              <div className="w-16 h-16 bg-brand-gray rounded-2xl flex items-center justify-center mb-8 border border-brand-border">
                <Send className="text-brand-red ml-1" size={28} />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-black mb-8">Request Project</h3>
              
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-brand-gray border border-brand-border rounded-xl px-5 py-3.5 text-black font-medium focus:outline-none focus:border-brand-red focus:bg-white transition-all w-full leading-tight" 
                    placeholder="E.g., John Doe" 
                  />
                </div>
                 <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Facility / Gym Name</label>
                  <input 
                    type="text" 
                    name="gymName"
                    required
                    value={gymName}
                    onChange={(e) => setGymName(e.target.value)}
                    className="bg-brand-gray border border-brand-border rounded-xl px-5 py-3.5 text-black font-medium focus:outline-none focus:border-brand-red focus:bg-white transition-all w-full leading-tight" 
                    placeholder="E.g., Iron Temple Fitness Club" 
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Business Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-brand-gray border border-brand-border rounded-xl px-5 py-3.5 text-black font-medium focus:outline-none focus:border-brand-red focus:bg-white transition-all w-full leading-tight" 
                      placeholder="yourname@domain.com" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-brand-gray border border-brand-border rounded-xl px-5 py-3.5 text-black font-medium focus:outline-none focus:border-brand-red focus:bg-white transition-all w-full leading-tight" 
                      placeholder="+1 (555) 000-0000 / +91 98765-43210" 
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Marketing Budget (Monthly)</label>
                  <input 
                    type="text"
                    name="budget"
                    required
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="bg-brand-gray border border-brand-border rounded-xl px-5 py-3.5 text-black font-medium focus:outline-none focus:border-brand-red focus:bg-white transition-all w-full leading-tight"
                    placeholder="E.g., $1,500 - $3,000"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="h-16 w-full rounded-xl bg-brand-red text-white font-black uppercase tracking-widest text-sm hover:bg-black active:scale-[0.98] transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_20px_rgba(220,53,53,0.3)] hover:shadow-xl group"
                >
                  <span className="group-hover:tracking-[0.2em] transition-all duration-300">
                    {loading ? "Transmitting..." : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
            <p className="text-[10px] font-mono text-gray-400 text-center mt-8 uppercase tracking-widest">
              Secure Submission Encrypted
            </p>
          </PremiumInteractiveCard>
        </motion.div>

      </div>
    </section>
  );
}
