import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  totalQuantity: 0,
  totalAmount: 0,
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
    },

    remove(state, action) {
      const id = action.payload.id;
      const existingId = state.cartItem.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingId) {
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
      } else {
        console.log("mui");
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) =>
          total + Number(item.reviewCount) * Number(item.quantity),
        0
      );
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
