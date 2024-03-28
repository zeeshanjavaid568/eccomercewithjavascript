import { getProductDataFromLocalStorage } from "./getProductDataFromLocalStorage";
import { updateCartValue } from "./updateCardValue";

export const removeProdFromCart = (id) => {
  let cartProducts = getProductDataFromLocalStorage();

  cartProducts = cartProducts.filter((curProduct) => curProduct.id !== id);

  localStorage.setItem("productData", JSON.stringify(cartProducts));

  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();
  }

  updateCartValue(cartProducts);
};
