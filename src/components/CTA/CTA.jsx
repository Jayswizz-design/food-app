// src/components/CTA/CTA.jsx
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-orange-600 py-16 px-6 sm:px-10 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row
                      items-center justify-between gap-10 text-white">

        {/* Text content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Hungry? Order Now & Eat Fresh
          </h2>
          <p className="text-base sm:text-lg opacity-90 max-w-md md:max-w-xl mx-auto lg:mx-0">
            Freshly prepared Nigerian meals delivered fast.
            No stress. No delays. Just good food.
          </p>
        </div>

        {/* Button */}
        <Link
          to="/order"
          className="mt-6 lg:mt-0 inline-block bg-white text-orange-600 px-8 sm:px-10 py-3 sm:py-4 rounded-xl
                     font-semibold text-base sm:text-lg hover:bg-gray-100 transition"
        >
          Start Your Order
        </Link>
      </div>
    </section>
  );
}
