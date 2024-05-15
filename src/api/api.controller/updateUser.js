import { toast } from "react-toastify";
import axios from "../axios";

export const updateUser = async (auth, setGlobalUser, valueToUpdate) => {
  const id = auth.id; //Because backend expects just 'id' in the param (I could be wrong) - I set the 'id' in global auth during login
  try {
    const response = await axios.put(
      `/api/users/current/${id}`,
      JSON.stringify({ valueToUpdate }),
      {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    setGlobalUser(response?.data);
    toast.success("Update successful.");
  } catch (error) {
    if (error.message == "Network Error") {
      toast.error("Failed. Check your internet connection and try again.");
    } else {
      toast.error(error.message);
    }
  }
};

//   Still on this -- I'd test with Thunder Client first
