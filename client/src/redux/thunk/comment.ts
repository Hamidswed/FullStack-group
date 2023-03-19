import { AppDispatch } from "../store";
import { url } from "../../App";
import { commentActions } from "./../slice/comment";
import axios from "axios";

export function fetchCommentByFoodId(foodId: string) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`${url}/comments/${foodId}`);
    const data = await response.json();
    console.log(data, "comment in thunk");
    dispatch(commentActions.getCommentByFoodId(data));
  };
}
export function fetchComments() {
  return async (dispatch: AppDispatch) => {
    const url = `http://localhost:8000/comments`;
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token} ` },
      });
      dispatch(commentActions.getAllComments(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
