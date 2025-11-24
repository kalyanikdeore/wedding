import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product, index }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
        <div className="relative h-60   overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110">
            <Heart className="w-4 h-4 text-rose-500" />
          </button>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <Link to={`/product/${product.id}`}>
              <h3 className="font-medium text-gray-900 line-clamp-1 hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
            </Link>
          </div>

          {product.size && (
            <p className="text-xs text-gray-500 mb-2">Size: {product.size}</p>
          )}

          <div className="flex justify-between items-center mt-3">
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-7 text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden md:flex">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
