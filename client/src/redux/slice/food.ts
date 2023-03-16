import { createSlice } from "@reduxjs/toolkit";
import { FoodType } from "../../types/foodType";

type InitialType = {
  food: FoodType[];
};

const initialState: InitialType = {
  food: [],
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    getFoodList: (state, action) => {
      state.food = action.payload;
    },
  },
});

export const foodActions = foodSlice.actions;
export default foodSlice.reducer;
