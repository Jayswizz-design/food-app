import React from "react";
import { useCart } from "../context/CartContext";

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={food.image} alt={food.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{food.name}</h2>
      <p className="text-gray-700">{food.description}</p>
      <p className="font-semibold mt-1">{food.price}</p>
      <button
        onClick={() => addToCart(food)}
        className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FoodCard;
