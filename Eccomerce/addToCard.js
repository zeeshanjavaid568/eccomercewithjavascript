import { getProductDataFromLocalStorage } from "./getProductDataFromLocalStorage";

export const addToCard = (event, id, stock) => {
  const getProductDataLocalStorage = getProductDataFromLocalStorage();

  const currentPorductElement = document.querySelector(`#card${id}`);
  let productQuantity = currentPorductElement.querySelector(".productQuantity").innerText;
  let price = currentPorductElement.querySelector(".productPrice").innerText;

  console.log(productQuantity, price);

  price = price.replace("(PKR):", "");
  price = Number(price * productQuantity);
  productQuantity = Number(productQuantity);
  console.log("🚀 ~ addToCard ~ price:", price, "Quantity", productQuantity);

  getProductDataLocalStorage.push({ id, productQuantity, price });
  localStorage.setItem(
    "productData",
    JSON.stringify(getProductDataLocalStorage)
  );
};
