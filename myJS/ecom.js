// import dayjs from 'htpps://unpkg.com/dayjs@1.11.10esm/index.js';

export let cart = JSON.parse(localStorage.getItem('cart'));

if (cart === null) {
  cart = []
}

export const products = [
  { image: 'images/hair.jpg', name: 'MC Hair cream', priceCent: 2999 },
  { image: 'images/Vaseline.webp', name: 'Vaseline', priceCent: 5050 },
  { image: 'images/Oily skincare.webp', name: 'Oily Skincare', priceCent: 3500 },
  { image: 'images/Azafran skincare.jpg', name: 'Azafran skincare', priceCent: 8540 },
  { image: 'images/bodylotion.webp', name: 'Body Lotion', priceCent: 5483 },
  { image: 'images/essential skin food.webp', name: 'Essential Skin Food', priceCent: 9521 },
  { image: 'images/shaving cream.webp', name: 'Men Shaving Cream', priceCent: 5634 },
  { image: 'images/mirror skin.webp', name: 'Mirror Skin', priceCent: 4580 },
];

 export function updateCartQuantity() {
  let cartQuantity = localStorage.getItem('cartQuantity');

  if (cartQuantity !== null && isNaN) {
    cartQuantity = parseInt(cartQuantity);
  } else {
    cartQuantity = 0;
  }
  localStorage.setItem('cartQuantity', cartQuantity.toString());
 

  let addCart = document.querySelectorAll('.js-add-to-cart');
  addCart.forEach((cartButton) => {
    cartButton.addEventListener('click', () => {
      cartQuantity += 1;
      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
      localStorage.setItem('cartQuantity', cartQuantity.toString());
    });
  });
}




export function putProduct() {
  let productHTML = '';
  products.forEach((product) => {
    const html = `<div class="product">
      <img class="image-product" src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${(product.priceCent / 100).toFixed(2)}</p>
      <button class='add-to-cart-button js-add-to-cart' data-product-name='${product.name}'>Add to Cart</button>
    </div>`;
    productHTML += html;
  });
  const productContainer = document.querySelector('.js-product-container');
  productContainer.innerHTML = productHTML;
}

  function saveLocal () {
    localStorage.setItem('cart',  JSON.stringify(cart));
  }

export function cartButtonClick() {
  let addCart = document.querySelectorAll('.js-add-to-cart');
  addCart.forEach((cartButton) => {
    cartButton.addEventListener('click', () => {
      let productName = cartButton.dataset.productName;

    
      let matchingProduct;

      cart.forEach((product) => {
        if (productName === product.productName) {
          matchingProduct = product;
        }
      });

      if (matchingProduct) {
        matchingProduct.quantity += 1;
      } else {
        cart.push({
          productName: productName,
          quantity: 1,
        });
      }

      saveLocal();
      localStorage.setItem('importedCart', true);
      console.log(cart)
      

    });
  });
}

// Initialize functions on page load
document.addEventListener('DOMContentLoaded', () => {
  putProduct();
  updateCartQuantity();
  cartButtonClick();
  
  
document.querySelector('.js-clear-button').addEventListener('click', () => {
  if (localStorage.getItem('importedCart') === 'true'){
    localStorage.removeItem('importedCart');
    localStorage.clear();
    window.location.reload(); 
    console.log(cart)
  }
 
})

});

console.log(dayjs)
