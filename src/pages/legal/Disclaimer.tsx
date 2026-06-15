import { motion } from 'motion/react';
import SEO from '../../components/ui/SEO';
import { generateLegalPageSchema } from '../../utils/seoSchemas';

export default function Disclaimer() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto w-full min-h-[70vh]">
      <SEO 
        title="Disclaimer | Results & Earnings Disclosure"
        description="Review the marketing outcomes, earnings, and result representation disclosures of Pexel Paradox regarding gym lead systems in India."
        canonicalUrl="https://pexelparadox.vercel.app/legal/disclaimer"
        schema={generateLegalPageSchema("Disclaimer", "Disclaimer", "Earnings and marketing outcomes representation statement.")}
      />
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6"
      >
        Disclaimer
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-500 font-medium mb-12"
      >
        Last Updated: {new Date().toLocaleDateString()}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose prose-lg max-w-none text-gray-700"
      >
        <p className="mb-4">
          The information contained on this website is for general informational and educational purposes specifically aimed at gym owners and fitness professionals.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">No Guarantee of Results</h2>
        <p className="mb-4">
          Results are not guaranteed. While Pexel Paradox utilizes proven marketing systems and data-driven methodologies to generate leads and drive growth, every business is unique. Marketing outcomes vary significantly by business, local market conditions, facility quality, sales team capability, and offer dynamics.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Past Performance Note</h2>
        <p className="mb-4">
          Any case studies, testimonials, or performance metrics displayed on our website represent exceptional results achieved by specific clients. Past performance does not guarantee future results for your facility. We do not make any warranties concerning the financial return on investment (ROI) your business will experience.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Business Decisions</h2>
        <p className="mb-4">
          Pexel Paradox is an independent marketing agency, not a financial or legal advisory firm. Any business, financial, or operational decisions made based on our marketing recommendations or website content are made strictly at your own risk. Pexel Paradox is not responsible or liable for any business decisions made pursuant to our strategies.
        </p>
      </motion.div>
    </section>
  );
}
