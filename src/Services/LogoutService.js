import axios from "axios";
import BASE_URL from "../utility/baseURL";

export const logoutUser = async (callbackFn) => {
  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };
  try {
    const response = await axios.get(`${BASE_URL}logout`, config);

    callbackFn(response.status);
    // console.log(response.data);
  } catch (err) {
    console.log(err.response);
  }
};
