import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("weddingStoreCart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        setCartItems([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("weddingStoreCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          quantity: 1,
          addedAt: Date.now(),
        },
      ];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    itemCount,
    isCartOpen,
    toggleCart,
    clearCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook with safety check
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    // Return a default implementation if context is not available
    console.warn(
      "useCart must be used within a CartProvider. Using fallback implementation."
    );
    return {
      cartItems: [],
      addToCart: () => console.warn("Cart not available"),
      removeFromCart: () => console.warn("Cart not available"),
      updateQuantity: () => console.warn("Cart not available"),
      cartTotal: 0,
      itemCount: 0,
      isCartOpen: false,
      toggleCart: () => console.warn("Cart not available"),
      clearCart: () => console.warn("Cart not available"),
      closeCart: () => console.warn("Cart not available"),
    };
  }
  return context;
};
