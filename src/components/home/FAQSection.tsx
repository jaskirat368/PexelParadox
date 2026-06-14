import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you guarantee results?",
    answer: "We guarantee the implementation of a predictable growth system. While ad platforms have variables, our historical data allows us to predict CPA and ROAS highly accurately for gyms running our playbooks."
  },
  {
    question: "How much ad spend do we need?",
    answer: "We recommend a starting ad spend that allows us to generate statistically significant data and consistent lead flow. This amount typically varies depending on your market size, location, and specific growth goals."
  },
  {
    question: "Do you work with gym franchises?",
    answer: "Our systems are explicitly designed for independent gym owners, boutique fitness studios, and local personal training facilities. We don't focus on global franchises."
  },
  {
    question: "How fast will we see leads?",
    answer: "Once our campaigns go live, gyms typically see the first high-intent leads within 24 to 48 hours."
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
