import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/slices/authSlice";
import { apiSlice } from "./features/slices/apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
