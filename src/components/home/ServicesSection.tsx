import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  { id: 'paid-ads', title: 'Performance Marketing', desc: 'High-ROAS Meta & Google ad campaigns.' },
  { id: 'lead-nurture', title: 'Lead Nurturing', desc: 'Automated SMS/Email follow-ups.' },
  { id: 'content', title: 'Tactical Content', desc: 'Gritty, high-converting creatives.' },
  { id: 'retention', title: 'Retention Systems', desc: 'Backend systems to keep members.' },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-brand-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Services List Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-gray border border-brand-border rounded-[2rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] pointer-events-none" />
           
           <div>
              <div className="inline-block px-4 py-1 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red font-bold text-sm tracking-widest uppercase mb-8">
                Our Services
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                We offer a focused range of growth systems designed explicitly for the fitness industry.
              </p>
           </div>

           <div className="flex flex-col gap-4 relative z-10">
              {servicesList.map((service, i) => (
                <Link
                  key={i}
                  to={`/services/${service.id}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-brand-border bg-black/30 hover:bg-black/80 hover:border-brand-red transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-2 sm:mb-0">
                    <span className="text-brand-red font-mono text-sm">0{i + 1}</span>
                    <div>
                      <h4 className="text-white font-bold">{service.title}</h4>
                      <p className="text-gray-500 text-sm hidden sm:block">{service.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="text-gray-600 group-hover:text-brand-red group-hover:-rotate-45 transition-all duration-300 transform self-end sm:self-auto" size={20} />
                </Link>
              ))}
           </div>
        </motion.div>

        {/* Hero Service Image/Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-brand-gray border border-brand-border rounded-[2rem] overflow-hidden flex flex-col"
        >
          <div className="h-2/3 relative">
            <div className="absolute inset-0 bg-brand-black/20 z-10" />
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80" />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-between flex-1 bg-black">
             <h3 className="text-2xl font-bold mb-4">Ever wondered how scalable growth happens?</h3>
             <div className="flex items-center justify-between mt-auto">
               <p className="text-gray-400 text-sm max-w-[200px]">Looking for growth experts who can fill your gym to capacity?</p>
               <Link to="/process" className="w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center hover:scale-105 transition-transform shrink-0">
                 <ArrowRight />
               </Link>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
