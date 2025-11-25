import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ws1, ws2, ws3 } from "../../assets";

const AboutUs = () => {
  const navigate = useNavigate();

  const scrollToGallery = () => {
    const section = document.getElementById("gallery");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  const tapEffect = {
    scale: 0.95,
  };

  return (
    <motion.section
      id="about"
      className="bg-white text-black py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-8 text-center lg:text-left"
          variants={containerVariants}
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <h2 className="text-4xl md:text-3xl font-bold text-gray-900">
              About <span className="text-pink-500">Us</span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 rounded-full mx-auto lg:mx-0"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            ></motion.div>

            {/* Tag Line */}
            <motion.p
              className="text-pink-400 text-lg font-medium italic mt-2"
              variants={itemVariants}
            >
              "Crafting Floral Elegance for Every Celebration"
            </motion.p>
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.p
              className="text-gray-700 text-lg leading-relaxed"
              variants={itemVariants}
            >
              At our floral studio, we specialize in creating exquisite flower
              torans and elegant pot decorations that transform ordinary spaces
              into enchanting environments.
            </motion.p>

            <motion.p
              className="text-gray-700 text-lg leading-relaxed"
              variants={itemVariants}
            >
              Using only the finest sustainable materials and fresh-quality
              artificial florals, our creations are designed to last while
              maintaining their vibrant beauty.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={itemVariants}
            >
              {[
                "Custom Designs",
                "Eco-Friendly",
                "Long Lasting",
                "Festival Ready",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            variants={itemVariants}
          >
            <motion.button
              onClick={scrollToGallery}
              className="bg-pink-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 hover:shadow-xl font-semibold"
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              View Gallery
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-pink-300 hover:bg-pink-50 transition-all duration-300 font-semibold"
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div className="relative" variants={containerVariants}>
          <motion.div
            className="relative group mb-8"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-pink-50 to-white rounded-3xl -z-10"></div>
            <motion.img
              src={ws2}
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
              alt="Elegant flower toran decoration"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-pink-600 font-semibold text-sm">
                Main Entrance Toran
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
          >
            <motion.div
              className="relative group"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={ws1}
                className="w-full h-48 object-cover rounded-xl shadow-lg"
                alt="Traditional floral arrangement"
              />
              <motion.div
                className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                Festival Special
              </motion.div>
            </motion.div>

            <motion.div
              className="relative group"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={ws3}
                className="w-full h-48 object-cover rounded-xl shadow-lg"
                alt="Modern pot decoration"
              />
              <motion.div
                className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                viewport={{ once: true }}
              >
                Interior Decor
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -right-6 bg-white shadow-2xl rounded-2xl p-6 border border-gray-100"
            variants={statsVariants}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
          >
            <div className="text-center">
              <motion.div
                className="text-2xl font-bold text-pink-600"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 1.2,
                }}
                viewport={{ once: true }}
              >
                500+
              </motion.div>
              <div className="text-gray-600 text-sm">Decorations Delivered</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
