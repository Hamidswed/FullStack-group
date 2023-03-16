import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./slice/comment";
import foodReducer from "./slice/food";
import userReducer from "./slice/user";

const store = configureStore({
  reducer: {
    comment: commentReducer,
    food: foodReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
