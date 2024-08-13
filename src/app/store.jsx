import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../feature/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
