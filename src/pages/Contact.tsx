import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, MessageCircle, Instagram, Send, Globe, CheckCircle2 } from 'lucide-react';
import PremiumInteractiveCard from '../components/ui/PremiumInteractiveCard';

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
            <PremiumInteractiveCard className="bg-white border border-brand-border p-8 hover:border-brand-red hover:shadow-[0_10px_40px_rgba(220,53,53,0.1)] transition-all duration-300 group flex flex-col justify-between min-h-[220px]" borderRadius="2rem">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                  <Mail className="text-brand-red" size={24} />
                </div>
                <h4 className="font-black text-2xl tracking-tighter text-black mb-1">Email</h4>
                <p className="text-sm font-medium text-gray-500">info@pexelparadox.com</p>
              </div>
              <a href="mailto:info@pexelparadox.com" className="font-bold text-sm text-black underline decoration-2 decoration-brand-border underline-offset-4 group-hover:decoration-brand-red focus:outline-none transition-all mt-4 w-fit inline-flex items-center gap-1">
                Send a Message
              </a>
            </PremiumInteractiveCard>

            <PremiumInteractiveCard className="bg-white border border-brand-border p-8 hover:border-brand-red hover:shadow-[0_10px_40px_rgba(220,53,53,0.1)] transition-all duration-300 group flex flex-col justify-between min-h-[220px]" borderRadius="2rem">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                  <Phone className="text-brand-red" size={24} />
                </div>
                <h4 className="font-black text-2xl tracking-tighter text-black mb-1">Call</h4>
                <p className="text-sm font-medium text-gray-500">+91 9833-0000-52</p>
              </div>
              <a href="tel:+919833000052" className="font-bold text-sm text-black underline decoration-2 decoration-brand-border underline-offset-4 group-hover:decoration-brand-red focus:outline-none transition-all mt-4 w-fit inline-flex items-center gap-1">
                Dial Now
              </a>
            </PremiumInteractiveCard>

            <PremiumInteractiveCard className="bg-gradient-to-br from-[#25D366] to-[#128C7E] p-8 group flex flex-col justify-between min-h-[220px] shadow-lg hover:shadow-[#25D366]/30 transition-shadow duration-300" borderRadius="2rem">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm shadow-inner flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                  <MessageCircle className="text-white drop-shadow-md" size={24} />
                </div>
                <h4 className="font-black text-2xl tracking-tighter text-white mb-1">WhatsApp</h4>
                <p className="text-sm font-medium text-white/80">+91 9833-0000-52</p>
              </div>
              <a href="https://wa.me/919833000052" target="_blank" rel="noopener noreferrer" className="font-bold text-sm text-white underline decoration-2 decoration-white/30 underline-offset-4 group-hover:decoration-white focus:outline-none transition-all mt-4 w-fit inline-flex items-center gap-1">
                Text Us Directly
              </a>
            </PremiumInteractiveCard>

            <PremiumInteractiveCard className="bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] p-[1px] group flex flex-col min-h-[220px] hover:shadow-[0_10px_40px_rgba(225,48,108,0.3)] transition-shadow duration-300 overflow-hidden" borderRadius="2rem">
               <div className="bg-black w-full h-full rounded-[2rem] p-8 flex flex-col justify-between relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f09433]/10 via-[#dc2743]/10 to-[#bc1888]/10 pointer-events-none" />
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform relative z-20">
                      <Instagram className="text-brand-red" size={24} />
                    </div>
                    <h4 className="font-black text-2xl tracking-tighter text-white mb-1 relative z-20">Instagram</h4>
                    <p className="text-sm font-medium text-neutral-400 relative z-20">@pexelparadox</p>
                  </div>
                  <a href="https://www.instagram.com/pexelparadox?igsh=NzNtY3V3ejJmNm9k" target="_blank" rel="noopener noreferrer" className="font-bold text-sm text-white underline decoration-2 decoration-white/20 underline-offset-4 group-hover:decoration-brand-red focus:outline-none transition-all mt-4 w-fit inline-flex items-center gap-1 relative z-20">
                    Follow Journey
                  </a>
               </div>
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
                    placeholder="Enter your name" 
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
                    placeholder="Enter your gym name" 
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
                      placeholder="Email" 
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
                      placeholder="Phone" 
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
                    placeholder="E.g., $1,000 - $3,000"
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
