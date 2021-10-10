import axios from "axios";
import Cookies from "js-cookie";
import BASE_URL from "../utility/baseURL";

export const loginUser = async (userData, callBackFunction) => {
  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      `${BASE_URL}login`,
      userData,
      config.headers
    );
    Cookies.set("accessToken", response.data.access_token);
    callBackFunction(response.status);
    // console.log(response);
  } catch (err) {
    console.log(err.response);
    // if (err.response.status === 422) {

    // }
    callBackFunction(err.response.data);
  }
};
