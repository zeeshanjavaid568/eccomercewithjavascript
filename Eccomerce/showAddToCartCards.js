import { updateCartProductTotal } from "../updateCartProductTotal";
import products from "./api/products.json";
import { fetchQuantityFromLocalStorage } from "./fetchQuantityFromLocalStorage";
import { getProductDataFromLocalStorage } from "./getProductDataFromLocalStorage";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";

let cartProducts = getProductDataFromLocalStorage();

let filterPorducts = products.filter((curProduct) => {
  return cartProducts.some((curElem) => curElem.id === curProduct.id);
});

// console.log("🚀 ~ filterPorducts ~ filterPorducts:", filterPorducts);

const productCartContainer = document.querySelector("#productCartContainer");
const productCartTemplate = document.querySelector("#productCartTemplate");

const showAddToCartCard = () => {
  filterPorducts.forEach((curProduct) => {

    const { category, id, image, name, price, stock } = curProduct;

    let productClone = document.importNode(productCartTemplate.content, true);

    let reallData = fetchQuantityFromLocalStorage(id, price); 

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;

    productClone.querySelector('.productQuantity').textContent = reallData.productQuantity;
    productClone.querySelector('.productPrice').textContent = reallData.price;

    // handle increment and decrement button
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone.querySelector('.remove-to-cart-button').addEventListener('click', ()=> removeProdFromCart(id))

    productCartContainer.appendChild(productClone);
  });
};

showAddToCartCard();

updateCartProductTotal();
