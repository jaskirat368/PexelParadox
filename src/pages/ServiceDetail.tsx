import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Target, Users, Zap, LayoutDashboard, LineChart, MessageSquare, Presentation, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const serviceDataDictionary: Record<string, any> = {
  'performance-marketing': {
    title: "Performance Marketing",
    icon: Target,
    tagline: "Profitable Member Acquisition",
    overview: "We deploy a comprehensive, multi-channel approach focused strictly on generating foot traffic and signed contracts for your gym.",
    deepDive: "Most agencies run ads to get you likes and comments. We run ads to get you revenue. Our performance marketing systems are engineered to target high-intent individuals within a 5-10 mile radius of your facility. We capture them natively on platforms they actually use, converting them from cold viewers into high-paying gym members. Stop guessing where your next member is coming from.",
    impact: "Pushes high-intent local traffic directly into your booking calendar.",
    outcome: "Predictable, scalable revenue and packed classes with members who stay.",
    deliverables: [
      "Multi-Channel Campaign Architecture",
      "Dynamic Budget Allocation",
      "Cost-Per-Acquisition (CPA) Optimization",
      "Daily Performance Tracking & Reporting",
      "A/B Testing of Offers and Copy"
    ]
  },
  'paid-ads': { // Alias for homepage links
    title: "Performance Marketing",
    icon: Target,
    tagline: "Profitable Member Acquisition",
    overview: "We deploy a comprehensive, multi-channel approach focused strictly on generating foot traffic and signed contracts for your gym.",
    deepDive: "Most agencies run ads to get you likes and comments. We run ads to get you revenue. Our performance marketing systems are engineered to target high-intent individuals within a 5-10 mile radius of your facility. We capture them natively on platforms they actually use, converting them from cold viewers into high-paying gym members. Stop guessing where your next member is coming from.",
    impact: "Pushes high-intent local traffic directly into your booking calendar.",
    outcome: "Predictable, scalable revenue and packed classes with members who stay.",
    deliverables: [
      "Multi-Channel Campaign Architecture",
      "Dynamic Budget Allocation",
      "Cost-Per-Acquisition (CPA) Optimization",
      "Daily Performance Tracking & Reporting",
      "A/B Testing of Offers and Copy"
    ]
  },
  'meta-ads': {
    title: "Meta Ads",
    icon: Users,
    tagline: "Hyper-Local Lead Generation",
    overview: "Highly targeted Facebook & Instagram advertising campaigns specifically calibrated for fitness demographics.",
    deepDive: "Meta (Facebook and Instagram) remains the single most effective channel to reach individuals within a tight radius of your facility. But standard 'Boost Post' methods burn cash quickly. We engineer complex targeting parameters, custom audience exclusions, and lookalike modeling to only show your ads to locals who have a high propensity to buy a gym membership.",
    impact: "Captures attention with scroll-stopping creative and irresistible intro offers.",
    outcome: "A steady, daily stream of qualified local prospects filling your pipeline.",
    deliverables: [
      "Audience Research & Segmentation",
      "Geo-fencing & Radius Targeting",
      "Pixel Integration & Event Tracking",
      "Ad Retargeting Sequences",
      "Compliance & Ad Account Management"
    ]
  },
  'lead-generation': {
    title: "Lead Generation",
    icon: Zap,
    tagline: "Turning Traffic Into Prospects",
    overview: "End-to-end mechanisms designed to convert cold local traffic into identifiable, interested prospects.",
    deepDive: "Traffic without a capture mechanism is wasted ad spend. You don't just need eyeballs; you need names, emails, and phone numbers. We build robust lead generation systems that incentivize local residents to hand over their contact information in exchange for high-value offers, creating an owned database you can market to forever.",
    impact: "Builds an owned database of local individuals actively interested in fitness.",
    outcome: "A pipeline so full your front desk becomes the only bottleneck.",
    deliverables: [
      "Irresistible Offer Creation",
      "Lead Magnet Optimization",
      "Form & Survey Integration",
      "Database Management Setup",
      "Inbound Call/Text Tracking"
    ]
  },
  'lead-nurture': { // Alias
    title: "Lead Nurturing Systems",
    icon: Zap,
    tagline: "Automated Conversion Engines",
    overview: "End-to-end mechanisms designed to convert cold local traffic into identifiable, interested prospects.",
    deepDive: "Traffic without a capture mechanism is wasted ad spend. You don't just need eyeballs; you need names, emails, and phone numbers. We build robust lead generation systems that incentivize local residents to hand over their contact information in exchange for high-value offers, creating an owned database you can market to forever.",
    impact: "Builds an owned database of local individuals actively interested in fitness.",
    outcome: "A pipeline so full your front desk becomes the only bottleneck.",
    deliverables: [
      "Irresistible Offer Creation",
      "Lead Magnet Optimization",
      "Form & Survey Integration",
      "Database Management Setup",
      "Inbound Call/Text Tracking"
    ]
  },
  'content-creation': {
    title: "Content Creation",
    icon: Presentation,
    tagline: "Gritty & Authentic Visuals",
    overview: "Gritty, high-converting visual assets that position your facility as the premium authority in your town.",
    deepDive: "Stock photos of perfect models running on treadmills don't sell gym memberships. Authentic, high-intensity facility footage does. Our content captures the true culture, sweat, and community of your gym. We script, edit, and produce ad assets that stop the scroll, build immediate trust, and compel locals to walk through your doors.",
    impact: "Lowers your cost-per-click by cutting through the noise with real engagement.",
    outcome: "Ad creatives that command attention and drive immediate action.",
    deliverables: [
      "Short-Form Video Production (Reels/TikTok)",
      "Ad Copywriting & Scripting",
      "High-Resolution Facility Photography",
      "User-Generated Content (UGC) Sourcing",
      "Creative Fatigue Management"
    ]
  },
  'content': { // Alias
    title: "Tactical Content",
    icon: Presentation,
    tagline: "Gritty & Authentic Visuals",
    overview: "Gritty, high-converting visual assets that position your facility as the premium authority in your town.",
    deepDive: "Stock photos of perfect models running on treadmills don't sell gym memberships. Authentic, high-intensity facility footage does. Our content captures the true culture, sweat, and community of your gym. We script, edit, and produce ad assets that stop the scroll, build immediate trust, and compel locals to walk through your doors.",
    impact: "Lowers your cost-per-click by cutting through the noise with real engagement.",
    outcome: "Ad creatives that command attention and drive immediate action.",
    deliverables: [
      "Short-Form Video Production (Reels/TikTok)",
      "Ad Copywriting & Scripting",
      "High-Resolution Facility Photography",
      "User-Generated Content (UGC) Sourcing",
      "Creative Fatigue Management"
    ]
  },
  'conversion-funnels': {
    title: "Conversion Funnels",
    icon: LayoutDashboard,
    tagline: "Optimized Booking Pathways",
    overview: "Strategic, single-purpose landing pages optimized ruthlessly to acquire prospect contact information.",
    deepDive: "Sending paid ad traffic to a generic website homepage with a dozen navigation links kills your conversion rate. A confused mind doesn't buy. We build highly optimized, single-focus funnels designed for one purpose only: getting the prospect to book an appointment or claim an offer. We remove all friction from the buying journey.",
    impact: "Makes it incredibly simple for a local resident to claim an offer.",
    outcome: "Maximum lead volume and ROI for every single ad dollar spent.",
    deliverables: [
      "Custom Landing Page Architecture",
      "Conversion Rate Optimization (CRO)",
      "Mobile-First Funnel Design",
      "Seamless Calendar Booking Integration",
      "Trust Elements & Social Proof Placements"
    ]
  },
  'follow-up-systems': {
    title: "Follow-Up Systems",
    icon: MessageSquare,
    tagline: "Speed-to-Lead Automations",
    overview: "Automated CRM, SMS, and email infrastructure that engages leads within seconds of opting in.",
    deepDive: "Speed to lead is everything. If you don't contact a new lead within 5 minutes, your chances of converting them drop radically. We implement advanced CRM automations that instantly text and email prospects the second they submit their info, engaging them in a conversation to book their first visit while their intent is highest.",
    impact: "Bridges the gap between digital interest and physical attendance.",
    outcome: "Dramatically higher show rates; your front desk only talks to warm prospects.",
    deliverables: [
      "Instant SMS Auto-Responders",
      "Long-Term Email Nurture Sequences",
      "Two-Way Dedicated SMS Dashboards",
      "Missed Call Text-Back Automations",
      "Pipeline Stage Tracking"
    ]
  },
  'gym-growth-strategy': {
    title: "Gym Growth Strategy",
    icon: LineChart,
    tagline: "Macro-Level Scaling Roadmap",
    overview: "A macro-level roadmap for local market domination, covering pricing flexibility, irresistible offers, and capacity planning.",
    deepDive: "Scaling a gym requires more than just marketing—it requires sound unit economics. Injecting 100 new members into a flawed pricing model or a facility with capacity issues will break your business. We consult on high-ticket offer creation, lifetime value optimization, and operational readiness to ensure your gym is actually prepared to scale profitably.",
    impact: "Aligns your operational capacity with aggressive acquisition models.",
    outcome: "Sustainable, long-term facility growth that builds true enterprise value.",
    deliverables: [
      "Introductory Offer Engineering",
      "Pricing Model Audits",
      "Lifetime Value (LTV) Maximization",
      "Market Density Analysis",
      "Quarterly Growth Planning Workshops"
    ]
  },
  'retention-strategies': {
    title: "Retention Strategies",
    icon: LineChart,
    tagline: "Keep Your Members For Years",
    overview: "Backend infrastructure and community building playbooks to ensure members stay for years, not months.",
    deepDive: "Acquisition is expensive; retention is cheap. There is no point in putting 50 new members through the front door if 50 old members are leaving out the back. We help you systematize the onboarding process, member check-ins, and milestone recognition so your churn rate drops and absolute revenue compounds month over month.",
    impact: "Maximizes the lifetime revenue generated from every acquired lead.",
    outcome: "Stable MRR and a gym community that becomes your best marketing asset.",
    deliverables: [
      "New Member Journey Mapping",
      "Automated Check-in Workflows",
      "Win-Back Campaigns for Past Members",
      "Referral Program Engineering",
      "Churn Rate Analysis"
    ]
  },
  'retention': { // Alias
    title: "Retention Strategies",
    icon: LineChart,
    tagline: "Keep Your Members For Years",
    overview: "Backend infrastructure and community building playbooks to ensure members stay for years, not months.",
    deepDive: "Acquisition is expensive; retention is cheap. There is no point in putting 50 new members through the front door if 50 old members are leaving out the back. We help you systematize the onboarding process, member check-ins, and milestone recognition so your churn rate drops and absolute revenue compounds month over month.",
    impact: "Maximizes the lifetime revenue generated from every acquired lead.",
    outcome: "Stable MRR and a gym community that becomes your best marketing asset.",
    deliverables: [
      "New Member Journey Mapping",
      "Automated Check-in Workflows",
      "Win-Back Campaigns for Past Members",
      "Referral Program Engineering",
      "Churn Rate Analysis"
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  
  const service = id ? serviceDataDictionary[id] : null;

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="w-full relative bg-brand-gray min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden w-full bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <Link to="/services" className="inline-flex items-center text-gray-500 hover:text-brand-red font-bold uppercase tracking-widest text-sm transition-colors w-max">
            <ArrowLeft size={16} className="mr-2" /> Back to All Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="text-brand-red font-bold tracking-widest uppercase mb-4 block">Service Details</span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
              >
                {service.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed max-w-2xl"
              >
                {service.tagline}
              </motion.p>
            </div>
            
             <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 flex justify-start lg:justify-end"
            >
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-brand-border bg-white shadow-2xl flex items-center justify-center relative">
                 <div className="absolute inset-0 rounded-full bg-brand-red/5 animate-pulse" />
                 <Icon className="text-brand-red" size={64} strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detail Content Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Description */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-black mb-6">The Methodology</h3>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-6">
                {service.overview}
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                {service.deepDive}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white border border-brand-border p-8 rounded-2xl flex flex-col gap-2">
                 <span className="text-black font-black uppercase tracking-widest text-sm block mb-2">The Impact</span>
                 <p className="text-gray-600 font-medium">{service.impact}</p>
              </div>
              <div className="bg-white border border-brand-border p-8 rounded-2xl flex flex-col gap-2 border-b-4 border-b-brand-red">
                 <span className="text-black font-black uppercase tracking-widest text-sm block mb-2">The Outcome</span>
                 <p className="text-gray-600 font-medium">{service.outcome}</p>
              </div>
            </div>
          </div>

          {/* Deliverables & Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-brand-border rounded-[2rem] p-8 md:p-10 sticky top-32 shadow-xl">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-8">What's Included</h3>
              
              <ul className="flex flex-col gap-5 mb-10">
                {service.deliverables.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={20} />
                    <span className="text-gray-600 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="w-full h-px bg-brand-border mb-10" />
              
              <h4 className="text-lg font-black uppercase tracking-tight text-black mb-4">Ready to implement this?</h4>
              <p className="text-gray-600 font-medium mb-8 text-sm">
                Stop losing market share to competitors with inferior facilities. Let's build your acquisition machine.
              </p>

              <Link 
                to="/contact" 
                className="inline-flex h-16 w-full items-center justify-between px-6 rounded-xl bg-brand-red text-white font-bold text-lg transition-transform hover:shadow-[0_0_20px_rgba(220,53,53,0.3)] group"
              >
                Book Strategy Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
