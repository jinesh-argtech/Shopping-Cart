import { createSlice } from "@reduxjs/toolkit";

// Function to load cart from local storage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (error) {
    console.error("Error loading cart from local storage:", error);
    return [];
  }
};

// Function to save cart to local storage
const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (error) {
    console.error("Error saving cart to local storage:", error);
  }
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(), // Load initial state from local storage
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      saveCartToLocalStorage(state); // Save cart to local storage after modification
    },
    remove: (state, action) => {
      const newState = state.filter((item) => item._id !== action.payload);
      saveCartToLocalStorage(newState); // Save cart to local storage after modification
      return newState;
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
