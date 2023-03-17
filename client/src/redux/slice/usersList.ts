import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";

// Type for Users
type InitialType = {
    usersData: UserType[];
};

// Initial Value
const initialState: InitialType = {
    usersData: [],
};

// Slice
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
      getUsersList: (state, action) => {
        state.usersData = action.payload;
      },
    },
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;