import axios from "axios";
import Cookies from "js-cookie";
import BASE_URL from "../utility/baseURL";
import setAuthToken from "../utility/SetGlobalAuthToken";

export const logoutUser = async () => {
  setAuthToken(Cookies.get("accessToken"));
  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };
  try {
    const response = await axios.delete(`${BASE_URL}logout`, config);
    if (response.status === 200) {
      Cookies.remove("accessToken");
      Cookies.remove("username");
    }
    // console.log(response.status);
  } catch (err) {
    console.log(err.response);
  }
};
