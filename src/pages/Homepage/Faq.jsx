import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of floral arrangements do you specialize in?",
      answer:
        "At our floral studio, we specialize in creating exquisite flower torans and elegant pot decorations that transform ordinary spaces into enchanting environments. Using only the finest sustainable materials and fresh-quality artificial florals, our creations are designed to last while maintaining their vibrant beauty.",
    },
    {
      question:
        "Are your floral arrangements made with real or artificial flowers?",
      answer:
        "We use fresh-quality artificial florals that maintain their vibrant beauty over time. This allows our creations to last much longer than fresh flowers while still looking incredibly realistic and beautiful.",
    },
    {
      question: "How do I care for my floral toran or pot decoration?",
      answer:
        "Our floral arrangements require minimal maintenance. Simply dust them gently with a soft cloth or use a hairdryer on a cool setting to remove any accumulated dust. Avoid placing them in direct sunlight for extended periods to prevent color fading.",
    },
    {
      question: "Can I request custom designs for special occasions?",
      answer:
        "Absolutely! We love creating custom designs for weddings, festivals, corporate events, and other special occasions. Contact us with your vision, color preferences, and event details, and we'll create something truly special for you.",
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we offer delivery services within our service area. Delivery fees vary based on location and the size of your order. We take great care in packaging our floral arrangements to ensure they arrive in perfect condition.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const accordionVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <div className="min-h-screen pt-9 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-3xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Frequently Asked{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Questions
            </motion.span>
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-pink-500 via-pink-500 to-pink-300 rounded-full mx-auto mb-6"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 128, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <motion.button
                className="flex justify-between items-center w-full p-8 text-left focus:outline-none focus:ring-4 focus:ring-pink-100 rounded-2xl"
                onClick={() => toggleAccordion(index)}
                whileTap={{ scale: 0.995 }}
              >
                <span className="text-lg text-gray-800 pr-8 leading-relaxed">
                  {faq.question}
                </span>
                <motion.span
                  variants={iconVariants}
                  animate={activeIndex === index ? "open" : "closed"}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0 ml-4"
                >
                  <svg
                    className="w-7 h-7 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={accordionVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <p className="text-lg text-gray-600 leading-relaxed p-6 rounded-xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
