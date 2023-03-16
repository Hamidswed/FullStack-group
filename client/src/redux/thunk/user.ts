import { userActions } from "../slice/user";
import { AppDispatch } from "../store";
import axios from "axios";

function fetchUser(userId: string | null) {
  return async (dispatch: AppDispatch) => {
    if (!userId) {
      return { message: "no such user " };
    }
    const url = `http://localhost:8000/users/${userId}`;

    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token} ` },
      });
      dispatch(userActions.getUser(response.data));
      console.log(response.data, "response.data");
    } catch (error) {
      console.log(error);
    }
  };
}
export default fetchUser;
