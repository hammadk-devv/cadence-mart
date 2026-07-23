import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:4000",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.token = token; // backward compatibility fallback
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.reload();
    }

    const message = error.response?.data?.message || error.message || "Something went wrong";
    const parsedError = {
      success: false,
      message,
      status: error.response?.status,
      code: error.code || "NETWORK_ERROR",
      details: error.response?.data?.error?.details || {},
      original: error,
    };
    return Promise.reject(parsedError);
  }
);

export default apiClient;
