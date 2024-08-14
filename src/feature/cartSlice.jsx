import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  totalQuantity: 0,
  totalAmount: 0,
  totalItem: 0,
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
    },
  },
});
export const { add, remove, deleteOne } = cartSlice.actions;
export default cartSlice.reducer;
