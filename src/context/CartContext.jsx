import React, { createContext, useState, useContext } from "react";

// Create Cart Context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);

  // Function to add item to cart (quantity = 1 if new)
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to remove item completely
  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // ✅ Update quantity (+/- buttons)
  const updateQuantity = (productId, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  // ✅ Clear all items
  const clearCart = () => {
    setCartItems([]);
  };

  // Function to complete payment
  const completePayment = () => {
    if (cartItems.length > 0) {
      setPaymentHistory((prevHistory) => [
        ...prevHistory,
        {
          id: Date.now(),
          items: cartItems,
          date: new Date().toLocaleString(),
        },
      ]);
      setCartItems([]); // Empty the cart
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,   // ✅
        clearCart,        // ✅
        paymentHistory,
        completePayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};
