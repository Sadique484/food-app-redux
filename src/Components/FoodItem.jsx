import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData";
import Toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux/es/hooks/useSelector";
const FoodItem = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleToast = (name) => Toast.success(`${name} added to cart.`);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());
          } else
            return (
              category === food.category &&
              food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            );
        }).map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              rating={food.rating}
              desc={food.desc}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodItem;
