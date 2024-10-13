import {cart, products, updateCartQuantity} from './ecom.js';

document.addEventListener('DOMContentLoaded', () => {
    products.forEach((product) => {
      if (cart.name === product.name){
        console.log(product.priceCent)

      }
    })


  let cartList = '';
  cart.forEach((cartElement) => {

    let matchingImage = '';
    products.forEach((product) =>{
      if (product.name === cartElement.productName)
          matchingImage = product.image
    })
        
    const elementHTML = `<div class='category'>
    <div><img src="${matchingImage}" alt="Product Image" class='image-class'>
    </div>
    <div>Product name: ${cartElement.productName}<br> Quantity: ${cartElement.quantity}
    </div>
    <div><button class="clear-button js-delete-button" >Delete</button></div>
    </div>`;
    cartList += elementHTML;
  });
  
  document.querySelector('.cart-categories').innerHTML = cartList;
});

document.querySelector('.js-clear-button').addEventListener('click', () => {
  if (localStorage.getItem('importedCart') === 'true'){
    localStorage.removeItem('importedCart');
    localStorage.clear();
    window.location.reload(); 
   
  }
 
})

  const deleteButton = document.querySelectorAll('.js-delete-button');
  deleteButton.forEach(() => {
    deleteButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload(); 
  })
})  
 
function calculateTotalCost(){
  let productCost = 0;

  const eachProductCost = 0;
  let matchingPrice = [];
  cart.forEach((cartElement) => {

    products.forEach((product) =>{
      if (product.name === cartElement.productName)
          matchingPrice.push(product.priceCent * cartElement.quantity);
        
        
    })
})

      matchingPrice.forEach((cost) => {
      productCost += cost;
      
      })

      document.querySelector('.total-cost').innerHTML=
      `
      <div class= 't'> Total Cost : $${((productCost)/100).toFixed(2)}</div>
      `
      console.log(productCost)
}

calculateTotalCost();


console.log(dayjs)