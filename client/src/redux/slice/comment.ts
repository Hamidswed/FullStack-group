import { createSlice } from "@reduxjs/toolkit";
import { CommentType } from "../../types/commentType";

type InitialType = {
  comments: CommentType[];
};
const initialState: InitialType = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getCommentByFoodId: (state, action) => {
      state.comments = action.payload;
    },
    getAllComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice.reducer;
