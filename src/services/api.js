import axios from "axios";

export const baseURL = "https://api.escuelajs.co/api/v1";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

api.interceptors.response.use(
  (response) => {
    // Call was successful, continue.
    return response;
  },
  (error) => {
    console.log("🚀 ~ error:", error);
  }
);

export default api;
