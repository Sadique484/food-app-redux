import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../Redux/Slices/searchSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-5">
      <div>
        <h3 className="text-gray-600 text-xs font-bold mb-2">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-4xl font-bold text-red-700">
          {" "}
          Flavourful <span className="text-green-700">Foods</span>
        </h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          placeholder="Search Here"
          id=""
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
          autoComplete="off"
          className="border text-sm border-gray-400 outline-none p-3 rounded-lg w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
