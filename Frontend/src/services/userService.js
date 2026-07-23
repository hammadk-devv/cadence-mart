import apiClient from "./apiClient";

export const registerUser = async (name, email, password) => {
  const res = await apiClient.post("/api/user/register", { name, email, password });
  return res.data;
};

export const loginUser = async (email, password) => {
  const res = await apiClient.post("/api/user/login", { email, password });
  return res.data;
};

export const getUserDetails = async () => {
  const res = await apiClient.get("/api/user/user-details");
  return res.data;
};
