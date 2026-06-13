import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  { id: 'paid-ads', title: 'Performance Marketing', desc: 'High-ROAS Meta & Google ad campaigns designed exclusively to generate high-intent trials.' },
  { id: 'lead-nurture', title: 'Lead Nurturing Systems', desc: 'Automated SMS & Email follow-ups that convert cold traffic into booked appointments instantly.' },
  { id: 'content', title: 'Tactical Content', desc: 'Gritty, high-converting creative assets that position your gym as the premium choice in your local market.' },
  { id: 'retention', title: 'Retention Strategies', desc: 'Backend infrastructure and community building playbooks to ensure members stay for years, not months.' },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brand-border">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="text-brand-red font-bold tracking-widest uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter max-w-2xl leading-[0.9]">
            Growth <br />
            <span className="text-gray-600">Systems</span>
          </h2>
        </div>
        <p className="text-gray-600 text-lg md:text-xl font-medium max-w-sm">
          We don't offer a menu of generic services. We deploy specific growth engines designed for fitness facilities.
        </p>
      </div>

      <div className="flex flex-col border-t-2 border-brand-border">
        {servicesList.map((service, i) => (
          <Link
            key={i}
            to={`/services/${service.id}`}
            className="group block border-b-2 border-brand-border py-8 md:py-12 transition-all duration-300 hover:bg-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4 md:px-8">
              <div className="md:col-span-1 hidden md:block">
                <span className="text-gray-600 font-mono text-xl group-hover:text-black transition-colors duration-300">0{i + 1}</span>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black group-hover:text-brand-red transition-colors duration-300">{service.title}</h3>
              </div>
              <div className="md:col-span-4">
                <p className="text-gray-600 group-hover:text-black font-medium text-lg lg:text-xl max-w-md transition-colors duration-300">{service.desc}</p>
              </div>
              <div className="md:col-span-1 flex justify-end">
                <div className="w-16 h-16 rounded-full border-2 border-brand-border group-hover:border-brand-red flex items-center justify-center text-black group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <ArrowRight size={24} className="group-hover:-rotate-45 transition-transform duration-300 text-black group-hover:text-white" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
