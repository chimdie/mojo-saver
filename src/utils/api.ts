import Axios from "axios";
import { userData } from "./constants";
import { callToast } from ".";

const _token = userData()?.token || "";

const AxiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL,
  headers: {
    "Content-Type": "application/json",
    ...(_token && { Authorization: `Bearer ${_token}` })
  }
});

// Axios response Interceptors
AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      !window.navigator.onLine &&
      !error.response &&
      error.code === "ERR_NETWORK"
    ) {
      callToast("Error", "error", "no internet connection");
      return Promise.reject(new Error("no internet connection"));
    } else {
      if (error.response) {
        const { status } = error.response;
        if (status === 500) {
          const errMessage = "Internal server error";
          callToast("Error", "error", errMessage);
          return Promise.reject(new Error(errMessage));
        } else if (status === 401) {
          const errMessage = "Incorrect email and password combination.";
          callToast("Incorrect Details", "error", errMessage);
          return Promise.reject(new Error(errMessage));
        }
        const customError = error.response.data
          ? error.response.data.message
          : "Error: Something went wrong";
        callToast("Error", "error", customError);
        return Promise.reject(new Error(customError));
      }
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
