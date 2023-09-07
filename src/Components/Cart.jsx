import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const totalQuantity = cartItems.reduce(
    (totalQuantity, item) => totalQuantity + item.qty,
    0
  );
  const totalAmount = cartItems.reduce(
    (totalAmount, item) => totalAmount + item.qty * item.price,
    0
  );
  return (
    <div>
      <div
        className={`fixed right-0 transition-all duration-500 z-50 top-0 bg-white lg:w-[20vw] h-full w-full p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between my-2 p-5">
          <span className="text-gray-700 text-xl font-semibold">My Orders</span>
          <IoMdClose
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer"
            onClick={() => setActiveCart(!activeCart)}
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((items) => {
            return (
              <ItemCard
                key={items.id}
                id={items.id}
                price={items.price}
                img={items.img}
                name={items.name}
                qty={items.qty}
              />
            );
          })
        ) : (
          <h1 className="text-xl text-yellow-600 text-center mt-32">
            Your Cart is Empty
          </h1>
        )}

        <div className="absolute bottom-0 ">
          <h3>
            Items :{" "}
            <span className="font-bold text-green-600">{totalQuantity}</span>
          </h3>
          <h3>
            Total Amount :{" "}
            <span className="font-bold text-green-600">{totalAmount}</span>
          </h3>
          <hr className="my-2 w-[90vw] lg:w-[18vw] " />
          {totalQuantity > 0 ? (
            <button
              className="bg-green-500 text-white w-[90vw] lg:w-[18vw] px-3 py-2 rounded-lg font-bold mb-5"
              onClick={() => {
                navigate("/success");
              }}
            >
              Check Out
            </button>
          ) : (
            <button className="bg-gray-500 text-white w-[90vw] lg:w-[18vw] px-3 py-2 rounded-lg font-bold mb-5 cursor-default">
              Check Out
            </button>
          )}
        </div>
      </div>
      <BsFillBagCheckFill
        onClick={() => {
          setActiveCart(!activeCart);
        }}
        className="bottom-4 fixed right-4 p-3 bg-gray-700 text-green-400 text-5xl shadow-md cursor-pointer rounded-md"
      />
      <span className="bottom-11 fixed right-5 text-white font-thin text-sm">
        {totalQuantity}
      </span>
    </div>
  );
};

export default Cart;
