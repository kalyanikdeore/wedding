import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    if (!firstName || !lastName || !email || !message) {
      alert("Please fill all the fields.");
      return;
    }

    const whatsappNumber = "917030050044";
    const whatsappMessage = `Hello Wedding Store,%0A%0AName: ${firstName} ${lastName}%0AEmail: ${email}%0AMessage: ${message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const floatingIconVariants = {
    animate: {
      y: [0, -8, 0],
      rotate: [0, -2, 2, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    initial: {
      scale: 1,
      boxShadow: "0 4px 12px 0 rgba(236, 72, 153, 0.3)",
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 6px 20px 0 rgba(236, 72, 153, 0.4)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 2px 8px 0 rgba(236, 72, 153, 0.3)",
    },
  };

  const inputVariants = {
    initial: { scale: 1 },
    focus: {
      scale: 1.01,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  return (
    <motion.div
      id="contact"
      className="min-h-screen bg-white flex justify-center items-center py-16 px-4 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute top-8 left-8 w-12 h-12 bg-pink-100 rounded-full blur-lg opacity-60"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 bg-rose-100 rounded-full blur-lg opacity-50"></div>
      <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-purple-100 rounded-full blur-md opacity-40"></div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Info - Enhanced with clean design */}
        <motion.div
          className="text-black space-y-6 text-center md:text-left"
          variants={itemVariants}
        >
          <motion.div
            className="flex justify-center md:justify-start"
            variants={floatingIconVariants}
            animate="animate"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-2xl">💌</span>
            </div>
          </motion.div>

          <motion.h3
            className="text-2xl font-bold leading-snug text-gray-800"
            variants={itemVariants}
          >
            For any inquiries or custom <br /> orders{" "}
            <span className="text-pink-500">✨</span>
          </motion.h3>

          <motion.div
            className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
            variants={itemVariants}
            whileHover={{
              scale: 1.01,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <div className="space-y-2">
              <motion.p
                className="text-lg  text-gray-600 flex items-center gap-2"
                variants={itemVariants}
              >
                <span className="text-pink-500 text-lg">📧</span>
                Email us anytime:
              </motion.p>
              <motion.a
                href="mailto:weddingstorensk@gmail.com"
                className="text-base font-semibold text-pink-600 hover:text-rose-600 transition-colors duration-300 break-all block bg-white p-2 rounded-lg border border-gray-200"
                whileHover={{
                  scale: 1.02,
                  x: 3,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                weddingstorensk@gmail.com
              </motion.a>
            </div>

            <div className="space-y-2">
              <motion.p
                className="text-lg  text-gray-600 flex items-center gap-2"
                variants={itemVariants}
              >
                <span className="text-pink-500 text-lg">📞</span>
                Contact No.
              </motion.p>
              <motion.a
                href="tel:+917030050044"
                className="text-base font-semibold text-pink-600 hover:text-rose-600 transition-colors duration-300 block bg-white p-2 rounded-lg border border-gray-200"
                whileHover={{
                  scale: 1.02,
                  x: 3,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                +91 70300 50044
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Form - Clean and attractive */}
        <motion.form
          className="space-y-6 text-black font-medium bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          onSubmit={handleSubmit}
          variants={itemVariants}
          whileHover={{
            boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-3">
            <motion.h2
              className="text-2xl font-bold text-gray-800"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h2>
            <motion.div
              className="w-20 h-1.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-1"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            ></motion.div>
            <motion.p
              className="text-lg text-gray-600 font-normal"
              variants={itemVariants}
            >
              We'd love to hear from you! Send us a message and we'll respond as
              soon as possible.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                onFocus={() => handleFocus("firstName")}
                onBlur={handleBlur}
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-pink-500 focus:bg-white transition-all duration-300 text-sm"
                required
                variants={inputVariants}
                initial="initial"
                whileFocus="focus"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                onFocus={() => handleFocus("lastName")}
                onBlur={handleBlur}
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-pink-500 focus:bg-white transition-all duration-300 text-sm"
                required
                variants={inputVariants}
                initial="initial"
                whileFocus="focus"
              />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-pink-500 focus:bg-white transition-all duration-300 text-sm"
              required
              variants={inputVariants}
              initial="initial"
              whileFocus="focus"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.textarea
              rows="4"
              name="message"
              placeholder="Your Message*"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-pink-500 focus:bg-white transition-all duration-300 resize-none text-sm"
              required
              variants={inputVariants}
              initial="initial"
              whileFocus="focus"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-6 py-3 rounded-lg font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group text-sm"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <span>Send Message</span>
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="group-hover:animate-none text-base"
            >
              ✨
            </motion.span>
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}
