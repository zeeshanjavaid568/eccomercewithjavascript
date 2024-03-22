export const homeQuantityToggle = (event, id, stock) => {
  const currentCardElement = event.target.closest(".cards"); // Find the closest parent with class "cards"
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  
  let quantity = parseInt(productQuantity.textContent); // Get current quantity directly from the text content

  if (event.target.classList.contains("cartIncrement")) { // Check if the clicked button has class "cartIncrement"
    if (quantity < stock) {
      quantity += 1;
    }
  }

  if (event.target.classList.contains("cartDecrement")) { // Check if the clicked button has class "cartDecrement"
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantity.textContent = quantity; // Update the quantity in the DOM
  return quantity;
};
