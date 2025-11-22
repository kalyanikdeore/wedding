import React from "react";
import { motion } from "framer-motion";
import { X, ShoppingCart, Trash2, Plus, Minus, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const EmptyCartIllustration = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60 60L44.8 20H20"
      stroke="#CBD5E0"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M180 60H60L74.8 100H154.4C157.6 100 160.4 97.6 161.2 94.4L180 20"
      stroke="#CBD5E0"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <circle cx="80" cy="160" r="20" stroke="#CBD5E0" strokeWidth="8" />
    <circle cx="160" cy="160" r="20" stroke="#CBD5E0" strokeWidth="8" />
    <path
      d="M100 80C100 62.4 114.4 48 132 48C149.6 48 164 62.4 164 80"
      stroke="#3182CE"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M140 80C140 71.2 148 64 157.6 64"
      stroke="#3182CE"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

const CartSidebar = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    itemCount,
    isCartOpen,
    toggleCart,
    clearCart,
  } = useCart();

  const shareOnWhatsApp = () => {
    const storeName = "Wedding Store";
    const storePhone = "917030050044";

    const itemsText = cartItems
      .map(
        (item) =>
          `➤ ${item.name}${item.size ? ` (${item.size})` : ""}%0A   Quantity: ${
            item.quantity
          }`
      )
      .join("%0A%0A");

    const message = `*${storeName} - Order Summary*%0A%0A${itemsText}%0A%0A_I'd like to proceed with this order!_%0A%0AThank you! 😊`;

    const whatsappUrl = `https://wa.me/${storePhone}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? "block" : "hidden"}`}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        onClick={toggleCart}
      />

      {/* Cart Panel */}
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="border-b p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <ShoppingCart size={20} className="text-blue-600" />
              <h3 className="text-xl font-bold">Your Cart ({itemCount})</h3>
            </div>
            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                <>
                  <button
                    onClick={shareOnWhatsApp}
                    className="text-sm text-green-600 hover:text-green-700 flex items-center gap-1"
                    title="Share cart on WhatsApp"
                  >
                    <Share2 size={16} />
                  </button>
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1"
                  >
                    <Trash2 size={16} />
                    <span>Clear</span>
                  </button>
                </>
              )}
              <button
                onClick={toggleCart}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 flex flex-col items-center h-full justify-center">
                <EmptyCartIllustration />
                <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                <Link
                  to="/products"
                  onClick={toggleCart}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  <ShoppingCart size={18} />
                  <span>Start Shopping</span>
                </Link>
              </div>
            ) : (
              <ul className="divide-y">
                {cartItems.map((item) => (
                  <li key={`${item.id}-${item.addedAt}`} className="py-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium">{item.name}</span>
                        </div>

                        {item.size && (
                          <p className="text-xs text-gray-500 mt-1">
                            Size: {item.size}
                          </p>
                        )}

                        <div className="flex justify-between items-center mt-3">
                          <div className="flex items-center border rounded-md overflow-hidden">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 w-10 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1"
                          >
                            <Trash2 size={14} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-4 bg-gray-50">
              <button
                onClick={shareOnWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-center font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Share2 size={18} />
                <span>Checkout via WhatsApp</span>
              </button>

              <Link
                to="/products"
                onClick={toggleCart}
                className="block mt-3 text-center text-blue-600 hover:text-blue-800 hover:underline text-sm"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
