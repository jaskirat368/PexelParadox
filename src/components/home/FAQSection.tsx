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
    answer: "We recommend a minimum starting ad spend of $1,000/month to generate statistically significant data and consistent lead flow."
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
    <section className="py-20 px-6 max-w-4xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Frequently <span className="text-brand-red">Asked.</span>
        </h2>
        <p className="text-gray-400">Everything you need to know about our growth systems.</p>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                isOpen ? 'bg-brand-gray border-brand-red/50' : 'bg-black border-brand-border hover:bg-white/5'
              }`}
            >
              <button
                className="w-full px-6 py-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isOpen ? 'bg-brand-red text-white' : 'bg-brand-gray border border-brand-border text-gray-400'
                }`}>
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
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
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed pt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
