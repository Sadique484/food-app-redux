import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { addToCart } from "../Redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
const FoodCard = ({ id, img, name, desc, rating, price, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold flex flex-col rounded-lg p-5 bg-white w-[250px] gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] transition-all ease-in-out cursor-grab hover:scale-110 duration-500 overflow-hidden"
      />
      <div className="text-sm flex justify-between">
        <h2 className="font-bold">{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          {rating} <AiFillStar className="ml-1 text-yellow-400" />
        </span>
        <button
          className="p-1 text-white bg-green-500 hover:bg-green-600 text-sm rounded-lg "
          onClick={() => {
            {
              dispatch(addToCart({ id, price, name, img, rating, qty: 1 }));
            }
            handleToast(name);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
