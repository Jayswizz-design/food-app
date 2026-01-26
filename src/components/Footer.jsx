import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { cart = [], total = 0 } = useCart(); // fallback if undefined
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <footer className="bg-green-800 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-8">

        {/* Logo & Description */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-2xl font-bold">FoodApp</h1>
          <p className="text-gray-200 max-w-sm mx-auto md:mx-0">
            Delivering fresh and delicious meals to your doorstep. Join thousands of happy customers enjoying convenient, tasty food every day.
          </p>

          {/* Cart Summary */}
          <Link
            to="/cart"
            className="mt-4 block p-3 bg-green-700 rounded-lg text-center md:text-left hover:bg-green-600 transition"
          >
            <div>
              <h3 className="font-semibold text-lg mb-1">Cart Summary</h3>
              <div className="flex justify-between text-gray-100">
                <span>Items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between text-gray-100">
                <span>Total:</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="font-semibold text-lg">Quick Links</h2>
          <ul className="flex flex-col gap-1 text-gray-200">
            <li><Link to="/" className="hover:text-green-300 transition-colors duration-300">Home</Link></li>
            <li><Link to="/menu" className="hover:text-green-300 transition-colors duration-300">Menu</Link></li>
            <li><Link to="/about" className="hover:text-green-300 transition-colors duration-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-green-300 transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="font-semibold text-lg">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-transform duration-300 hover:scale-110">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-transform duration-300 hover:scale-110">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-transform duration-300 hover:scale-110">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-transform duration-300 hover:scale-110">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-green-700 mt-8 pt-6 text-gray-300 text-sm text-center">
        &copy; {new Date().getFullYear()} FoodApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
