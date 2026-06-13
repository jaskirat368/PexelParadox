import { motion } from 'motion/react';

export default function RefundPolicy() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto w-full min-h-[70vh]">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6"
      >
        Refund Policy
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
          At Pexel Paradox, we deliver custom, high-caliber performance marketing and digital infrastructure services. Due to the hands-on, service-based nature of our agency, our billing and refund procedures are structured to reflect the dedicated labor hours, specialized expertise, and active management applied to your account.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Non-Refundable Services</h2>
        <p className="mb-4">
          Once work has commenced or a deliverable has been provided, payments are strictly non-refundable. This includes, but is not limited to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Completed campaign setups, ad creatives, and landing pages.</li>
          <li>Active monthly management retainers and consulting fees.</li>
          <li>Third-party platform costs (such as ad spend directly billed to your credit card by Meta or Google).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. Retainer Cancellations</h2>
        <p className="mb-4">
          For clients engaged in ongoing monthly retainers, you may cancel your service subject to the notice period established in your Master Services Agreement (typically 30 days written notice). If you cancel during an active billing cycle, you will be billed for the remainder of that cycle. We do not offer prorated refunds for partially used retainer months.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. Project Cancellations</h2>
        <p className="mb-4">
          If you decide to cancel a custom project before it is completed, you will be invoiced for the specific hours and resources already allocated up to the date of cancellation. Any initial deposits paid are non-refundable and serve to secure our team's time for your project.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Disputed Charges</h2>
        <p className="mb-4">
          We protect our completed work strictly. Initiating a chargeback or payment dispute for services that have been completely delivered will be treated as a breach of contract, and we will pursue the recovery of owed funds and related fees.
        </p>
      </motion.div>
    </section>
  );
}
