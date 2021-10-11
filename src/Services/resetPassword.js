import axios from "axios";
import Cookies from "js-cookie";
import BASE_URL from "../utility/baseURL";

export const passwordReset = async (userData, callBackFunction) => {
  let email = Cookies.get("email");
  let token = Cookies.get("resetpasswordToken");
  const resetUserData = { ...userData, token, email };

  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      `${BASE_URL}reset-password`,
      resetUserData,
      config.headers
    );
    if (response.status === 202) {
      Cookies.remove("resetpasswordToken");
      Cookies.remove("email");
    }
    callBackFunction(response.status);

    // console.log(response);
  } catch (err) {
    // console.log(err.response.data);

    callBackFunction(err.response.data);
  }
};
