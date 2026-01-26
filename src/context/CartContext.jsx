import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add item (merge if exists)
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, qty: i.qty + (item.qty || 1) }
            : i
        );
      }

      return [...prev, { ...item, qty: item.qty || 1 }];
    });
  };

  // ✅ Update quantity safely
  const updateQty = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  // ✅ Remove single item
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ DELETE ALL (clear cart once)
  const clearCart = () => {
    setCartItems([]);
  };

  // ✅ Total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
