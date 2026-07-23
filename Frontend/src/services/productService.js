import apiClient from "./apiClient";

export const getProducts = async () => {
  try {
    const res = await apiClient.get("/api/product/addlist");
    return res.data;
  } catch (error) {
    return { success: false, products: [] };
  }
};
