import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
const url = "http://localhost:8800/api/";
export const login = async (user, dispatch, setErrormessage) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(url + "auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    setErrormessage("Your email and password are incorrect");
  }
};
