import { createSlice } from "@reduxjs/toolkit";

const cartItem =
  localStorage.getItem("cartItem") !== null
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [];
const totalQuantity = JSON.parse(localStorage.getItem("totalQuantity"));
const totalAmount = JSON.parse(localStorage.getItem("totalAmount"));
const totalItem = JSON.parse(localStorage.getItem("totalItem"));

const initialState = {
  cartItem: cartItem,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
  totalItem: totalItem,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItem.push(action.payload);
        newItem.quantity = 1;
        newItem.singleTotal = newItem.reviewCount;
        state.totalItem++;
      } else {
        existingItem.quantity++;
        existingItem.singleTotal =
          existingItem.reviewCount * existingItem.quantity;
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) =>
          total + Number(item.reviewCount) * Number(item.quantity),
        0
      );
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      localStorage.setItem("totalItem", JSON.stringify(state.totalItem));
    },

    deleteOne(state, action) {
      const id = action.payload.id;
      const existingId = state.cartItem.find((item) => item.id === id);

      if (existingId.quantity === 1) {
        state.totalQuantity--;
        state.totalAmount = state.totalAmount - existingId.reviewCount;
        state.totalItem--;
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
      } else {
        state.totalQuantity--;
        existingId.quantity--;
        state.totalAmount = state.totalAmount - existingId.reviewCount;
        existingId.singleTotal =
          existingId.singleTotal - existingId.reviewCount;
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      localStorage.setItem("totalItem", JSON.stringify(state.totalItem));
    },

    remove(state, action) {
      const newItem = action.payload;
      const existingId = state.cartItem.find((item) => item.id === newItem.id);
      state.totalQuantity = state.totalQuantity - newItem.quantity;
      state.totalItem--;

      if (existingId) {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== newItem.id
        );
      } else {
        console.log("mui");
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) =>
          total + Number(item.reviewCount) * Number(item.quantity),
        0
      );
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      localStorage.setItem("totalItem", JSON.stringify(state.totalItem));
    },
  },
});
export const { add, remove, deleteOne } = cartSlice.actions;
export default cartSlice.reducer;
