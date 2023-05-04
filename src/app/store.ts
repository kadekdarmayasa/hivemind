import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "../features/dropdown/dropdownSlice";

export const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;