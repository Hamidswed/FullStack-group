import { AppDispatch } from "../store";
import { url } from "../../App";
import { commentActions } from "./../slice/comment";

export function fetchCommentByFoodId(foodId: string) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`${url}/comments/${foodId}`);
    const data = await response.json();
    console.log(data, "commet in thunk");
    dispatch(commentActions.getCommentByFoodId(data));
  };
}
