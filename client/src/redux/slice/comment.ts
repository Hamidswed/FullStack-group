import { createSlice } from "@reduxjs/toolkit";
import { CommentType } from "../../types/commentType";

type InitialType = {
  comments: CommentType[];
  allComments: CommentType[];
};
const initialState: InitialType = {
  comments: [],
  allComments: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getCommentByFoodId: (state, action) => {
      state.comments = action.payload;
    },
    getAllcomments: (state, action) => {
      state.allComments = action.payload;
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice.reducer;
