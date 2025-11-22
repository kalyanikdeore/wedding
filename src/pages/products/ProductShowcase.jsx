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

const products = {
  categories: ["Handicrafts", "Artificial Flower", "Lamp", "Metal Articles"],

  products: [
    // Toran Products
    {
      id: 1,
      name: "Green Bloom Toran",
      description: "Organic plant growth enhancer",
      category: "Handicrafts",
      image: toran1,
      rating: 4.8,
      stock: 50,
      price: 100,
    },
    {
      id: 2,
      name: "Sunrise Toran",
      description: "Morning plant vitality formula",
      category: "Handicrafts",
      image: toran2,
      rating: 4.7,
      stock: 60,
      price: 85,
    },
    {
      id: 3,
      name: "Golden Harvest Toran",
      description: "High yield crop solution",
      category: "Handicrafts",
      image: toran3,
      rating: 4.6,
      stock: 40,
      price: 120,
    },
    {
      id: 4,
      name: "Evergreen Toran",
      description: "Year-round plant protection",
      category: "Handicrafts",
      image: toran4,
      rating: 4.6,
      stock: 42,
      price: 110,
    },
    {
      id: 5,
      name: "Nature's Blessing Toran",
      description: "Natural plant wellness formula",
      category: "Handicrafts",
      image: toran5,
      rating: 4.5,
      stock: 35,
      price: 75,
    },
    {
      id: 6,
      name: "Pure Growth Toran",
      description: "Chemical-free plant nutrition",
      category: "Handicrafts",
      image: toran6,
      rating: 4.3,
      stock: 70,
      price: 90,
    },
    {
      id: 7,
      name: "Mighty Roots Toran",
      description: "Advanced root development",
      category: "Handicrafts",
      image: toran7,
      rating: 4.4,
      stock: 48,
      price: 150,
    },
    {
      id: 8,
      name: "Blossom Boost Toran",
      description: "Flowering and fruiting enhancer",
      category: "Handicrafts",
      image: toran8,
      rating: 4.2,
      stock: 45,
      price: 80,
    },
    {
      id: 9,
      name: "Vitality Plus Toran",
      description: "Complete plant health solution",
      category: "Handicrafts",
      image: toran9,
      rating: 4.5,
      stock: 55,
      price: 65,
    },
    {
      id: 10,
      name: "Rainbow Toran",
      description: "Multi-purpose plant tonic",
      category: "Handicrafts",
      image: toran10,
      rating: 4.7,
      stock: 50,
      price: 95,
    },
    {
      id: 11,
      name: "Spring Fresh Toran",
      description: "Seasonal plant rejuvenation",
      category: "Handicrafts",
      image: toran11,
      rating: 4.8,
      stock: 33,
      price: 110,
    },
    {
      id: 12,
      name: "Earth's Gift Toran",
      description: "Natural soil enrichment formula",
      category: "Handicrafts",
      image: toran12,
      rating: 4.5,
      stock: 40,
      price: 100,
    },
    {
      id: 13,
      name: "Harvest King Toran",
      description: "Premium crop yield booster",
      category: "Handicrafts",
      image: toran13,
      rating: 4.6,
      stock: 44,
      price: 105,
    },
    {
      id: 14,
      name: "Green Magic Toran",
      description: "Rapid plant growth formula",
      category: "Handicrafts",
      image: toran14,
      rating: 4.5,
      stock: 50,
      price: 95,
    },
    {
      id: 15,
      name: "Nature's Pride Toran",
      description: "Organic farming solution",
      category: "Handicrafts",
      image: toran15,
      rating: 4.7,
      stock: 39,
      price: 125,
    },
    {
      id: 16,
      name: "Bloom Master Toran",
      description: "Professional gardening formula",
      category: "Handicrafts",
      image: toran16,
      rating: 4.4,
      stock: 47,
      price: 85,
    },
    {
      id: 17,
      name: "Pure Essence Toran",
      description: "Concentrated plant nutrients",
      category: "Handicrafts",
      image: toran17,
      rating: 4.8,
      stock: 38,
      price: 130,
    },
    {
      id: 18,
      name: "Garden Glory Toran",
      description: "Home garden special formula",
      category: "Handicrafts",
      image: toran18,
      rating: 4.6,
      stock: 36,
      price: 70,
    },
    {
      id: 19,
      name: "Eco Grow Toran",
      description: "Environmentally friendly plant food",
      category: "Handicrafts",
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
      category: "Artificial Flower",
      image: flower1,
      rating: 4.8,
      stock: 25,
      price: 120,
    },
    {
      id: 21,
      name: "Golden Petal Flower",
      description: "Yellow flower special care",
      category: "Artificial Flower",
      image: flower2,
      rating: 4.7,
      stock: 30,
      price: 95,
    },
    {
      id: 22,
      name: "Azure Blossom Flower",
      description: "Blue flower magic formula",
      category: "Artificial Flower",
      image: flower4,
      rating: 4.6,
      stock: 20,
      price: 110,
    },
    {
      id: 23,
      name: "Velvet Touch Flower",
      description: "Soft petal care solution",
      category: "Artificial Flower",
      image: flower5,
      rating: 4.5,
      stock: 35,
      price: 130,
    },
    {
      id: 24,
      name: "Moonlight Flower",
      description: "Night-blooming plants special",
      category: "Artificial Flower",
      image: flower6,
      rating: 4.8,
      stock: 28,
      price: 100,
    },
    {
      id: 25,
      name: "Sunshine Flower",
      description: "Sun-loving plants formula",
      category: "Artificial Flower",
      image: flower7,
      rating: 4.4,
      stock: 40,
      price: 85,
    },
    {
      id: 26,
      name: "Rainbow Petal Flower",
      description: "Multi-colored flower booster",
      category: "Artificial Flower",
      image: flower8,
      rating: 4.7,
      stock: 22,
      price: 140,
    },
    {
      id: 27,
      name: "Crystal Clear Flower",
      description: "Pure white flower enhancer",
      category: "Artificial Flower",
      image: flower9,
      rating: 4.3,
      stock: 38,
      price: 90,
    },
    {
      id: 28,
      name: "Royal Bloom Flower",
      description: "Premium flower care solution",
      category: "Artificial Flower",
      image: flower10,
      rating: 4.6,
      stock: 26,
      price: 125,
    },
    {
      id: 29,
      name: "Mystic Garden Flower",
      description: "Exotic flower special formula",
      category: "Artificial Flower",
      image: flower11,
      rating: 4.9,
      stock: 18,
      price: 150,
    },
    {
      id: 30,
      name: "Spring Breeze Flower",
      description: "Seasonal flowering plants care",
      category: "Artificial Flower",
      image: flower12,
      rating: 4.5,
      stock: 32,
      price: 115,
    },
    {
      id: 31,
      name: "Eternal Bloom Flower",
      description: "Long-lasting flower formula",
      category: "Artificial Flower",
      image: flower13,
      rating: 4.7,
      stock: 29,
      price: 105,
    },
    {
      id: 32,
      name: "Fragrant Delight Flower",
      description: "Aromatic flower special care",
      category: "Artificial Flower",
      image: flower14,
      rating: 4.4,
      stock: 34,
      price: 80,
    },
    {
      id: 33,
      name: "Pearl White Flower",
      description: "Elegant white flower solution",
      category: "Artificial Flower",
      image: flower15,
      rating: 4.8,
      stock: 27,
      price: 135,
    },
    {
      id: 34,
      name: "Ruby Red Flower",
      description: "Deep red flower enhancer",
      category: "Artificial Flower",
      image: flower16,
      rating: 4.6,
      stock: 23,
      price: 120,
    },
    {
      id: 35,
      name: "Emerald Green Flower",
      description: "Green flower special formula",
      category: "Artificial Flower",
      image: flower17,
      rating: 4.5,
      stock: 31,
      price: 95,
    },
    {
      id: 36,
      name: "Sapphire Blue Flower",
      description: "Blue flower care solution",
      category: "Artificial Flower",
      image: flower18,
      rating: 4.3,
      stock: 36,
      price: 75,
    },
    {
      id: 37,
      name: "Amber Glow Flower",
      description: "Orange flower special care",
      category: "Artificial Flower",
      image: flower19,
      rating: 4.7,
      stock: 24,
      price: 110,
    },
    {
      id: 38,
      name: "Violet Dream Flower",
      description: "Purple flower magic formula",
      category: "Artificial Flower",
      image: flower20,
      rating: 4.8,
      stock: 21,
      price: 130,
    },
    // Lamp Products
    {
      id: 39,
      name: "Elegant Glow Lamp",
      description: "Beautiful home décor lamp",
      category: "Lamp",
      image: lamp1,
      rating: 4.8,
      stock: 25,
      price: 180,
    },
    {
      id: 40,
      name: "Golden Shine Lamp",
      description: "Premium handcrafted lamp",
      category: "Lamp",
      image: lamp2,
      rating: 4.6,
      stock: 30,
      price: 220,
    },
    {
      id: 41,
      name: "Vintage Light Lamp",
      description: "Classic design decorative lamp",
      category: "Lamp",
      image: lamp3,
      rating: 4.7,
      stock: 20,
      price: 250,
    },
    {
      id: 42,
      name: "Crystal Aura Lamp",
      description: "Elegant crystal-inspired lamp",
      category: "Lamp",
      image: lamp4,
      rating: 4.5,
      stock: 18,
      price: 200,
    },
    {
      id: 43,
      name: "Royal Glow Lamp",
      description: "Premium metal crafted lamp",
      category: "Lamp",
      image: lamp5,
      rating: 4.9,
      stock: 26,
      price: 280,
    },
    {
      id: 44,
      name: "Pearl Light Lamp",
      description: "Soft ambient decorative lighting",
      category: "Lamp",
      image: lamp6,
      rating: 4.6,
      stock: 32,
      price: 190,
    },
    {
      id: 45,
      name: "Moonlight Lamp",
      description: "Night stylish lamp design",
      category: "Lamp",
      image: lamp7,
      rating: 4.4,
      stock: 35,
      price: 170,
    },
    {
      id: 46,
      name: "Leaf Pattern Lamp",
      description: "Eco-themed interior lamp",
      category: "Lamp",
      image: lamp8,
      rating: 4.8,
      stock: 24,
      price: 210,
    },
    {
      id: 47,
      name: "Classic Lantern Lamp",
      description: "Decorative lantern style lamp",
      category: "Lamp",
      image: lamp9,
      rating: 4.6,
      stock: 22,
      price: 230,
    },
    {
      id: 48,
      name: "Bright Aura Lamp",
      description: "Handmade artistic lamp",
      category: "Lamp",
      image: lamp10,
      rating: 4.7,
      stock: 28,
      price: 195,
    },
    {
      id: 49,
      name: "Festive Glow Lamp",
      description: "Perfect for celebration décor",
      category: "Lamp",
      image: lamp11,
      rating: 4.9,
      stock: 18,
      price: 260,
    },
    // Metal Articles Products
    {
      id: 50,
      name: "Premium Metal Art 1",
      description: "Handcrafted metal decorative piece",
      category: "Metal Articles",
      image: ma1,
      rating: 4.8,
      stock: 20,
      price: 350,
    },
    {
      id: 51,
      name: "Antique Metal Art 2",
      description: "Handmade traditional metal artwork",
      category: "Metal Articles",
      image: ma2,
      rating: 4.7,
      stock: 18,
      price: 420,
    },
    {
      id: 52,
      name: "Classic Metal Art 4",
      description: "Elegant home décor sculpture",
      category: "Metal Articles",
      image: ma4,
      rating: 4.6,
      stock: 22,
      price: 390,
    },
    {
      id: 53,
      name: "Decor Metal Craft 5",
      description: "Beautiful metal carving accessory",
      category: "Metal Articles",
      image: ma5,
      rating: 4.5,
      stock: 25,
      price: 410,
    },
    {
      id: 54,
      name: "Handcrafted Metal Decor 6",
      description: "Artistic metal craft for living space",
      category: "Metal Articles",
      image: ma6,
      rating: 4.8,
      stock: 30,
      price: 380,
    },
    {
      id: 55,
      name: "Metal Sculpture Art 7",
      description: "Unique designer metal structure",
      category: "Metal Articles",
      image: ma7,
      rating: 4.6,
      stock: 28,
      price: 450,
    },
    {
      id: 56,
      name: "Elegant Metal Craft 8",
      description: "Premium interior metal décor",
      category: "Metal Articles",
      image: ma8,
      rating: 4.7,
      stock: 24,
      price: 400,
    },
    {
      id: 57,
      name: "Artistic Metal Masterpiece 9",
      description: "Exclusive metal artistry piece",
      category: "Metal Articles",
      image: ma9,
      rating: 4.9,
      stock: 18,
      price: 480,
    },
    {
      id: 58,
      name: "Royal Metal Artwork 10",
      description: "Luxury handcrafted metal art",
      category: "Metal Articles",
      image: ma10,
      rating: 4.7,
      stock: 20,
      price: 520,
    },
    {
      id: 59,
      name: "Decorative Metal Art 11",
      description: "Ideal for home and office decoration",
      category: "Metal Articles",
      image: ma11,
      rating: 4.8,
      stock: 22,
      price: 390,
    },
    {
      id: 60,
      name: "Designer Metal Craft 12",
      description: "Handmade premium design craft",
      category: "Metal Articles",
      image: ma12,
      rating: 4.6,
      stock: 26,
      price: 420,
    },
    {
      id: 61,
      name: "Ethnic Metal Decor 13",
      description: "Traditional artwork for interiors",
      category: "Metal Articles",
      image: ma13,
      rating: 4.7,
      stock: 24,
      price: 460,
    },
    {
      id: 62,
      name: "Luxury Metal Art 14",
      description: "Premium décor collectible",
      category: "Metal Articles",
      image: ma14,
      rating: 4.9,
      stock: 15,
      price: 550,
    },
    {
      id: 63,
      name: "Classic Art Metal 15",
      description: "Special handcrafted metal piece",
      category: "Metal Articles",
      image: ma15,
      rating: 4.7,
      stock: 30,
      price: 410,
    },
    {
      id: 64,
      name: "Vintage Metal Decor 16",
      description: "Rustic, antique finishing metal art",
      category: "Metal Articles",
      image: ma16,
      rating: 4.8,
      stock: 18,
      price: 480,
    },
    {
      id: 65,
      name: "Metal Art 17",
      description: "Eye-catching metal shaped décor",
      category: "Metal Articles",
      image: ma17,
      rating: 4.7,
      stock: 25,
      price: 460,
    },
    {
      id: 66,
      name: "Shining Metal Craft 18",
      description: "Premium polished metal artwork",
      category: "Metal Articles",
      image: ma18,
      rating: 4.5,
      stock: 28,
      price: 430,
    },
    {
      id: 67,
      name: "Innovative Metal Creation 19",
      description: "Exclusive innovation in metal art",
      category: "Metal Articles",
      image: ma19,
      rating: 4.6,
      stock: 26,
      price: 410,
    },
    {
      id: 68,
      name: "Modern Metal Decor 20",
      description: "Stylish décor for modern spaces",
      category: "Metal Articles",
      image: ma20,
      rating: 4.8,
      stock: 20,
      price: 500,
    },
    {
      id: 69,
      name: "Wall Metal Art 21",
      description: "Metal craft designed for wall decoration",
      category: "Metal Articles",
      image: ma21,
      rating: 4.7,
      stock: 27,
      price: 460,
    },
    {
      id: 70,
      name: "Metal Craft Decor 22",
      description: "Handcrafted metal décor item",
      category: "Metal Articles",
      image: ma22,
      rating: 4.6,
      stock: 32,
      price: 390,
    },
    {
      id: 71,
      name: "Metal Artistic Piece 23",
      description: "Exclusive handmade art",
      category: "Metal Articles",
      image: ma23,
      rating: 4.6,
      stock: 22,
      price: 440,
    },
    {
      id: 72,
      name: "Traditional Metal Symbol 24",
      description: "Indian traditional design",
      category: "Metal Articles",
      image: ma24,
      rating: 4.7,
      stock: 21,
      price: 470,
    },
    {
      id: 73,
      name: "Decor Metal Antique 25",
      description: "Artistic antique metal artwork",
      category: "Metal Articles",
      image: ma25,
      rating: 4.8,
      stock: 19,
      price: 530,
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
    <section className="py-16 bg-white px-4 sm:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-4xl md:text-4xl font-extrabold text-black">
              Our <span className="text-pink-500">Products</span>
            </h2>

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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
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
              <div className="flex items-center bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                {activeFilter}
                <button
                  onClick={() => setActiveFilter("All")}
                  className="ml-2 text-pink-600 hover:text-pink-800"
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
              className="text-sm text-pink-600 hover:text-pink-800 underline"
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
                        ? "bg-pink-700 text-white"
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
                  ? "bg-pink-600 text-white"
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
              className="text-black font-medium underline hover:text-pink-600"
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
