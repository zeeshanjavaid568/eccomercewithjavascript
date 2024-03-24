import { addToCard } from "./addToCard";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productsContainer = document.querySelector("#productContainer");
const productsTemplate = document.querySelector("#productTemplate");

export const showProductsContainer = (products) => {
  if (!products) {
    return false;
  }
  products.forEach((curProduct) => {
    const { brand, category, description, id, image, name, price, stock } =
      curProduct;

    const productClone = document.importNode(productsTemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productPrice").textContent = `(PKR):${price}`;
    productClone.querySelector(".productActualPrice ").textContent = `(PKR):${
      price * 4
    }`;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".category").textContent = category;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCard(event, id, stock);
      });

    productsContainer.append(productClone);
  });
};
