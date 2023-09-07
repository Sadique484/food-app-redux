import React from "react";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Slices/categorySlice";
const CategoryMenu = () => {
  const selectedCategory = useSelector((state) => state.category.category);
  console.log("Selected category: ", selectedCategory);
  function getUniqueCategories(data) {
    const uniqueCategories = [];

    FoodData.forEach((item) => {
      if (!uniqueCategories.includes(item.category)) {
        uniqueCategories.push(item.category);
      }
    });
    return uniqueCategories;
  }
  const dispatch = useDispatch();

  const uniqueCategories = getUniqueCategories(FoodData);
  return (
    <div className="ml-6">
      <h1 className="text-xl font-semibold text-green-600 mb-5">
        Find the food you want
      </h1>
      <div className="my-3 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {uniqueCategories.map((category) => (
          <button
            onClick={() => {
              dispatch(setCategory(category));
            }}
            key={category} // Add a unique key to each button if possible
            className={`px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-white ${
              selectedCategory === category && "bg-green-500 text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
