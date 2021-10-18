import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
export const login = async (user, dispatch) => {
  const url = "http://localhost:8800/api/";
  dispatch(loginStart());
  try {
    const res = await axios.post(url + "auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
    console.log("You have been login Successfully");
  } catch (err) {
    dispatch(loginFailure());
  }
};
