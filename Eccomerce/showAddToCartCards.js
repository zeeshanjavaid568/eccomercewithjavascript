import products from "./api/products.json";
import { getProductDataFromLocalStorage } from "./getProductDataFromLocalStorage";

let cartProducts = getProductDataFromLocalStorage();

let filterPorducts = products.filter((curProduct) => {
  return cartProducts.some((curElem) => curElem.id === curProduct.id);
});

// console.log("🚀 ~ filterPorducts ~ filterPorducts:", filterPorducts);

const productCartContainer = document.querySelector("#productCartContainer");
const productCartTemplate = document.querySelector("#productCartTemplate");

const showAddToCartCard = () => {
  filterPorducts.forEach((curProduct) => {
    const { category, id, image, name, stock, price } = curProduct;
    let productClone = document.importNode(productCartTemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;

    productCartContainer.appendChild(productClone);
  });
};

showAddToCartCard();
