import React, { useState } from "react";

const categories = ["All", "Rings", "Earrings", "Bangles"];

const allProducts = [
  { id: 1, image: "https://via.placeholder.com/300", category: "Rings" },
  { id: 2, image: "https://via.placeholder.com/300", category: "Rings" },
  { id: 3, image: "https://via.placeholder.com/300", category: "Earrings" },
  { id: 4, image: "https://via.placeholder.com/300", category: "Earrings" },
  { id: 5, image: "https://via.placeholder.com/300", category: "Bangles" },
  { id: 6, image: "https://via.placeholder.com/300", category: "Bangles" },
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
    setCurrentIndex((prev) => (prev + 1) % filteredProducts.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProducts.length - 1 : prev - 1
    );
  };

  return (
    <div id="products" className="bg-white pt-30  text-black">
      <h2 className="text-3xl font-bold text-center mb-10">
        Jewellery Collection
      </h2>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200
              ${
                activeCategory === cat
                  ? "bg-pink-500 text-white shadow-lg scale-105"
                  : "border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid - 1 row, 4 cols (responsive) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            onClick={() => openModal(index)}
            className="cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={product.image}
              alt="Jewellery"
              className="rounded-lg shadow-lg w-full h-52 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal Popup with Carousel */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg p-4 max-w-xl w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-black text-xl font-bold"
            >
              ✖
            </button>

            <img
              src={filteredProducts[currentIndex].image}
              alt="Product"
              className="w-full h-80 object-cover rounded-md"
            />

            {/* Carousel Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={prevImage}
                className="px-4 py-2 bg-pink-500 text-white rounded-lg"
              >
                ◀ Prev
              </button>
              <button
                onClick={nextImage}
                className="px-4 py-2 bg-pink-500 text-white rounded-lg"
              >
                Next ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
