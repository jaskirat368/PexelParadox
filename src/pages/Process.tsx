import { motion } from 'motion/react';
import { PhoneCall, Search, Target, Settings, Rocket, Users, Activity, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: PhoneCall,
    title: "Strategy Call",
    purpose: "Evaluate alignment between your facility's goals and our systems.",
    deliverables: ["Initial Capacity Assessment", "Market Density Review", "Goal Alignment Check"],
    outcome: "Clear decision on whether our growth system fits your current operational reality.",
    why: "We don't take on clients we can't scale. This filter ensures mutual profitability."
  },
  {
    icon: Search,
    title: "Gym Growth Audit",
    purpose: "Analyze your current marketing infrastructure, pricing, and historical conversion metrics.",
    deliverables: ["Offer Review", "Competitor Analysis", "Historical Funnel Audit"],
    outcome: "Identify the leaks in your current acquisition and retention pipelines.",
    why: "Prescription without diagnosis is malpractice. We build on facts, not assumptions."
  },
  {
    icon: Target,
    title: "Offer Positioning",
    purpose: "Engineer a highly compelling, low-friction introductory offer tailored to your local demographic.",
    deliverables: ["Front-End Offer Creation", "Unique Value Proposition Refinement", "Ad Copy Frameworks"],
    outcome: "An irresistible local offer that drives immediate action without commoditizing your brand.",
    why: "Your offer dictates your lead cost. A weak offer destroys ad budgets."
  },
  {
    icon: Settings,
    title: "Marketing System Setup",
    purpose: "Deploy the backend infrastructure required to capture, track, and nurture traffic.",
    deliverables: ["Conversion Funnels", "CRM Integration", "Pixel & API Tracking Setup", "Automated SMS/Email Sequences"],
    outcome: "A fully built, highly optimized capture and conversion machine ready for traffic.",
    why: "Without tracking and automations, you bleed leads. We close the gaps before spending a dime."
  },
  {
    icon: Rocket,
    title: "Campaign Launch",
    purpose: "Release tactical, scroll-stopping creative assets across Meta and search platforms.",
    deliverables: ["A/B Testing Framework", "Audience Segmentation", "Creative Asset Deployment"],
    outcome: "Immediate injection of targeted local traffic into your newly built funnel.",
    why: "Execution is everything. We launch with precision to exit the learning phase quickly."
  },
  {
    icon: Users,
    title: "Lead Management",
    purpose: "Bridge the gap between a digital opt-in and a physical front-door walk-in.",
    deliverables: ["Speed-to-Lead Automations", "Front Desk Scripting Guidance", "Pipeline Tracking"],
    outcome: "Leads turn into booked appointments naturally and efficiently.",
    why: "A lead is useless if they don't show up. We optimize the middle of the funnel to maximize show rates."
  },
  {
    icon: Activity,
    title: "Optimization",
    purpose: "Aggressively manage campaign budgets to lower Cost Per Acquisition (CPA).",
    deliverables: ["Daily Ad Optimization", "Split Testing Review", "Funnel Conversion Rate Optimization (CRO)"],
    outcome: "Steadily decreasing lead costs and higher closing percentages.",
    why: "What works on day 1 rarely works on day 30. Continuous iteration maintains profitability."
  },
  {
    icon: TrendingUp,
    title: "Scaling",
    purpose: "Increase budget and market penetration once predictability is established.",
    deliverables: ["Budget Scaling Strategies", "Lifetime Value (LTV) Maximization", "Quarterly Expansion Plans"],
    outcome: "Pushing your facility to maximum capacity with predictable, compounding MRR.",
    why: "Once the machine works, we feed it. We scale your business predictably."
  }
];

export default function Process() {
  return (
    <div className="w-full relative bg-brand-gray min-h-screen pb-20">
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden w-full bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
          <span className="text-brand-red font-bold tracking-widest uppercase block">The Blueprint</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]"
          >
            How We <span className="text-brand-red">Work.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed max-w-3xl mt-4"
          >
            Predictability isn't an accident. It is the result of applying a disciplined, step-by-step strategy to gym acquisition.
          </motion.p>
        </div>
      </section>

      {/* Grid of steps */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 overflow-hidden">
        <div className="flex flex-col gap-12 relative before:absolute before:inset-0 before:ml-[39px] md:before:ml-[55px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-border before:via-brand-border before:to-transparent">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-brand-gray bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 group-hover:border-brand-red/20 transition-colors">
                <step.icon className="text-brand-red" size={28} />
              </div>
              
              {/* Content Box */}
              <div className="w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] bg-white border border-brand-border p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-brand-red/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-black text-gray-200 group-hover:text-brand-red/20 transition-colors">0{index + 1}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-black">{step.title}</h3>
                </div>
                
                <div className="flex flex-col gap-5">
                  <div>
                    <span className="text-brand-red font-bold uppercase tracking-widest text-[10px] sm:text-xs block mb-1">Purpose</span>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">{step.purpose}</p>
                  </div>
                  
                  <div>
                    <span className="text-brand-red font-bold uppercase tracking-widest text-[10px] sm:text-xs block mb-2">Deliverables</span>
                    <ul className="flex flex-col gap-1.5">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="text-gray-400 mt-[2px] shrink-0" size={14} />
                          <span className="text-gray-600 font-medium text-xs sm:text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-brand-border/50">
                    <span className="text-black font-black uppercase tracking-widest text-[10px] sm:text-xs block mb-1">Expected Outcome</span>
                    <p className="text-gray-800 font-semibold text-sm sm:text-base">{step.outcome}</p>
                  </div>

                  <div className="bg-brand-gray/50 rounded-lg p-4 mt-2">
                    <span className="text-black font-black uppercase tracking-widest text-[10px] sm:text-xs block mb-1">Why It Matters</span>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm italic">{step.why}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-12 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white text-black p-12 md:p-20 rounded-[3rem] text-center flex flex-col items-center shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-brand-border relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 relative z-10">Stop the Chaos.<br/>Install the System.</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl relative z-10 font-medium">
            Ready to transition from random acts of marketing to a predictable growth machine?
          </p>
          <Link 
            to="/contact" 
            className="inline-flex h-16 px-10 items-center justify-center rounded-full bg-brand-red text-white font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(220,53,53,0.4)] relative z-10"
          >
            Start The Process
            <ArrowRight className="ml-3" size={24} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
