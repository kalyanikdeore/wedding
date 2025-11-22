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
} from "../../assets";

const products = {
  categories: ["Toran", "Flower"],
  products: [
    // Toran Products
    {
      id: 1,
      name: "Green Bloom Toran",
      description: "Organic plant growth enhancer",
      category: "Toran",
      image: toran1,
      rating: 4.8,
      stock: 50,
      price: 100,
    },
    {
      id: 2,
      name: "Sunrise Toran",
      description: "Morning plant vitality formula",
      category: "Toran",
      image: toran2,
      rating: 4.7,
      stock: 60,
      price: 85,
    },
    {
      id: 3,
      name: "Golden Harvest Toran",
      description: "High yield crop solution",
      category: "Toran",
      image: toran3,
      rating: 4.6,
      stock: 40,
      price: 120,
    },
    {
      id: 4,
      name: "Evergreen Toran",
      description: "Year-round plant protection",
      category: "Toran",
      image: toran4,
      rating: 4.6,
      stock: 42,
      price: 110,
    },
    {
      id: 5,
      name: "Nature's Blessing Toran",
      description: "Natural plant wellness formula",
      category: "Toran",
      image: toran5,
      rating: 4.5,
      stock: 35,
      price: 75,
    },
    {
      id: 6,
      name: "Pure Growth Toran",
      description: "Chemical-free plant nutrition",
      category: "Toran",
      image: toran6,
      rating: 4.3,
      stock: 70,
      price: 90,
    },
    {
      id: 7,
      name: "Mighty Roots Toran",
      description: "Advanced root development",
      category: "Toran",
      image: toran7,
      rating: 4.4,
      stock: 48,
      price: 150,
    },
    {
      id: 8,
      name: "Blossom Boost Toran",
      description: "Flowering and fruiting enhancer",
      category: "Toran",
      image: toran8,
      rating: 4.2,
      stock: 45,
      price: 80,
    },
    {
      id: 9,
      name: "Vitality Plus Toran",
      description: "Complete plant health solution",
      category: "Toran",
      image: toran9,
      rating: 4.5,
      stock: 55,
      price: 65,
    },
    {
      id: 10,
      name: "Rainbow Toran",
      description: "Multi-purpose plant tonic",
      category: "Toran",
      image: toran10,
      rating: 4.7,
      stock: 50,
      price: 95,
    },
    {
      id: 11,
      name: "Spring Fresh Toran",
      description: "Seasonal plant rejuvenation",
      category: "Toran",
      image: toran11,
      rating: 4.8,
      stock: 33,
      price: 110,
    },
    {
      id: 12,
      name: "Earth's Gift Toran",
      description: "Natural soil enrichment formula",
      category: "Toran",
      image: toran12,
      rating: 4.5,
      stock: 40,
      price: 100,
    },
    {
      id: 13,
      name: "Harvest King Toran",
      description: "Premium crop yield booster",
      category: "Toran",
      image: toran13,
      rating: 4.6,
      stock: 44,
      price: 105,
    },
    {
      id: 14,
      name: "Green Magic Toran",
      description: "Rapid plant growth formula",
      category: "Toran",
      image: toran14,
      rating: 4.5,
      stock: 50,
      price: 95,
    },
    {
      id: 15,
      name: "Nature's Pride Toran",
      description: "Organic farming solution",
      category: "Toran",
      image: toran15,
      rating: 4.7,
      stock: 39,
      price: 125,
    },
    {
      id: 16,
      name: "Bloom Master Toran",
      description: "Professional gardening formula",
      category: "Toran",
      image: toran16,
      rating: 4.4,
      stock: 47,
      price: 85,
    },
    {
      id: 17,
      name: "Pure Essence Toran",
      description: "Concentrated plant nutrients",
      category: "Toran",
      image: toran17,
      rating: 4.8,
      stock: 38,
      price: 130,
    },
    {
      id: 18,
      name: "Garden Glory Toran",
      description: "Home garden special formula",
      category: "Toran",
      image: toran18,
      rating: 4.6,
      stock: 36,
      price: 70,
    },
    {
      id: 19,
      name: "Eco Grow Toran",
      description: "Environmentally friendly plant food",
      category: "Toran",
      image: toran,
      rating: 4.6,
      stock: 36,
      price: 75,
    },

    // Flower Products
    {
      id: 20,
      name: "Crimson Bloom Flower",
      description: "Vibrant red flower enhancer",
      category: "Flower",
      image: flower1,
      rating: 4.8,
      stock: 25,
      price: 120,
    },
    {
      id: 21,
      name: "Golden Petal Flower",
      description: "Yellow flower special care",
      category: "Flower",
      image: flower2,
      rating: 4.7,
      stock: 30,
      price: 95,
    },
    {
      id: 22,
      name: "Azure Blossom Flower",
      description: "Blue flower magic formula",
      category: "Flower",
      image: flower4,
      rating: 4.6,
      stock: 20,
      price: 110,
    },
    {
      id: 23,
      name: "Velvet Touch Flower",
      description: "Soft petal care solution",
      category: "Flower",
      image: flower5,
      rating: 4.5,
      stock: 35,
      price: 130,
    },
    {
      id: 24,
      name: "Moonlight Flower",
      description: "Night-blooming plants special",
      category: "Flower",
      image: flower6,
      rating: 4.8,
      stock: 28,
      price: 100,
    },
    {
      id: 25,
      name: "Sunshine Flower",
      description: "Sun-loving plants formula",
      category: "Flower",
      image: flower7,
      rating: 4.4,
      stock: 40,
      price: 85,
    },
    {
      id: 26,
      name: "Rainbow Petal Flower",
      description: "Multi-colored flower booster",
      category: "Flower",
      image: flower8,
      rating: 4.7,
      stock: 22,
      price: 140,
    },
    {
      id: 27,
      name: "Crystal Clear Flower",
      description: "Pure white flower enhancer",
      category: "Flower",
      image: flower9,
      rating: 4.3,
      stock: 38,
      price: 90,
    },
    {
      id: 28,
      name: "Royal Bloom Flower",
      description: "Premium flower care solution",
      category: "Flower",
      image: flower10,
      rating: 4.6,
      stock: 26,
      price: 125,
    },
    {
      id: 29,
      name: "Mystic Garden Flower",
      description: "Exotic flower special formula",
      category: "Flower",
      image: flower11,
      rating: 4.9,
      stock: 18,
      price: 150,
    },
    {
      id: 30,
      name: "Spring Breeze Flower",
      description: "Seasonal flowering plants care",
      category: "Flower",
      image: flower12,
      rating: 4.5,
      stock: 32,
      price: 115,
    },
    {
      id: 31,
      name: "Eternal Bloom Flower",
      description: "Long-lasting flower formula",
      category: "Flower",
      image: flower13,
      rating: 4.7,
      stock: 29,
      price: 105,
    },
    {
      id: 32,
      name: "Fragrant Delight Flower",
      description: "Aromatic flower special care",
      category: "Flower",
      image: flower14,
      rating: 4.4,
      stock: 34,
      price: 80,
    },
    {
      id: 33,
      name: "Pearl White Flower",
      description: "Elegant white flower solution",
      category: "Flower",
      image: flower15,
      rating: 4.8,
      stock: 27,
      price: 135,
    },
    {
      id: 34,
      name: "Ruby Red Flower",
      description: "Deep red flower enhancer",
      category: "Flower",
      image: flower16,
      rating: 4.6,
      stock: 23,
      price: 120,
    },
    {
      id: 35,
      name: "Emerald Green Flower",
      description: "Green flower special formula",
      category: "Flower",
      image: flower17,
      rating: 4.5,
      stock: 31,
      price: 95,
    },
    {
      id: 36,
      name: "Sapphire Blue Flower",
      description: "Blue flower care solution",
      category: "Flower",
      image: flower18,
      rating: 4.3,
      stock: 36,
      price: 75,
    },
    {
      id: 37,
      name: "Amber Glow Flower",
      description: "Orange flower special care",
      category: "Flower",
      image: flower19,
      rating: 4.7,
      stock: 24,
      price: 110,
    },
    {
      id: 38,
      name: "Violet Dream Flower",
      description: "Purple flower magic formula",
      category: "Flower",
      image: flower20,
      rating: 4.8,
      stock: 21,
      price: 130,
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
