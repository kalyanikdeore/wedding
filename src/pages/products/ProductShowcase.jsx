import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter, FiChevronDown, FiX, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProductCard from "../../components/Products/ProductCard";
import { useCart } from "../../context/CartContext";
import {
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
} from "../../assets";

const products = {
  categories: [
    "Masdadsdddddddddddddddddicrobial Solution",
    "Plant Growth Regulators",
    "Plant Protectants",
    "Nutrient Solutions",
    "Organic Fertilizers",
    "Special Products",
    "Bio-Fungicides",
    "Bio-Fertilizer",
    "Bio-Pesticides",
  ],
  products: [
    {
      id: 1,
      name: "Aminoz",
      description: "Amino acid 80% formula",
      category: "Bio-Fungicides",
      size: "1 Liter",
      image: toran1,
      rating: 4.8,
      stock: 50,
      price: 100,
    },
    {
      id: 2,
      name: "Aminozz",
      description: "Advanced amino blend",
      category: "Fertilizers",
      size: "500ml",
      image: toran2,
      rating: 4.7,
      stock: 60,
      price: 85,
    },
    {
      id: 3,
      name: "Banana King",
      description: "Growth booster for bananas",
      category: "Plant Growth",
      size: "1 Liter",
      image: toran3,
      rating: 4.6,
      stock: 40,
      price: 120,
    },
    {
      id: 4,
      name: "BananaKing",
      description: "High yield formula",
      category: "Fertilizers",
      size: "1 Liter",
      image: toran4,
      rating: 4.6,
      stock: 42,
      price: 110,
    },
    {
      id: 5,
      name: "Bio-Stim",
      description: "Bio stimulant for crops",
      category: "Stimulants",
      size: "250ml",
      image: toran5,
      rating: 4.5,
      stock: 35,
      price: 75,
    },
    {
      id: 6,
      name: "Bit-R",
      description: "Bio insect repellent",
      category: "Pesticides",
      size: "500ml",
      image: toran6,
      rating: 4.3,
      stock: 70,
      price: 90,
    },
    {
      id: 7,
      name: "BNG",
      description: "Balanced nutrient granules",
      category: "Soil Care",
      size: "1kg",
      image: toran7,
      rating: 4.4,
      stock: 48,
      price: 150,
    },
    {
      id: 8,
      name: "Dhal",
      description: "Pulse crop enhancer",
      category: "Crop Special",
      size: "500ml",
      image: toran8,
      rating: 4.2,
      stock: 45,
      price: 80,
    },
    {
      id: 9,
      name: "Fanta",
      description: "Fruit flavor enhancer",
      category: "Organic Sprays",
      size: "200ml",
      image: toran9,
      rating: 4.5,
      stock: 55,
      price: 65,
    },
    {
      id: 10,
      name: "GB",
      description: "Green booster",
      category: "Plant Tonic",
      size: "1 Liter",
      image: toran10,
      rating: 4.7,
      stock: 50,
      price: 95,
    },
    {
      id: 11,
      name: "GS Germinator",
      description: "Seed germination aid",
      category: "Seed Care",
      size: "500ml",
      image: toran11,
      rating: 4.8,
      stock: 33,
      price: 110,
    },
    {
      id: 12,
      name: "Madhu Taral",
      description: "Honey-rich plant tonic",
      category: "Foliar Spray",
      size: "1 Liter",
      image: toran12,
      rating: 4.5,
      stock: 40,
      price: 100,
    },
    {
      id: 13,
      name: "Namul",
      description: "Root developer",
      category: "Root Solutions",
      size: "1 Liter",
      image: toran13,
      rating: 4.6,
      stock: 44,
      price: 105,
    },
    {
      id: 14,
      name: "Perfect",
      description: "General plant health solution",
      category: "General Use",
      size: "1 Liter",
      image: toran14,
      rating: 4.5,
      stock: 50,
      price: 95,
    },
    {
      id: 15,
      name: "Pinoy",
      description: "Micronutrient mix",
      category: "Micronutrients",
      size: "1kg",
      image: toran15,
      rating: 4.7,
      stock: 39,
      price: 125,
    },
    {
      id: 16,
      name: "Ren",
      description: "Energy tonic for crops",
      category: "Energy Booster",
      size: "500ml",
      image: toran16,
      rating: 4.4,
      stock: 47,
      price: 85,
    },
    {
      id: 17,
      name: "Rifle",
      description: "Pest control solution",
      category: "Bio-Pesticide",
      size: "1 Liter",
      image: toran17,
      rating: 4.8,
      stock: 38,
      price: 130,
    },
    {
      id: 18,
      name: "Root Grow",
      description: "Root growth enhancer",
      category: "Root Solutions",
      size: "250ml",
      image: toran18,
      rating: 4.6,
      stock: 36,
      price: 70,
    },
    {
      id: 19,
      name: "Root-Grow",
      description: "Advanced root development",
      category: "Root Solutions",
      size: "250ml",
      image: toran,
      rating: 4.6,
      stock: 36,
      price: 75,
    },
    {
      id: 20,
      name: "Satejj",
      description: "Leafy vegetable enhancer",
      category: "Leaf Care",
      size: "500ml",
      image: toran1,
      rating: 4.3,
      stock: 55,
      price: 80,
    },
    {
      id: 21,
      name: "Shakti",
      description: "All-in-one nutrient pack",
      category: "Macro Nutrients",
      size: "2 Liter",
      image: toran2,
      rating: 4.7,
      stock: 49,
      price: 160,
    },
    {
      id: 22,
      name: "Sibol",
      description: "Early growth booster",
      category: "Growth Booster",
      size: "1 Liter",
      image: toran3,
      rating: 4.6,
      stock: 53,
      price: 100,
    },
    {
      id: 23,
      name: "Siboll",
      description: "Late-stage growth booster",
      category: "Growth Booster",
      size: "1 Liter",
      image: toran4,
      rating: 4.6,
      stock: 53,
      price: 105,
    },
    {
      id: 24,
      name: "SP-90",
      description: "Silicon-based formula",
      category: "Silicon Solution",
      size: "500ml",
      image: toran5,
      rating: 4.4,
      stock: 31,
      price: 90,
    },
    {
      id: 25,
      name: "Support",
      description: "Plant support & strength",
      category: "Tonic",
      size: "1 Liter",
      image: toran6,
      rating: 4.5,
      stock: 50,
      price: 95,
    },
    {
      id: 26,
      name: "Thunder",
      description: "Weather stress buster",
      category: "Stress Reliever",
      size: "1 Liter",
      image: toran7,
      rating: 4.8,
      stock: 29,
      price: 115,
    },
    {
      id: 27,
      name: "Veda Organic Plant Protecter",
      description: "Organic protector for all plants",
      category: "Protectants",
      size: "1 Liter",
      image: toran8,
      rating: 4.9,
      stock: 34,
      price: 140,
    },
    {
      id: 28,
      name: "Veer",
      description: "Strong defense solution",
      category: "Crop Defense",
      size: "1 Liter",
      image: toran9,
      rating: 4.7,
      stock: 41,
      price: 120,
    },
  ],
};

const ProductShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Safe usage of useCart with fallback
  let cartContext;
  try {
    cartContext = useCart();
  } catch (error) {
    console.warn("Cart context not available:", error);
    cartContext = null;
  }

  const addToCart =
    cartContext?.addToCart ||
    ((product) => {
      console.log("Add to cart functionality not available. Product:", product);
      // You can add a toast notification here
      alert(`${product.name} added to cart! (Demo mode)`);
    });

  const filteredProducts =
    activeFilter === "All"
      ? products.products
      : products.products.filter(
          (product) => product.category === activeFilter
        );

  const searchedProducts = filteredProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearFilters = () => {
    setActiveFilter("All");
    setSearchQuery("");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
            <p className="text-gray-600 mt-2">
              {activeFilter === "All" ? "All products" : activeFilter}
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative flex-1 md:w-64">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FiX size={18} />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="md:hidden flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
            >
              <FiFilter />
              <span>Filters</span>
              <FiChevronDown
                className={`transition-transform ${
                  showMobileFilters ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Active Filters */}
        {(activeFilter !== "All" || searchQuery) && (
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm text-gray-500">Active filters:</span>
            {activeFilter !== "All" && (
              <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {activeFilter}
                <button
                  onClick={() => setActiveFilter("All")}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <FiX size={16} />
                </button>
              </div>
            )}
            {searchQuery && (
              <div className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-2 text-gray-600 hover:text-gray-800"
                >
                  <FiX size={16} />
                </button>
              </div>
            )}
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Mobile Filters Dropdown */}
        <AnimatePresence>
          {showMobileFilters && (
            <motion.div
              className="md:hidden mb-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="grid grid-cols-2 gap-3">
                {["All", ...products.categories].map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveFilter(category);
                      setShowMobileFilters(false);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm text-left ${
                      activeFilter === category
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Filters */}
        <div className="hidden md:flex gap-3 mb-8 overflow-x-auto pb-2">
          {["All", ...products.categories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeFilter === category
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {searchedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {searchedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FiSearch size={48} className="mx-auto" />
            </div>
            <p className="text-gray-500 text-lg mb-4">
              No products found matching your criteria
            </p>
            <button
              onClick={clearFilters}
              className="text-gray-900 font-medium underline hover:text-blue-600"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
