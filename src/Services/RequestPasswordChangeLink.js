import axios from "axios";
import BASE_URL from "../utility/baseURL";

export const RequestPasswordresetLink = async (userData, callBackFunction) => {
  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      `${BASE_URL}forgot-password`,
      userData,
      config.headers
    );
    callBackFunction(response.status);
    // console.log(response);
  } catch (err) {
    // console.log(err.response);

    callBackFunction(err.response.data);
  }
};
