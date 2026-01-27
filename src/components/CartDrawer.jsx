import { useCart } from "../context/cartcontext";
import { useRef, useState } from "react";
import PaymentModal from "./PaymentModal";
import { FiX, FiTrash2, FiMinus, FiPlus } from "react-icons/fi";

export default function CartDrawer() {
  const {
    cart = [],
    updateQty,
    removeFromCart,
    total = 0,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const [showPayment, setShowPayment] = useState(false);
  const startY = useRef(0);

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    if (currentY - startY.current > 80) {
      setIsCartOpen(false);
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <aside
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="fixed right-0 top-0 h-screen bg-white z-50 shadow-2xl
                   w-full sm:w-[420] flex flex-col transition-transform"
      >
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500 hover:text-gray-800 transition"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Your cart is empty</p>
              <img
                src="/images/empty-cart.png"
                alt="Empty cart"
                className="mx-auto mt-4 rounded-lg shadow-lg"
              />
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item.image || "/images/placeholder.png"}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded-lg"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                    <p className="text-lg font-bold text-gray-900 mt-2">
                      ₦{item.price?.toLocaleString() || 0}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() =>
                        updateQty(item.id, Math.max(item.qty - 1, 1))
                      }
                      className="flex items-center justify-center w-8 h-8 border rounded-lg text-gray-700 hover:bg-gray-200 transition"
                    >
                      <FiMinus />
                    </button>

                    <span className="font-medium">{item.qty}</span>

                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="flex items-center justify-center w-8 h-8 border rounded-lg text-gray-700 hover:bg-gray-200 transition"
                    >
                      <FiPlus />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-red-500 hover:text-red-600 transition"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t sticky bottom-0 bg-white shadow-t-lg">
          <div className="flex justify-between text-lg font-bold text-gray-800 mb-2">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between text-lg font-bold text-gray-800 mb-4">
            <span>Total</span>
            <span>₦{total?.toLocaleString() || 0}</span>
          </div>

          <button
            onClick={() => setShowPayment(true)}
            disabled={cart.length === 0}
            className={`w-full py-3 rounded-xl font-semibold shadow-md transition
              ${cart.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-orange-600 text-white hover:bg-orange-700"
              }`}
          >
            Checkout
          </button>
        </div>
      </aside>

      {/* Payment Modal */}
      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} />}
    </>
  );
}
