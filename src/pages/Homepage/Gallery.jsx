// Updated Products component with Flower & Toran categories
// (Images imported + categories & data updated)

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
} from "../../assets";

// Updated Categories
const categories = ["All", "Flower", "Toran", "Lamp"];

// Updated Product List with images
const allProducts = [
  // Flower Products
  { id: 1, image: flower1, category: "Flower" },
  { id: 2, image: flower2, category: "Flower" },
  { id: 3, image: flower4, category: "Flower" },
  { id: 4, image: flower5, category: "Flower" },
  { id: 5, image: flower6, category: "Flower" },
  { id: 6, image: flower7, category: "Flower" },
  { id: 7, image: flower8, category: "Flower" },
  { id: 8, image: flower9, category: "Flower" },
  { id: 9, image: flower10, category: "Flower" },
  { id: 10, image: flower11, category: "Flower" },
  { id: 11, image: flower12, category: "Flower" },
  { id: 12, image: flower13, category: "Flower" },
  { id: 13, image: flower14, category: "Flower" },
  { id: 14, image: flower15, category: "Flower" },
  { id: 15, image: flower16, category: "Flower" },
  { id: 16, image: flower17, category: "Flower" },
  { id: 17, image: flower18, category: "Flower" },
  { id: 18, image: flower19, category: "Flower" },
  { id: 19, image: flower20, category: "Flower" },
  { id: 20, image: flower21, category: "Flower" },
  { id: 21, image: flower22, category: "Flower" },
  { id: 22, image: flower23, category: "Flower" },
  { id: 23, image: flower24, category: "Flower" },
  { id: 24, image: flower25, category: "Flower" },
  { id: 25, image: flower26, category: "Flower" },
  { id: 26, image: flower27, category: "Flower" },
  { id: 27, image: flower28, category: "Flower" },
  { id: 28, image: flower29, category: "Flower" },
  { id: 29, image: flower30, category: "Flower" },
  { id: 30, image: flower31, category: "Flower" },
  { id: 31, image: flower32, category: "Flower" },

  // Toran Products
  { id: 32, image: toran, category: "Toran" },
  { id: 33, image: toran1, category: "Toran" },
  { id: 34, image: toran2, category: "Toran" },
  { id: 35, image: toran3, category: "Toran" },
  { id: 36, image: toran4, category: "Toran" },
  { id: 37, image: toran5, category: "Toran" },
  { id: 38, image: toran6, category: "Toran" },
  { id: 39, image: toran7, category: "Toran" },
  { id: 40, image: toran8, category: "Toran" },
  { id: 41, image: toran9, category: "Toran" },
  { id: 42, image: toran10, category: "Toran" },

  { id: 44, image: toran11, category: "Toran" },
  { id: 45, image: toran12, category: "Toran" },
  { id: 46, image: toran13, category: "Toran" },
  { id: 47, image: toran14, category: "Toran" },
  { id: 48, image: toran15, category: "Toran" },
  { id: 49, image: toran16, category: "Toran" },
  { id: 50, image: toran17, category: "Toran" },
  { id: 51, image: toran18, category: "Toran" },
  { id: 52, image: toran19, category: "Toran" },
  { id: 53, image: toran20, category: "Toran" },
  { id: 54, image: ws1, category: "Toran" },
  { id: 55, image: ws2, category: "Toran" },
  { id: 55, image: ws3, category: "Toran" },

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
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  const openModal = (index) => {
    setCurrentIndex(index);
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

  return (
    <div id="gallery" className="bg-white pt-32 text-black">
      <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>

      {/* Filter Category Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border border-pink-500 transition
            ${
              activeCategory === cat
                ? "bg-pink-500 text-white"
                : "text-pink-500 hover:bg-pink-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            onClick={() => openModal(index)}
            className="cursor-pointer hover:scale-105 transition"
          >
            <img
              src={product.image}
              alt="Product"
              className="rounded-xl w-full h-56 object-cover shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Popup Image Viewer */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-3 -right-3 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm"
            >
              ✖
            </button>

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
            >
              <FaChevronLeft size={18} />
            </button>

            <img
              src={filteredProducts[currentIndex].image}
              alt="Big Product"
              className="w-[800px] h-[500px] object-cover rounded-xl"
            />

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
            >
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
