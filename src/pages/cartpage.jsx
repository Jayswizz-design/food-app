import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQty } = useCart();
  const navigate = useNavigate();

  // Calculate total
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <p className="p-6 text-center text-gray-500 text-lg">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded shadow-sm"
          >
            {/* Item info */}
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">{item.name}</span>
              <span className="text-gray-500">
                {item.price.toLocaleString()} Each
              </span>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
                className="flex items-center justify-center w-8 h-8 border rounded-lg text-gray-700 hover:bg-gray-200 transition"
                disabled={item.qty <= 1}
              >
                <FiMinus />
              </button>

              <span className="px-2 font-medium">{item.qty}</span>

              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
                className="flex items-center justify-center w-8 h-8 border rounded-lg text-gray-700 hover:bg-gray-200 transition"
              >
                <FiPlus />
              </button>

              {/* Remove button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-2 text-red-500 hover:text-red-600 transition"
              >
                <FiTrash2 />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Total & Checkout */}
      <div className="mt-6 p-4 bg-gray-50 rounded shadow flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-lg font-bold text-gray-800">
          Total: ₦{totalAmount.toLocaleString()}
        </div>

        <button
          onClick={() => navigate("/order")}
          className="w-full md:w-auto bg-orange-600 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:bg-orange-700 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
