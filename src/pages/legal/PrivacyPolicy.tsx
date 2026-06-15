import { motion } from 'motion/react';
import SEO from '../../components/ui/SEO';
import { generateLegalPageSchema } from '../../utils/seoSchemas';

export default function PrivacyPolicy() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto w-full min-h-[70vh]">
      <SEO 
        title="Privacy Policy | Gym Performance Marketing Solutions"
        description="Learn how Pexel Paradox gathers, secures, and handles information for our clients and gym owners in compliance with Indian regulations."
        canonicalUrl="https://pexelparadox.vercel.app/legal/privacy-policy"
        schema={generateLegalPageSchema("Privacy Policy", "Privacy Policy", "Client and user privacy protocols and information safeguards in India")}
      />
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6"
      >
        Privacy Policy
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
        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4">
          At Pexel Paradox, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our performance marketing services.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you voluntarily provide to us when you fill out contact forms, book strategy calls, or subscribe to our communications. This may include your name, email address, phone number, gym name, and business revenue details. We also collect non-identifiable usage data through website analytics.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">
          We use your information exclusively to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Assess if your facility is a fit for our growth systems.</li>
          <li>Communicate with you regarding our services, proposals, and strategy calls.</li>
          <li>Improve our website performance and marketing efforts.</li>
          <li>Fulfill legal and contractual obligations.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Data Sharing and Protection</h2>
        <p className="mb-4">
          Pexel Paradox does not sell, rent, or lease your personal data to third parties. Your information is securely stored and only accessed by authorized personnel who need it to operate our agency. We may use third-party CRM and software providers stringently vetted for data security.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to request access to, correction of, or deletion of your personal data at any time. If you wish to opt-out of our marketing communications, simply utilize the unsubscribe link in our emails or contact us directly.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">6. Contact Us</h2>
        <p className="mb-4">
          If you have questions regarding this Privacy Policy, please contact us at <a href="mailto:info@pexelparadox.com" className="text-brand-red hover:underline">info@pexelparadox.com</a>.
        </p>
      </motion.div>
    </section>
  );
}
