import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Let's Fill <span className="text-brand-red">Your Gym.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-12 max-w-lg"
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
              <div className="w-16 h-16 rounded-full bg-brand-gray border border-brand-border flex items-center justify-center text-brand-red">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p className="text-gray-400">Chandigarh & Mohali, India</p>
              </div>
            </motion.div>
            
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-brand-gray border border-brand-border flex items-center justify-center text-brand-red">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-400">hello@pexelparadox.com</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4 }}
           className="bg-brand-gray border border-brand-border rounded-[2rem] p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold mb-8">Request a Strategy Call</h3>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 font-medium">Name</label>
              <input type="text" className="bg-black border border-brand-border rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="John Doe" />
            </div>
             <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 font-medium">Gym Name</label>
              <input type="text" className="bg-black border border-brand-border rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="Iron Fitness" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 font-medium">Email</label>
              <input type="email" className="bg-black border border-brand-border rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="john@ironfitness.com" />
            </div>
            <button className="h-16 rounded-xl bg-brand-red text-white font-bold text-lg hover:bg-red-600 transition-colors mt-4">
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
