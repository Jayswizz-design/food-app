import React from "react";
import FoodCard from "../components/FoodCard";
import { foodMenu } from "../data/FoodData";

const Home = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {foodMenu.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default Home;
