import { getProductDataFromLocalStorage } from "./getProductDataFromLocalStorage";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantitys = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");

  let productQuantity = 1;
  let localStoragePrice = 0;

  //   ----------------------------------------
  //   Get the data from localStorage
  //   ----------------------------------------
  let localCartProducts = getProductDataFromLocalStorage();
  let existingProd = localCartProducts.find((curProd) => curProd.id === id);

  if (existingProd) {
    productQuantity = existingProd.productQuantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }

  if (event.target.className === "cartIncrement") {
    if (productQuantity < stock) {
      productQuantity += 1;
    } else if (productQuantity === stock) {
      quantity = stock;
      localStoragePrice = price * stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (productQuantity > 1) {
      productQuantity -= 1;
    }
  }

  //   finally we will update the price in localStorage
  localStoragePrice = price * productQuantity;
  localStoragePrice = Number(localStoragePrice.toFixed(2));

  let updatedCart = { id, productQuantity, price: localStoragePrice };

  updatedCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
  });
  //   console.log(updatedCart);
  localStorage.setItem("productData", JSON.stringify(updatedCart));

  //   also we need to reflect the changes on the screen too
  productQuantitys.innerText = productQuantity;
  productPrice.innerText = localStoragePrice;
};
