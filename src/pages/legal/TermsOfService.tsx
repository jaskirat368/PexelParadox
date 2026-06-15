import { motion } from 'motion/react';
import SEO from '../../components/ui/SEO';
import { generateLegalPageSchema } from '../../utils/seoSchemas';

export default function TermsOfService() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto w-full min-h-[70vh]">
      <SEO 
        title="Terms of Service | Gym Growth Consulting Agreement"
        description="Read the website terms and general business conditions for Pexel Paradox, representing professional gym performance marketing in India."
        canonicalUrl="https://pexelparadox.vercel.app/legal/terms-of-service"
        schema={generateLegalPageSchema("Terms of Service", "Terms of Service", "Standard Terms of Service for our gym marketing agency and advisory.")}
      />
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6"
      >
        Terms of Service
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
        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing the website of Pexel Paradox or utilizing our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or retain our services.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. Description of Services</h2>
        <p className="mb-4">
          Pexel Paradox provides performance marketing, lead generation, and growth infrastructure consulting exclusively tailored for gym owners and fitness facilities.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. Professional Agreements</h2>
        <p className="mb-4">
          Any business relationship, project scope, timeline, and pricing formalized between Pexel Paradox and a client will be governed by a separate, specific Master Services Agreement (MSA) and Statement of Work (SOW). These Terms of Service act as a baseline for our website and general business interactions.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Intellectual Property</h2>
        <p className="mb-4">
          All content on this website, including text, graphics, logos, and proprietary strategies, is the property of Pexel Paradox and is protected by applicable intellectual property laws. You may not copy, reproduce, or distribute any materials without our prior written consent.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. Limitation of Liability</h2>
        <p className="mb-4">
          Pexel Paradox shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use of our website or interpreting the general marketing advice found in our content. Business growth naturally involves risk, and all final business decisions remain yours to make.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">6. Governing Law</h2>
        <p className="mb-4">
          These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms will be subject to the exclusive jurisdiction of the courts located in Chandigarh, India.
        </p>
      </motion.div>
    </section>
  );
}
