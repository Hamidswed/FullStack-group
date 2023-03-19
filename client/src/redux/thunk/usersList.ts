import { usersActions } from "../slice/usersList";
import { AppDispatch } from "../store";
import axios from "axios";

function fetchUsers() {
  return async (dispatch: AppDispatch) => {
    const url = `http://localhost:8000/users`;

    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token} ` },
      });
      dispatch(usersActions.getUsersList(response.data));
      console.log(response.data, "response.data");
    } catch (error) {
      console.log(error);
    }
  };
}
export default fetchUsers;
