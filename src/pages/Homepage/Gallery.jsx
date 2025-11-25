// Updated Products component with Flower & Toran categories and motion animations

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  flower1,
  flower2,
  flower4,
  flower5,
  flower6,
  flower7,
  flower8,
  flower9,
  flower10,
  flower11,
  flower12,
  flower13,
  flower14,
  flower15,
  flower16,
  flower17,
  flower18,
  flower19,
  flower20,
  flower21,
  flower22,
  flower23,
  flower24,
  flower25,
  flower26,
  flower27,
  flower28,
  flower29,
  flower30,
  flower31,
  flower32,
  toran,
  toran1,
  toran2,
  toran3,
  toran4,
  toran5,
  toran6,
  toran7,
  toran8,
  toran9,
  toran10,
  toran11,
  toran12,
  toran13,
  toran14,
  toran15,
  toran16,
  toran17,
  toran18,
  toran19,
  toran20,
  ws1,
  ws2,
  ws3,
  lamp1,
  lamp2,
  lamp3,
  lamp4,
  lamp5,
  lamp6,
  lamp7,
  lamp8,
  lamp9,
  lamp10,
  lamp11,
  lamp12,
  ma1,
  ma2,
  ma4,
  ma5,
  ma6,
  ma7,
  ma8,
  ma9,
  ma10,
  ma11,
  ma12,
  ma13,
  ma14,
  ma15,
  ma16,
  ma17,
  ma18,
  ma19,
  ma20,
  ma21,
  ma22,
  ma23,
  ma24,
  ma25,
} from "../../assets";

// Updated Categories
const categories = [
  "All",
  "Artificial Flower",
  "Handicrafts",
  "Lamp",
  "Metal Articles",
];

// Updated Product List with images
const allProducts = [
  // Flower Products
  { id: 1, image: flower1, category: "Artificial Flower" },
  { id: 2, image: flower2, category: "Artificial Flower" },
  { id: 3, image: flower4, category: "Artificial Flower" },
  { id: 4, image: flower5, category: "Artificial Flower" },
  { id: 5, image: flower6, category: "Artificial Flower" },
  { id: 6, image: flower7, category: "Artificial Flower" },
  { id: 7, image: flower8, category: "Artificial Flower" },
  { id: 8, image: flower9, category: "Artificial Flower" },
  { id: 9, image: flower10, category: "Artificial Flower" },
  { id: 10, image: flower11, category: "Artificial Flower" },
  { id: 11, image: flower12, category: "Artificial Flower" },
  { id: 12, image: flower13, category: "Artificial Flower" },
  { id: 13, image: flower14, category: "Artificial Flower" },
  { id: 14, image: flower15, category: "Artificial Flower" },
  { id: 15, image: flower16, category: "Artificial Flower" },
  { id: 16, image: flower17, category: "Artificial Flower" },
  { id: 17, image: flower18, category: "Artificial Flower" },
  { id: 18, image: flower19, category: "Artificial Flower" },
  { id: 19, image: flower20, category: "Artificial Flower" },
  { id: 20, image: flower21, category: "Artificial Flower" },
  { id: 21, image: flower22, category: "Artificial Flower" },
  { id: 22, image: flower23, category: "Artificial Flower" },
  { id: 23, image: flower24, category: "Artificial Flower" },
  { id: 24, image: flower25, category: "Artificial Flower" },
  { id: 25, image: flower26, category: "Artificial Flower" },
  { id: 26, image: flower27, category: "Artificial Flower" },
  { id: 27, image: flower28, category: "Artificial Flower" },
  { id: 28, image: flower29, category: "Artificial Flower" },
  { id: 29, image: flower30, category: "Artificial Flower" },
  { id: 30, image: flower31, category: "Artificial Flower" },
  { id: 31, image: flower32, category: "Artificial Flower" },

  // Toran Products
  { id: 32, image: toran, category: "Handicrafts" },
  { id: 33, image: toran1, category: "Handicrafts" },
  { id: 34, image: toran2, category: "Handicrafts" },
  { id: 35, image: toran3, category: "Handicrafts" },
  { id: 36, image: toran4, category: "Handicrafts" },
  { id: 37, image: toran5, category: "Handicrafts" },
  { id: 38, image: toran6, category: "Handicrafts" },
  { id: 39, image: toran7, category: "Handicrafts" },
  { id: 40, image: toran8, category: "Handicrafts" },
  { id: 41, image: toran9, category: "Handicrafts" },
  { id: 42, image: toran10, category: "Handicrafts" },
  { id: 43, image: toran11, category: "Handicrafts" },
  { id: 44, image: toran12, category: "Handicrafts" },
  { id: 45, image: toran13, category: "Handicrafts" },
  { id: 46, image: toran14, category: "Handicrafts" },
  { id: 47, image: toran15, category: "Handicrafts" },
  { id: 48, image: toran16, category: "Handicrafts" },
  { id: 49, image: toran17, category: "Handicrafts" },
  { id: 50, image: toran18, category: "Handicrafts" },
  { id: 51, image: toran19, category: "Handicrafts" },
  { id: 52, image: toran20, category: "Handicrafts" },
  { id: 53, image: ws1, category: "Handicrafts" },
  { id: 54, image: ws2, category: "Handicrafts" },
  { id: 55, image: ws3, category: "Handicrafts" },

  // Lamp Products
  { id: 56, image: lamp1, category: "Lamp" },
  { id: 57, image: lamp2, category: "Lamp" },
  { id: 58, image: lamp3, category: "Lamp" },
  { id: 59, image: lamp4, category: "Lamp" },
  { id: 60, image: lamp5, category: "Lamp" },
  { id: 61, image: lamp6, category: "Lamp" },
  { id: 62, image: lamp7, category: "Lamp" },
  { id: 63, image: lamp8, category: "Lamp" },
  { id: 64, image: lamp9, category: "Lamp" },
  { id: 65, image: lamp10, category: "Lamp" },
  { id: 66, image: lamp11, category: "Lamp" },
  { id: 67, image: lamp12, category: "Lamp" },

  // Metal Articles Products
  { id: 68, image: ma1, category: "Metal Articles" },
  { id: 69, image: ma2, category: "Metal Articles" },
  { id: 70, image: ma4, category: "Metal Articles" },
  { id: 71, image: ma5, category: "Metal Articles" },
  { id: 72, image: ma6, category: "Metal Articles" },
  { id: 73, image: ma7, category: "Metal Articles" },
  { id: 74, image: ma8, category: "Metal Articles" },
  { id: 75, image: ma9, category: "Metal Articles" },
  { id: 76, image: ma10, category: "Metal Articles" },
  { id: 77, image: ma11, category: "Metal Articles" },
  { id: 78, image: ma12, category: "Metal Articles" },
  { id: 79, image: ma13, category: "Metal Articles" },
  { id: 80, image: ma14, category: "Metal Articles" },
  { id: 81, image: ma15, category: "Metal Articles" },
  { id: 82, image: ma16, category: "Metal Articles" },
  { id: 83, image: ma17, category: "Metal Articles" },
  { id: 84, image: ma18, category: "Metal Articles" },
  { id: 85, image: ma19, category: "Metal Articles" },
  { id: 86, image: ma20, category: "Metal Articles" },
  { id: 87, image: ma21, category: "Metal Articles" },
  { id: 88, image: ma22, category: "Metal Articles" },
  { id: 89, image: ma23, category: "Metal Articles" },
  { id: 90, image: ma24, category: "Metal Articles" },
  { id: 91, image: ma25, category: "Metal Articles" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  // Calculate pagination values
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Reset to page 1 when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const openModal = (index) => {
    // Calculate the actual index in the filtered products array
    const actualIndex = indexOfFirstProduct + index;
    setCurrentIndex(actualIndex);
    setShowModal(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === filteredProducts.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProducts.length - 1 : prev - 1
    );
  };

  // Pagination functions
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <motion.div
      id="gallery"
      className="bg-white  text-black"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        variants={itemVariants}
      >
        Our <span className="text-pink-500">Gallery</span>
      </motion.h2>

      {/* Filter Category Buttons */}
      <motion.div
        className="flex justify-center gap-4 mb-12 flex-wrap"
        variants={itemVariants}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border border-pink-500 transition
            ${
              activeCategory === cat
                ? "bg-pink-500 text-white"
                : "text-pink-500 hover:bg-pink-500 hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mb-8"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        key={activeCategory + currentPage} // Re-trigger animation on category/page change
      >
        {currentProducts.map((product, index) => (
          <motion.div
            key={product.id}
            onClick={() => openModal(index)}
            className="cursor-pointer hover:scale-105 transition duration-300"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={product.image}
              alt={`${product.category} product`}
              className="rounded-xl w-full h-56 object-cover shadow-lg"
              whileHover={{
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <motion.div
          className="flex justify-center items-center gap-2 mb-8"
          variants={itemVariants}
        >
          {/* Previous Button */}
          <motion.button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border border-pink-500 transition
              ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white text-pink-500 hover:bg-pink-500 hover:text-white"
              }`}
            whileHover={currentPage !== 1 ? { scale: 1.1 } : {}}
            whileTap={currentPage !== 1 ? { scale: 0.9 } : {}}
          >
            <FaChevronLeft size={16} />
          </motion.button>

          {/* Page Numbers */}
          {getPageNumbers().map((pageNumber) => (
            <motion.button
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
              className={`px-4 py-2 rounded-lg border border-pink-500 transition
                ${
                  currentPage === pageNumber
                    ? "bg-pink-500 text-white"
                    : "bg-white text-pink-500 hover:bg-pink-500 hover:text-white"
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {pageNumber}
            </motion.button>
          ))}

          {/* Next Button */}
          <motion.button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg border border-pink-500 transition
              ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white text-pink-500 hover:bg-pink-500 hover:text-white"
              }`}
            whileHover={currentPage !== totalPages ? { scale: 1.1 } : {}}
            whileTap={currentPage !== totalPages ? { scale: 0.9 } : {}}
          >
            <FaChevronRight size={16} />
          </motion.button>
        </motion.div>
      )}

      {/* Page Info */}
      <motion.div
        className="text-center text-gray-600 mb-8"
        variants={itemVariants}
      >
        Showing {indexOfFirstProduct + 1}-
        {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
        {filteredProducts.length} products
      </motion.div>

      {/* Popup Image Viewer */}
      <AnimatePresence mode="wait">
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl p-4 shadow-2xl max-w-4xl w-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button
                onClick={() => setShowModal(false)}
                className="absolute -top-3 -right-3 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm z-10 hover:bg-gray-800 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✖
              </motion.button>

              <motion.button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft size={20} />
              </motion.button>

              <div className="flex justify-center items-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={filteredProducts[currentIndex].image}
                    alt="Product view"
                    className="max-w-full max-h-[80vh] object-contain rounded-xl"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  />
                </AnimatePresence>
              </div>

              <motion.button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight size={20} />
              </motion.button>

              {/* Image counter */}
              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentIndex + 1} / {filteredProducts.length}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
