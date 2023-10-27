import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import cartSliceReducer from "./slices/cartSlice";
import authSliceReudcer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authSliceReudcer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
