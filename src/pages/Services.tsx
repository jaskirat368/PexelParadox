import { motion } from 'motion/react';
import { ArrowRight, Target, Users, Zap, LayoutDashboard, LineChart, MessageSquare, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumInteractiveCard from '../components/ui/PremiumInteractiveCard';

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
                to="/contact#contact-form" 
                className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-red text-white transition-transform hover:scale-105 shadow-[0_0_20px_rgba(220,53,53,0.3)]"
              >
                <ArrowRight size={32} />
              </Link>
              <span className="text-sm font-bold uppercase tracking-widest text-black">Start Now</span>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Performance Marketing (Flagship Large Dark Block) */}
          <PremiumInteractiveCard 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2 bg-neutral-950 border border-neutral-850 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-[380px] shadow-2xl"
            borderRadius="2.5rem"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-red/15 transition-all duration-500" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                      <Target className="text-brand-red animate-pulse" size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest bg-brand-red text-white py-1.5 px-3 rounded-full shadow-[0_4px_10px_rgba(220,53,53,0.3)] border-0">
                      Flagship Engine
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-4">
                    Performance Marketing
                  </h3>
                  <p className="text-neutral-400 font-medium text-base md:text-lg leading-relaxed mb-8">
                    A comprehensive, multi-channel approach focused strictly on profitable member acquisition. We handle every step of your local visibility and conversion flow to turn cold traffic into active memberships.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 relative w-full h-48 lg:h-64 rounded-[1.5rem] overflow-hidden border border-neutral-800">
                <img 
                  src="https://i.ibb.co/hx4LMpp4/af05c3476b66b00f57eca752a6ab6678.jpg" 
                  alt="Performance Marketing" 
                  className="absolute inset-0 w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mt-8 pt-6 border-t border-neutral-900 z-50">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-red" /> Omni-channel</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-red" /> Lead Arbitrage</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-red" /> Guaranteed KPIs</li>
              </ul>
              
              <Link 
                to="/services/performance-marketing" 
                className="inline-flex items-center text-brand-red hover:text-white font-bold uppercase tracking-widest text-xs transition-colors shrink-0"
              >
                <span>Explore Engine</span> 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </PremiumInteractiveCard>

          {/* Card 2: Meta Ads (Light Block) */}
          <PremiumInteractiveCard 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-brand-border p-8 flex flex-col justify-between group shadow-sm hover:shadow-xl"
            borderRadius="2.5rem"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-gray border border-brand-border flex items-center justify-center">
                  <Users className="text-brand-red" size={26} strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-3 font-sans">
                Meta Ads
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm mb-6 w-full">
                Highly targeted Facebook & Instagram advertising campaigns calibrated specifically for fitness demographics, maximizing signups inside your immediate facility radius.
              </p>
            </div>

            <div className="mt-auto">
              <div className="relative w-full h-40 rounded-2xl overflow-hidden border border-brand-border mb-6">
                <img 
                  src="https://i.ibb.co/cSthH6G9/IMG-20260614-120137.jpg" 
                  alt="Meta Ads" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <Link 
                to="/services/meta-ads" 
                className="inline-flex items-center text-brand-red font-bold uppercase tracking-widest text-xs"
              >
                <span>Explore Engine</span> 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </PremiumInteractiveCard>

          {/* Card 3: Lead Generation (Light Block) */}
          <PremiumInteractiveCard 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-brand-border p-8 flex flex-col justify-between group shadow-sm hover:shadow-xl"
            borderRadius="2.5rem"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-gray border border-brand-border flex items-center justify-center">
                  <Zap className="text-brand-red animate-bounce" size={26} strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-3 font-sans">
                Lead Generation
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm mb-6 w-full">
                End-to-end capture mechanisms designed to extract name, phone, and specific fitness goals from cold local traffic, pre-qualifying prospects before contact.
              </p>
            </div>

            <div className="mt-auto">
              <div className="relative w-full h-40 rounded-2xl overflow-hidden border border-brand-border mb-6">
                <img 
                  src="https://i.ibb.co/G3WLHD2Y/6a27e22a1ae5b9cd2e65d63081f3393e-1.png" 
                  alt="Lead Generation" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <Link 
                to="/services/lead-generation" 
                className="inline-flex items-center text-brand-red font-bold uppercase tracking-widest text-xs"
              >
                <span>Explore Engine</span> 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </PremiumInteractiveCard>

          {/* Card 4: Content Creation (Bento Wide Horizontal Light Block) */}
          <PremiumInteractiveCard 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 md:col-span-1 lg:col-span-2 bg-white border border-brand-border p-6 md:p-8 md:pb-6 flex flex-col justify-between group shadow-sm hover:shadow-xl relative overflow-hidden"
            borderRadius="2.5rem"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-gray border border-brand-border flex items-center justify-center">
                  <Presentation className="text-brand-red" size={26} strokeWidth={1.5} />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black mb-2 font-sans">
                    Content Creation
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-sm mb-4 max-w-lg">
                    Gritty, high-converting visual assets that position physical facilities as undisputed premium authorities. Stock photos don't convert; authentic, high-intensity creative assets sell memberships.
                  </p>
                </div>

                <div className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-4 lg:mt-0">
                  <div className="relative w-full h-48 lg:h-56 rounded-[1.5rem] overflow-hidden border border-brand-border">
                    <img 
                      src="https://i.ibb.co/cKVtr10f/3a8202dd26c2fc466d2ee9db81ac2e73.jpg" 
                      alt="Content Creation" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-brand-gray flex justify-between items-center z-50">
              <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase font-mono">100% Genuine Creative Assets</span>
              <Link 
                to="/services/content-creation" 
                className="inline-flex items-center text-brand-red font-bold uppercase tracking-widest text-xs"
              >
                <span>Explore Engine</span> 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </PremiumInteractiveCard>

          {/* Card 5: Conversion Funnels (Bento Wide Horizontal Light Block) */}
          <PremiumInteractiveCard 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-1 lg:col-span-2 bg-white border border-brand-border p-6 md:p-8 md:pb-6 flex flex-col justify-between group relative overflow-hidden"
            borderRadius="2.5rem"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-gray border border-brand-border flex items-center justify-center">
                  <LayoutDashboard className="text-brand-red" size={26} strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black mb-2 font-sans">
                    Conversion Funnels
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-sm mb-4 max-w-lg">
                    Strategic, single-purpose landing pages optimized ruthlessly to intercept interest and obtain instant lead data instead of general passive browsing.
                  </p>
                </div>

                <div className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-4 lg:mt-0">
                  <div className="relative w-full h-48 lg:h-56 rounded-[1.5rem] overflow-hidden border border-brand-border">
                    <img 
                      src="https://i.ibb.co/h12dN4pQ/IMG-20260614-133755.png" 
                      alt="Conversion Funnels" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-brand-gray flex justify-between items-center z-50">
              <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase font-mono">Precision Architecture</span>
              <Link 
                to="/services/conversion-funnels" 
                className="inline-flex items-center text-brand-red font-bold uppercase tracking-widest text-xs"
              >
                <span>Explore Engine</span> 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </PremiumInteractiveCard>

          {/* Card 6: Follow-Up Systems (Light Block) */}
          <PremiumInteractiveCard 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-brand-border p-8 flex flex-col justify-between group shadow-sm hover:shadow-xl"
            borderRadius="2.5rem"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-gray border border-brand-border flex items-center justify-center">
                  <MessageSquare className="text-brand-red" size={26} strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-3 font-sans">
                Follow-Up Systems
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm mb-6 w-full">
                Automated CRM, SMS pipelines, and rapid email systems that engage active gym prospects within moments of opt-in, converting interest when it is most intense.
              </p>
            </div>

            <div className="mt-auto">
              <div className="relative w-full h-40 rounded-2xl overflow-hidden border border-brand-border mb-6">
                <img 
                  src="https://i.ibb.co/k2cpMjNG/fcc07164b65ab47c5d07c34d9b2683ee.png" 
                  alt="Follow-Up Systems" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <Link 
                to="/services/follow-up-systems" 
                className="inline-flex items-center text-brand-red font-bold uppercase tracking-widest text-xs"
              >
                <span>Explore Engine</span> 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </PremiumInteractiveCard>

          {/* Card 7: Gym Growth Strategy (Underpinned Full-Width Bento block) */}
          <PremiumInteractiveCard 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-neutral-900 to-black text-white border border-neutral-800 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group"
            borderRadius="3rem"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              <div className="lg:col-span-8 text-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-800/85 border border-neutral-750 flex items-center justify-center">
                    <LineChart className="text-brand-red" size={26} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-brand-red text-white py-1 px-3.5 rounded-full shadow-[0_4px_10px_rgba(220,53,53,0.3)] border-0">
                    Enterprise Scaling
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4 font-sans">
                  Gym Growth Strategy
                </h3>
                <p className="text-neutral-400 font-medium leading-relaxed text-sm md:text-base max-w-2xl">
                  Strategic roadmap deployment for complete local market absolute dominance, analyzing pricing parameters, scalable gym group offers, structural lifetime value calculations, and member retention pipelines.
                </p>
              </div>

              {/* Dynamic image mockup replacing old stats block */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
                <div className="relative w-full h-48 md:h-56 rounded-[1.5rem] overflow-hidden border border-neutral-800">
                  <img 
                    src="https://i.ibb.co/YBgyVcVZ/6ac15143f9b2e8de9cafadca841d4145.png" 
                    alt="Gym Growth Strategy" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <span className="text-xs font-semibold text-neutral-400">Macro-Level Gym Group Operations Map</span>
              <Link 
                to="/services/gym-growth-strategy" 
                className="inline-flex items-center text-brand-red group-hover:text-white font-bold uppercase tracking-widest text-xs transition-colors"
              >
                <span>Explore Engine</span> 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </PremiumInteractiveCard>

        </div>

        {/* Global CTA */}
        <PremiumInteractiveCard 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-white text-black p-12 md:p-20 text-center flex flex-col items-center shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-brand-border relative overflow-hidden"
          borderRadius="3rem"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 relative z-10 font-sans">Stop Guessing. <br/>Start Scaling.</h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mb-10 relative z-10">
            Stop relying on hope as a strategy. Let's install a predictable client acquisition system in your facility today.
          </p>
          <Link 
            to="/contact#contact-form" 
            className="inline-flex h-16 w-full sm:w-auto px-10 items-center justify-center rounded-full bg-brand-red text-white font-bold text-lg transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,53,53,0.3)] gap-2 relative z-10 whitespace-nowrap"
          >
            Request Project <ArrowRight size={20} />
          </Link>
        </PremiumInteractiveCard>
      </section>
    </div>
  );
}

