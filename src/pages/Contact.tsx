import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
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

          <div className="flex flex-col gap-8">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-brand-gray border border-brand-border flex items-center justify-center text-brand-red shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-black">Location</h4>
                <p className="text-gray-500 font-medium">Chandigarh & Mohali, India</p>
              </div>
            </motion.div>
            
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-brand-gray border border-brand-border flex items-center justify-center text-brand-red shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-black">Email</h4>
                <p className="text-gray-500 font-medium">
                  <a href="mailto:info@pexelparadox.com" className="hover:text-brand-red transition-colors">info@pexelparadox.com</a>
                </p>
              </div>
            </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4 }}
               className="flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-brand-gray border border-brand-border flex items-center justify-center text-brand-red shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-black">Call Now</h4>
                <p className="text-gray-500 font-medium">
                  <a href="tel:+919833000052" className="hover:text-brand-red transition-colors">+91 9833-0000-52</a>
                </p>
              </div>
            </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5 }}
               className="flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-brand-gray border border-brand-border flex items-center justify-center text-emerald-600 shrink-0">
                <MessageCircle size={28} fill="currentColor" className="text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-black">WhatsApp Us</h4>
                <p className="text-gray-500 font-medium">
                  <a href="https://wa.me/919833000052" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">+91 9833-0000-52</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4 }}
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
