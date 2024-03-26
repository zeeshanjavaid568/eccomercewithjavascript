const productValue = document.querySelector('#cartValue');

export const updateCartValue = (cartProducts) =>{
    return(productValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`)
}