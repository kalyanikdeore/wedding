import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ws1, ws2, ws3 } from "../../assets";
import { FiShoppingBag, FiPhoneCall, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const images = [ws1, ws2, ws3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1 },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Slider with Framer Motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 5, ease: "easeOut" },
          }}
        />
      </AnimatePresence>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>

      {/* Animated Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-8"
        >
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-white/90 tracking-wider">
            Premium Wedding Decorators
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
            Create Unforgettable Moments
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Transforming spaces into magical experiences with handcrafted floral
          elegance and premium decorations
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => scrollToSection("products")}
            className="group bg-white text-gray-900 font-semibold px-8 py-4 rounded-2xl shadow-2xl
              flex items-center gap-3 hover:shadow-3xl transition-all duration-300
              hover:scale-105 min-w-[200px] justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiShoppingBag className="text-xl group-hover:scale-110 transition-transform" />
            Explore Collection
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="group bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold
              px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3
              hover:shadow-3xl transition-all duration-300 hover:scale-105
              border border-pink-400/50 min-w-[200px] justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiPhoneCall className="text-xl group-hover:scale-110 transition-transform" />
            Book Consultation
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-2"></div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
