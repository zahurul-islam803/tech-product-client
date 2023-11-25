import axios from "axios";
import { clearCookie } from "./auth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  withCredentials: true,
});

// intercept response check an unauthorized response
axiosSecure.interceptors.response.use(
  (response) => response,
  async (err) => {
    console.log("error from interceptor", err);
    if (
      err.response &&
      (err.response.status === 401 || err.response.status === 403)
    ) {
      await clearCookie();
      window.location.replace("/login");
    }
    return Promise.reject(err);
  }
);

export default axiosSecure;
