import { updateCartValue } from "./updateCardValue";

export const getProductDataFromLocalStorage = () => {
  let porductData = localStorage.getItem("productData");
  if (!porductData) {
    return [];
  }
  porductData = JSON.parse(porductData);

  updateCartValue(porductData);

  return porductData;
};
