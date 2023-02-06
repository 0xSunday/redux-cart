import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCart = { item: 0, price: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    increment(state) {
      state.item++;
      state.price = state.price + 6;
    },
    decrement(state) {
      state.item--;
      state.price = state.price + -6;
    },
    addPrice(state) {},
    removePrice(state) {},
  },
});

const initialButton = { button: false };

const buttonSlice = createSlice({
  name: "button",
  initialState: initialButton,
  reducers: {
    buttonToggle(state) {
      state.button = !state.button;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    button: buttonSlice.reducer,
  },
});

export const cartAction = cartSlice.actions;
export const buttonAction = buttonSlice.actions;
export default store;
