import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../../GoT/redux/got.slice";
export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
