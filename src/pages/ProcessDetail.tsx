import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { PhoneCall, Search, Target, Settings, Rocket, Users, Activity, TrendingUp, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const processDataDictionary: Record<string, any> = {
  'strategy-call': {
    title: "Strategy Call",
    icon: PhoneCall,
    tagline: "Evaluating Alignment and Goals",
    purpose: "Evaluate alignment between your facility's goals and our systems.",
    deepDive: "Before we deploy resources, we must ensure mutual fit. We conduct an initial capacity assessment and review your local market density. We don't take on clients we can't scale. This filter ensures mutual profitability and sets the foundation for a transparent partnership.",
    why: "We don't take on clients we can't scale. This filter ensures mutual profitability.",
    outcome: "Clear decision on whether our growth system fits your current operational reality.",
    deliverables: [
      "Initial Capacity Assessment",
      "Market Density Review",
      "Goal Alignment Check",
      "Current Marketing Audit Overview",
      "Growth Potential Calculation"
    ]
  },
  'gym-growth-audit': {
    title: "Gym Growth Audit",
    icon: Search,
    tagline: "Analyzing Infrastructure and Metrics",
    purpose: "Analyze your current marketing infrastructure, pricing, and historical conversion metrics.",
    deepDive: "Prescription without diagnosis is malpractice. We dive deep into your historical data, analyzing past ad spend, offer performance, and competitor positioning. We build on facts, not assumptions, identifying the exact leaks in your current acquisition and retention pipelines.",
    why: "Prescription without diagnosis is malpractice. We build on facts, not assumptions.",
    outcome: "Identify the leaks in your current acquisition and retention pipelines.",
    deliverables: [
      "Historical Funnel Audit",
      "Competitor Analysis",
      "Pricing Model Review",
      "Current Ad Account Teardown",
      "Local Market Opportunity Assessment"
    ]
  },
  'offer-positioning': {
    title: "Offer Positioning",
    icon: Target,
    tagline: "Engineering Irresistible Promos",
    purpose: "Engineer a highly compelling, low-friction introductory offer tailored to your local demographic.",
    deepDive: "Your offer dictates your lead cost. A weak offer destroys ad budgets. We craft high-converting, low-friction front-end offers that appeal directly to your target audience within a 5-10 mile radius. Our goal is to drive immediate action without commoditizing your brand.",
    why: "Your offer dictates your lead cost. A weak offer destroys ad budgets.",
    outcome: "An irresistible local offer that drives immediate action without commoditizing your brand.",
    deliverables: [
      "Front-End Offer Creation",
      "Unique Value Proposition Refinement",
      "Ad Copy Frameworks",
      "Offer Economics Review",
      "Lead Magnet Development"
    ]
  },
  'marketing-system-setup': {
    title: "Marketing System Setup",
    icon: Settings,
    tagline: "Deploying Backend Infrastructure",
    purpose: "Deploy the backend infrastructure required to capture, track, and nurture traffic.",
    deepDive: "Without tracking and automations, you bleed leads. We close the gaps before spending a dime. We set up robust conversion funnels, integrate CRMs, configure pixel tracking, and map out automated SMS and email sequences. Your system will be fully fortified and ready to capture traffic efficiently.",
    why: "Without tracking and automations, you bleed leads. We close the gaps before spending a dime.",
    outcome: "A fully built, highly optimized capture and conversion machine ready for traffic.",
    deliverables: [
      "Conversion Funnels Setup",
      "CRM Integration",
      "Pixel & API Tracking Setup",
      "Automated SMS/Email Sequences",
      "Domain and DNS Configuration"
    ]
  },
  'campaign-launch': {
    title: "Campaign Launch",
    icon: Rocket,
    tagline: "Releasing Tactical Assets",
    purpose: "Release tactical, scroll-stopping creative assets across Meta and search platforms.",
    deepDive: "Execution is everything. We launch with precision to exit the learning phase quickly. We deploy our highest-performing creative templates and strictly managed A/B testing frameworks, segmenting audiences carefully to ensure your ads are shown to the right local demographics.",
    why: "Execution is everything. We launch with precision to exit the learning phase quickly.",
    outcome: "Immediate injection of targeted local traffic into your newly built funnel.",
    deliverables: [
      "A/B Testing Framework",
      "Audience Segmentation",
      "Creative Asset Deployment",
      "Initial Budget Allocation",
      "Campaign Health Monitoring"
    ]
  },
  'lead-management': {
    title: "Lead Management",
    icon: Users,
    tagline: "Bridging Digital and Physical",
    purpose: "Bridge the gap between a digital opt-in and a physical front-door walk-in.",
    deepDive: "A lead is useless if they don't show up. We optimize the middle of the funnel to maximize show rates. Through speed-to-lead automations and robust front desk scripting, we ensure your team is equipped to turn digital interest into real booked appointments and eventual memberships.",
    why: "A lead is useless if they don't show up. We optimize the middle of the funnel to maximize show rates.",
    outcome: "Leads turn into booked appointments naturally and efficiently.",
    deliverables: [
      "Speed-to-Lead Automations",
      "Front Desk Scripting Guidance",
      "Pipeline Tracking Dashboards",
      "No-Show Reactivation Protocols",
      "Daily Lead Huddle Templates"
    ]
  },
  'optimization': {
    title: "Optimization",
    icon: Activity,
    tagline: "Aggressive Budget Management",
    purpose: "Aggressively manage campaign budgets to lower Cost Per Acquisition (CPA).",
    deepDive: "What works on day 1 rarely works on day 30. Continuous iteration maintains profitability. We perform daily ad optimizations, ruthlessly cut underperforming creatives, and conduct ongoing split tests to steadily decrease lead costs and bump up your closing percentages across the board.",
    why: "What works on day 1 rarely works on day 30. Continuous iteration maintains profitability.",
    outcome: "Steadily decreasing lead costs and higher closing percentages.",
    deliverables: [
      "Daily Ad Optimization",
      "Split Testing Review",
      "Funnel Conversion Rate Optimization (CRO)",
      "Ad Asset Refresh Cycles",
      "Weekly Performance Analysis"
    ]
  },
  'scaling': {
    title: "Scaling",
    icon: TrendingUp,
    tagline: "Predictable Expansion",
    purpose: "Increase budget and market penetration once predictability is established.",
    deepDive: "Once the machine works, we feed it. We scale your business predictably. After establishing a highly profitable baseline and consistent ROI, we implement budget scaling strategies and formulate quarterly expansion plans to push your facility to maximum capacity while increasing lifetime value.",
    why: "Once the machine works, we feed it. We scale your business predictably.",
    outcome: "Pushing your facility to maximum capacity with predictable, compounding MRR.",
    deliverables: [
      "Budget Scaling Strategies",
      "Lifetime Value (LTV) Maximization",
      "Quarterly Expansion Plans",
      "Advanced Audience Expansion",
      "Capacity Planning Consulting"
    ]
  }
};

export default function ProcessDetail() {
  const { id } = useParams();
  
  const process = id ? processDataDictionary[id] : null;

  if (!process) {
    return <Navigate to="/404" replace />;
  }

  const Icon = process.icon;

  return (
    <div className="w-full relative bg-brand-gray min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden w-full bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <Link to="/process" className="inline-flex items-center text-gray-500 hover:text-brand-red font-bold uppercase tracking-widest text-sm transition-colors w-max">
            <ArrowLeft size={16} className="mr-2" /> Back to Full Process
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="text-brand-red font-bold tracking-widest uppercase mb-4 block">Execution Stage</span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
              >
                {process.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed max-w-2xl"
              >
                {process.tagline}
              </motion.p>
            </div>
            
             <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 flex justify-start lg:justify-end"
            >
              <div className="w-32 h-32 md:w-48 h-48 rounded-full border border-brand-border bg-white shadow-2xl flex items-center justify-center relative">
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
              <h3 className="text-3xl font-black uppercase tracking-tighter text-black mb-6">The Process</h3>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-6">
                {process.purpose}
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                {process.deepDive}
              </p>
              
              <div className="bg-brand-gray/50 rounded-2xl p-6 md:p-8 border-l-4 border-l-brand-red">
                 <h4 className="text-sm font-black uppercase tracking-widest text-black mb-2">Why It Matters</h4>
                 <p className="text-gray-600 font-medium italic">{process.why}</p>
              </div>
            </div>

            <div className="bg-white border border-brand-border p-8 rounded-2xl flex flex-col gap-2 border-b-4 border-b-brand-red">
                 <span className="text-black font-black uppercase tracking-widest text-sm block mb-2">Expected Outcome</span>
                 <p className="text-gray-600 font-medium">{process.outcome}</p>
            </div>
          </div>

          {/* Deliverables & Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-brand-border rounded-[2rem] p-8 md:p-10 sticky top-32 shadow-xl">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-8">What's Included</h3>
              
              <ul className="flex flex-col gap-5 mb-10">
                {process.deliverables.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={20} />
                    <span className="text-gray-600 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="w-full h-px bg-brand-border mb-10" />
              
              <h4 className="text-lg font-black uppercase tracking-tight text-black mb-4">Ready to start?</h4>
              <p className="text-gray-600 font-medium mb-8 text-sm">
                Take the first step towards predictable growth and building your true enterprise value.
              </p>

              <Link 
                to="/contact#contact-form" 
                className="inline-flex h-16 w-full items-center justify-between px-6 rounded-xl bg-brand-red text-white font-bold text-lg transition-transform hover:shadow-[0_0_20px_rgba(220,53,53,0.3)] group"
              >
                Request Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
