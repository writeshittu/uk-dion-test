import axios from "axios";
import BASE_URL from "../utility/baseURL";

export const passwordReset = async (userData, callBackFunction) => {
  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      `${BASE_URL}reset-password`,
      userData,
      config.headers
    );
    callBackFunction(response.status);
    // console.log(response);
  } catch (err) {
    // console.log(err.response.data);

    callBackFunction(err.response.data);
  }
};
