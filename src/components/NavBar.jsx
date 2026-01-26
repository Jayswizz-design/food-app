import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiMenu, FiX, FiShoppingCart, FiInfo } from "react-icons/fi";

const linkDetails = [
 {
    name: "Home",
    path: "/",
    note: "Return to the homepage to see featured dishes and offers",

  },
  {
    name: "Menu",
    path: "/menu",
    note: "Explore our wide selection of Nigerian dishes",

  },
  {
    name: "About",
    path: "/about",
    note: "Learn about our story and commitment to quality food",

  },
  {
    name: "Contact",
    path: "/contact",
    note: "Reach out to us for feedback or inquiries",

  },
];

const Navbar = () => {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold">
            FoodApp
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4 font-bold">
            {linkDetails.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className="px-4 py-2 hover:text-gray-200 transition rounded-md"
                >
                  {link.name}
                </Link>

                {/* Tooltip / Note */}
                <div className="absolute left-0 mt-2 w-64 p-3 text-sm text-gray-200 rounded-lg opacity-0 group-hover:opacity-100 transition bg-black/70 backdrop-blur-sm z-50">
                  <p>{link.note}</p>
                </div>
              </div>
            ))}

            {/* Cart */}
            <Link
              to="/cart"
              className="flex items-center px-4 py-2 hover:text-gray-200 transition rounded-md font-bold"
            >
              <FiShoppingCart className="mr-1" /> ({cartItems.length})
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-white"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-600 px-4 pt-2 pb-4 space-y-2 font-bold">
          {linkDetails.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block relative px-4 py-3 rounded-md hover:bg-green-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              {/* Background Image */}
              <div
                className={`absolute inset-0 rounded-md opacity-20 ${link.bg} bg-cover bg-center`}
              ></div>
              {/* Note */}
              <p className="text-xs text-gray-200 mt-1 relative z-10">{link.note}</p>
            </Link>
          ))}

          {/* Cart */}
          <Link
            to="/cart"
            className="block px-4 py-3 rounded-md hover:bg-green-500 transition flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <FiShoppingCart className="mr-1 relative z-10" /> ({cartItems.length})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
