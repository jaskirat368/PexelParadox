import { motion } from 'motion/react';
import { ArrowRight, Target, Users, Zap, LayoutDashboard, LineChart, MessageSquare, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    icon: Target,
    what: "A comprehensive, multi-channel approach focused strictly on profitable member acquisition.",
    why: "Stop paying for 'brand awareness' and vanity metrics. Gyms need foot traffic and signed contracts.",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    icon: Users,
    what: "Highly targeted Facebook & Instagram advertising campaigns calibrated for fitness demographics.",
    why: "It is the single most effective channel to reach individuals within a 5-10 mile radius of your facility.",
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    icon: Zap,
    what: "End-to-end mechanisms designed to convert cold local traffic into identifiable, interested prospects.",
    why: "Traffic without capture is wasted ad spend. Collect names, emails, and phone numbers.",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    icon: Presentation,
    what: "Gritty, high-converting visual assets that position your facility as the premium authority in your town.",
    why: "Stock photos don't sell memberships. Authentic, high-intensity facility footage does.",
  },
  {
    slug: "conversion-funnels",
    title: "Conversion Funnels",
    icon: LayoutDashboard,
    what: "Strategic, single-purpose landing pages optimized ruthlessly to acquire prospect contact information.",
    why: "Sending paid ad traffic to a generic website homepage kills your conversion rate.",
  },
  {
    slug: "follow-up-systems",
    title: "Follow-Up Systems",
    icon: MessageSquare,
    what: "Automated CRM, SMS, and email infrastructure that engages leads within seconds of opting in.",
    why: "Speed to lead is everything. If you don't contact them in 5 minutes, your competitor will.",
  },
  {
    slug: "gym-growth-strategy",
    title: "Gym Growth Strategy",
    icon: LineChart,
    what: "A macro-level roadmap for local market domination, covering pricing, offers, and capacity planning.",
    why: "Scaling a gym requires more than just marketing; it requires unit economics and retention models.",
  }
];

export default function Services() {
  return (
    <div className="w-full relative bg-brand-gray min-h-screen pb-20">
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden w-full bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="max-w-3xl">
            <span className="text-brand-red font-bold tracking-widest uppercase mb-4 block">Our Arsenal</span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
            >
              Our <br className="hidden md:block"/>
              <span className="text-gray-400">Services.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed max-w-2xl"
            >
              We don't offer a generic menu of digital marketing services. We deploy tactical, battle-tested acquisition systems designed explicitly for independent gym owners to dominate their local market.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:flex flex-col items-center gap-4 shrink-0"
          >
             <Link 
                to="/contact" 
                className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-red text-white transition-transform hover:scale-105 shadow-[0_0_20px_rgba(220,53,53,0.3)]"
              >
                <ArrowRight size={32} />
              </Link>
              <span className="text-sm font-bold uppercase tracking-widest text-black">Start Now</span>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group flex flex-col h-full"
             >
                <Link 
                  to={`/services/${service.slug}`} 
                  className="bg-white border border-brand-border rounded-[2rem] p-8 md:p-10 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-red relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-brand-red/10 transition-colors" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-brand-gray border border-brand-border flex items-center justify-center mb-8 group-hover:border-brand-red/30 transition-colors">
                    <service.icon className="text-brand-red" size={32} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
                    {service.what}
                  </p>
                  
                  <div className="flex items-center text-brand-red font-bold uppercase tracking-widest text-sm mt-auto">
                    Explore Engine <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
             </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-white text-black p-12 md:p-20 rounded-[3rem] text-center flex flex-col items-center shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-brand-border relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 relative z-10">Stop Guessing. <br/>Start Scaling.</h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mb-10 relative z-10">
            Stop relying on hope as a strategy. Let's install a predictable client acquisition system in your facility today.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex h-16 w-full sm:w-auto px-10 items-center justify-center rounded-full bg-brand-red text-white font-bold text-lg transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,53,53,0.3)] gap-2 relative z-10"
          >
            Book Strategy Call <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

