import { configureStore } from "@reduxjs/toolkit";
import carrello from "./slices/carello";

export const store = configureStore({
  reducer: {
    carrello,
  },
});
