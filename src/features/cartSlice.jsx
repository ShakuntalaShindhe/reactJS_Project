 import { createSlice } from "@reduxjs/toolkit";
 const initialState = [];


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      add(state, action) {
        state.push(action.payload);
      },
      remove(state, action) {
        return state.filter((item) => item.id !== action.payload);
      },
      increaseQuantity(state, action) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      },
      decreaseQuantity(state, action) {
        return state.map((item) =>
         item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    }
  });
  export const { add, remove, increaseQuantity, decreaseQuantity } = cartSlice.actions;
  export default cartSlice.reducer;
  
