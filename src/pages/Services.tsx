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

      {/* Services Bento Grid Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Performance Marketing (Flagship Large Dark Block) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2 bg-neutral-950 border border-neutral-850 rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group hover:border-brand-red hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-[380px] shadow-2xl"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-red/15 transition-all duration-500" />
            
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                  <Target className="text-brand-red animate-pulse" size={32} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest bg-brand-red text-white py-1.5 px-3 rounded-full shadow-[0_4px_10px_rgba(220,53,53,0.3)]">
                  Flagship Engine
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-4">
                Performance Marketing
              </h3>
              <p className="text-neutral-400 font-medium text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                A comprehensive, multi-channel approach focused strictly on profitable member acquisition. We handle every step of your local visibility and conversion flow to turn cold traffic into active memberships.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mt-auto pt-6 border-t border-neutral-900">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-red" /> Omni-channel</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-red" /> Lead Arbitrage</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-red" /> Guaranteed KPIs</li>
              </ul>
              
              <Link 
                to="/services/performance-marketing" 
                className="inline-flex items-center text-brand-red group-hover:text-white font-bold uppercase tracking-widest text-xs transition-colors shrink-0"
              >
                <span>Explore Engine</span> 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Meta Ads (Light Block) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-brand-border rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-brand-red hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-brand-gray border border-brand-border flex items-center justify-center">
                  <Users className="text-brand-red" size={26} strokeWidth={1.5} />
                </div>
                {/* Visual Radial Targeting Tag */}
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase font-mono">
                  Radius: 10 KM
                </span>
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-3">
                Meta Ads
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm mb-6">
                Highly targeted Facebook & Instagram advertising campaigns calibrated specifically for local fitness demographics, maximizing signups inside your immediate facility radius.
              </p>
            </div>

            <div className="mt-auto">
              {/* Micro-visual mock targeting element */}
              <div className="bg-brand-gray rounded-xl p-3 mb-6 border border-brand-border/40 flex items-center justify-between text-[11px] font-mono text-gray-500 uppercase">
                <span>Direct Targeting</span>
                <span className="text-black font-semibold">Active Gym Goers</span>
              </div>
              
              <Link 
                to="/services/meta-ads" 
                className="inline-flex items-center text-brand-red font-bold uppercase tracking-widest text-xs"
              >
                <span>Explore Engine</span> 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Lead Generation (Light Block) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-brand-border rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-brand-red hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-brand-gray border border-brand-border flex items-center justify-center">
                  <Zap className="text-brand-red animate-bounce" size={26} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] bg-red-50 text-brand-red border border-red-100 font-black tracking-widest uppercase py-1 px-2.5 rounded-full select-none">
                  +240% Growth
                </span>
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-3">
                Lead Generation
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm mb-6">
                End-to-end capture mechanisms designed to extract name, phone, and specific fitness goals from cold local traffic, pre-qualifying prospects before contact.
              </p>
            </div>

            <div className="mt-auto">
              <div className="bg-brand-gray rounded-xl p-3 mb-6 border border-brand-border/40 flex items-center justify-between text-[11px] font-mono text-gray-500 uppercase">
                <span>Prospect Filter</span>
                <span className="text-black font-semibold">Goal-Oriented</span>
              </div>
              
              <Link 
                to="/services/lead-generation" 
                className="inline-flex items-center text-brand-red font-bold uppercase tracking-widest text-xs"
              >
                <span>Explore Engine</span> 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 4: Content Creation (Bento Wide Horizontal Light Block) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 md:col-span-1 lg:col-span-2 bg-white border border-brand-border rounded-[2.5rem] p-6 md:p-8 md:pb-6 flex flex-col justify-between group hover:border-brand-red hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-gray border border-brand-border flex items-center justify-center">
                  <Presentation className="text-brand-red" size={26} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider">SECURE ASPECT RATIO (9:16)</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black mb-2">
                    Content Creation
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-sm mb-4 max-w-lg">
                    Gritty, high-converting visual assets that position physical facilities as undisputed premium authorities. Stock photos don't convert; authentic, high-intensity creative assets sell memberships.
                  </p>
                </div>

                {/* Simulated Content phone viewfinder preview (pure CSS) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-4 lg:mt-0">
                  <div className="relative mx-auto lg:mr-0 w-[270px] lg:w-[155px] aspect-[18.5/9] lg:aspect-[9/18.5] rounded-[1.8rem] lg:rounded-[2.2rem] border-8 border-neutral-900 bg-neutral-950 p-3 lg:p-2.5 flex flex-col justify-between text-neutral-400 font-mono text-[8px] shadow-2xl overflow-hidden ring-1 ring-neutral-800">
                    
                    {/* Simulated Camera Dynamic Island Notch (Rotated dynamically on mobile vs. desktop) */}
                    <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-10 lg:left-1/2 lg:top-1.5 lg:-translate-x-1/2 lg:translate-y-0 lg:w-10 lg:h-2.5 bg-neutral-900 rounded-full z-30 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-blue-950/40" />
                    </div>

                    {/* Camera Focus Gridlines Overlap */}
                    <div className="absolute inset-0 pointer-events-none opacity-25 z-0 my-3 mx-8 lg:my-8 lg:mx-0">
                      <div className="grid grid-cols-3 grid-rows-3 h-full w-full border border-neutral-850">
                        <div className="border-r border-b border-neutral-850" />
                        <div className="border-r border-b border-neutral-850" />
                        <div className="border-b border-neutral-850" />
                        <div className="border-r border-b border-neutral-850" />
                        <div className="border-r border-b border-neutral-850" />
                        <div className="border-b border-neutral-850" />
                      </div>
                    </div>

                    {/* Concentric Autofocus Target in center */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-6 h-6 border border-brand-red/50 rounded flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-brand-red animate-ping" />
                      </div>
                    </div>

                    {/* Recording Header */}
                    <div className="flex justify-between items-center text-[7px] text-neutral-400 font-bold z-20 mt-1 lg:mt-3 px-4 lg:px-0">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse inline-block" />
                        <span className="text-white">REC</span>
                      </div>
                      <span>4K 60FPS</span>
                    </div>

                    {/* Audio Waveforms & Camera Controls at Bottom */}
                    <div className="flex flex-row lg:flex-col gap-3 lg:gap-2 justify-between lg:justify-start items-center lg:items-stretch z-20 mt-auto px-4 lg:px-0">
                      {/* Interactive Waveform Level Indicator */}
                      <div className="flex items-end justify-center gap-[3px] h-6 lg:h-7 bg-neutral-900/95 border border-neutral-800 rounded-lg p-1 w-20 lg:w-full shrink-0">
                        <span className="w-0.5 bg-brand-red h-3 rounded-full animate-pulse" style={{ animationDuration: '0.6s' }} />
                        <span className="w-0.5 bg-white h-4.5 rounded-full animate-pulse" style={{ animationDuration: '0.8s' }} />
                        <span className="w-0.5 bg-white h-2 rounded-full animate-pulse" style={{ animationDuration: '0.5s' }} />
                        <span className="w-0.5 bg-brand-red h-5 rounded-full animate-pulse" style={{ animationDuration: '0.7s' }} />
                        <span className="w-0.5 bg-white h-3.5 rounded-full animate-pulse" style={{ animationDuration: '0.9s' }} />
                        <span className="w-0.5 bg-white h-1.5 rounded-full animate-pulse" style={{ animationDuration: '0.4s' }} />
                      </div>

                      {/* Phone Shutter Control Bar */}
                      <div className="flex justify-between items-center gap-4 lg:gap-0 px-0.5 pt-0.5 border-t lg:border-t-0 lg:border-neutral-900 w-full lg:w-auto">
                        <span className="text-[6px] text-white font-medium">100% Lenses</span>
                        <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center shrink-0">
                          <div className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
                        </div>
                        <span className="text-[6px] text-neutral-400 font-medium">00:14</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-brand-gray flex justify-between items-center">
              <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase font-mono">100% Custom Media Assets</span>
              <Link 
                to="/services/content-creation" 
                className="inline-flex items-center text-brand-red font-bold uppercase tracking-widest text-xs"
              >
                <span>Explore Engine</span> 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 5: Conversion Funnels (Bento Wide Horizontal Light Block) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-1 lg:col-span-2 bg-white border border-brand-border rounded-[2.5rem] p-6 md:p-8 md:pb-6 flex flex-col justify-between group hover:border-brand-red hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-gray border border-brand-border flex items-center justify-center">
                  <LayoutDashboard className="text-brand-red" size={26} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-100 font-bold px-2.5 py-1.5 rounded-full uppercase tracking-wider">
                  94% Bounce Reduction
                </span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black mb-2">
                    Conversion Funnels
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-sm mb-4 max-w-lg">
                    Strategic, single-purpose landing pages optimized ruthlessly to intercept interest and obtain instant lead data instead of general passive browsing.
                  </p>
                </div>

                {/* Elegant interactive Funnel/Landing page Mockup in the right column */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-4 lg:mt-0">
                  <div className="relative mx-auto lg:mr-0 w-full max-w-[270px] lg:max-w-[210px] aspect-[14/9] rounded-[1.2rem] border-4 border-neutral-900 bg-neutral-950 p-2 flex flex-col justify-between text-neutral-400 font-mono text-[8px] shadow-xl overflow-hidden ring-1 ring-neutral-850">
                    
                    {/* Browser top-bar */}
                    <div className="flex items-center gap-1 pb-1.5 border-b border-neutral-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 inline-block" />
                      <span className="text-[5px] text-neutral-600 ml-1">secure-funnel.com</span>
                    </div>

                    {/* Browser mock content */}
                    <div className="flex-1 py-1.5 px-0.5 flex flex-col gap-1 justify-center relative">
                      <div className="h-1.5 w-10 bg-brand-red rounded animate-pulse" />
                      <div className="text-[5px] text-neutral-500 font-black tracking-widest uppercase">JOIN THE ELITE 1%</div>
                      <div className="h-1 w-20 bg-neutral-800 rounded-sm" />
                      
                      {/* Micro chart funnel element */}
                      <div className="flex flex-col gap-1 bg-neutral-900/90 rounded p-1.5 border border-neutral-850 mt-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[5px] text-neutral-500 uppercase">Visits</span>
                          <div className="flex-1 bg-neutral-850 h-1 rounded-full overflow-hidden">
                            <div className="bg-brand-red h-full w-[85%] animate-pulse" />
                          </div>
                          <span className="text-[5px] text-white">85%</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[5px] text-neutral-500 uppercase">Opt-In</span>
                          <div className="flex-1 bg-neutral-105 h-1 rounded-full overflow-hidden">
                            <div className="bg-brand-red h-full w-[45%] animate-pulse" style={{ animationDelay: '0.2s' }} />
                          </div>
                          <span className="text-[5px] text-white">45%</span>
                        </div>
                      </div>
                    </div>

                    {/* SSL Secure status */}
                    <div className="flex justify-between items-center text-[5px] text-neutral-600 border-t border-neutral-900 pt-1 font-mono uppercase tracking-wider">
                      <span>SSL ENCRYPTED</span>
                      <span className="text-emerald-500 font-bold font-mono">● SECURE</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-brand-gray flex justify-between items-center">
              <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase font-mono">94% Bounce Reduction</span>
              <Link 
                to="/services/conversion-funnels" 
                className="inline-flex items-center text-brand-red font-bold uppercase tracking-widest text-xs"
              >
                <span>Explore Engine</span> 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 6: Follow-Up Systems (Light Block) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-brand-border rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-brand-red hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-brand-gray border border-brand-border flex items-center justify-center">
                  <MessageSquare className="text-brand-red" size={26} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-mono text-black font-semibold bg-brand-gray px-2 py-1 rounded-full uppercase">
                  &lt; 5m Speed-To-Lead
                </span>
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-3">
                Follow-Up Systems
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm mb-6">
                Automated CRM, SMS pipelines, and rapid email systems that engage active gym prospects within moments of opt-in, converting interest when it is most intense.
              </p>
            </div>

            <div className="mt-auto">
              <div className="bg-brand-gray rounded-xl p-3 mb-6 border border-brand-border/40 flex items-center justify-between text-[11px] font-mono text-gray-500 uppercase">
                <span>Response Target</span>
                <span className="text-black font-bold">Immediate Auto-Dial</span>
              </div>
              
              <Link 
                to="/services/follow-up-systems" 
                className="inline-flex items-center text-brand-red font-bold uppercase tracking-widest text-xs"
              >
                <span>Explore Engine</span> 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 7: Gym Growth Strategy (Underpinned Full-Width Bento block) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-neutral-900 to-black text-white border border-neutral-800 rounded-[3rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group hover:border-brand-red hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              <div className="lg:col-span-8 text-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-800/85 border border-neutral-750 flex items-center justify-center">
                    <LineChart className="text-brand-red" size={26} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-brand-red text-white py-1 px-3.5 rounded-full shadow-[0_4px_10px_rgba(220,53,53,0.3)]">
                    Enterprise Scaling
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                  Gym Growth Strategy
                </h3>
                <p className="text-neutral-400 font-medium leading-relaxed text-sm md:text-base max-w-2xl">
                  Strategic roadmap deployment for complete local market absolute dominance, analyzing pricing parameters, scalable gym group offers, structural lifetime value calculations, and member retention pipelines.
                </p>
              </div>

              {/* Dynamic stats right side segment */}
              <div className="lg:col-span-4 flex flex-col justify-end lg:items-end w-full">
                <div className="bg-neutral-950 border border-neutral-850 p-6 rounded-2xl w-full max-w-sm flex flex-col gap-3 font-mono text-xs uppercase tracking-wider text-neutral-400">
                  <div className="flex justify-between items-center text-left">
                    <span>Target LTV</span>
                    <span className="text-white font-bold font-sans">₹18,500+</span>
                  </div>
                  <div className="h-[1px] bg-neutral-850 w-full" />
                  <div className="flex justify-between items-center text-left">
                    <span>Churn Cap Limit</span>
                    <span className="text-brand-red font-bold font-sans">&lt; 4% Monthly</span>
                  </div>
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
          </motion.div>

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

