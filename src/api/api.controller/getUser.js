import { toast } from "react-toastify";
import axios from "../axios";

export const getUser = async (auth, setGlobalUser, navigate) => {
  try {
    const response = await axios.get("/api/users/current", {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    });
    setGlobalUser(response?.data);
  } catch (error) {
    if (error.response) {
      if (
        error.response.data.message ===
        "User is not authorized or token expired"
      ) {
        toast.error(error.response.data.message);
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      }
      toast.error(error.response.data.message);
    } else {
      toast.error(error.message, { position: "top-left" });
    }
  }
};
