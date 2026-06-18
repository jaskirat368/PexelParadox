import { motion } from 'motion/react';
import { Quote, CheckCircle2 } from 'lucide-react';

const caseStudies = [
  {
    quote: "Before working with Pexel Paradox, we relied mostly on referrals and inconsistent social media posting. Within 60 days of launching our lead generation system, we generated 87 qualified inquiries and started booking consultations almost every day. The process became predictable instead of guesswork.",
    clientName: "Independent Gym Owner",
    role: "Fitness Facility Owner",
    results: [
      "87 Qualified Leads",
      "60 Days",
      "34% Lower CPL"
    ],
    image: "https://i.ibb.co/Q7NsmJHV/IMG-20260618-135426.jpg"
  },
  {
    quote: "Our membership growth was unpredictable before implementing Pexel Paradox's acquisition funnel. Their strategy helped us generate over 120 qualified leads in 90 days while significantly improving our return on ad spend. We finally had a repeatable system for growth.",
    clientName: "Fitness Studio Founder",
    role: "Studio Founder",
    results: [
      "120+ Qualified Leads",
      "4.5X ROAS",
      "90 Days"
    ],
    image: "https://i.ibb.co/PZszncmn/IMG-20260618-135442.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brand-border">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
        <div>
          <span className="text-brand-red font-bold tracking-widest uppercase mb-4 block">Real Outcomes</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            We let our <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">results speak.</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col divide-y border-y border-brand-border">
        {caseStudies.map((study, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center"
          >
            <div className="lg:col-span-1 hidden lg:block self-start mt-2">
              <Quote className="text-brand-red" size={48} strokeWidth={1} />
            </div>
            <div className="lg:col-span-7 flex flex-col items-start gap-8">
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight text-black">
                "{study.quote}"
              </p>
              
              {/* Results metrics */}
              <div className="flex flex-wrap items-center gap-4">
                {study.results.map((result, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-gray-50 border border-brand-border rounded-full py-2 px-4 shadow-sm">
                    <CheckCircle2 size={16} className="text-brand-red" />
                    <span className="text-sm md:text-base font-bold text-gray-800">{result}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 flex items-center lg:justify-end gap-6 mt-6 lg:mt-0 lg:self-stretch">
              <div className="text-left lg:text-right flex-1 lg:flex-none flex flex-col justify-center">
                <h4 className="font-black text-xl text-black uppercase tracking-tight">{study.clientName}</h4>
                <p className="text-sm text-brand-red uppercase tracking-widest font-bold mt-1">{study.role}</p>
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-brand-border shrink-0 overflow-hidden shadow-sm">
                <img 
                  src={study.image} 
                  alt={study.clientName} 
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
