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
      } else {
        existingItem.quantity++;
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) =>
          total + Number(item.reviewCount) * Number(item.quantity),
        0
      );
    },
  },
});
export const { add } = cartSlice.actions;
export default cartSlice.reducer;
