export const toCartDTO = (cartData) => {
  if (!cartData) return {};
  const normalized = {};
  Object.keys(cartData).forEach((key) => {
    normalized[key] = {
      quantity: cartData[key].quantity !== undefined ? cartData[key].quantity : cartData[key],
    };
  });
  return normalized;
};
