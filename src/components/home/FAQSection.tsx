import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How can I get more gym members?",
    answer: "Getting more gym members requires a predictable client acquisition system. We use high-intent Facebook & Instagram Ads, combined with Google Ads for gyms, to drive qualified leads. Then, we implement follow-up systems to convert those leads into paying members."
  },
  {
    question: "Do Facebook Ads work for gyms?",
    answer: "Yes, Facebook Ads are one of the most effective tools for gym lead generation. By targeting local fitness enthusiasts and creating compelling offers, performance marketing can drastically increase your gym membership growth within days."
  },
  {
    question: "What is gym lead generation?",
    answer: "Gym lead generation is the process of attracting potential members in your local area and capturing their contact information. As a specialized performance marketing agency, we filter these leads to ensure you only speak with high-value prospects."
  },
  {
    question: "How long does it take to see results?",
    answer: "Once our gym marketing campaigns go live, you typically see the first high-intent leads within 24 to 48 hours. Our revenue growth systems are designed for immediate traction and scalable long-term growth."
  },
  {
    question: "Can you help independent gym owners?",
    answer: "Our systems are explicitly designed for independent gym owners, boutique fitness studios, and localized personal training facilities. We give you the marketing firepower to compete with franchise brands."
  },
  {
    question: "Do you provide content creation?",
    answer: "Yes, we handle content creation specifically optimized for gym advertising. From video ads to engaging social media marketing assets, we create creative materials designed to convert local prospects."
  },
  {
    question: "Do you work with gyms across India?",
    answer: "Absolutely. We are a specialized gym marketing agency serving fitness businesses across India, including major cities like Delhi, Mumbai, Bangalore, Pune, Chandigarh, Hyderabad, and more."
  },
  {
    question: "What makes Pexel Paradox different?",
    answer: "We don't just run ads; we fill gyms. While generic agencies guess, we use data-backed performance marketing systems to deliver guaranteed predictability and measurable membership revenue."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-brand-border">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <span className="text-brand-red font-bold tracking-widest uppercase mb-4 block">Information</span>
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            FAQ
          </h2>
        </div>

        <div className="lg:col-span-3 flex flex-col border-t-2 border-brand-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className={`border-b-2 transition-colors duration-300 ${
                  isOpen ? 'border-brand-red' : 'border-brand-border'
                }`}
              >
                <button
                  className="w-full py-8 text-left flex justify-between items-center group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`text-2xl md:text-3xl font-black uppercase tracking-tight transition-colors ${isOpen ? 'text-brand-red' : 'text-black group-hover:text-gray-600'}`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 ml-6 text-2xl transition-colors ${isOpen ? 'text-brand-red' : 'text-gray-400 group-hover:text-black'}`}>
                    {isOpen ? <Minus size={32} /> : <Plus size={32} />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pb-8 text-xl text-gray-600 font-medium leading-relaxed max-w-3xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
