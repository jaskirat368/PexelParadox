import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, MessageCircle, Instagram } from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [gymName, setGymName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

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
          _subject: `New Strategy Call Request - ${gymName}`,
          _captcha: "false"
        })
      });

      if (response.ok) {
        // Direct success navigation to the customized Thank You page
        navigate("/thank-you");
      } else {
        // If server returns error, show custom 404 handler tailored to DNA
        navigate("/page-not-found-error");
      }
    } catch (err) {
      // If network fails, show custom 404 handler tailored to DNA
      navigate("/page-not-found-error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
        <div className="lg:col-span-7">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-black"
          >
            Let's Fill <span className="text-brand-red">Your Gym.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 mb-12 max-w-lg font-medium"
          >
            Ready to implement predictable growth systems? Book a strategy call with our team today.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Location */}
            <motion.div 
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-brand-gray border border-brand-border rounded-[1.5rem] p-6 hover:border-brand-red hover:shadow-lg transition-all duration-300 flex flex-col justify-center"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-red shrink-0">
                  <MapPin size={22} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base tracking-tight text-black">Location</h4>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">Chandigarh & Mohali, India</p>
                </div>
              </div>
            </motion.div>
            
            {/* Card 2: Email */}
            <motion.div 
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-brand-gray border border-brand-border rounded-[1.5rem] p-6 hover:border-brand-red hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-red shrink-0">
                  <Mail size={22} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base tracking-tight text-black">Email</h4>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">info@pexelparadox.com</p>
                </div>
              </div>
              <a 
                href="mailto:info@pexelparadox.com" 
                className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-brand-red text-white font-bold text-sm hover:bg-neutral-900 transition-all shadow-sm hover:shadow-md"
              >
                Email Us
              </a>
            </motion.div>

            {/* Card 3: Call Now */}
            <motion.div 
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="bg-brand-gray border border-brand-border rounded-[1.5rem] p-6 hover:border-brand-red hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-red shrink-0">
                  <Phone size={22} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base tracking-tight text-black">Call Now</h4>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">+91 9833-0000-52</p>
                </div>
              </div>
              <a 
                href="tel:+919833000052" 
                className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-black text-white font-bold text-sm hover:bg-brand-red transition-all shadow-sm"
              >
                Call Now
              </a>
            </motion.div>

            {/* Card 4: WhatsApp Us */}
            <motion.div 
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="bg-brand-gray border border-brand-border rounded-[1.5rem] p-6 hover:border-brand-red hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-emerald-600 shrink-0">
                  <MessageCircle size={22} fill="currentColor" className="text-emerald-500 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base tracking-tight text-black">WhatsApp Us</h4>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">+91 9833-0000-52</p>
                </div>
              </div>
              <a 
                href="https://wa.me/919833000052" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-[#25D366] text-white font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-sm shadow-emerald-500/10"
              >
                WhatsApp Us
              </a>
            </motion.div>

            {/* Card 5: Instagram */}
            <motion.div 
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="bg-brand-gray border border-brand-border rounded-[1.5rem] p-6 hover:border-brand-red hover:shadow-lg transition-all duration-300 flex flex-col justify-between sm:col-span-2"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-pink-600 shrink-0">
                  <Instagram size={22} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base tracking-tight text-black">Instagram</h4>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">@pexelparadox</p>
                </div>
              </div>
              <a 
                href="https://www.instagram.com/pexelparadox?igsh=NzNtY3V3ejJmNm9k" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all"
              >
                Follow Us
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4 }}
           className="lg:col-span-5 w-full"
        >
          <motion.div
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="bg-brand-gray border border-brand-border rounded-[2rem] p-8 md:p-10 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-8 text-black">Request a Strategy Call</h3>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500 font-semibold">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white border border-brand-border rounded-xl px-4 py-4 text-black focus:outline-none focus:border-brand-red transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
               <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500 font-semibold">Gym Name</label>
                <input 
                  type="text" 
                  name="gymName"
                  required
                  value={gymName}
                  onChange={(e) => setGymName(e.target.value)}
                  className="bg-white border border-brand-border rounded-xl px-4 py-4 text-black focus:outline-none focus:border-brand-red transition-colors" 
                  placeholder="Iron Fitness" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500 font-semibold">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-brand-border rounded-xl px-4 py-4 text-black focus:outline-none focus:border-brand-red transition-colors" 
                  placeholder="john@ironfitness.com" 
                />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="h-16 rounded-xl bg-brand-red text-white font-bold text-lg hover:bg-red-600 active:scale-95 transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
