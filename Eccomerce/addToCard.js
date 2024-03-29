import { showToast } from "../showToast";
import { getProductDataFromLocalStorage } from "./getProductDataFromLocalStorage";
import { updateCartValue } from "./updateCardValue";

getProductDataFromLocalStorage();

export const addToCard = (event, id, stock) => {
  const getProductDataLocalStorage = getProductDataFromLocalStorage();

  const currentPorductElement = document.querySelector(`#card${id}`);
  let productQuantity =
    currentPorductElement.querySelector(".productQuantity").innerText;
  let price = currentPorductElement.querySelector(".productPrice").innerText;

  price = price.replace("(PKR):", "");

  let existingPorduct = getProductDataLocalStorage.find(
    (curProd) => curProd.id === id
  );

  if (existingPorduct && productQuantity > 1) {
    productQuantity =
      Number(existingPorduct.productQuantity) + Number(productQuantity);
    console.log("🚀 ~ addToCard ~ productQuantity:", productQuantity);
    price = Number(price * productQuantity);
    let updatedCart = { id, productQuantity, price };
    updatedCart = getProductDataLocalStorage.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    localStorage.setItem("productData", JSON.stringify(updatedCart));
  }

  if (existingPorduct) {
    return false;
  }

  price = Number(price * productQuantity);
  productQuantity = Number(productQuantity);

  getProductDataLocalStorage.push({ id, productQuantity, price });
  localStorage.setItem(
    "productData",
    JSON.stringify(getProductDataLocalStorage)
  );

  //update the cart button value
  updateCartValue(getProductDataLocalStorage);

  showToast('add', id);
};
