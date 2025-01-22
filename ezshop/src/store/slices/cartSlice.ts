import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}
 
interface CartState {
  cartItems: CartItem[];
  totalItems: number;
}
 
// Safely retrieve cart items from localStorage
const getInitialCartItems = (): CartItem[] => {
  try {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  } catch (error) {
    console.error("Failed to parse cart items from localStorage", error);
  }
  return [];
};
 
const initialState: CartState = {
  cartItems: getInitialCartItems(),
  totalItems: getInitialCartItems().length,
};
 
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
      state.totalItems = state.cartItems.length;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalItems = state.cartItems.length;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalItems = 0;
      localStorage.removeItem("cart");
    }, // Not used yet
  },
});
 
export const { addProductToCart, removeProductFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;