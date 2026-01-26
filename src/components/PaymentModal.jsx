import { useCart } from "../context/CartContext";

export default function PaymentModal({ onClose }) {
  const { total } = useCart();

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">
          Checkout
        </h2>

        <p className="mb-6">
          Total Amount:
          <span className="font-bold ml-2">
            ₦{total.toLocaleString()}
          </span>
        </p>

        <button
          className="w-full bg-green-600 text-white py-3 rounded-xl mb-3"
        >
          Pay with Paystack
        </button>

        <button
          onClick={onClose}
          className="w-full border py-3 rounded-xl"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
