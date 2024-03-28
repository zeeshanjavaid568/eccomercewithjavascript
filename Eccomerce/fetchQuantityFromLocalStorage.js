import { getProductDataFromLocalStorage } from "./getProductDataFromLocalStorage";

export const fetchQuantityFromLocalStorage = (id, price) => {
  let cartProducts = getProductDataFromLocalStorage();

  let existingProducts = cartProducts.find(
    (curProduct) => curProduct.id === id
  );
  let productQuantity = 1;

  if (existingProducts) {
    productQuantity = existingProducts.productQuantity;
    price = existingProducts.price;
  }
  return { productQuantity, price };
};
