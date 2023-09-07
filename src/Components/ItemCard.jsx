import React from "react";
import { GoPlus, GoHorizontalRule } from "react-icons/go";
import { AiFillDelete } from "react-icons/ai";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../Redux/Slices/cartSlice";

import { useDispatch } from "react-redux";

const ItemCard = ({ id, price, img, name, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-md p-2 mb-3 " key={id}>
      <AiFillDelete
        className="text-gray-700 cursor-pointer right-7 absolute hover:text-red-500"
        onClick={() => {
          dispatch(removeFromCart({ id, price, img, name }));
        }}
      />
      <div>
        <img src={img} alt="pizza" className="w-[50px]" />
      </div>
      <div>
        <h3 className="font-bold text-gray-500">{name}</h3>
        <div className="flex justify-between">
          <span className="text-bold text-green-500">₹{price}</span>
          <div className="flex justify-center gap-2 right-7 absolute">
            <GoHorizontalRule
              className="border-2 border-gray-500 rounded-md text-gray-600 hover:text-white text-xl p-1 hover:border-none hover:bg-red-500 transition-all ease-in-out duration-500 cursor-pointer"
              onClick={() =>
                qty > 1
                  ? dispatch(decrementQuantity({ id }))
                  : alert("Qty can not be 0")
              }
            />
            <span>{qty}</span>
            <GoPlus
              className="border-2 border-gray-500 rounded-md text-gray-500 hover:text-white text-xl p-1 hover:border-none hover:bg-green-600 transition-all ease-in-out duration-500 cursor-pointer"
              onClick={() => {
                dispatch(incrementQuantity({ id }));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
