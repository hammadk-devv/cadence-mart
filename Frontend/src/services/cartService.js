import apiClient from "./apiClient";

export const getCart = async () => {
  const res = await apiClient.post("/api/cart/get");
  return res.data;
};

export const addToCart = async (itemId, quantity) => {
  const res = await apiClient.post("/api/cart/add", { itemId, quantity });
  return res.data;
};

export const updateCartQuantity = async (itemId, quantity) => {
  const res = await apiClient.post("/api/cart/update", { itemId, quantity });
  return res.data;
};
