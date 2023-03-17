import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";

type InitialType = {
  userList: UserType[];
};

const initialState: InitialType = {
  userList: [],
};

const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const userListActions = userListSlice.actions;
export default userListSlice.reducer;
