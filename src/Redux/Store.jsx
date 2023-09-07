import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import categorySlice from "./Slices/categorySlice";
import searchSlice from "./Slices/searchSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    category: categorySlice,
    search: searchSlice,
  },
});
export default store;
