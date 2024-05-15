import { toast } from "react-toastify";
import axios from "../axios";

export const getUser = async (auth, setGlobalUser) => {
  try {
    const response = await axios.get("/api/users/current", {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    });
    setGlobalUser(response?.data);
  } catch (error) {
    if (error.message == "Network Error") {
      toast.error("Check your internet connection and reload page.");
    } else {
      toast.error(error.message);
    }
  }
};
