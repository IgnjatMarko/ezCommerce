import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import cartSlice from "./slices/cartSlice";
import formReducer from "./slices/formSlice";
 
const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    form: formReducer,
  },
});
 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
 
export default store;